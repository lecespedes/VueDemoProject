<?php

// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


$exclude = ['.git/', 'BootstrapVueNext/', 'DashboardTemplates/', 'Filepaths.php', '.gitignore','favicon.ico']; // Example exclusions
//$root = 'https://github.com/lecespedes/VueDemoProject/blob/main';

//$root= 'https://raw.githubusercontent.com/lecespedes/VueDemoProject/main';

$root='https://raw.githubusercontent.com/lecespedes/VueDemoProject/refs/heads/main/';

// Run the function with optional root override and exclude array
generateDirectoryPaths($root, $exclude); // Example: override to 'CustomRoot', exclude .git and script
// generateDirectoryPaths(); // Default: uses basename(__DIR__), no exclusions
// generateDirectoryPaths(null, ['.git/']); // Default root, exclude .git

function generateDirectoryPaths($rootOverride = null, $exclude = []) {
    try {
        // Use the script's directory as the root
        $dirPath = realpath(__DIR__);
        if ($dirPath === false) {
            throw new Exception("Unable to resolve script directory: " . __DIR__);
        }

        // Get the root directory name or use override
        $rootName = $rootOverride !== null ? $rootOverride : basename($dirPath);

        function collectPathsRecursive($currentPath, $basePath, $rootName, $exclude) {
            $directories = [];
            $files = [];
            $entries = scandir($currentPath);
            
            if ($entries === false) {
                throw new Exception("Failed to read directory: $currentPath");
            }

            foreach ($entries as $entry) {
                if ($entry === '.' || $entry === '..') continue;
                
                // Check for exclusion
                $isDir = is_dir($currentPath . DIRECTORY_SEPARATOR . $entry);
                $excludeKey = $isDir ? $entry . '/' : $entry;
                if (in_array($excludeKey, $exclude)) {
                    continue; // Skip excluded directory or file
                }
                
                $fullPath = $currentPath . DIRECTORY_SEPARATOR . $entry;
                $relativePath = str_replace($basePath . DIRECTORY_SEPARATOR, '', $fullPath);
                // Replace backslashes with forward slashes
                $relativePath = str_replace('\\', '/', $relativePath);
                $prefixedPath = $rootName . '/' . $relativePath;
                
                if (is_dir($fullPath)) {
                    // Collect directory
                    $subDirResult = collectPathsRecursive($fullPath, $basePath, $rootName, $exclude);
                    if (!empty($subDirResult)) { // Include only non-empty subdirs
                        $directories[$entry] = $subDirResult;
                    }
                } elseif (is_file($fullPath)) {
                    // Collect file
                    $files[] = $prefixedPath;
                }
            }
            
            // Sort directories and files alphabetically
            ksort($directories); // Sort directories by name
            sort($files); // Sort files by path
            
            // Combine: directories first, then files
            $result = [];
            foreach ($directories as $dirName => $dirContent) {
                $result[] = [$dirName => $dirContent];
            }
            foreach ($files as $filePath) {
                $result[] = $filePath;
            }
            
            return $result;
        }

        // Build the structure
        $structure = collectPathsRecursive($dirPath, $dirPath, $rootName, $exclude);
        $output = [$rootName => $structure];
        
        // Debug: Log the structure
        error_log("Pre-JSON structure: " . print_r($output, true));
        
        // Ensure UTF-8 encoding for file names
        array_walk_recursive($output, function (&$value) {
            if (is_string($value)) {
                $value = mb_convert_encoding($value, 'UTF-8', 'auto');
            }
        });

        header('Content-Type: application/json');
        $jsonOutput = json_encode($output, JSON_PRETTY_PRINT | JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_SLASHES);
        if ($jsonOutput === false) {
            $errorMsg = json_last_error_msg();
            error_log("JSON encoding error: $errorMsg");
            throw new Exception("JSON encoding failed: $errorMsg");
        }
        $jsonFile = __DIR__ . '/directory-structure.json';
        file_put_contents($jsonFile, $jsonOutput);
        echo $jsonOutput;
    } catch (Exception $e) {
        header('Content-Type: application/json');
        echo json_encode(['error' => $e->getMessage()], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    }
}
?>