# museum
Prototyp einer App für das Museum Mensch und Natur in München.

##App starten
Bitte QR-Code-Scanner Plugin nachreichen (siehe jeweilige Sektion)
Beim Betrieb der App bitte VPN zur Hochschule aufbauen, da dort der Server gehostet wird.

## QR-Code Scanner
Hier wird folendes Plugin verwendet:
https://blog.nraboy.com/2014/09/implement-barcode-scanner-using-ionic-framework/

Vorher:
```
ionic platform add android
ionic platform add ios
```

Dann das Plugin installieren
```
cordova plugin add https://github.com/wildabeast/BarcodeScanner.git
```

Die QR-Codes benötigen folgenden inhalt "scan-exhibit:nid" - nid wird ersetzt durch die jeweilige node-id des Inhaltstypen Station.
Beispiel QR-Code: http://chart.apis.google.com/chart?chs=200x200&cht=qr&chld=|1&chl=scan-exhibit%3A42

## Mehrsprachigkeit
Folgendes Plugin wird verwendet:
https://github.com/angular-translate/angular-translate

unter /translations/ befinden sich .json Dokumente. Diese sind nach dem Ländercode benannt. Darin enthalten sind die Übersetzungen.
Mit Directives und Filtern wird dann im AngularJS übersetzt. Mehr dazu siehe folgenden Link mit Tutorial:
https://angularjs.de/artikel/angularjs-i18n-ng-translate

##Design
### SCSS zu CSS
Das CSS wurde mit scss geschrieben und automatisch in css konvertiert.
Änderungen in den CSS-Dateien werden von den anderen Entwicklern überschrieben.
Wie man einen automatischen scss zu css Converter einrichtet findet man hier: http://sass-lang.com/guide

Für die verschiedenen Farben des Museums Desins wurden extra Variablen angelegt

### Eigene Icons
Eine Bild-Datei beinhaltet in einem Raster alle eigenen Icons.
Die SCSS Datei icons.scss definiert hierfür CSS-Klassen die dann im Dokument verwendet werden können.
Die Photoshopdatei wurde beigelegt. Mit dieser können weitere Icons hinzugefügt werden.
Die Position der Icons muss dann im scss erstellt werden. Dort befinden sich schon leere Klassennamen.


# Bekannte Probleme
##Exponat Informationen sind leer
Exponate laden erst dann wenn Sie benötigt werden. Bei Detailansichten werden die Daten geholt obwohl 
diese noch nicht geladen sind. Dies zeigt dann leere Informationen an. Im Normalen App-Betrieb geschieht das nicht jedoch
beim Entwickeln öfter.
**Bug in der App** - beim Öffnen des QR-Code Scanners sind die Daten noch nicht geladen ausser man war vorher schon in der Ausstellerliste
Lösung: Daten beim Start laden!

##Exponat-Scan
Der Exponat-Scan ist noch nicht fertig.

##Sprache Wechseln
Damit die neuen Daten in neuer Sprache vom Server geholt werden muss der storageService geflusht werden.
Dafür gibt es die funktion storageService.clear(); Diese löscht jedoch nicht immer alle Einträge.
Muss näher untersucht werden.


