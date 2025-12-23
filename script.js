// Large German Word List (Significantly Expanded)
const germanWords = [
    // A
    "Abbild","Abend","Abenteuer","Abfahrt","Abfall","Abgas","Abgrund","Abhang","Abkommen","Ablauf","Absatz","Abschied",
    "Abschnitt","Absicht","Abstand","Absturz","Abteil","Abteilung","Abwechslung","Abwehr","Achse","Acker","Ader",
    "Adler","Adresse","Affe","Agent","Aggregat","Ahnung","Ahorn","Akademie","Akzent","Akzeptanz","Alarm","Allee",
    "Allergie","Alltag","Almosen","Alpen","Alphabet","Altar","Alter","Ameise","Amt","Analyse","Anbau","Anblick",
    "Andacht","Andenken","Anfang","Anfrage","Angebot","Angler","Angriff","Angst","Anhang","Anker","Anklage","Ankunft",
    "Anlage","Anlass","Anleitung","Anmut","Annahme","Anruf","Ansatz","Anschlag","Anschluss","Ansehen","Ansicht",
    "Anspruch","Anstand","Anstieg","Anteil","Antenne","Antrag","Antrieb","Antwort","Anwalt","Anzahl","Anzeige","Anzug",
    "Apfel","Apotheke","Apparat","Appetit","April","Arbeit","Architekt","Archiv","Arena","Argument","Arm","Armee",
    "Armut","Aroma","Art","Artikel","Arzt","Asche","Aspekt","Asphalt","Atem","Atlas","Atmosphäre","Atom","Attentat",
    "Attraktion","Aufbau","Aufgabe","Auflage","Aufnahme","Aufprall","Aufruf","Aufruhr","Aufschrei","Aufschwung","Auftrag",
    "Auftritt","Aufwand","Augenblick","August","Ausdruck","Ausfall","Ausflug","Ausgabe","Ausgang","Ausgleich","Aushang",
    "Auskunft","Ausland","Auslese","Ausnahme","Aussage","Aussehen","Aussicht","Austausch","Auswahl","Ausweg","Ausweis",
    "Auswirkung","Auszeit","Auto","Automat","Autor","Axt",
    // B
    "Baby","Bach","Backofen","Bad","Bahn","Bahnhof","Bucht","Bulle",
    "Bakterie","Balance","Balkon","Ball","Ballon","Bambus","Banane","Band","Bandit","Bank","Bankett","Bar","Baracke",
    "Bär","Barriere","Bart","Basis","Bass","Bastler","Batterie","Bau","Bauch","Bauer","Baum","Baustelle","Bay","Beamter",
    "Becher","Becken","Bedarf","Bedrohung","Bedürfnis","Beere","Beet","Befehl","Befund","Begegnung","Beginn","Begriff",
    "Behörde","Bein","Beispiel","Beitrag","Beitritt","Bekannte","Beleg","Belohnung","Bemühung","Benutzer","Benzin",
    "Beobachter","Berater","Bereich","Berg","Bericht","Beruf","Besatzung","Bescheid","Besen","Besitz","Besuch","Beton",
    "Betrag","Betrieb","Bett","Beule","Beute","Beutel","Bevölkerung","Bewegung","Beweis","Bewohner","Bewusstsein","Bezug",
    "Bibel","Biber","Bibliothek","Biene","Bier","Bilanz","Bild","Bildung","Billard","Bindung","Biografie","Biologie",
    "Biotop","Birne","Bischof","Biss","Bitte","Blase","Blatt","Blau","Blech","Blei","Bleistift","Blick","Blitz","Block",
    "Blog","Blume","Bluse","Blut","Boden","Bogen","Bohne","Bohrer","Boje","Bombe","Bonbon","Boot","Bord","Börse","Borte",
    "Bosheit","Bote","Botschaft","Brand","Branche","Brandung","Braten","Brauch","Brauerei","Braut","Breite","Bremse",
    "Brenner","Brett","Brief","Brille","Broschüre","Brot","Brücke","Bruder","Brunnen","Brust","Brut","Buch","Buchse",
    "Buckel","Budget","Büffel","Bühne","Bündel","Bunker","Bürde","Büro","Bürste","Bus","Busch","Butter","Bauer",
    // C
    "Cafe","Campus","Camping","Chaos","Charakter","Charme","Chef","Chemie","Chirurg","Chor","Christ","Chrom","Chronik",
    "Chance","Code","Computer","Couch","Cousine","Cover","Creme","Chiffre","Cocktail","Container","Chip","Cello",
    // D
    "Dach","Dachs","Dame","Damm","Dampf","Dank","Darm","Datei","Daten",
    "Datum","Dauer","Daumen","Decke","Deckel","Defekt","Definition","Defizit","Degen","Dehnung","Dekade","Dekor",
    "Delfin","Delle","Demokratie","Demo","Denkmal","Depot","Design","Detail","Detektiv","Deutung","Dezember","Diät",
    "Dialog","Diamant","Dichtung","Dickicht","Dieb","Dienst","Diesel","Dietrich","Digital","Diktat","Dilemma","Dimension",
    "Ding","Dinosaurier","Diplom","Direktor","Dirigent","Diskussion","Distanz","Disziplin","Diva","Dokument","Dolch",
    "Dollar","Dom","Domäne","Donner","Doppel","Dorf","Dorn","Dose","Drache","Draht","Drama","Drang","Drehung","Dreieck",
    "Dreck","Droge","Drohung","Druck","Dschungel","Duft","Düne","Dünger","Dunkel","Dunst","Duplikat","Durchgang",
    "Durchschnitt","Durst","Dusche","Dutzend","Dynamik","Dozent","Drucker","Drilling","Debatte","Daune",
    // E
    "Ebbe","Ebene","Echo","Echse","Ecke","Edelstein","Efeu","Effekt",
    "Ehe","Ehre","Ei","Eiche","Eichhörnchen","Eifer","Eigenheit","Eigentum","Eimer","Einblick","Eindruck","Einfluss",
    "Einfalt","Eingang","Einheit","Einkauf","Einkommen","Einladung","Einsatz","Einschlag","Einsicht","Eintrag",
    "Eintritt","Einwand","Einwohner","Einzelheit","Eis","Eisen","Eitelkeit","Eiter","Ekel","Elefant","Eleganz","Element",
    "Elend","Elite","Ellbogen","Eltern","Emblem","Emotion","Empfang","Empfindung","Ende","Energie","Engel","Enkel",
    "Ente","Entfernung","Entscheidung","Entwurf","Episode","Epoche","Erbarmen","Erbe","Erdbeere","Erde","Erdgeschoss",
    "Ereignis","Erfahrung","Erfindung","Erfolg","Ergebnis","Erhalt","Erinnerung","Erkältung","Erkenntnis","Erklärung",
    "Erlaubnis","Erlebnis","Erlös","Ermessen","Ernährung","Ernst","Ernte","Eroberung","Eröffnung","Ersatz",
    "Erscheinung","Ersparnis","Ertrag","Erwartung","Erzählung","Erzfeind","Erziehung","Esel","Essenz","Essig","Etage",
    "Etappe","Ethik","Etikett","Eule","Euro","Europa","Examen","Exemplar","Existenz","Export","Extra","Elch","Epos","Ebene",
    // F
    "Fabrik","Facette","Fach","Fackel","Faden","Fähigkeit","Fahne","Fahrer","Fahrrad","Fahrt","Fahrzeug","Fakultät","Falke","Fall","Falle",
    "Falschheit","Falte","Familie","Fan","Farbe","Farm","Farn","Fass","Fassade","Fassung","Fasten","Faule","Faust",
    "Favorit","Fazit","Februar","Feder","Fee","Fehler","Feier","Feige","Feile","Feind","Feld","Fell","Fels","Fenster",
    "Ferien","Ferse","Fertigung","Fest","Festung","Fett","Fetzen","Feuer","Feuerwehr","Fieber","Figur","Filet","Film",
    "Filter","Filz","Finale","Finanz","Findling","Finger","Firma","Fisch","Fischer","Fitness","Fläche","Flamme",
    "Flasche","Flaute","Fleck","Fledermaus","Fleisch","Fleiß","Fliese","Fliege","Flieder","Fließband","Flocke","Floh",
    "Flora","Floss","Flosse","Flotte","Fluch","Flucht","Flug","Flügel","Flughafen","Fluss","Flut","Föderation","Fohlen",
    "Fokus","Folge","Folie","Folter","Fonds","Fontäne","Förderung","Form","Format","Formel","Forscher","Fortschritt",
    "Forum","Foto","Fotograf","Fracht","Frage","Fragment","Fraktion","Faktor","Frame","Fratze","Frau","Frechheit",
    "Fregatte","Freiheit","Freitag","Freizeit","Fremde","Frequenz","Freude","Freund","Friede","Friedhof","Frisur",
    "Frist","Frohsinn","Front","Frosch","Frost","Frucht","Frühling","Frühstück","Fuchs","Fuge","Führer","Fülle","Fund",
    "Fundament","Funke","Funktion","Furcht","Furche","Fusion","Fuss","Futter","Forelle","Fjord","Fackel","Falke","Fasan",
    // G
    "Gabel","Galerie","Galle","Gang","Gans",
    "Ganzes","Garage","Garantie","Garde","Gardine","Garn","Garnison","Garten","Gas","Gasse","Gast","Gatte","Gattung",
    "Gaumen","Gaze","Gebäck","Gebärde","Gebäude","Gebein","Gebet","Gebiet","Gebirge","Gebot","Gebrauch","Geburt",
    "Gedächtnis","Gedanke","Geduld","Gefahr","Gefälle","Gefangene","Gefäß","Gefecht","Gefieder","Geflecht","Gefolge",
    "Gefühl","Gegend","Gegensatz","Gegner","Gehalt","Gehege","Geheimnis","Gehirn","Gehör","Gehorsam","Geier","Geige",
    "Geist","Geizhals","Gelände","Geländer","Geld","Gelee","Gelegenheit","Gelenk","Geliebte","Geltung","Gemälde",
    "Gemeinde","Gemüse","Gemüt","General","Generation","Genie","Genuss","Geografie","Geologie","Gepäck","Gerät",
    "Geräusch","Gericht","Gerste","Geruch","Gerücht","Gerüst","Gesang","Gesäß","Geschäft","Geschenk","Geschichte",
    "Geschick","Geschirr","Geschlecht","Geschmack","Geschrei","Gesetz","Gesicht","Gespann","Gespenst","Gespräch",
    "Gestalt","Gestank","Geste","Gestein","Gestern","Gesuch","Gesundheit","Getränk","Getreide","Getriebe","Gewalt",
    "Gewand","Gewebe","Gewehr","Gewei","Gewerbe","Gewicht","Gewinn","Gewitter","Gewohnheit","Gewürz","Gezeiten",
    "Gier","Gift","Gipfel","Gips","Giraffe","Gitarre","Gitter","Glanz","Glas","Glasur","Glaube","Gleichung","Gletscher",
    "Glied","Glocke","Glück","Glühbirne","Glut","Gnade","Gold","Golf","Gondel","Gorilla","Gott","Gouverneur","Grab",
    "Graben","Grad","Graf","Grafik","Gramm","Grammatik","Granate","Granit","Gras","Grat","Grauen","Gravur","Greis",
    "Gremium","Grenze","Griff","Grille","Grimasse","Grips","Groll","Größe","Grotte","Grube","Gruft","Grund","Gruppe",
    "Gruß","Gummi","Gunst","Gurt","Guss","Gut","Gymnasium","Galle","Garn","Gasse","Gecko","Gans","Genom",
    // H
    "Haar","Habe","Habicht","Hafen","Hafer","Haft","Hagel",
    "Hahn","Hai","Haken","Halbzeit","Hälfte","Halle","Hals","Halt","Haltung","Hammer","Hamster","Hand","Handel",
    "Handlung","Handwerk","Hang","Hantel","Hafen","Harmonie","Harnisch","Härte","Harz","Hase","Hasel","Hass","Haube",
    "Hauch","Haufen","Haupt","Haus","Haut","Havarie","Hebel","Hecht","Heck","Hecke","Heer","Hefe","Heft","Heide",
    "Heil","Heimat","Heirat","Heizung","Held","Helikopter","Helm","Hemd","Hemmung","Hengst","Henker","Herbst","Herd",
    "Herde","Herkunft","Herr","Herz","Herzog","Hetzjagd","Heu","Heuchelei","Hexe","Hilfe","Himbeere","Himmel",
    "Hindernis","Hingabe","Hinterhalt","Hinweis","Hirsch","Hirse","Hirte","Hitze","Hobby","Hobel","Hochzeit","Hocker",
    "Hof","Höflichkeit","Höhe","Höhle","Hohn","Holding","Holz","Honig","Horizont","Horn","Horoskop","Hose","Hotel",
    "Hubschrauber","Hüfte","Hügel","Huhn","Hülle","Hülse","Hummer","Humor","Hund","Hunger","Hupe","Hürde","Hure",
    "Hut","Hütte","Hyäne","Hydrant","Hygiene","Hymne","Hypnose","Hypothese","Hummel","Hering","Hafen","Hangar","Halle",
    // I
    "Ideal","Idee","Identität","Idiot","Idol",
    "Igel","Ignoranz","Ikone","Illegalität","Illusion","Illustration","Imbiss","Imitation","Immobilie","Imperium",
    "Impuls","Index","Indikator","Individuum","Industrie","Infanterie","Infektion","Inflation","Info","Information",
    "Ingenieur","Ingwer","Inhaber","Inhalt","Initiative","Injektion","Insel","Inserat","Inspektor","Inspiration",
    "Instinkt","Institut","Instrument","Integration","Intelligenz","Intention","Interesse","Internet","Interview",
    "Intrige","Intuition","Invasion","Inventar","Investition","Investor","Ironie","Irrtum","Isolation","Insekt","Imker",
    // J
    "Jacke","Jagd",
    "Jäger","Jahr","Jahrzehnt","Jänner","Januar","Japaner","Jargon","Jazz","Jeans","Joch","Jod","Joghurt","Journal",
    "Jubel","Jubiläum","Jude","Jugend","Juli","Juni","Jura","Jury","Justiz","Juwel","Jacht","Jackpot","Jaguar",
    // K
    "Kabine","Kabel","Kabarett",
    "Kabinett","Kacheln","Kader","Kaffee","Käfig","Kai","Kaiser","Kakao","Kaktus","Kalender","Kalk","Kälte","Kamel",
    "Kamera","Kamin","Kamm","Kammer","Kampagne","Kampf","Kanal","Kandidat","Kanne","Kanone","Kante","Kanzel","Kanzler",
    "Kapazität","Kapelle","Kapital","Kapitel","Kapitän","Kapsel","Kapuze","Karawane","Karneval","Karriere","Karte",
    "Kartoffel","Karton","Karussell","Käse","Kaserne","Kasse","Kassette","Kasten","Katalog","Katastrophe",
    "Kategorie","Kater","Kathedrale","Katze","Kauf","Kaution","Kautschuk","Kavalier","Kegel","Kehle","Keim","Keks",
    "Keller","Kellner","Kern","Kerze","Kessel","Kette","Keule","Kiefer","Kies","Kind","Kino","Kiosk","Kirche","Kirsche",
    "Kissen","Kiste","Klage","Klammer","Klang","Klappe","Klarheit","Klasse","Klassiker","Klatsch","Klausur","Klavier",
    "Kleber","Kleid","Kleinigkeit","Kleister","Klemme","Klerus","Klima","Klinge","Klinik","Klippe","Klischee","Kloake",
    "Kloss","Kloster","Kluft","Klumpen","Knabe","Knall","Knast","Knäuel","Knecht","Kneipe","Knie","Knochen","Knopf",
    "Knospe","Knoten","Knüppel","Koalition","Kobold","Koch","Köder","Koffer","Kohle","Kokos","Kollege","Kollektion",
    "Kolonie","Koloss","Komet","Komfort","Komik","Komitee","Komma","Kommentar","Kommode","Komplize","Komplott",
    "Kompromiss","Kondition","Konferenz","Konflikt","Kongress","König","Konkurrenz","Konkurs","Können","Konsequenz",
    "Konserve","Konsole","Konsum","Kontakt","Konto","Kontrast","Kontrolle","Konzept","Konzern","Konzert","Kopf",
    "Kopie","Korb","Korken","Korn","Körper","Korrektur","Korridor","Korsett","Kosten","Kostüm","Kot","Krabbe","Krach",
    "Kraft","Kragen","Krähe","Kralle","Krampf","Kran","Kranich","Krankheit","Kranz","Krater","Krawatte","Kreatur",
    "Krebs","Kredit","Kreide","Kreis","Kreisel","Kreuz","Krieg","Krise","Kristall","Kritik","Krokodil","Krone","Krug",
    "Krume","Kruste","Küche","Kuchen","Kugel","Kuh","Kühlraum","Kultur","Kunde","Kunst","Kupfer","Kuppel","Kurbel",
    "Kürbis","Kurs","Kurve","Küste","Kutsche","Kuvert","Känguru","Kiosk","Kranich","Klee","Kiesel","Kupfer","Kessel",
    // L
    "Labor","Labyrinth","Lachs","Lack","Laden","Lage","Lager",
    "Lagune","Laib","Laie","Laken","Lampe","Land","Landschaft","Landung","Langeweile","Lanze","Lappen","Lärm","Larve",
    "Lasagne","Last","Lastwagen","Latein","Latte","Laub","Laune","Laus","Laut","Lawine","Layout","Lebewohl","Leben",
    "Leber","Leck","Leder","Legende","Legion","Lehm","Lehre","Lehrer","Leiche","Leid","Leidenschaft","Leim","Leine",
    "Leistung","Leitung","Lektüre","Lenkrad","Leopard","Lernprozess","Leser","Leuchte","Leute","Lexikon","Licht",
    "Lid","Liebe","Lied","Lieferung","Liga","Likör","Lila","Lilie","Limette","Limonade","Lineal","Linie","Link",
    "Lippe","Liste","Liter","Literatur","Lob","Loch","Locke","Logbuch","Logik","Logo","Lohn","Lokal","Lokomotive",
    "Lorbeer","Los","Lösung","Lotterie","Löwe","Lücke","Luft","Lüge","Luke","Lunge","Lunte","Lust","Luxus","Lyrik",
    "Lama","Lampion","Laser","Latrine","Laute","Leguan","Leiter","Libelle","Linde","Linse","Loge","Lotse","Luchs",
    // M
    "Macht","Magazin","Magen","Magie","Magnet","Mahagoni","Mahlzeit","Mähne","Mai","Mais","Majestät","Major","Makel",
    "Makler","Mal","Maler","Mama","Mammut","Management","Mangel","Manieren","Manifest","Mann","Mannschaft","Manöver",
    "Mantel","Manuskript","Mappe","Märchen","Marge","Marine","Marionette","Mark","Marke","Marketing","Markt","Marmor",
    "Mars","Marsch","Marter","März","Maschine","Maske","Maß","Massage","Masse","Mast","Material","Materie","Mathematik",
    "Matratze","Mauer","Maul","Maulwurf","Maus","Maximum","Mechanik","Medaille","Medien","Medizin","Meer","Mehl",
    "Mehrheit","Meile","Meinung","Meister","Melodie","Melone","Membran","Menge","Mensch","Menü","Merkmal","Messe",
    "Messer","Messing","Metall","Meteor","Meter","Methode","Metropole","Metzger","Miete","Mikrofon","Mikroskop",
    "Milch","Milieu","Militär","Milliarde","Million","Mimik","Mine","Mineral","Minister","Minus","Minute","Mischung",
    "Mission","Mist","Mittag","Mitte","Mittel","Mitternacht","Möbel","Mode","Modell","Moderator","Modul","Möglichkeit",
    "Mohn","Moment","Monat","Mönch","Mond","Monitor","Monopol","Monster","Montag","Monument","Moor","Moos","Moral",
    "Mord","Morgen","Moschee","Moskito","Most","Motiv","Motor","Motte","Motto","Möwe","Mühe","Mühle","Müll","Mund",
    "Münze","Museum","Musik","Muskel","Muster","Mut","Mutter","Mysterium","Mythos","Made","Marder","Maskottchen","Matrose",
    // N
    "Nachbar","Nachfrage","Nachlass",
    "Nachricht","Nachschlag","Nacht","Nachteil","Nacken","Nadel","Nagel","Nahaufnahme","Nahrung","Name","Narbe",
    "Nase","Nashorn","Nation","Natur","Nebel","Nebenbuhler","Neffe","Negativ","Neid","Neigung","Nektar","Nenner",
    "Nerv","Nervosität","Nest","Netz","Netzwerk","Neuheit","Neujahr","Neugier","Neun","Nichte","Nickel","Niederlage",
    "Niere","Niveau","Nobelpreis","Nomade","Nonne","Nord","Nordpol","Norm","Note","Notfall","Notiz","November","Nuance",
    "Null","Nummer","Nuss","Nutzen","Nylon","Nabel","Nachtigall","Nadelwald","Natter","Netzteil","Nilpferd","Nymphe",
    // O
    "Oase","Obdach","Obelisk","Oberst","Objekt","Obst","Ochse","Ofen",
    "Offensive","Offizier","Öffnung","Ohr","Oktober","Öl","Olive","Onkel","Oper","Operation","Opfer","Optik","Optimismus",
    "Option","Orakel","Orange","Orchester","Orden","Ordner","Ordnung","Organ","Organisation","Organsmus","Orgel",
    "Orient","Original","Orkan","Ort","Osten","Ozean","Ozon","Oma","Opa","Opus","Orchidee","Otter","Oval",
    // P
    "Paar","Pacht","Packung","Pädagoge","Paket","Pakt",
    "Palast","Palette","Palme","Panda","Paneel","Panik","Panne","Panorama","Panther","Panzer","Papa","Papagei",
    "Papier","Pappe","Paprika","Parabel","Parade","Paradies","Paragraph","Parfüm","Park","Parlament","Parole","Partei",
    "Partner","Pass","Passage","Passagier","Passwort","Paste","Pastor","Patent","Pater","Patient","Patriot","Patrone",
    "Pauke","Pause","Pavian","Pech","Pedal","Pegel","Peitsche","Pelikan","Pelz","Pendel","Pension","Perfektion",
    "Periode","Perle","Person","Personal","Perspektive","Perücke","Pest","Pfad","Pfanne","Pfarrer","Pfau","Pfeffer",
    "Pfeife","Pfeil","Pfeiler","Pfennig","Pferd","Pfirsich","Pflanze","Pflaster","Pflaume","Pflege","Pflicht","Pflug",
    "Pforte","Pfosten","Pfote","Phänomen","Phantasie","Phantom","Phase","Philosophie","Phobie","Physik","Pianist",
    "Picknick","Pik","Pilger","Pille","Pilot","Pilz","Pinguin","Pinie","Pinsel","Pionier","Piraterie","Pistole","Pizza",
    "Plakat","Plan","Planet","Planke","Planung","Plasma","Plastik","Platin","Platte","Platz","Pleite","Plombe",
    "Plüsch","Pobel","Poesie","Pokal","Pol","Polemik","Politik","Polizei","Polster","Polypen","Pomp","Pony","Pool",
    "Popularität","Population","Portion","Porto","Portrait","Position","Post","Posten","Potential","Potenz","Pracht",
    "Prämie","Praxis","Präzision","Preis","Premiere","Presse","Prestige","Priester","Prinzip","Priorität","Prisma",
    "Privileg","Probe","Problem","Produkt","Produktion","Professor","Profil","Profit","Programm","Projekt",
    "Projektil","Prominenz","Propaganda","Prophet","Prosa","Prospekt","Protest","Protokoll","Provinz","Prozess",
    "Prüfung","Psychologie","Publikum","Pudding","Puder","Puls","Pulver","Pumpe","Punkt","Puppe","Purpur","Puzzle",
    "Pyramide","Panther","Papaya","Pappel","Parcours","Pasta","Pfadfinder","Pfeilgift","Piano","Pirat","Platin",
    // Q
    "Quadrat","Qual","Qualität","Qualle","Quantität","Quartett","Quartier","Quarz","Quaste","Quecksilber",
    "Quelle","Querschnitt","Quittung","Quote","Qualm","Quark","Quartal","Quitte",
    // R
    "Rache","Rad","Radar","Radierer","Radio","Radius","Rahmen","Rakete",
    "Rampe","Rand","Rang","Rappe","Rarität","Rasse","Rassel","Rast","Rat","Rate","Rathaus","Ration","Rätsel","Ratte",
    "Raub","Rauch","Raum","Raupe","Rausch","Raute","Reaktion","Reaktor","Realität","Rebell","Rechen","Rechnung","Recht",
    "Redakteur","Rede","Referat","Reform","Regal","Regel","Regen","Regierung","Region","Regisseur","Register",
    "Reh","Reibung","Reich","Reifen","Reihe","Reim","Reis","Reise","Reisende","Reiz","Reklame","Rekord","Rektor",
    "Relikt","Religion","Rennen","Rente","Reparatur","Report","Republik","Reserve","Residenz","Respekt","Rest",
    "Resultat","Retter","Rettung","Reue","Revolution","Rezept","Rhetorik","Rhytmus","Richter","Richtung","Riegel",
    "Riese","Riff","Rinde","Ring","Rinne","Rippe","Risiko","Riss","Ritual","Ritter","Ritz","Robe","Roboter","Rock",
    "Roggen","Rohr","Rolle","Roman","Romantik","Röntgen","Rose","Rosine","Rost","Rotation","Rotkohl","Rotor","Routine",
    "Rubin","Rückkehr","Rückseite","Rückzug","Rudel","Ruf","Ruhe","Ruhm","Ruine","Rumpf","Runde","Runzel","Rüsche",
    "Rüssel","Rüstung","Rute","Rutsche","Rabe","Rachen","Radler","Raffinerie","Rakete","Rappe","Rasierer","Rebe","Rechner",
    // S
    "Saal","Saat","Säbel","Sack","Saft","Sage","Säge","Sahne","Saison","Saite",
    "Salat","Salbe","Salon","Salz","Samen","Sammelsurium","Sammlung","Samstag","Sand","Sandale","Sänger","Sanitäter",
    "Sankt","Saphir","Sardine","Sarg","Satellit","Satin","Satire","Sattel","Satz","Sau","Sauerstoff","Säule","Saum",
    "Säure","Saxophon","Schabe","Schach","Schacht","Schachtel","Schaden","Schaf","Schale","Schall","Schalter","Scham",
    "Schande","Schar","Schatten","Schatz","Schaufel","Schaum","Scheck","Scheibe","Schein","Scheitel","Schellfisch",
    "Schema","Schenkel","Scherbe","Schere","Sheriff","Scheune","Scheusal","Schicht","Schicksal","Schieber","Schiene",
    "Schiff","Schild","Schilf","Schimmel","Schinken","Schirm","Schlacht","Schlaf","Schlag","Schlamm","Schlange",
    "Schlauch","Schleife","Schleim","Schleuse","Schlichtung","Schlitten","Schloss","Schlucht","Schluck","Schlund",
    "Schluss","Schlüssel","Schmalz","Schmerz","Schmied","Schmuck","Schmutz","Schnabel","Schnecke","Schnee","Schneider",
    "Schnur","Schock","Schokolade","Scholle","Schornstein","Schoß","Schotter","Schrank","Schraube","Schreck","Schrei",
    "Schrift","Schritt","Schrott","Schuh","Schuld","Schule","Schulter","Schuppe","Schürze","Schuss","Schuster","Schutz",
    "Schwäche","Schwalbe","Schwamm","Schwan","Schwanz","Schwarm","Schwein","Schweiß","Schwelle","Schwere","Schwester",
    "Schwiele","Schwimmbad","Schwindel","Schwung","Schwur","Science","See","Seehund","Seele","Segel","Segen","Sehnsucht",
    "Seide","Seife","Seil","Seite","Sekt","Sektor","Sekunde","Semmel","Senat","Sendung","Senf","Sensation","Sense",
    "September","Serie","Service","Sessel","Seuche","Sex","Sessel","Sicht","Sieg","Siegel","Signal","Silber","Silhouette",
    "Silvester","Simulant","Sinn","Sinfonie","Singular","Sinken","Sirene","Sitte","Situation","Sitz","Sitzung","Skala",
    "Skandal","Skelett","Skizze","Sklave","Skorpion","Skrupel","Socke","Soda","Sofa","Softair","Sohn","Soldat","Sole",
    "Solist","Sommer","Sonde","Sonate","Sonne","Sonntag","Sorge","Sorte","Soße","Souvenir","Sozialismus","Spalte",
    "Span","Spange","Spannung","Sparbuch","Spargel","Spaß","Spaten","Spatz","Specht","Speck","Speer","Speise",
    "Spektrum","Spende","Sperre","Spezialist","Sphäre","Spiegel","Spiel","Spinat","Spindel","Spinne","Spion","Spirale",
    "Spiritus","Spitze","Sport","Spot","Sprache","Sprengstoff","Sprichwort","Spritze","Spruch","Sprung","Spur","Staat",
    "Stab","Stachel","Stadion","Stadt","Staffel","Stahl","Stall","Stamm","Stand","Standard","Stange","Stapel","Star",
    "Stärke","Start","Station","Statistik","Stativ","Statue","Status","Staub","Staudamm","Steak","Steg","Steilheit",
    "Stein","Steiß","Stelle","Stellung","Stempel","Stengel","Steppe","Sterben","Stereo","Stern","Steuer","Stich",
    "Stickstoff","Stiefel","Stier","Stift","Stiftung","Stil","Stille","Stimme","Stimmung","Stirn","Stock","Stoff",
    "Stollen","Stolz","Stopfen","Storch","Störung","Stoß","Strafe","Strahl","Strand","Straße","Strategie","Strauß",
    "Strecke","Streich","Streifen","Streit","Strenge","Stress","Streu","Strich","Strick","Stroh","Strom","Strophe",
    "Strudel","Struktur","Strumpf","Stube","Stück","Student","Studio","Stufe","Stuhl","Stumpf","Stunde","Sturm",
    "Sturz","Stute","Substanz","Suche","Sucht","Süden","Summe","Sumpf","Sünde","Suppe","Surfer","Symbol","Symmetrie",
    "Sympathie","Symptom","Synagoge","Syndikat","Syntax","Synthese","System","Szene","Safari","Sauna","Scanner","Schal","Schamane",
    // T
    "Tabak","Tabelle","Tablette",
    "Tabu","Tacho","Tadel","Tafel","Tag","Tagebuch","Taille","Takt","Taktik","Tal","Talent","Talg","Talismann",
    "Tandem","Tang","Tank","Tanne","Tante","Tanz","Tapete","Tarif","Tasche","Tasse","Tastatur","Taste","Tat",
    "Tatsache","Tatze","Taube","Taucher","Taufe","Tausch","Täuschung","Taxi","Team","Technik","Tee","Teer","Teich",
    "Teig","Teil","Teint","Telefon","Telegramm","Teller","Temperatur","Tempo","Tendenz","Tennis","Teppich","Termin",
    "Terrasse","Terror","Test","Testament","Text","Textil","Theater","Thema","Theologie","Theorie","Therapie",
    "Thermometer","These","Thron","Ticket","Tiefe","Tier","Tiger","Tinte","Tisch","Titel","Toast","Tochter","Tod",
    "Toilette","Toleranz","Tomate","Ton","Tonne","Topf","Tor","Torf","Torte","Tortur","Total","Tour","Tourismus",
    "Tradition","Träger","Tragödie","Training","Träne","Transport","Trapez","Traube","Trauer","Traum","Trauma",
    "Treffer","Treue","Tribüne","Tribut","Trick","Trieb","Trift","Trinkgeld","Tritt","Triumph","Trommel","Trompete",
    "Tropfen","Trophäe","Trost","Trottel","Trubel","Truhe","Trümmer","Truppe","Truthahn","Tuch","Tugend","Tulpe",
    "Tumult","Tunnel","Tür","Turbine","Turm","Turnier","Typ","Tyrann","Tagung","Talisman","Teekanne","Teich","Theke","Tundra",
    // U
    "U-Bahn","U-Boot","Übel","Uberfall","Ufer",
    "Uhr","Ulme","Umfang","Umgang","Umgebung","Umhang","Umkreis","Umriss","Umschlag","Umstand","Umwelt","Umzug",
    "Unfall","Unfug","Ungeheuer","Ungeduld","Unglück","Uniform","Union","Universität","Universum","Unrecht","Unruh",
    "Unschuld","Unsinn","Untergang","Unterhalt","Unterkunft","Unterlage","Unterricht","Unterschied","Unterschrift",
    "Untersuchung","Unterwäsche","Uran","Urkunde","Urlaub","Ursache","Urteil","Urwald","Vagabund","Vakuum","Valuta",
    "Ufo","Uhu","Unikat","Urlaub","Urne","Utensil",
    // V
    "Vampir","Vanille","Variante","Variation","Vase","Vater","Vegetarier","Vehikel","Vene","Ventil","Verabredung",
    "Verachtung","Verband","Verbot","Verbrechen","Verbrecher","Verbrennung","Verbund","Verdacht","Verdienst","Verein",
    "Verfahren","Verfall","Verfassung","Verfolgung","Vergangenheit","Vergleich","Vergnügen","Verhalten","Verhältnis",
    "Verhandlung","Verhör","Verkehr","Verlag","Verlangen","Verlauf","Verletzung","Verlust","Vernunft","Verrat",
    "Vers","Versand","Versatz","Verschluss","Version","Versprechen","Verstand","Versteck","Versuch","Verteidigung",
    "Vertikal","Vertrag","Vertrauen","Vertreter","Vertrieb","Verwaltung","Verwandte","Verwirrung","Verzicht",
    "Verzweiflung","Veto","Vetter","Vieh","Viereck","Viertel","Virus","Visier","Vision","Visite","Vitamin","Vlies",
    "Vogel","Vogt","Vokabel","Vokal","Volk","Volumen","Vorbild","Vorderseite","Vorfall","Vorhang","Vorhersage",
    "Vorliebe","Vormittag","Vorname","Vorrat","Vorschlag","Vorschrift","Vorsicht","Vorsitz","Vorspeise","Vorstadt",
    "Vorstoß","Vorteil","Vortrag","Vorurteil","Vorwand","Vorwort","Vorwurf","Vulkan","Vektor","Ventilator","Video","Villa","Viola",
    // W
    "Waage","Wachs","Wachtel",
    "Waffe","Wagen","Waggon","Wahl","Wahn","Wahrheit","Währung","Wal","Wald","Wall","Walnuss","Walzer","Wand",
    "Wandel","Wanderung","Wange","Wappen","Ware","Wärme","Warnung","Warte","Wäsche","Wasser","Watte","Wechsel",
    "Wecker","Weg","Wehr","Weib","Weide","Weigerung","Weihnachten","Weihrauch","Wein","Weise","Weisheit","Weizen",
    "Welle","Welt","Wende","Wendepunkt","Werbung","Werft","Werk","Werkstatt","Werkzeug","Wert","Wespe","Weste",
    "Westen","Wettbewerb","Wette","Wetter","Whisky","Wichtigkeit","Wickel","Widerstand","Widmung","Wiese","Wild",
    "Wildnis","Wille","Willkür","Wimper","Wind","Winkel","Winter","Wipfel","Wirbel","Wirkung","Wirt","Wirtschaft",
    "Wissen","Wissenschaft","Witwe","Witz","Woche","Woge","Wohl","Wohnung","Wolf","Wolke","Wolle","Wollust","Wort",
    "Wrack","Wunde","Wunder","Wunsch","Würde","Wurf","Würfel","Wurst","Wüste","Wut","Wabe","Waffel","Waggon","Wal","Wampe",
    // XYZ
    "Yacht","Yard","Yoga","Zahl",
    "Zahlung","Zahn","Zange","Zapfen","Zauber","Zaun","Zebra","Zehe","Zeichen","Zeichnung","Zeigefinger","Zeile",
    "Zeit","Zeitung","Zelle","Zelt","Zement","Zenit","Zentrum","Zepter","Zeremonie","Zettel","Zeug","Zeuge",
    "Ziegel","Ziege","Ziel","Zigarette","Zigeuner","Zimmer","Zimt","Zink","Zinn","Zirkel","Zirkus","Zitat",
    "Zitrone","Zivilisation","Zoll","Zone","Zoo","Zopf","Zorn","Zucker","Zufall","Zuflucht","Zug","Zugang",
    "Zuhörer","Zukunft","Zunge","Zuruf","Zusammenstoß","Zustand","Zutat","Zuverlässigkeit","Zwang","Zweck","Zweifel",
    "Zweig","Zwerg","Zwiebel","Zwilling","Zwist","Zyklus","Zylinder","Yeti","Yoga","Zacke","Zahnbürste","Zange","Zapfhahn","Zauberer","Zaun","Zebra","Zelt","Zeppelin","Zettel","Ziege","Ziegel","Ziel","Zigarre","Zimmer","Zimt","Zirkel","Zirkus","Zitrone","Zoll","Zombie","Zone","Zoo","Zopf","Zucker","Zug","Zunge","Zwerg","Zwiebel","Zwilling","Zylinder"
];

