// Large German Word List (>2000 words for high entropy)
const germanWords = [
    // A
    "Aal", "Abart", "Abbau", "Abbild", "Abbildung", "Abbruch", "Abend", "Abendbrot", "Abenddämmerung", "Abenteuer", "Abenteurer",
    "Aberglaube", "Abfahrt", "Abfall", "Abfallkorb", "Abflug", "Abgabe", "Abgang", "Abgas", "Abgrund", "Abhang", "Abhilfe",
    "Abitur", "Abkommen", "Ablauf", "Ablehnung", "Ablenkung", "Ablösung", "Abnahme", "Abonnement", "Absatz", "Abschied",
    "Abschluss", "Abschnitt", "Absicht", "Absolutismus", "Abstand", "Abstieg", "Abstimmung", "Abstinent", "Abstrakt", "Absturz",
    "Abteil", "Abteilung", "Abwart", "Abwasch", "Abwechslung", "Abwehr", "Abwesenheit", "Abzug", "Achse", "Achsel", "Achtung",
    "Acker", "Ackerbau", "Acryl", "Ader", "Adler", "Admiral", "Adresse", "Adressat", "Affe", "Affekt", "Agent", "Agentur",
    "Aggregat", "Aggression", "Agrar", "Ahnung", "Ahorn", "Akademie", "Akazie", "Akkord", "Akku", "Akrobat", "Akte", "Aktie",
    "Aktion", "Aktivist", "Aktivität", "Aktuar", "Akzent", "Akzeptanz", "Alarm", "Albatros", "Album", "Alchemie", "Alkohol",
    "Allergie", "Alligator", "Allmacht", "Alltag", "Almosen", "Alpaka", "Alpen", "Alphabet", "Altar", "Alter", "Alternative",
    "Albtraum", "Aluminium", "Amateur", "Ambiente", "Amboss", "Ameise", "Ameisenbär", "Amnesie", "Ampel", "Amphibie", "Amt",
    "Amulett", "Amüsier", "Anaconda", "Analyse", "Ananas", "Anarchie", "Anatomie", "Anbau", "Anbeginn", "Anbieter", "Anblick",
    "Andacht", "Andenken", "Anekdote", "Anfang", "Anfänger", "Anfrage", "Anführer", "Angabe", "Angebot", "Angel", "Angler",
    "Angriff", "Angst", "Anhang", "Anhänger", "Anis", "Anker", "Anklage", "Ankunft", "Anlage", "Anlass", "Anlauf", "Anleitung",
    "Anmeldung", "Anmut", "Annahme", "Annonce", "Anordnung", "Anruf", "Ansatz", "Anschlag", "Anschluss", "Ansehen", "Ansicht",
    "Ansporn", "Anspruch", "Anstalt", "Anstand", "Anstieg", "Anstoß", "Anstrengung", "Anteil", "Antenne", "Antike", "Antilope",
    "Antiquität", "Antrag", "Antrieb", "Antwort", "Anwalt", "Anwesen", "Anzahl", "Anzeichen", "Anzeige", "Anzug", "Apfel",
    "Apfelbaum", "Apfelmus", "Apotheke", "Apotheker", "Apparat", "Appetit", "Applaus", "Aprikose", "April", "Aquarium", "Arbeit",
    "Arbeiter", "Arbeitsamt", "Arbeitsplatz", "Arche", "Architekt", "Archiv", "Areal", "Arena", "Argument", "Argwohn", "Arm",
    "Armband", "Armee", "Armlehne", "Armut", "Aroma", "Arrangement", "Arrest", "Art", "Artikel", "Artillerie", "Artist", "Arzt",
    "Arztpraxis", "Asbest", "Asche", "Aschenbecher", "Aspekt", "Asphalt", "Assistent", "Ast", "Asteroid", "Astronaut", "Asyl",
    "Atelier", "Atem", "Atemzug", "Äther", "Athlet", "Atlas", "Atmosphäre", "Atom", "Atomkraft", "Attentat", "Attraktion", "Attrappe",
    "Audio", "Audienz", "Aufbau", "Aufdruck", "Auferstehung", "Aufgabe", "Aufgang", "Aufgebot", "Auflage", "Auflauf", "Auflösung",
    "Aufnahme", "Aufmerksamkeit", "Aufprall", "Aufregung", "Aufruf", "Aufruhr", "Aufsatz", "Aufschlag", "Aufschrei", "Aufschrift",
    "Aufschwung", "Aufsicht", "Aufstand", "Aufstieg", "Auftakt", "Auftrag", "Auftritt", "Aufwand", "Aufzug", "Augapfel", "Auge",
    "Augenblick", "Augenbraue", "Augenzeuge", "August", "Auktion", "Ausbildung", "Ausblick", "Ausdauer", "Ausdruck", "Ausfall",
    "Ausflug", "Ausfuhr", "Ausgabe", "Ausgang", "Ausgleich", "Aushang", "Auskunft", "Ausland", "Auslese", "Ausnahme", "Auspuff",
    "Ausrede", "Ausruf", "Aussaat", "Aussage", "Ausschnitt", "Ausschuss", "Aussehen", "Außenminister", "Außenseiter", "Aussicht",
    "Ausstattung", "Austausch", "Auster", "Austritt", "Auswahl", "Auswanderer", "Ausweg", "Ausweis", "Auswirkung", "Auszeichnung",
    "Auszeit", "Auszug", "Auto", "Autobahn", "Autobiografie", "Autobus", "Autogramm", "Automat", "Autopilot", "Autor", "Autorität",
    "Avocado", "Axt", "Azubi",
    
    // B
    "Baby", "Bach", "Backblech", "Backe", "Bäcker", "Bäckerei", "Backofen", "Backpulver", "Backstein", "Bad", "Bademantel",
    "Badewanne", "Bagger", "Bahn", "Bahnhof", "Bahnsteig", "Bajonett", "Bakterie", "Balance", "Balken", "Balkon", "Ball",
    "Ballade", "Ballast", "Ballett", "Ballon", "Balsam", "Bambus", "Banane", "Band", "Bandage", "Bandit", "Bank", "Bankett",
    "Bankier", "Banknote", "Bann", "Banner", "Bar", "Baracke", "Bär", "Barbar", "Barbier", "Barett", "Bariton", "Barium",
    "Barkeeper", "Barmherzigkeit", "Barometer", "Baron", "Barriere", "Barrikade", "Barsch", "Bart", "Basalt", "Basar", "Base",
    "Basis", "Basketball", "Bass", "Bastard", "Bastion", "Bastler", "Batterie", "Bau", "Bauch", "Bauer", "Bauernhof", "Baum",
    "Baumstamm", "Baumwolle", "Baustelle", "Bauwerk", "Bayer", "Bazillus", "Beamter", "Beanspruchung", "Becher", "Becken",
    "Bedarf", "Bedenken", "Bedeutung", "Bedienung", "Bedingung", "Bedrohung", "Bedürfnis", "Beeinflussung", "Beere", "Beet",
    "Befehl", "Befreiung", "Befund", "Begegnung", "Begeisterung", "Begierde", "Beginn", "Begleiter", "Begonie", "Begräbnis",
    "Begriff", "Begrüßung", "Behälter", "Behandlung", "Behauptung", "Behörde", "Beifall", "Beilage", "Beil", "Bein", "Beispiel",
    "Beistand", "Beitrag", "Beitritt", "Bekannte", "Bekanntmachung", "Bekenntnis", "Bekleidung", "Belastung", "Beleg", "Beleuchtung",
    "Beliebtheit", "Belohnung", "Bemühung", "Benutzer", "Benzin", "Beobachter", "Beobachtung", "Berater", "Beratung", "Berechnung",
    "Bereich", "Berg", "Bergbau", "Bergsteiger", "Bericht", "Bernstein", "Beruf", "Berührung", "Besatzung", "Bescheid",
    "Bescheidenheit", "Beschluss", "Beschwerde", "Besen", "Besichtigung", "Besitz", "Besitzer", "Besonderheit", "Besorgnis",
    "Besserung", "Bestand", "Bestandteil", "Bestätigung", "Besteck", "Bestellung", "Bestseller", "Bestuhlung", "Besuch",
    "Besucher", "Beton", "Betrachtung", "Betrag", "Betreff", "Betrieb", "Betrug", "Bett", "Bettler", "Beule", "Beute", "Beutel",
    "Bevölkerung", "Bewacher", "Bewaffnung", "Bewegung", "Beweis", "Bewerber", "Bewerbung", "Bewertung", "Bewilligung",
    "Bewohner", "Bewunderung", "Bewusstsein", "Bezeichnung", "Beziehung", "Bezirk", "Bezug", "Bibel", "Biber", "Bibliothek",
    "Biene", "Bienenstock", "Bier", "Biergarten", "Biest", "Biet", "Bilanz", "Bild", "Bildschirm", "Bildung", "Billard",
    "Billet", "Bimsstein", "Binde", "Bindung", "Bing", "Binokel", "Biografie", "Biologie", "Biotop", "Birke", "Birne", "Bisam",
    "Bischof", "Biskuit", "Bison", "Biss", "Bistum", "Bitte", "Bitterkeit", "Biwak", "Bizon", "Blamage", "Blase", "Blass",
    "Blatt", "Blau", "Blaubeere", "Blech", "Blei", "Bleistift", "Blick", "Blinddarm", "Blindheit", "Blitz", "Block", "Blockade",
    "Blog", "Blondine", "Blume", "Blumenkohl", "Blumenstrauß", "Bluse", "Blut", "Blüte", "Blutung", "Boa", "Bock", "Boden",
    "Bodensatz", "Bogen", "Bogenschütze", "Bohle", "Bohne", "Bohneneintopf", "Bohrer", "Boje", "Bolzen", "Bombardement", "Bombe",
    "Bonbon", "Bonus", "Boot", "Bord", "Bordstein", "Borke", "Börse", "Borte", "Bosheit", "Boss", "Bote", "Botschaft",
    "Botschafter", "Böttcher", "Boulevard", "Bouquet", "Boutique", "Bowle", "Box", "Boxer", "Boykott", "Branche", "Brand",
    "Brandung", "Branntwein", "Braten", "Brauch", "Brauerei", "Braunkohle", "Brause", "Braut", "Bräutigam", "Brecheisen", "Brei",
    "Breite", "Bremse", "Brennen", "Brenner", "Brennessel", "Brennpunkt", "Brennstoff", "Brett", "Brezel", "Brief", "Briefkasten",
    "Briefmarke", "Briefträger", "Brigade", "Brille", "Brise", "Brit", "Broccoli", "Brombeere", "Bronze", "Brosche", "Broschüre",
    "Brot", "Brötchen", "Bruch", "Brücke", "Bruder", "Brühe", "Brumm", "Brunnen", "Brust", "Brut", "Brutalität", "Buch",
    "Buche", "Bücherregal", "Buchfink", "Buchhalter", "Buchhandlung", "Buchse", "Buchstabe", "Bucht", "Buckel", "Budget",
    "Buffet", "Büffel", "Bügel", "Bühne", "Bukett", "Bulldogge", "Bulle", "Bullauge", "Bummel", "Bund", "Bündel", "Bundeskanzler",
    "Bündnis", "Bunker", "Buntheit", "Bürde", "Burg", "Bürge", "Bürger", "Bürgermeister", "Bürgschaft", "Büro", "Bürokrat",
    "Bürste", "Bus", "Busch", "Busen", "Business", "Buße", "Büste", "Butler", "Butter", "Butterblume", "Bauer",
    
    // C
    "Cabrio", "Cafe", "Cafeteria", "Calcium", "Camcorder", "Cameo", "Camembert", "Camp", "Camping", "Campus", "Canape", "Canyon",
    "Cape", "Cappuccino", "Carport", "Cartoon", "Casino", "Cello", "Cellulose", "Celsius", "Cent", "Center", "Champion",
    "Champignon", "Chance", "Chaos", "Charakter", "Charisma", "Charme", "Chassis", "Chat", "Chauffeur", "Chef", "Chemie",
    "Chemiker", "Chiffre", "Chili", "China", "Chirurg", "Chlor", "Cholera", "Chor", "Christ", "Chrom", "Chronik", "Chronist",
    "Chrysantheme", "City", "Clan", "Clown", "Club", "Cockpit", "Cocktail", "Code", "Codex", "Cognac", "Cola", "Collage",
    "College", "Comic", "Computer", "Container", "Cookie", "Coolness", "Copyright", "Cornflakes", "Couch", "Countdown",
    "Cousine", "Cousin", "Cover", "Cowboy", "Crash", "Creme", "Crew", "Cricket", "Croissant", "Curry", "Cursor",
    
    // D
    "Dach", "Dachboden", "Dachs", "Dackel", "Dämmerung", "Damm", "Dämon", "Dampf", "Dampfer", "Dank", "Dankbarkeit", "Darm",
    "Darsteller", "Darstellung", "Dasein", "Datei", "Daten", "Datenbank", "Dattel", "Datum", "Dauer", "Daumen", "Daune",
    "Debatte", "Decke", "Deckel", "Deckung", "Defekt", "Defizit", "Degen", "Dehnung", "Deich", "Dekade", "Dekan", "Dekor",
    "Dekoration", "Delegation", "Delfin", "Delikatesse", "Delle", "Delta", "Demokratie", "Demonstration", "Demut", "Denkmal",
    "Deponie", "Depot", "Desaster", "Design", "Designer", "Despot", "Dessert", "Detail", "Detektiv", "Deutung", "Devise",
    "Dezember", "Diadem", "Diagnose", "Diagramm", "Dialekt", "Dialog", "Diamant", "Diät", "Dichter", "Dichtung", "Dickicht",
    "Dieb", "Diebstahl", "Diener", "Dienst", "Dienstag", "Diesel", "Dietrich", "Differenz", "Digital", "Diktat", "Diktator",
    "Dilemma", "Dill", "Dimension", "Ding", "Dinosaurier", "Diode", "Diplom", "Diplomat", "Direktor", "Dirigent", "Dirne",
    "Diskus", "Diskussion", "Distanz", "Distel", "Disziplin", "Diva", "Docht", "Dock", "Dogge", "Dohle", "Doktor", "Dokument",
    "Dolch", "Dollar", "Dolmetscher", "Dom", "Domäne", "Domino", "Donner", "Donnerstag", "Doppel", "Doppelgänger", "Dorf",
    "Dorn", "Dorsch", "Dosis", "Dose", "Doent", "Drache", "Draht", "Drama", "Dramatiker", "Drang", "Dreck", "Drehbuch", "Drehzahl",
    "Dreieck", "Dreiklang", "Drescher", "Dressur", "Drilling", "Droge", "Drogerie", "Drohne", "Drohung", "Droschke", "Druck",
    "Drucker", "Dschungel", "Duell", "Duett", "Duft", "Dukaten", "Düne", "Dünger", "Dunkel", "Dunkelheit", "Dunst", "Duplikat",
    "Dur", "Durchblick", "Durchgang", "Durchmesser", "Durchschnitt", "Durst", "Dusche", "Dutzend", "Dynamik", "Dynamit",
    "Dynastie",
    
    // E
    "Ebbe", "Ebene", "Eber", "Echo", "Echse", "Echtheit", "Eck", "Ecke", "Edelstein", "Edelweiß", "Efeu", "Effekt", "Egalität",
    "Egel", "Ego", "Egoismus", "Ehe", "Ehefrau", "Ehemann", "Ehepaar", "Ehre", "Ehrgeiz", "Ehrlichkeit", "Ei", "Eiche", "Eichel",
    "Eichhörnchen", "Eid", "Eidechse", "Eifer", "Eifersucht", "Eigenart", "Eigenheit", "Eigenschaft", "Eigentum", "Eigentümer",
    "Eimer", "Einbahnstraße", "Einblick", "Einbrecher", "Einbruch", "Eindruck", "Einer", "Einfahrt", "Einfall", "Einfalt",
    "Einfluss", "Eingang", "Eingebung", "Einheit", "Einhorn", "Einkauf", "Einkommen", "Einladung", "Einleitung", "Einsamkeit",
    "Einsatz", "Einschlag", "Einsicht", "Einsiedler", "Eintopf", "Eintrag", "Eintritt", "Einwand", "Einwohner", "Einzelheit",
    "Einzug", "Eis", "Eisbär", "Eisberg", "Eisen", "Eisenbahn", "Eitelkeit", "Eiter", "Eiweiß", "Ekel", "Ekstase", "Elan", "Elch",
    "Elefant", "Eleganz", "Elektriker", "Elektronik", "Element", "Elend", "Elf", "Elfe", "Elite", "Ellbogen", "Elster", "Eltern",
    "Emaille", "Emblem", "Emigrant", "Emotion", "Empfang", "Empfänger", "Empfehlung", "Empfindung", "Ende", "Endung", "Energie",
    "Engel", "Engpass", "Enkel", "Ente", "Entdeckung", "Entfernung", "Entführer", "Entgegenkommen", "Enthusiasmus", "Entlassung",
    "Entlastung", "Entscheidung", "Entschuldigung", "Entsetzen", "Enttäuschung", "Entwurf", "Enzian", "Episode", "Epoche", "Epos",
    "Erbarmen", "Erbe", "Erbse", "Erdbeben", "Erdbeere", "Erde", "Erdgas", "Erdgeschoss", "Erdkunde", "Erdnuss", "Erdöl",
    "Ereignis", "Eremit", "Erfahrung", "Erfinder", "Erfindung", "Erfolg", "Ergebnis", "Erhalt", "Erholung", "Erinnerung",
    "Erkältung", "Erkenntnis", "Erklärung", "Erkrankung", "Erlaubnis", "Erlebnis", "Erlösung", "Ermessen", "Ermittlung",
    "Ernährung", "Ernst", "Ernte", "Eroberung", "Eröffnung", "Erpressung", "Errungenschaft", "Ersatz", "Erscheinung",
    "Erschöpfung", "Ersparnis", "Erstaufführung", "Ertrag", "Erwachsene", "Erwartung", "Erweiterung", "Erz", "Erzählung",
    "Erzbischof", "Erzengel", "Erzfeind", "Erziehung", "Esche", "Esel", "Espe", "Espresso", "Essenz", "Esser", "Essig",
    "Esslöffel", "Esszimmer", "Etage", "Etappe", "Etat", "Ethik", "Etikett", "Eule", "Euphorie", "Euro", "Europa", "Evangelium",
    "Evolution", "Examen", "Exemplar", "Exil", "Existenz", "Expedition", "Experiment", "Experte", "Explosion", "Export", "Express",
    "Extra", "Extrakt", "Extrem", "Exzellenz",
    
    // F
    "Fabel", "Fabrik", "Fabrikant", "Facette", "Fach", "Fachmann", "Fackel", "Faden", "Fähigkeit", "Fähre", "Fahne", "Fahrbahn",
    "Fahrer", "Fahrgast", "Fahrplan", "Fahrrad", "Fahrstuhl", "Fahrt", "Fahrzeug", "Fakt", "Faktor", "Fakultät", "Falke", "Fall",
    "Falle", "Fallschirm", "Falschheit", "Falte", "Falter", "Familie", "Fan", "Fanatiker", "Fang", "Fantasie", "Farbe", "Farmer",
    "Farn", "Fasan", "Faser", "Fass", "Fassade", "Fassung", "Fasten", "Faszination", "Fatalismus", "Faule", "Faust", "Favorit",
    "Fax", "Fazit", "Februar", "Fechter", "Feder", "Fee", "Fehde", "Fehler", "Feier", "Feierabend", "Feige", "Feigheit", "Feile",
    "Feinheit", "Feind", "Feld", "Feldwebel", "Felge", "Fell", "Fels", "Felsen", "Fenchel", "Fenster", "Ferien", "Ferkel",
    "Fernbedienung", "Fernglas", "Fernsehen", "Fernseher", "Fernweh", "Ferse", "Fertigung", "Fest", "Festplatte", "Festung",
    "Fett", "Fetzen", "Feuer", "Feuerwehr", "Feuerwerk", "Feuerzeug", "Fichte", "Fieber", "Figur", "Filet", "Filiale", "Film",
    "Filter", "Filz", "Finale", "Finanz", "Findling", "Finger", "Fingerhut", "Fink", "Finte", "Firma", "Firnis", "First", "Fisch",
    "Fischer", "Fitness", "Fixierung", "Flachland", "Fläche", "Flagge", "Flamingo", "Flamme", "Flanke", "Flasche", "Flaute",
    "Fleck", "Fledermaus", "Flegel", "Fleisch", "Fleischer", "Fleiß", "Flieder", "Fliege", "Flieger", "Fliese", "Fließband",
    "Flimmern", "Flirt", "Flitterwochen", "Flocke", "Floh", "Flohmarkt", "Flora", "Florett", "Florist", "Floss", "Flosse", "Flöte",
    "Flotte", "Fluch", "Flucht", "Flug", "Flügel", "Flughafen", "Flugzeug", "Flunder", "Flur", "Fluss", "Flüssigkeit", "Flut",
    "Föderation", "Fohlen", "Fokus", "Folge", "Folter", "Fonds", "Fontäne", "Förderung", "Forelle", "Form", "Format", "Formel",
    "Formular", "Forscher", "Forschung", "Forst", "Fort", "Fortschritt", "Forum", "Foto", "Fotograf", "Fotografie", "Foyer",
    "Fracht", "Frack", "Frage", "Fragment", "Fraktion", "Frame", "Franken", "Franse", "Franzose", "Fratze", "Frau", "Frechheit",
    "Fregatte", "Freiheit", "Freiraum", "Freitag", "Freiwillige", "Freizeit", "Fremde", "Frequenz", "Fresko", "Fressen", "Freude",
    "Freund", "Freundschaft", "Friede", "Friedhof", "Frisur", "Frist", "Friseur", "Frohsinn", "Frommheit", "Front", "Frosch",
    "Frost", "Frucht", "Frühling", "Frühstück", "Fuchs", "Fuge", "Führer", "Fuhrpark", "Füllhalter", "Fülle", "Fund", "Fundament",
    "Fundbüro", "Fünfeck", "Funke", "Funktion", "Funktionär", "Furche", "Furcht", "Furie", "Fürst", "Furt", "Fusion", "Fuss",
    "Fußball", "Fußboden", "Fußgänger", "Futter", "Futteral",
    
    // G
    "Gabe", "Gabel", "Galerie", "Galle", "Galopp", "Gamasche", "Gang", "Gans", "Gänseblümchen", "Ganzes", "Garage", "Garantie",
    "Garde", "Gardine", "Garn", "Garnele", "Garnison", "Garten", "Gärtner", "Gas", "Gaspedal", "Gasse", "Gast", "Gastgeber",
    "Gasthaus", "Gastronomie", "Gatte", "Gitter", "Gattung", "Gaukel", "Gaumen", "Gauner", "Gaze", "Gazelle", "Gebäck", "Gebäude",
    "Gebärde", "Gebein", "Gebet", "Gebiet", "Gebirge", "Gebiss", "Gebot", "Gebrauch", "Gebühr", "Geburt", "Geburtstag", "Gedächtnis",
    "Gedanke", "Gedicht", "Geduld", "Gefahr", "Gefährte", "Gefälle", "Gefallen", "Gefangene", "Gefängnis", "Gefäß", "Gefecht",
    "Gefieder", "Geflecht", "Gefolge", "Gefrierpunkt", "Gefüge", "Gefühl", "Gegend", "Gegensatz", "Gegenstand", "Gegenteil",
    "Gegenwart", "Gegner", "Gehalt", "Gehäuse", "Gehege", "Geheimnis", "Gehirn", "Gehöft", "Gehör", "Gehorsam", "Geier", "Geige",
    "Geisel", "Geist", "Geisterbahn", "Geistesblitz", "Geiz", "Geizhals", "Gelächter", "Gelände", "Geländer", "Geld", "Geldbeutel",
    "Gelee", "Gelegenheit", "Gelenk", "Geliebte", "Geltung", "Gemälde", "Gemeinde", "Gemeinschaft", "Gemüse", "Gemüt", "Gen",
    "General", "Generation", "Generator", "Genie", "Genosse", "Genre", "Genuss", "Geografie", "Geologe", "Geologie", "Geometrie",
    "Gepäck", "Gepard", "Gerät", "Geräusch", "Gerechtigkeit", "Gericht", "Gerippe", "Germane", "Gerste", "Geruch", "Gerücht",
    "Gerüst", "Gesang", "Gesäß", "Gesandte", "Gesamt", "Geschäft", "Geschehen", "Geschenk", "Geschichte", "Geschick", "Geschirr",
    "Geschlecht", "Geschmack", "Geschoss", "Geschrei", "Geschwader", "Geschwindigkeit", "Geschwister", "Geschwür", "Geselle",
    "Gesellschaft", "Gesetz", "Gesicht", "Gespenst", "Gespann", "Gespräch", "Gestalt", "Gestank", "Geständnis", "Geste", "Gestein",
    "Gestern", "Gestirn", "Gesuch", "Gesundheit", "Getränk", "Getreide", "Getriebe", "Ghetto", "Gewächshaus", "Gewalt", "Gewand",
    "Gewebe", "Gewehr", "Geweih", "Gewerbe", "Gewicht", "Gewinn", "Gewissen", "Gewitter", "Gewohnheit", "Gewölbe", "Gewürz",
    "Gezeiten", "Gier", "Gift", "Gigant", "Gipfel", "Gips", "Giraffe", "Gitarre", "Gitter", "Glanz", "Glas", "Glaser", "Glasur",
    "Glaube", "Gleichgewicht", "Gleichung", "Gleis", "Gletscher", "Glied", "Glimmer", "Globus", "Glocke", "Glück", "Glühbirne",
    "Glühwürmchen", "Glut", "Gnade", "Gold", "Goldfisch", "Golf", "Gondel", "Gong", "Gorilla", "Gott", "Gouverneur", "Grab",
    "Graben", "Grad", "Graf", "Grafik", "Gramm", "Grammatik", "Granate", "Granit", "Grapefruit", "Graph", "Gras", "Grat",
    "Gratulation", "Grauen", "Gravur", "Grazie", "Greif", "Greis", "Gremium", "Grenze", "Grenadier", "Griff", "Grille", "Grimasse",
    "Grips", "Groll", "Größe", "Grotte", "Grube", "Gruft", "Grund", "Grundlage", "Grundsatz", "Gruppe", "Gruß", "Gulasch", "Gummi",
    "Gunst", "Gurke", "Gurt", "Guss", "Gut", "Gutachter", "Guthaben", "Gymnasium", "Gymnastik",
    
    // H
    "Haar", "Habe", "Habicht", "Hacke", "Hafen", "Hafer", "Haft", "Hagel", "Hahn", "Hai", "Hain", "Haken", "Halbinsel", "Halbzeit",
    "Hälfte", "Halle", "Halm", "Hals", "Halsband", "Halt", "Haltung", "Hamburger", "Hammer", "Hamster", "Hand", "Handbremse",
    "Handbuch", "Handel", "Handgelenk", "Handlung", "Handschuh", "Handtuch", "Handwerk", "Handy", "Hanf", "Hang", "Hangar",
    "Hantel", "Harfe", "Harmonie", "Harnisch", "Härte", "Harz", "Hase", "Hasel", "Hass", "Haube", "Hauch", "Haufen", "Haupt",
    "Hauptstadt", "Haus", "Haushalt", "Hausmeister", "Haut", "Havarie", "Hebamme", "Hebel", "Hecht", "Heck", "Hecke", "Heer",
    "Hefe", "Heft", "Heide", "Heil", "Heiland", "Heilige", "Heimat", "Heimweh", "Heirat", "Heizung", "Hektik", "Held", "Helikopter",
    "Helium", "Helm", "Hemd", "Hemmung", "Hengst", "Henkel", "Henker", "Herbst", "Herd", "Herde", "Hering", "Herkunft", "Hermelin",
    "Herr", "Herrschaft", "Hersteller", "Herstellung", "Herz", "Herzog", "Hetzjagd", "Heu", "Heuchelei", "Hexe", "Hilfe", "Himbeere",
    "Himmel", "Hindernis", "Hingabe", "Hintergrund", "Hinterhalt", "Hinweis", "Hirn", "Hirsch", "Hirse", "Hirte", "Hitze", "Hobby",
    "Hobel", "Hochschule", "Hochzeit", "Hocker", "Hockey", "Hof", "Hoffnung", "Höflichkeit", "Höhe", "Höhepunkt", "Höhle", "Hohn",
    "Holding", "Hölle", "Holz", "Hommage", "Honig", "Horizont", "Hörsaal", "Horn", "Hornisse", "Horoskop", "Hose", "Hosenträger",
    "Hotel", "Hubschrauber", "Hufeisen", "Hüfte", "Hügel", "Huhn", "Hülle", "Hülse", "Hummel", "Hummer", "Humor", "Hund", "Hütte",
    "Hunger", "Hupe", "Hürde", "Hure", "Hut", "Hyäne", "Hydrant", "Hygiene", "Hymne", "Hypnose", "Hypothese", "Hysterie",
    
    // I
    "Ideal", "Idealismus", "Idee", "Identität", "Ideologie", "Idiot", "Idol", "Idylle", "Igel", "Ignoranz", "Ikone", "Illegalität",
    "Illusion", "Illustration", "Imbiss", "Imitation", "Imker", "Immobilie", "Imperator", "Imperium", "Impfung", "Import",
    "Impression", "Impuls", "Index", "Inder", "Indianer", "Indikator", "Individuum", "Industrie", "Infanterie", "Infektion",
    "Inflation", "Info", "Informatik", "Information", "Ingenieur", "Ingwer", "Inhaber", "Inhalt", "Initiative", "Injektion",
    "Innenstadt", "Insel", "Inserat", "Inspektor", "Inspiration", "Installation", "Instinkt", "Institut", "Instrument", "Integration",
    "Intellekt", "Intelligenz", "Intention", "Interesse", "Internat", "Internet", "Interpretation", "Interview", "Intrige",
    "Intuition", "Invasion", "Inventar", "Investition", "Investor", "Ironie", "Irrtum", "Irrweg", "Islam", "Insekt", "Insulaner",
    "Isolation", "Isolierung",
    
    // J
    "Jacht", "Jacke", "Jackpot", "Jagd", "Jäger", "Jaguar", "Jahr", "Jahrgang", "Jahrhundert", "Jahrtausend", "Jahrzehnt", "Jalousie",
    "Jammer", "Jänner", "Januar", "Japaner", "Jargon", "Jasmin", "Jause", "Jazz", "Jeans", "Jeep", "Joch", "Jod", "Jogging",
    "Joghurt", "Johannisbeere", "Joker", "Jolle", "Journal", "Journalist", "Jubel", "Jubiläum", "Jude", "Jugend", "Juli", "Jungfrau",
    "Jungle", "Juni", "Junkie", "Jura", "Jurist", "Jury", "Justiz", "Jute", "Juwel", "Juwelier",
    
    // K
    "Kabel", "Kabine", "Kabinett", "Kacheln", "Kader", "Kaffee", "Käfig", "Kai", "Kaiser", "Kakadu", "Kakao", "Kaktus", "Kalender",
    "Kali", "Kalk", "Kalkulation", "Kalorie", "Kälte", "Kamel", "Kamera", "Kamille", "Kamin", "Kamm", "Kammer", "Kampagne", "Kampf",
    "Kämpfer", "Kanal", "Kandidat", "Känguru", "Kaninchen", "Kanne", "Kanone", "Kante", "Kanzel", "Kanzler", "Kap", "Kapazität",
    "Kapelle", "Kapital", "Kapitel", "Kapitän", "Kappe", "Kapsel", "Kapuze", "Karabiner", "Karaffe", "Karamell", "Karawane",
    "Kardinal", "Karikatur", "Karneval", "Karo", "Karotte", "Karriere", "Karussell", "Karte", "Kartei", "Kartoffel", "Karton",
    "Käse", "Kaserne", "Kasse", "Kassette", "Kassierer", "Kasten", "Katalog", "Katastrophe", "Kategorie", "Kater", "Kathedrale",
    "Katze", "Kauf", "Kaufhaus", "Kaufmann", "Kaulquappe", "Kaution", "Kautschuk", "Kavalier", "Kavallerie", "Kaviar", "Kegel",
    "Kehle", "Kehre", "Keil", "Keim", "Keks", "Kelch", "Keller", "Kellner", "Keramik", "Kerker", "Kern", "Kerze", "Kessel",
    "Kette", "Keule", "Kiefer", "Kies", "Kiesel", "Kilogramm", "Kilometer", "Kind", "Kindergarten", "Kindheit", "Kinn", "Kino",
    "Kiosk", "Kirche", "Kirsche", "Kissen", "Kiste", "Kitt", "Kittel", "Klage", "Klammer", "Klang", "Klappe", "Klarheit",
    "Klarinette", "Klasse", "Klassiker", "Klatsch", "Klausur", "Klavier", "Kleber", "Kleeblatt", "Kleid", "Kleidung", "Kleinigkeit",
    "Kleister", "Klemme", "Klempner", "Klerus", "Klima", "Klinge", "Klingel", "Klinik", "Klippe", "Klischee", "Kloake", "Kloss",
    "Kloster", "Kluft", "Klumpen", "Knabe", "Knack", "Knall", "Knast", "Knäuel", "Knecht", "Kneipe", "Knie", "Knoblauch", "Knochen",
    "Knöchel", "Knopf", "Knospe", "Knoten", "Knüppel", "Koala", "Koalition", "Kobold", "Koch", "Köder", "Koffer", "Kohl", "Kohle",
    "Kokos", "Kokosnuss", "Kollege", "Kollektion", "Kolonie", "Koloss", "Kombination", "Komet", "Komfort", "Komik", "Komiker",
    "Komitee", "Komma", "Kommando", "Kommentar", "Kommode", "Kommunismus", "Kompass", "Komplize", "Komplott", "Komponist",
    "Kompromiss", "Kondition", "Konditor", "Konferenz", "Konfekt", "Konflikt", "Kongress", "König", "Königin", "Königreich",
    "Konjunktur", "Konkurrenz", "Konkurs", "Können", "Konsequenz", "Konserve", "Konsole", "Konstruktion", "Konsul", "Konsum",
    "Kontakt", "Kontinent", "Konto", "Kontrabass", "Kontrast", "Kontrolle", "Konzentration", "Konzept", "Konzern", "Konzert",
    "Kooperation", "Kopf", "Kopfhörer", "Kopie", "Koralle", "Korb", "Kordel", "Korken", "Korn", "Körper", "Korrektur",
    "Korrespondenz", "Korridor", "Korsett", "Kosmos", "Kost", "Kosten", "Kostüm", "Kot", "Kotelett", "Krabbe", "Krach", "Kraft",
    "Kraftwerk", "Kragen", "Krähe", "Kralle", "Krampf", "Kran", "Kranich", "Krankheit", "Kranz", "Krater", "Krawatte", "Kreativität",
    "Kreatur", "Krebs", "Kredit", "Kreide", "Kreis", "Kreisel", "Kreuz", "Kreuzung", "Krieg", "Krise", "Kristall", "Kritik",
    "Kritiker", "Krokodil", "Krone", "Krönung", "Kröte", "Krug", "Krume", "Kruste", "Krypta", "Küche", "Kuchen", "Kugel", "Kuh",
    "Kühlraum", "Kühlschrank", "Kulisse", "Kult", "Kultur", "Kummer", "Kumpel", "Kunde", "Kunst", "Künstler", "Kunststoff",
    "Kupfer", "Kuppel", "Kurbel", "Kürbis", "Kurs", "Kurve", "Kurzschluss", "Kuss", "Küste", "Kutsche", "Kuvert",
    
    // L
    "Labor", "Labyrinth", "Lachs", "Lack", "Laden", "Ladung", "Lage", "Lager", "Lagune", "Laib", "Laie", "Laken", "Lakritz",
    "Lama", "Lamm", "Lampe", "Lampion", "Land", "Landkarte", "Landschaft", "Landung", "Landwirt", "Langeweile", "Lanze", "Laptop",
    "Lappen", "Lärm", "Larve", "Lasagne", "Laser", "Last", "Laster", "Lastwagen", "Latein", "Laterne", "Latrine", "Latte", "Latz",
    "Laub", "Lauch", "Laune", "Laus", "Laut", "Laute", "Lautsprecher", "Lavendel", "Lawine", "Layout", "Lebewohl", "Leben",
    "Lebenslauf", "Lebensmittel", "Leber", "Leck", "Leder", "Legende", "Legion", "Leguan", "Lehm", "Lehne", "Lehre", "Lehrer",
    "Leib", "Leibwächter", "Leiche", "Leid", "Leidenschaft", "Leim", "Leine", "Leinen", "Leistung", "Leiter", "Leitung", "Lektüre",
    "Lende", "Lenkrad", "Leopard", "Lernprozess", "Leser", "Leuchte", "Leuchtturm", "Leute", "Level", "Lexikon", "Libelle", "Licht",
    "Lid", "Liebe", "Liebhaber", "Lied", "Lieferung", "Liege", "Liga", "Likör", "Lila", "Lilie", "Limette", "Limonade", "Linde",
    "Lineal", "Linie", "Link", "Linse", "Lippe", "Lippenstift", "Liste", "List", "Liter", "Literatur", "Lizenz", "Lob", "Loch",
    "Locke", "Löffel", "Logbuch", "Loge", "Logik", "Logo", "Lohn", "Lokal", "Lokomotive", "Lorbeer", "Los", "Lösung", "Lotse",
    "Lotterie", "Löwe", "Lücke", "Luft", "Luftballon", "Lüge", "Luke", "Lunge", "Lunte", "Lupe", "Lust", "Luxus", "Lyrik",
    
    // M
    "Macht", "Made", "Magazin", "Magen", "Magie", "Magier", "Magnet", "Mahagoni", "Mahlzeit", "Mähne", "Mai", "Mais", "Majestät",
    "Major", "Makel", "Makler", "Makrele", "Mal", "Maler", "Malz", "Mama", "Mammut", "Management", "Manager", "Mandel", "Mangel",
    "Manieren", "Manifest", "Mann", "Mannschaft", "Manöver", "Mantel", "Manuskript", "Mappe", "Märchen", "Marder", "Margarine",
    "Marge", "Marine", "Marionette", "Mark", "Marke", "Marketing", "Markt", "Marmelade", "Marmor", "Mars", "Marsch", "Marter",
    "März", "Maschine", "Maske", "Maskottchen", "Maß", "Maßnahme", "Massage", "Masse", "Mast", "Material", "Materie", "Mathematik",
    "Matratze", "Matrose", "Mauer", "Maul", "Maulwurf", "Maus", "Maximum", "Mechanik", "Mechaniker", "Medaille", "Medien",
    "Medikament", "Medizin", "Meer", "Mehl", "Mehrheit", "Meile", "Meiler", "Meinung", "Meise", "Meister", "Melancholie", "Melodie",
    "Melone", "Membran", "Memo", "Menge", "Mensch", "Menschheit", "Mentalität", "Menthol", "Menü", "Merkmal", "Messe", "Messer",
    "Messing", "Metall", "Meteor", "Meter", "Methode", "Metropole", "Metzger", "Miete", "Mieter", "Mikrobe", "Mikrofon",
    "Mikroskop", "Milch", "Milieu", "Militär", "Milliarde", "Million", "Mimik", "Mine", "Mineral", "Miniatur", "Minimum",
    "Minister", "Minus", "Minute", "Mischung", "Missverständnis", "Mist", "Mitarbeiter", "Mitleid", "Mittag", "Mitte",
    "Mittel", "Mittelalter", "Mitternacht", "Möbel", "Mode", "Modell", "Moderator", "Modul", "Möglichkeit", "Mohn", "Mohrrübe",
    "Molekül", "Moment", "Monarch", "Monat", "Mönch", "Mond", "Monitor", "Monopol", "Monster", "Montage", "Montag", "Monument",
    "Moor", "Moos", "Moral", "Mord", "Morgen", "Mörtel", "Moschee", "Moskito", "Most", "Motiv", "Motivation", "Motor", "Motorrad",
    "Motte", "Motto", "Möwe", "Mühe", "Mühle", "Müll", "Multiplikation", "Mumie", "Mund", "Munition", "Münze", "Muschel", "Museum",
    "Musik", "Musiker", "Muskel", "Muster", "Mut", "Mutter", "Mysterium", "Mythos",
    
    // N
    "Nabel", "Nachbar", "Nachfrage", "Nachlass", "Nachmittag", "Nachricht", "Nachschlag", "Nacht", "Nachteil", "Nachtigall",
    "Nacken", "Nadel", "Nadelwald", "Nagel", "Nahaufnahme", "Nahrung", "Name", "Narbe", "Narzisse", "Nase", "Nashorn", "Nation",
    "Natur", "Natter", "Nebel", "Nebenbuhler", "Neffe", "Negativ", "Neid", "Neigung", "Nektar", "Nelke", "Nenner", "Nerv",
    "Nervosität", "Nest", "Netz", "Netzteil", "Netzwerk", "Neugier", "Neuheit", "Neujahr", "Neun", "Neutralität", "Nichte",
    "Nickel", "Niederlage", "Niederschlag", "Niere", "Nilpferd", "Nische", "Niveau", "Nobelpreis", "Nomade", "Nonne", "Nord",
    "Nordpol", "Norm", "Note", "Notfall", "Notiz", "Notruf", "November", "Nuance", "Nudel", "Null", "Nummer", "Nuss", "Nutzen",
    "Nylon", "Nymphe",
    
    // O
    "Oase", "Obdach", "Obelisk", "Ober", "Oberfläche", "Oberst", "Objekt", "Objektiv", "Obst", "Ochse", "Ofen", "Offensive",
    "Offizier", "Öffnung", "Ohr", "Oktober", "Ökologie", "Ökonomie", "Öl", "Olive", "Oma", "Omen", "Omnibus", "Onkel", "Opa",
    "Oper", "Operation", "Opfer", "Optik", "Optimismus", "Option", "Orakel", "Orange", "Orchester", "Orchidee", "Orden", "Ordner",
    "Ordnung", "Organ", "Organisation", "Organismus", "Orgel", "Orient", "Original", "Orkan", "Ort", "Osten", "Oster", "Otter",
    "Oval", "Ozean", "Ozon",
    
    // P
    "Paar", "Pacht", "Päckchen", "Packung", "Pädagoge", "Paket", "Pakt", "Palast", "Palette", "Palme", "Panda", "Paneel",
    "Panik", "Panne", "Panorama", "Panther", "Panzer", "Papa", "Papagei", "Papaya", "Papier", "Pappel", "Pappe", "Paprika",
    "Parabel", "Parade", "Paradies", "Paragraph", "Parallel", "Parasit", "Parcours", "Parfüm", "Park", "Parkett", "Parkplatz",
    "Parlament", "Parole", "Partei", "Partner", "Pass", "Passage", "Passagier", "Passant", "Passwort", "Pasta", "Paste",
    "Pastete", "Pastor", "Patent", "Pater", "Patient", "Patriot", "Patrone", "Pauke", "Pause", "Pavian", "Pech", "Pedal",
    "Pegel", "Peitsche", "Pelikan", "Pelz", "Pendel", "Pension", "Perfektion", "Performance", "Periode", "Perle", "Person",
    "Personal", "Persönlichkeit", "Perspektive", "Perücke", "Pest", "Petersilie", "Pfad", "Pfadfinder", "Pfahl", "Pfanne",
    "Pfannkuchen", "Pfarrer", "Pfau", "Pfeffer", "Pfeife", "Pfeil", "Pfeiler", "Pfeilgift", "Pfennig", "Pferd", "Pfirsich",
    "Pflanze", "Pflaster", "Pflaume", "Pflege", "Pflicht", "Pflug", "Pfote", "Pforte", "Pfosten", "Phänomen", "Phantasie",
    "Phantom", "Phase", "Philosophie", "Phobie", "Physik", "Pianist", "Piano", "Pickel", "Picknick", "Pik", "Pikaut", "Pilger",
    "Pille", "Pilot", "Pilz", "Pinguin", "Pinie", "Pinsel", "Pionier", "Pipeline", "Pirat", "Piraterie", "Pistole", "Pixel",
    "Pizza", "Pizzeria", "Plage", "Plakat", "Plan", "Planet", "Planke", "Planung", "Plasma", "Plastik", "Platin", "Platte",
    "Plattform", "Platz", "Pleite", "Plombe", "Plüsch", "Pobel", "Pocher", "Podest", "Podium", "Poesie", "Pokal", "Pol", "Polar",
    "Polemik", "Politik", "Politiker", "Polizei", "Polizist", "Polster", "Polypen", "Pomp", "Pony", "Pool", "Pop", "Popularität",
    "Population", "Portion", "Porto", "Portrait", "Position", "Post", "Posten", "Potential", "Potenz", "Pracht", "Prämie",
    "Prärie", "Praxis", "Präzision", "Preis", "Premiere", "Presse", "Prestige", "Priester", "Prinz", "Prinzessin", "Prinzip",
    "Priorität", "Prisma", "Privileg", "Probe", "Problem", "Produkt", "Produktion", "Professor", "Profil", "Profit", "Prognose",
    "Programm", "Projekt", "Projektil", "Prominenz", "Propaganda", "Propeller", "Prophet", "Prosa", "Prospekt", "Protest",
    "Protokoll", "Provinz", "Proviant", "Prozess", "Prüfung", "Psychologie", "Publikum", "Pudding", "Puder", "Puls", "Pult",
    "Pulver", "Pumpe", "Punkt", "Puppe", "Purpur", "Puzzle", "Pyramide",
    
    // Q
    "Quadrat", "Qual", "Qualität", "Qualle", "Qualm", "Quantität", "Quark", "Quartal", "Quartett", "Quartier", "Quarz", "Quaste",
    "Quecksilber", "Quelle", "Querschnitt", "Quitte", "Quittung", "Quiz", "Quote",
    
    // R
    "Rabatt", "Rabe", "Rache", "Rachen", "Rad", "Radar", "Radierer", "Radio", "Radius", "Radler", "Raffinerie", "Rahm", "Rahmen",
    "Rakete", "Rampe", "Rand", "Rang", "Rappe", "Raps", "Rarität", "Rasen", "Rasierer", "Rasse", "Rassel", "Rast", "Rat", "Rate",
    "Rathaus", "Ration", "Rätsel", "Ratte", "Raub", "Rauch", "Raum", "Raumschiff", "Raupe", "Rausch", "Raute", "Reaktion",
    "Reaktor", "Realität", "Rebe", "Rebell", "Rechen", "Rechner", "Rechnung", "Recht", "Recycling", "Redakteur", "Rede",
    "Referat", "Reflex", "Reform", "Regal", "Regel", "Regen", "Regenbogen", "Regenschirm", "Regisseur", "Register", "Regierung",
    "Region", "Reh", "Reibung", "Reich", "Reichtum", "Reifen", "Reihe", "Reim", "Reis", "Reise", "Reisende", "Reiz", "Reklame",
    "Rekord", "Rektor", "Relikt", "Religion", "Rennen", "Rente", "Reparatur", "Report", "Reporter", "Republik", "Reserve",
    "Residenz", "Resonanz", "Respekt", "Rest", "Restaurant", "Resultat", "Retter", "Rettung", "Reue", "Revolution", "Rezept",
    "Rhetorik", "Rhythmus", "Richter", "Richtung", "Riecher", "Riegel", "Riese", "Riff", "Rinde", "Rind", "Ring", "Rinne", "Rippe",
    "Risiko", "Riss", "Ritter", "Ritual", "Ritz", "Robe", "Roboter", "Rock", "Roggen", "Rohr", "Rolle", "Roman", "Romantik",
    "Röntgen", "Rose", "Rosine", "Rost", "Rotation", "Rote", "Rotkohl", "Rotor", "Routine", "Rubin", "Rückkehr", "Rucksack",
    "Rückseite", "Rücksicht", "Rückzug", "Rudel", "Ruf", "Ruhe", "Ruhm", "Ruine", "Rumpf", "Runde", "Runzel", "Rüsche", "Rüssel",
    "Rüstung", "Rute", "Rutsche",
    
    // S
    "Saal", "Saat", "Säbel", "Sack", "Safari", "Saft", "Sage", "Säge", "Sahne", "Saison", "Saite", "Salami", "Salat", "Salbe",
    "Salon", "Salz", "Samen", "Sammelsurium", "Sammlung", "Samstag", "Sand", "Sandale", "Sandwich", "Sanftmut", "Sänger",
    "Sanitäter", "Sankt", "Saphir", "Sardine", "Sarg", "Satellit", "Satin", "Satire", "Sattel", "Satz", "Sau", "Sauberkeit",
    "Sauerstoff", "Säule", "Saum", "Sauna", "Säure", "Saxophon", "Scanner", "Schabe", "Schablone", "Schach", "Schacht",
    "Schachtel", "Schaden", "Schaf", "Schale", "Schall", "Schalter", "Scham", "Schamane", "Schande", "Schar", "Schatten",
    "Schatz", "Schaufel", "Schaum", "Scheck", "Scheibe", "Schein", "Scheinwerfer", "Scheitel", "Schellfisch", "Schema",
    "Schenkel", "Scherbe", "Schere", "Sheriff", "Scherz", "Scheune", "Scheusal", "Schicht", "Schicksal", "Schieber", "Schiene",
    "Schiff", "Schild", "Schildkröte", "Schilf", "Schimmel", "Schinken", "Schirm", "Schlacht", "Schlaf", "Schläfer", "Schlag",
    "Schlamm", "Schlange", "Schlauch", "Schleife", "Schleim", "Schleuse", "Schlichtung", "Schlitten", "Schloss", "Schlucht",
    "Schluck", "Schlund", "Schluss", "Schlüssel", "Schmalz", "Schmerz", "Schmetterling", "Schmied", "Schmuck", "Schmutz",
    "Schnabel", "Schnaps", "Schnecke", "Schnee", "Schneider", "Schnur", "Schnurrbart", "Schock", "Schokolade", "Scholle", "Schönheit",
    "Schöpfer", "Schornstein", "Schoß", "Schotter", "Schrank", "Schraube", "Schreck", "Schrei", "Schrift", "Schriftsteller",
    "Schritt", "Schrott", "Schuh", "Schuld", "Schule", "Schüler", "Schulter", "Schuppe", "Schürze", "Schuss", "Schuster", "Schutt",
    "Schutz", "Schwäche", "Schwalbe", "Schwamm", "Schwan", "Schwanz", "Schwarm", "Schwarz", "Schweigen", "Schwein", "Schweiß",
    "Schwelle", "Schwere", "Schwerkraft", "Schwester", "Schwierigkeit", "Schwiele", "Schwimmbad", "Schwindel", "Schwung", "Schwur",
    "Science", "See", "Seehund", "Seele", "Segel", "Segler", "Segen", "Sehenswürdigkeit", "Sehnsucht", "Seide", "Seife", "Seil",
    "Seite", "Sekt", "Sektor", "Sekunde", "Selbst", "Sellerie", "Semester", "Semmel", "Senat", "Sender", "Sendung", "Senf",
    "Senior", "Sensation", "Sense", "September", "Serie", "Service", "Serviette", "Sessel", "Seuche", "Sex", "Shampoo", "Sicherheit",
    "Sicht", "Sieb", "Sieg", "Siegel", "Sieger", "Signal", "Silber", "Silhouette", "Silizium", "Silo", "Silvester", "Simulant",
    "Sinfonie", "Singular", "Sinken", "Sinn", "Sirup", "Sirene", "Sitte", "Situation", "Sitz", "Sitzung", "Skala", "Skandal",
    "Skelett", "Ski", "Skizze", "Sklave", "Skorpion", "Skrupel", "Smaragd", "Smoking", "Snob", "Socke", "Soda", "Sofa", "Softair",
    "Software", "Sohn", "Soldat", "Sole", "Solist", "Sommer", "Sonar", "Sonde", "Sonate", "Sonne", "Sonntag", "Sorge", "Sorte",
    "Soße", "Souffleur", "Souvenir", "Sozialismus", "Spaghetti", "Spalte", "Span", "Spange", "Spannung", "Sparbuch", "Spargel",
    "Spaß", "Spaten", "Spatz", "Specht", "Speck", "Speer", "Speicher", "Speise", "Spektrum", "Spende", "Sperling", "Sperre",
    "Spezialist", "Sphäre", "Spiegel", "Spiel", "Spielzeug", "Spinat", "Spindel", "Spinne", "Spion", "Spirale", "Spiritus",
    "Spital", "Spitze", "Sponsor", "Spontanität", "Sport", "Spot", "Sprache", "Sprecher", "Sprengstoff", "Sprichwort", "Sprit",
    "Spritze", "Spruch", "Sprung", "Spur", "Staat", "Stab", "Stachel", "Stadion", "Stadt", "Staffel", "Stahl", "Stall", "Stamm",
    "Stand", "Standard", "Stange", "Stapel", "Star", "Stärke", "Start", "Station", "Statistik", "Stativ", "Statue", "Status",
    "Staub", "Staudamm", "Steak", "Steckdose", "Stecker", "Steg", "Steilheit", "Stein", "Steiß", "Stelle", "Stellung", "Stempel",
    "Stengel", "Steppe", "Sterben", "Stereo", "Stern", "Steuer", "Stich", "Stickstoff", "Stiefel", "Stier", "Stift", "Stiftung",
    "Stil", "Stille", "Stimme", "Stimmung", "Stirn", "Stock", "Stoff", "Stollen", "Stolz", "Stopfen", "Storch", "Störung", "Stoß",
    "Strafe", "Strahl", "Strand", "Straße", "Strategie", "Strauß", "Strecke", "Streich", "Streifen", "Streit", "Strenge", "Stress",
    "Streu", "Strich", "Strick", "Stroh", "Strom", "Strophe", "Strudel", "Struktur", "Strumpf", "Stube", "Stück", "Student",
    "Studio", "Stufe", "Stuhl", "Stumpf", "Stunde", "Sturm", "Sturz", "Stute", "Substanz", "Suche", "Sucht", "Süden", "Summe",
    "Sumpf", "Sünde", "Supermarkt", "Suppe", "Surfer", "Symbol", "Symmetrie", "Sympathie", "Symptom", "Synagoge", "Syndikat",
    "Syntax", "Synthese", "System", "Szene",
    
    // T
    "Tabak", "Tabelle", "Tablett", "Tablette", "Tabu", "Tacho", "Tadel", "Tafel", "Tag", "Tagebuch", "Tagung", "Taille", "Takt",
    "Taktik", "Tal", "Talent", "Talg", "Talisman", "Talismann", "Tandem", "Tang", "Tank", "Tanne", "Tante", "Tanz", "Tapete",
    "Tarif", "Tasche", "Taschentuch", "Tasse", "Tastatur", "Taste", "Tat", "Täter", "Tätigkeit", "Tatsache", "Tatze", "Taube",
    "Taucher", "Taufe", "Tausch", "Täuschung", "Taxi", "Team", "Technik", "Tee", "Teekanne", "Teer", "Teich", "Teig", "Teil",
    "Teilnehmer", "Teint", "Telefon", "Telegramm", "Teller", "Temperatur", "Tempo", "Tendenz", "Tennis", "Teppich", "Termin",
    "Terrasse", "Terror", "Test", "Testament", "Text", "Textil", "Theater", "Theke", "Thema", "Theologie", "Theorie", "Therapie",
    "Thermometer", "These", "Thron", "Ticket", "Tiefe", "Tier", "Tiger", "Tinte", "Tisch", "Titel", "Toast", "Tochter", "Tod",
    "Toilette", "Toleranz", "Tomate", "Ton", "Tonne", "Topf", "Tor", "Torf", "Torte", "Tortur", "Total", "Tour", "Tourismus",
    "Tradition", "Träger", "Tragödie", "Training", "Träne", "Transport", "Trapez", "Traube", "Trauer", "Traum", "Trauma",
    "Treffer", "Treue", "Tribüne", "Tribut", "Trick", "Trieb", "Trift", "Trinkgeld", "Tritt", "Triumph", "Trommel", "Trompete",
    "Tropfen", "Trophäe", "Trost", "Trottel", "Trubel", "Truhe", "Trümmer", "Truppe", "Truthahn", "Tuch", "Tugend", "Tulpe",
    "Tumult", "Tundra", "Tunnel", "Tür", "Turbine", "Turm", "Turnier", "Typ", "Tyrann",
    
    // U
    "U-Bahn", "U-Boot", "Übel", "Uberfall", "Ufer", "Ufo", "Uhr", "Uhu", "Ulme", "Umfang", "Umgang", "Umgebung", "Umhang",
    "Umkreis", "Umriss", "Umschlag", "Umstand", "Umwelt", "Umzug", "Unfall", "Unfug", "Ungeheuer", "Ungeduld", "Unglück",
    "Uniform", "Unikat", "Union", "Universität", "Universum", "Unrecht", "Unruh", "Unschuld", "Unsinn", "Untergang", "Unterhalt",
    "Unterkunft", "Unterlage", "Unterricht", "Unterschied", "Unterschrift", "Untersuchung", "Unterwäsche", "Uran", "Urkunde",
    "Urlaub", "Urne", "Ursache", "Urteil", "Urwald", "Utensil",
    
    // V
    "Vagabund", "Vakuum", "Valuta", "Vampir", "Vanille", "Variante", "Variation", "Vase", "Vater", "Vegetarier", "Vehikel",
    "Vektor", "Vene", "Ventil", "Ventilator", "Verabredung", "Verachtung", "Verband", "Verbot", "Verbrauch", "Verbrechen",
    "Verbrecher", "Verbrennung", "Verbund", "Verdacht", "Verdienst", "Verein", "Verfahren", "Verfall", "Verfassung", "Verfolgung",
    "Vergangenheit", "Vergleich", "Vergnügen", "Verhalten", "Verhältnis", "Verhandlung", "Verhör", "Verkehr", "Verlag", "Verlangen",
    "Verlauf", "Verletzung", "Verlust", "Vernunft", "Verrat", "Vers", "Versand", "Versatz", "Verschluss", "Version", "Versprechen",
    "Verstand", "Versteck", "Versuch", "Verteidigung", "Vertikal", "Vertrag", "Vertrauen", "Vertreter", "Vertrieb", "Verwaltung",
    "Verwandte", "Verwirrung", "Verzicht", "Verzweiflung", "Veto", "Vetter", "Video", "Vieh", "Viereck", "Viertel", "Villa",
    "Viola", "Violine", "Virus", "Visier", "Vision", "Visite", "Vitamin", "Vlies", "Vogel", "Vogt", "Vokabel", "Vokal", "Volk",
    "Volumen", "Vorbild", "Vorderseite", "Vorfall", "Vorhang", "Vorhersage", "Vorliebe", "Vormittag", "Vorname", "Vorrat",
    "Vorschlag", "Vorschrift", "Vorsicht", "Vorsitz", "Vorspeise", "Vorstadt", "Vorstoß", "Vorteil", "Vortrag", "Vorurteil",
    "Vorwand", "Vorwort", "Vorwurf", "Vulkan",
    
    // W
    "Waage", "Wabe", "Wachs", "Wachtel", "Waffe", "Waffel", "Wagen", "Waggon", "Wahl", "Wahn", "Wahrheit", "Währung", "Wal",
    "Wald", "Wall", "Wallnuss", "Walnuss", "Walzer", "Wampe", "Wand", "Wandel", "Wanderung", "Wange", "Wappen", "Ware", "Wärme",
    "Warnung", "Warte", "Wäsche", "Wasser", "Wasserfall", "Watte", "Wechsel", "Wecker", "Weg", "Wehr", "Weib", "Weide", "Weigerung",
    "Weihnachten", "Weihrauch", "Wein", "Weise", "Weisheit", "Weizen", "Welle", "Welt", "Wende", "Wendepunkt", "Werbung", "Werft",
    "Werk", "Werkstatt", "Werkzeug", "Wert", "Wesen", "Wespe", "Weste", "Westen", "Wettbewerb", "Wette", "Wetter", "Whisky",
    "Wichtigkeit", "Wickel", "Widerstand", "Widmung", "Wiese", "Wild", "Wildnis", "Wille", "Willkür", "Wimper", "Wind", "Winkel",
    "Winter", "Wipfel", "Wirbel", "Wirkung", "Wirt", "Wirtschaft", "Wissen", "Wissenschaft", "Witwe", "Witz", "Woche", "Woge",
    "Wohl", "Wohnung", "Wolf", "Wolke", "Wolle", "Wollust", "Wort", "Wrack", "Wunde", "Wunder", "Wunsch", "Würde", "Wurf",
    "Würfel", "Wurst", "Wüste", "Wut",
    
    // XYZ
    "Yacht", "Yak", "Yamswurzel", "Yard", "Yeti", "Yoga", "Ysop", "Yucca",
    "Zacke", "Zahl", "Zahlung", "Zahn", "Zahnbürste", "Zange", "Zapfen", "Zapfhahn", "Zauber", "Zauberer", "Zaun", "Zebra",
    "Zehe", "Zeichen", "Zeichnung", "Zeigefinger", "Zeile", "Zeit", "Zeitung", "Zelle", "Zelt", "Zement", "Zenit", "Zentrum",
    "Zepter", "Zeppelin", "Zeremonie", "Zettel", "Zeug", "Zeuge", "Ziege", "Ziegel", "Ziel", "Zigarette", "Zigarre", "Zigeuner",
    "Zimmer", "Zimt", "Zink", "Zinn", "Zirkel", "Zirkus", "Zitat", "Zitrone", "Zivilisation", "Zoll", "Zombie", "Zone", "Zoo",
    "Zopf", "Zorn", "Zucker", "Zufall", "Zuflucht", "Zug", "Zugang", "Zuhörer", "Zukunft", "Zunge", "Zuruf", "Zusammenstoß",
    "Zustand", "Zutat", "Zuverlässigkeit", "Zwang", "Zweck", "Zweifel", "Zweig", "Zwerg", "Zwiebel", "Zwilling", "Zwist",
    "Zyklus", "Zylinder"
];

