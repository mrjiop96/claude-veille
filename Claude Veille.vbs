' Lance "Claude Veille.bat" SANS afficher la fenetre noire (console masquee).
' Double-clique CE fichier pour l'experience la plus propre.
Set sh = CreateObject("WScript.Shell")
sh.CurrentDirectory = CreateObject("Scripting.FileSystemObject").GetParentFolderName(WScript.ScriptFullName)
sh.Run "cmd /c """"Claude Veille.bat""""", 0, False
