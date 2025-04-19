<?php

function generateDirectoryPaths() {
    try {
        // Use the script's directory as the root
        $dirPath = realpath(__DIR__);
        if ($dirPath === false) {
            throw new Exception("Unable to resolve script directory: " . __DIR__);
        }

        // Get the root directory name
        $rootName = basename($dirPath); // Change to 'Root' if preferred

        function collectPathsRecursive($currentPath, $basePath) {
            $result = ['files' => []];
            $entries = scandir($currentPath);
            
            if ($entries === false) {
                throw new Exception("Failed to read directory: $currentPath");
            }

            foreach ($entries as $entry) {
                if ($entry === '.' || $entry === '..') continue;
                // Exclude the script file
                if ($entry === basename(__FILE__)) continue;
                
                $fullPath = $currentPath . DIRECTORY_SEPARATOR . $entry;
                $relativePath = str_replace($basePath . DIRECTORY_SEPARATOR, '', $fullPath);
                
                if (is_dir($fullPath)) {
                    // Assign directory name as key with recursive result
                    $result[$entry] = collectPathsRecursive($fullPath, $basePath);
                } elseif (is_file($fullPath)) {
                    // Add file's relative path to files array
                    $result['files'][] = $relativePath;
                }
            }
            
            // Remove 'files' key if empty
            if (empty($result['files'])) {
                unset($result['files']);
            }
            
            return $result;
        }

        $structure = collectPathsRecursive($dirPath, $dirPath);
        $output = [$rootName => $structure];
        
        // Ensure UTF-8 encoding for file names
        array_walk_recursive($output, function (&$value) {
            if (is_string($value)) {
                $value = mb_convert_encoding($value, 'UTF-8', 'auto');
            }
        });

        header('Content-Type: application/json');
        $jsonOutput = json_encode($output[0], JSON_PRETTY_PRINT | JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_THROW_ON_ERROR);
        if ($jsonOutput === false) {
            throw new Exception("JSON encoding failed: " . json_last_error_msg());
        }
        echo $jsonOutput;
    } catch (Exception $e) {
        header('Content-Type: text/plain');
        echo "Error: " . $e->getMessage();
    }
}

// Run the function
generateDirectoryPaths();

?>