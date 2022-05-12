# Larissa's sportschema

## Beschrijving

### Opdracht

Larissa is blind. Ze maakt gebruik van een brailleregel, en van een screenreader. Je snapt dat heel veel van de gangbare design patterns niet optimaal werken voor haar omdat ze 100% vanuit een visueel oogpunt ontworpen zijn. Larissa is student aan de HvA. En daarnaast is ze topsporter. Ze heeft laatst een gouden medaille gewonnen op de olympische spelen.

De opdracht luidt als volgt:

> Alle topwielrenners krijgen om de zoveel tijd een Excel sheet toegestuurd waarin alle trainingsschema’s staan. Dit is een uitgebreid, complex ding. En hij is _colour coded_. Je moet dus kunnen zien om hem te kunnen gebruiken. Dat kunnen jullie beter. Dus. Ontwerp een oplossing waardoor Larissa op een prettige en manier de relevante data kan gebruiken.

Bron: [Minor Web 21/22 Github](https://github.com/cmda-minor-web/human-centered-design-2122/blob/main/course/opdracht-human-centered-design.md#larissa-klaassen)

### Probleem

Het probleem is dus dat Larissa blind is en haar trainingschema moeilijk kan volgen omdat het voornamelijk gebaseerd is op kleur.

### Oplossing

De oplossing is een schema die werkt met een voice-over waarmee ze de trainingen per week en belangrijke data, bijvoorbeeld wedstrijden van het hele jaar kan zien. Ook is er de mogelijkheid om een specifieke datum te zoeken.

## Design Principles

Hoe heb ik de vier design principles terug laten komen in mijn werk?

### Study situation

Door middel van study situation duiken we dieper in de individuele situatie van de testpersoon, in dit geval Larissa. Zij gebruikt haar computer anders dan de gemiddelde persoon, namelijk met een screenreader. Apple heeft een ingebouwde screenreader, VoiceOver, deze werkt wel prima maar vertelt wel heel veel over een element, iets te veel misschien soms. Larissa heeft zowel een Apple device als een Windows laptop en hierop wordt JAWS gedraaid wat een erg duur computerschermleesprogramma is, wel kan hiermee een brailleleesregel aangesloten worden, maar die gebruikt ze niet veel.

### Prioritise identity

Het is belangrijk om Larissa op nummer 1 te zetten en dus ook om de elementen semantische waardes te geven om het ook makkelijker te maken voor de VoiceOver. Ondanks dat ze maar 1% ziet, als ze dicht op het scherm zit ziet ze wel wat, daarom heb ik wel iconen toegevoegd voor als ze er dicht op zit, maar een `aria-hidden: true` zodat de VoiceOver de svg's niet uitspreekt.

### Ignore conventions

Het is belangrijk om de elementen semantisch correct weer te geven. In het jaarrooster zou je een ordered list hebben van 1 tot en met 52 met daarin buttons om naar de goede week te gaan. Dit klinkt logisch maar klinkt niet lekker uit de screenreader, die noemt namelijk steeds alle elementen waaruit het is opgebouwd, waarvoor het heel lang duurt dat je hoort bij welke week je bent. Daarom heb ik alleen buttons gebruikt in plaats van list items.

### Add nonsense

Bij sommige dagen is een mop toegevoegd, je ziet ze niet op het scherm maar alleen als je met VoiceOver er doorheen gaat. Dat maakt het extra voor Larissa.

## User Scenario

Wie is de testpersoon, wat doet die, hoe doet die dat en waarom?

### Wie?

Larissa Klaassen is 28 en topsporter, ze is Blind en ziet maar 1% (voorheen was dit wel nog 16%). Larissa is vrij chaotisch en alles wat niet mag of niet de bedoeling is, doet zij liever wel. Ze heeft diverse keren meegedaan aan para-baanwielrennen op de Olympische Spelen en daarmee ook medailles gewonnen!

### Wat?

Larissa wil graag haar schema zien met wanneer ze moet trainen, wedstrijden spelen of test-momenten heeft. Dit wil ze het liefst op weekniveau omdat ze niet zo van het ver vooruit plannen is. Wel moet de mogelijkheid er zijn om snel een datum te vinden.

### Hoe?

Larissa doet dit aan de hand van een screenreader, die leest alle informatie voor op de website. Het is dus belangrijk dat de elementen op zowel de juiste manier gegroepeerd als semantisch zijn.

### Waarom?

Als topsporter is het natuurlijk belangrijk om te weten wanneer en wat je gaat trainen de aankomende week, daarom moet je snel kunnen zien of horen wat je te komen staat.

## Testen

### Week 1

Voor de eerste week had ik nog niet genoeg voorbereid om iets te kunnen testen en diende dit meer als kennismaking, waar we ook de tijd namen om met elkaar vragen te stellen aan Larissa. Een paar belangrijke inzichten hieruit zijn:

- Larissa ziet 1%, dit betekent dat wanneer zij heel dicht op het scherm zit, ze nog wel iets ziet. Niet veel, maar als er een hoog contrast is (met voorkeur van een donkere achtergrond) en het in grote vlakken verdeeld is, ze er nog wel wat mee kan. Ook is de voorkeur voor een niet al te gek font, dus gewoon een sans-serif.
- Ze traint zes keer per week, dit kan zijn baantraining, starttraining of krachttraining. Wanneer ze moet trainen kan ze checken in de Trainingpeaks app (wat niet een fijne app is, dus maakt ze eigelijk haar eigen schema's). Aan de andere kant maakt ze niet echt gebruik van trainingschema's en doet ze veel op gevoel, ze weet bijvoorbeeld niet wat haar lichaam over drie maanden wil. Daarom vind ze het fijn om haar trainingschema per week te krijgen en per maand voor grotere evenementen, denk hierbij aan wedstrijden, trainingskampen, Olympische spelen.
- Ten slotte moet het logisch en duidelijk zijn, maak het allemaal niet lastiger en leuker dan het is.

### Week 2

![Eerste versie van het sportschema](https://user-images.githubusercontent.com/74155415/168046949-c0bf9ba9-fdd0-4dec-af2c-3623fdfce893.png)
Voor de tweede week heb ik iets gemaakt op basis van de inzichten van vorige week. Zo heb ik gebruik gemaakt van vlakken met een duidelijk contrast. Ook staan er grote iconen zodat wanneer ze dicht op het beeld zit, ze snel(ler) kan zien wat voor soort training het is.

Een paar inzichten uit het testen van deze week waren:

- Een focusstate toevoegen kan handig zijn.
- De wedstrijden er nog op een manier in verwerken.
- Snel weten wat vandaag en morgen op het schema is.
- Screenreader van mac vertelt iets te veel informatie, dit kan verwarrend en langdradig zijn voor Larissa.
- Voornamelijk de tab toets wordt gebruikt.

### Week 3

<img width="1039" alt="Definitieve versie" src="https://user-images.githubusercontent.com/74155415/168047481-ee778dc9-9b58-4acf-a402-48b4d8fa0aa0.png">
Voor de derde week heb ik de vorige versie aangepast met de trainingen horizontaal, zodat die de datum en wat voor soort training in één keer uitspreekt. Ook heb ik een jaarrooster toegevoegd met daarin de wedstrijden en wanneer de Olympische Spelen zijn. Ook heb ik de zoekfunctie uitgewerkt en op de knoppen een contrastkleur toegevoegd op de focus. Ze was erg tevreden met de applicatie en had dus niet veel meer op te merken.

Inzichten uit het testen van deze week:

- Knoppen werken erg fijn, goede grootte, zoals bij het zoeken.
- Contrast is erg fijn, ook bij de focusstate.
- Larissa heeft het jaaroverzicht niet gebruikt, ook na meerdere keren zeggen dat die er is.
- Als je extra punten wil scoren kan je nog de tijd toevoegen van hoe laat een training is, maar de applicatie werkt al goed zoals die nu is.

## Reflectie

Ik ben tevreden over het prototype. Ook dat Larissa het een goed werkende applicatie vindt doet me goed want daar doen we het voor, exclusive design. Wel hoef ik me in het vervolg niet druk te maken of wat ik heb gemaakt voldoende is om te testen, je test voor haar en niet voor jezelf. Dat is iets wat ik meeneem in het vervolg. Ook vind ik dat ik het vak wel gehaald heb op basis van de drie leerdoelen:

1. Leren hoe je (design) principles in een ontwerp kan toepassen.
   Ja, ik vond de principles best prima toe te passen, alleen het stukje add nonsense was wat lastiger. In de laatste week wist ik gelukkig nog wel wat toe te voegen om het voor Larissa nog plezieriger te maken.
2. User needs begrijpen en gebruiken in je ontwerp.
   - De user needs zijn duidelijk en verwerkt in het ontwerp, daarom vond Larissa het ook goede en fijne applicatie om te gebruiken.
3. Leren hoe je moet testen en de resultaten gebruiken voor het verbeteren van je ontwerp.
   - Ja, in het vervolg kan ik nog wel meer kunnen testen, want zoals ik benoemde, je test voor de testpersoon en niet voor jezelf.