// Ensure array is unique (deduplication)
const uniqueWords = [...new Set(germanWords)];

// Settings Elements
const settingsInputs = [
    'wordCount', 'separator', 'capitalize', 'addNumber', 'addSymbol',
    'minLength', 'maxLength', 'specialCharPool', 'excludedWords', 'customWords'
];

document.addEventListener('DOMContentLoaded', () => {
    // Check Dark Mode
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    
    // Load Settings if enabled
    loadSettings();

    // Bind Events
    document.getElementById('btnMainGenerate').addEventListener('click', generatePassphrase);
    document.getElementById('btnRefresh').addEventListener('click', generatePassphrase);
    document.getElementById('btnCopy').addEventListener('click', copyToClipboard);
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('wordCount').addEventListener('input', (e) => {
        updateUI();
        saveSettings(); // Auto-save on slider input too
    });
    
    // Bind Inputs causing regen & save
    settingsInputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('change', () => {
                saveSettings();
                generatePassphrase();
            });
        }
    });

    // Save Settings Toggle
    const saveCheckbox = document.getElementById('saveSettingsCheckbox');
    saveCheckbox.addEventListener('change', () => {
        if (saveCheckbox.checked) {
            localStorage.setItem('saveSettings', 'true');
            saveSettings(); // Save current state immediately
        } else {
            localStorage.setItem('saveSettings', 'false');
            clearSettings(); // Clear stored settings
        }
    });

    // Separator Buttons
    document.querySelectorAll('.sep-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            setSeparator(e.target.dataset.sep);
            saveSettings();
        });
    });

    // Initial Run
    updateUI();
});

