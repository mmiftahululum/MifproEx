<?php
/**
 * Local Development Router for PHP Built-in Server
 * Usage: php -S localhost:8000 router.php
 */

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Rewrite /portal/... to root relative path
if (strpos($uri, '/portal') === 0) {
    $uri = substr($uri, 7);
}

$file = __DIR__ . $uri;

if (is_dir($file)) {
    $file = rtrim($file, '/\\') . DIRECTORY_SEPARATOR . 'index.html';
}

if (file_exists($file) && !is_dir($file)) {
    $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));

    if ($ext === 'php') {
        require $file;
        exit;
    }

    $mimeTypes = [
        'html' => 'text/html; charset=UTF-8',
        'css'  => 'text/css; charset=UTF-8',
        'js'   => 'application/javascript; charset=UTF-8',
        'json' => 'application/json; charset=UTF-8',
        'png'  => 'image/png',
        'jpg'  => 'image/jpeg',
        'jpeg' => 'image/jpeg',
        'gif'  => 'image/gif',
        'ico'  => 'image/x-icon',
        'svg'  => 'image/svg+xml',
        'woff' => 'font/woff',
        'woff2'=> 'font/woff2',
        'ttf'  => 'font/ttf',
        'eot'  => 'application/vnd.ms-fontobject',
        'map'  => 'application/json'
    ];

    if (isset($mimeTypes[$ext])) {
        header('Content-Type: ' . $mimeTypes[$ext]);
    }
    readfile($file);
    exit;
}

http_response_code(404);
echo "404 Not Found";

