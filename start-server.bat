@echo off
title Mifpro Project Portal - Local Server
echo ===================================================
echo   Menjalankan Server Lokal Mifpro Project Portal
echo   URL: http://localhost:8000
echo   Tekan Ctrl + C di jendela ini untuk mematikan.
echo ===================================================
echo.

:: Buka browser secara otomatis setelah delay singkat
start "" http://localhost:8000

:: Jalankan server PHP dengan router lokal
php -S localhost:8000 router.php

pause