// Settings Management
function loadSettings() {
    const isSaved = localStorage.getItem('saveSettings') === 'true';
    document.getElementById('saveSettingsCheckbox').checked = isSaved;

    if (!isSaved) return;

    const saved = JSON.parse(localStorage.getItem('passphraseSettings') || '{}');
    if (Object.keys(saved).length === 0) return;

    // Apply values
    if (saved.wordCount) document.getElementById('wordCount').value = saved.wordCount;
    if (saved.separator) {
        document.getElementById('separator').value = saved.separator;
        // Update separator UI
        document.querySelectorAll('.sep-btn').forEach(btn => {
            if(btn.dataset.sep === saved.separator) btn.classList.add('active');
            else btn.classList.remove('active');
        });
    }
    if (saved.capitalize !== undefined) document.getElementById('capitalize').checked = saved.capitalize;
    if (saved.addNumber !== undefined) document.getElementById('addNumber').checked = saved.addNumber;
    if (saved.addSymbol !== undefined) document.getElementById('addSymbol').checked = saved.addSymbol;
    
    // Advanced
    if (saved.minLength) document.getElementById('minLength').value = saved.minLength;
    if (saved.maxLength) document.getElementById('maxLength').value = saved.maxLength;
    if (saved.specialCharPool) document.getElementById('specialCharPool').value = saved.specialCharPool;
    if (saved.excludedWords) document.getElementById('excludedWords').value = saved.excludedWords;
    if (saved.customWords) document.getElementById('customWords').value = saved.customWords;
}

