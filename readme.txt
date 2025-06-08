Bierer setup process 

Eine Webseite für Bierliebhaber weltweit: Per Klick auf den Kronkorken erscheint zufällig eine Brauerei mit Infos auf der Flasche und Standort auf der Karte. Der bierfarbene Hintergrund mit schaumiger Titelzeile schafft ein immersives Erlebnis. Das skizzenhafte, minimalistische Design sorgt für eine einfache, detailreiche Nutzererfahrung – alles auf einer einzigen, übersichtlichen Seite.

Wir haben gelernt, wie man Usability gezielt mit JavaScript verbessert und APIs effektiv in eigene Projekte integriert. Herausforderungen lagen in der responsiven Gestaltung von Elementen wie Bubbles, Schriften und Grafiken ohne Verzerrungen. Zudem fehlten manchen API-Einträgen Koordinaten, was wir mit einer Fehlermeldung und Neuabfrage lösten.

Quellen:
- https://api.openbrewerydb.org/v1/breweries/random
- https://docs.oracle.com/javase/8/docs/api/overview-summary.html

Prompts:
- Keep width and hight of the Bubbles constant when display size is flexed
- Flex #noResult Text within .imageflasche so that y position is adjustable
- Here is an example of a possible result text shown from the API: “Spindletap Brewery micro 10622 Hirsch Rd Houston, Texas 77016-2622 Website”
  Extract the following information and display them as a list...