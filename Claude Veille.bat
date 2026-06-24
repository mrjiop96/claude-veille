@echo off
chcp 65001 >nul
cd /d "%~dp0"
title Claude Veille

REM --- Ouvre tout de suite l'ecran de chargement (page web stylee) ---
start "" "splash.html"

REM --- Synchronisation Git pendant que le splash s'affiche ---
git add -A
git diff --cached --quiet || git commit -m "maj veille %date% %time%"
git pull --rebase
if errorlevel 1 (
  REM Conflit : on annule le rebase pour ne pas bloquer le depot.
  git rebase --abort
  echo CONFLIT detecte : tes modifs et celles de l'autre se chevauchent.
  echo Le dashboard s'ouvre avec ta version locale. Demande de l'aide pour fusionner.
  ping -n 6 127.0.0.1 >nul
  goto :eof
)
git push

REM Le splash bascule tout seul vers index.html. Rien d'autre a faire.
