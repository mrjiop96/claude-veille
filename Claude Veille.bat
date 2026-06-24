@echo off
chcp 65001 >nul
cd /d "%~dp0"
title Claude Veille
echo ============================================
echo            CLAUDE VEILLE
echo ============================================
echo.
echo [1/4] Recuperation des modifs des autres...
git add -A
git diff --cached --quiet || git commit -m "maj veille %date% %time%"
git pull --rebase
echo.
echo [2/4] Publication de tes modifs...
git push
echo.
echo [3/4] Ouverture du dashboard...
start "" "index.html"
echo.
echo [4/4] Termine.
timeout /t 2 >nul