function saveSettings() {
    if (document.getElementById('saveSettingsCheckbox').checked !== true) return;

    const settings = {
        wordCount: document.getElementById('wordCount').value,
        separator: document.getElementById('separator').value,
        capitalize: document.getElementById('capitalize').checked,
        addNumber: document.getElementById('addNumber').checked,
        addSymbol: document.getElementById('addSymbol').checked,
        minLength: document.getElementById('minLength').value,
        maxLength: document.getElementById('maxLength').value,
        specialCharPool: document.getElementById('specialCharPool').value,
        excludedWords: document.getElementById('excludedWords').value,
        customWords: document.getElementById('customWords').value
    };

    localStorage.setItem('passphraseSettings', JSON.stringify(settings));
}

function clearSettings() {
    localStorage.removeItem('passphraseSettings');
}

// ... Rest of the original logic (Entropy, Generation, Clipboard) remains the same ...

function getSecureRandomInt(max) {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0] % max;
}

function calculateEntropy(poolSize, length, hasNumber, separatorType, randomizeCaps, hasSymbol, symbolPoolSize) {
    if (poolSize === 0) return 0;
    let entropy = length * Math.log2(poolSize);

    if (separatorType === 'number' && length > 1) {
        entropy += (length - 1) * Math.log2(90);
    }

    if (randomizeCaps) {
        entropy += Math.log2(Math.pow(2, length) - 1);
    }

    if (hasNumber) {
        entropy += 6.6; 
    }

    if (hasSymbol && symbolPoolSize > 0) {
         entropy += Math.log2(symbolPoolSize);
    }
    return Math.floor(entropy);
}

