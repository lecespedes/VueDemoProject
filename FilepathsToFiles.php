<?php

function generateDirectoryTree($dirPath, $outputFile) {
    try {
        function readDirRecursive($currentPath, $basePath) {
            $result = [];
            $entries = scandir($currentPath);
            
            foreach ($entries as $entry) {
                if ($entry === '.' || $entry === '..') continue;
                
                $fullPath = $currentPath . DIRECTORY_SEPARATOR . $entry;
                $relativePath = str_replace($basePath . DIRECTORY_SEPARATOR, '', $fullPath);
                
                if (is_dir($fullPath)) {
                    $children = readDirRecursive($fullPath, $basePath);
                    $result[] = [
                        'name' => $entry,
                        'type' => 'directory',
                        'path' => $relativePath,
                        'children' => $children
                    ];
                } else {
                    $result[] = [
                        'name' => $entry,
                        'type' => 'file',
                        'path' => $relativePath
                    ];
                }
            }
            return $result;
        }

        $tree = readDirRecursive($dirPath, $dirPath);
        $output = json_encode($tree, JSON_PRETTY_PRINT);
        
        if (file_put_contents($outputFile, $output) === false) {
            throw new Exception("Failed to write to $outputFile");
        }
        
        echo "Directory structure written to $outputFile\n";
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage() . "\n";
    }
}

// Example usage
$directoryPath = './path/to/your/directory'; // Replace with your directory path
$outputJsonFile = 'directory-structure.json';
generateDirectoryTree($directoryPath, $outputJsonFile);

?>