// Ensure array is unique (deduplication)
const uniqueWords = [...new Set(germanWords)];

// Settings Elements
const settingsInputs = [
    'wordCount', 'separator', 'capitalize', 'addNumber', 'addSymbol',
    'minLength', 'maxLength', 'specialCharPool', 'excludedWords', 'customWords', 'crackMethod'
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
    if (saved.crackMethod) document.getElementById('crackMethod').value = saved.crackMethod;
    
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
        crackMethod: document.getElementById('crackMethod').value,
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

// Estimates time to crack
function calculateCrackTime(entropy) {
    const method = document.getElementById('crackMethod').value;
    let guessesPerSecond = 1e10; // Default: 10 Billion/sec (Standard PC / Hashcat)

    if (method === 'super') {
        guessesPerSecond = 1e15; // 1 Quadrillion/sec (Supercomputer)
    } else if (method === 'quantum') {
        // Grover's Algorithm: Effective entropy = Entropy / 2
        // We simulate this by taking the sqrt of total combinations
        // Or simply calculating 2^(entropy/2)
        // Assume supercomputer speed for the quantum ops for estimation
        const combinations = Math.pow(2, entropy / 2);
        return combinations / 1e12; // Hypothetical quantum ops/sec
    }

    const combinations = Math.pow(2, entropy);
    return combinations / guessesPerSecond;
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
    const crackTimeText = document.getElementById('crackTimeText');
    
    text.textContent = entropy + " bits";
    
    // Update Crack Time Text
    const crackTime = calculateCrackTime(entropy);
    crackTimeText.textContent = `~${formatCrackTime(crackTime)}`;

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

function formatCrackTime(seconds) {
    if (seconds < 1) return "Sofort";
    if (seconds < 60) return Math.round(seconds) + " Sekunden";
    if (seconds < 3600) return Math.round(seconds / 60) + " Minuten";
    if (seconds < 86400) return Math.round(seconds / 3600) + " Stunden";
    if (seconds < 31536000) return Math.round(seconds / 86400) + " Tage";
    if (seconds < 3153600000) return Math.round(seconds / 31536000) + " Jahre"; 
    
    // For very large numbers
    const years = seconds / 31536000;
    if (years < 1e6) return Math.round(years / 1000) + "k Jahre";
    if (years < 1e9) return Math.round(years / 1e6) + " Mio. Jahre";
    if (years < 1e12) return Math.round(years / 1e9) + " Mrd. Jahre";
    return "Ewigkeiten";
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