function updateStrengthBar(entropy) {
    const bar = document.getElementById('strengthBar');
    const text = document.getElementById('entropyText');
    
    text.textContent = entropy + " bits";

    let width = 0;
    let colorClass = 'bar-red';

    if (entropy < 35) {
        width = 25;
        colorClass = 'bar-red';
    } else if (entropy < 50) {
        width = 50;
        colorClass = 'bar-yellow';
    } else if (entropy < 75) {
        width = 75;
        colorClass = 'bar-blue';
    } else {
        width = 100;
        colorClass = 'bar-green';
    }

    bar.style.width = width + '%';
    bar.className = colorClass;
}

function setSeparator(sep) {
    document.getElementById('separator').value = sep;
    
    document.querySelectorAll('.sep-btn').forEach(btn => {
        if(btn.dataset.sep === sep) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    generatePassphrase();
}

function updateUI() {
    const count = document.getElementById('wordCount').value;
    document.getElementById('wordCountValue').textContent = count;
    generatePassphrase();
}

function getFilteredPool() {
    const minLen = parseInt(document.getElementById('minLength').value) || 0;
    const maxLen = parseInt(document.getElementById('maxLength').value) || 100;
    
    const excludedInput = document.getElementById('excludedWords').value;
    const customInput = document.getElementById('customWords').value;

    const excludedSet = new Set(
        excludedInput.split(',')
        .map(w => w.trim().toLowerCase())
        .filter(w => w.length > 0)
    );

    const customWords = customInput.split(',')
        .map(w => w.trim())
        .filter(w => w.length > 0);

    let pool = uniqueWords.filter(word => {
        if (word.length < minLen || word.length > maxLen) return false;
        if (excludedSet.has(word.toLowerCase())) return false;
        return true;
    });

    pool = pool.concat(customWords);
    return pool;
}

function generatePassphrase() {
    const count = parseInt(document.getElementById('wordCount').value);
    const separator = document.getElementById('separator').value;
    const capitalize = document.getElementById('capitalize').checked;
    const addNumber = document.getElementById('addNumber').checked;
    const addSymbol = document.getElementById('addSymbol').checked;
    const specialCharPool = document.getElementById('specialCharPool').value || "";

    const activePool = getFilteredPool();

    if (activePool.length === 0) {
        document.getElementById('passphraseOutput').textContent = "Keine Wörter!";
        updateStrengthBar(0);
        return;
    }

    let passphraseArray = [];
    let uppercaseIndices = [];

    for (let i = 0; i < count; i++) {
        const randIndex = getSecureRandomInt(activePool.length);
        let word = activePool[randIndex]; 

        if (capitalize) {
            if (getSecureRandomInt(2) === 0) {
                word = word.toLowerCase();
            } else {
                word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
                uppercaseIndices.push(i);
            }
        } else {
            word = word.toLowerCase();
        }

        passphraseArray.push(word);
    }

    if (capitalize && uppercaseIndices.length === 0) {
        const forceIndex = getSecureRandomInt(count);
        let w = passphraseArray[forceIndex];
        passphraseArray[forceIndex] = w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    }

    let result = "";

    if (separator === 'number') {
        for (let i = 0; i < passphraseArray.length; i++) {
            result += passphraseArray[i];
            if (i < passphraseArray.length - 1) {
                const randSep = 10 + getSecureRandomInt(90);
                result += randSep;
            }
        }
    } else {
        result = passphraseArray.join(separator);
    }

    if (addNumber) {
        const num = getSecureRandomInt(100);
        result += num;
    }

    if (addSymbol && specialCharPool.length > 0) {
        const randSymIndex = getSecureRandomInt(specialCharPool.length);
        result += specialCharPool[randSymIndex];
    }

    document.getElementById('passphraseOutput').textContent = result;
    const entropy = calculateEntropy(activePool.length, count, addNumber, separator, capitalize, addSymbol, specialCharPool.length);
    updateStrengthBar(entropy);
}

function copyToClipboard() {
    const text = document.getElementById('passphraseOutput').textContent.trim();
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        const successful = document.execCommand('copy');
        if(successful) showToast();
    } catch (err) {
        console.error('Kopieren fehlgeschlagen', err);
    }
    document.body.removeChild(textarea);
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

function toggleTheme() {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.theme = 'light';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.theme = 'dark';
    }
}
