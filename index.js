
function clickFunction(projectnr) {
    var animationspeed = 800,
        modal = $('#popupContainer'),
        modalBG = $('#popupOverlay');

    //open popup
    modal.css({
        'top': '-400px',
        'opacity': 0,
        'display': 'block'
    });
    modalBG.fadeIn(animationspeed / 2);
    modal.delay(animationspeed / 4).animate({
        'top': '30px',
        'opacity': 1
    }, animationspeed / 2);

    //close popup
    $('#popupOverlay').click(popupClose);

    $('body').keyup(function (e) {
        if (e.which === 27) { popupClose(); }
    });

    $('#popupClose').click(popupClose);

    //close popup function
    function popupClose() {
        modalBG.delay(animationspeed / 3).fadeOut(animationspeed / 3);
        modal.animate({
            'top': '-400px',
            'opacity': 0
        }, animationspeed / 4, function () {
            modal.css({
                'opacity': 1,
                'display': 'none'
            });
        });
    };
    switch (projectnr) { // execute 
        case 1:
            document.getElementById("popupMsgheader").innerHTML = "1. Kernen en woongebieden verkeersveilig inrichten met focus op voetganger en fietser";
            document.getElementById("popupMsgsubheader").innerHTML = "Wegen binnen de kernen en woongebieden zijn enkel bedoeld voor bestemmingsverkeer. Als onze netwerken goed functioneren creëren we in de kernen ruimte voor focus op de voetganger en fietser. Voor zover dat nog niet het geval is, richten we wegen in de woongebieden zo veel mogelijk in als 30 km/h gebieden. Dit doen we doorlopend door dit als randvoorwaarde mee te nemen in de reguliere beheer- en onderhoudsplannen.";
            break;
        case 2:
            document.getElementById("popupMsgheader").innerHTML = "2. Aanpak verkeersveiligheidsknelpunten tussen modaliteiten ontwikkelen en uitvoeren";
            document.getElementById("popupMsgsubheader").innerHTML = "We willen sterk inzetten op het voorkomen van verkeersincidenten en gaan dan ook concreet aan de slag met het verbeteren van de verkeersveiligheid in het algemeen. Daarom ontwikkelen we een aanpak om conflicten tussen verschillende weggebruikers (vaak tussen fietsers en gemotoriseerd verkeer) op te lossen. Dit doen we volgens de koers uit het Strategisch Plan Verkeersveiligheid 2030. Overheden en maatschappelijke partijen zetten gezamenlijk in op een meer ‘risicogestuurd’ verkeersveiligheidsbeleid: ongevallen voorkómen door de belangrijkste risico’s in het verkeerssysteem proactief aan te pakken.In het kader van dit project wordt de lijst met conflictpunten opgesteld en voortdurend aangevuld. Er zullen conflictpunten verdwijnen, maar mogelijk ook bijkomen.";
            break;
        case 3:
            document.getElementById("popupMsgheader").innerHTML = "3. Opstellen verkeersvisie kern Hank";
            document.getElementById("popupMsgsubheader").innerHTML = "In Hank is er bovenmatig sprake van overlast door ongewenst doorgaand verkeer door de kern en de Kerkstraat in het bijzonder: sluipverkeer van de A27, recreatief verkeer richting de Kurenpolder en landbouwverkeer dat zich vanuit het oosten naar percelen in het westen verplaatst. Daarom wordt in samenspraak met de inwoners aan een multimodale verkeersvisie gewerkt.";
            break;
        case 4:
            document.getElementById("popupMsgheader").innerHTML = "4. Aanpak Middenweg";
            document.getElementById("popupMsgsubheader").innerHTML = "De Middenweg tussen Andel en Veen is in het netwerk gedefinieerd als regionale fietsroute. Er rijdt op dit moment meer verkeer dan gewenst voor een regionale fietsroute zonder vrijliggende fietsinfrastructuur en er wordt te hard gereden. Dit levert voor de fietser gevaarlijke situaties op en vraagt om een concrete aanpak, waar we  op dit moment al mee bezig zijn.";
            break;
        case 5:
            document.getElementById("popupMsgheader").innerHTML = "5. Zorg dragen voor toekomstbestendige veren";
            document.getElementById("popupMsgsubheader").innerHTML = "Voor een deel van onze inwoners vervullen de veren een belangrijke rol in hun dagelijkse verplaatsingen. Bij het vormgeven van de netwerken is ervoor gezorgd dat de hoofdnetwerken voor fiets en auto altijd via de vaste oeververbindingen lopen. Voornamelijk voor fietsverbindingen (o.a. scholieren en recreanten) zijn de veerdiensten van groter belang. Hoewel een route via de vaste oeververbinding vaak sneller is, nemen veel fietsers toch een veer omdat de af te leggen afstand dan korter is. Periodiek onderzoeken we het gebruik, het belang en de functie van elk van de veren en kijken we of er al dan niet moet worden bijgestuurd. Bijvoorbeeld hoe we het gebruik (bijv. de dienstregeling) kunnen  optimaliseren. Daarbij kijken we naar de rol van de veren in het auto- , OV- en fietsnetwerk, maar ook naar hun rol voor landbouw- en recreatief verkeer. Dit doen we vanzelfsprekend samen met de betrokken oevergemeente(n).";
            break;
        case 6:
            document.getElementById("popupMsgheader").innerHTML = "6. Aanpak recreatief verkeer opstellen en uitvoeren";
            document.getElementById("popupMsgsubheader").innerHTML = "De Noordwaard, Biesbosch, Kurenpolder en de vesting Woudrichem zijn belangrijke toeristische trekpleisters waar bezoekers naartoe komen vanuit het hele land. Dit levert op bepaalde momenten in het jaar overlast op, bijv. in de Noordwaard en op de dijken. We willen een aanpak ontwikkelen voor het recreatieve verkeer en maatregelen uitrollen, om zowel aantrekkelijk te blijven voor bezoekers als de overlast tot een minimum te beperken. Dit doen we zo veel mogelijk samen met buurgemeenten zoals bijv. Gorinchem. We denken o.a. aan gedragsmaatregelen (bijv. rond snelheid, geluidsoverlast of routekeuze) en het opvangen van recreatief verkeer hubs of op overstappunten in de Biesbosch.";
            break;
        case 7:
            document.getElementById("popupMsgheader").innerHTML = "7. Bepalen en inrichten regionale fietsnetwerk in Almkerk en Waardhuizen";
            document.getElementById("popupMsgsubheader").innerHTML = "Uit de functionele eisen opgesteld voor het regionale fietsnetwerk, komt naar voren dat er in Almkerk en Waardhuizen sprake is van ontbrekende schakels in het netwerk. Het huidige netwerk stopt bij aankomst in Almkerk en in Waardhuizen loopt het momenteel door de kern. Hoe dit netwerk binnen of rond beide kernen vormgegeven wordt, zullen we binnen dit project beantwoorden en realiseren.";
            break;
        case 71:
            document.getElementById("popupMsgheader").innerHTML = "7. Bepalen en inrichten regionale fietsnetwerk in Almkerk en Waardhuizen";
            document.getElementById("popupMsgsubheader").innerHTML = "Uit de functionele eisen opgesteld voor het regionale fietsnetwerk, komt naar voren dat er in Almkerk en Waardhuizen sprake is van ontbrekende schakels in het netwerk. Het huidige netwerk stopt bij aankomst in Almkerk en in Waardhuizen loopt het momenteel door de kern. Hoe dit netwerk binnen of rond beide kernen vormgegeven wordt, zullen we binnen dit project beantwoorden en realiseren.";
            break;
        case 8:
            document.getElementById("popupMsgheader").innerHTML = "8. Verkennen en realiseren regionale fietsverbinding vanaf De Tol naar de Merwedebrug";
            document.getElementById("popupMsgsubheader").innerHTML = "Door een direct fietspad te realiseren vanaf De Tol naar de Merwedebrug, wordt er een ontbrekende schakel opgevuld langs de A27 en ontstaat er een regionale (snel)fietsverbinding vanuit Gorinchem naar Oosterhout en Breda. Hiermee wordt de gemeente Altena ook direct aangesloten op het snelfietsnetwerk van Brabant en vormt het in potentie de schakel tussen de snelfietsnetwerken van de provincies Noord-Brabant en Zuid-Holland. De gemeente Altena wil dit fietspad samen met de provincie Noord-Brabant en de Regio West-Brabant gaan verkennen en realiseren.";
            break;
        case 9:
            document.getElementById("popupMsgheader").innerHTML = "9. Op orde maken kwaliteit hoofdnetwerk fiets";
            document.getElementById("popupMsgsubheader").innerHTML = "Het hoofdnetwerk van de fiets is opgebouwd uit een snelfietsroute, regionaal netwerk en interlokaal netwerk. De komende jaren gaan we aan de slag met het op orde maken van de fietsvoorzieningen volgens de kwaliteitseisen van het CROW, die bij deze netwerken behoren. Dit doen we doorlopend tot 2040 door de kwaliteitseisen als randvoorwaarde mee te nemen in de reguliere beheer- en onderhoudsplannen.";
            break;
        case 10:
            document.getElementById("popupMsgheader").innerHTML = "10. Ontwikkelen mobiliteitshubs in drie schaalniveaus";
            document.getElementById("popupMsgsubheader").innerHTML = "We gaan aan de slag met het ontwikkelen van drie typen mobiliteitshubs omdat deze belangrijke schakels vormen in onze multimodale netwerken. De (inter)regionale hubs aan de randen van Altena zijn de plekken waar overstapmogelijkheden zijn van lokale mobiliteit op het hoogwaardig openbaar vervoer. Met name voor de ontwikkeling van deze mobiliteitshubs zoeken we de samenwerking met externe partners zoals de provincie Noord-Brabant. De lokale hubs worden minimaal bediend met een vorm van vervoer op maat (bijv. flexibel vervoer, buurtbus, hubtaxi of deelmobiliteit).";
            break;
        case 11:
            document.getElementById("popupMsgheader").innerHTML = "11. Ontwikkelen interregionale hub De Tol";
            document.getElementById("popupMsgsubheader").innerHTML = "De interregionale hub De Tol is dé belangrijkste toegangspoort voor Altena. Hier speelt een complexe multimodale opgave, omdat verschillende modaliteiten en projecten hier ook samenkomen. We nemen dit project gebiedsgericht en integraal op met externe partners. Daarbij kijken we niet naar de ontsluiting van de mobiliteitsknoop met OV, auto en fiets, maar stellen we ook een programma van eisen op en bepalen we welke voorzieningen wenselijk zijn. Speciale aandacht gaat ook naar de koppeling van de mobiliteitshub met Natuurpoort Fort Altena.";
            break;
        case 12:
            document.getElementById("popupMsgheader").innerHTML = "12. Verkennen, uitbouwen en monitoren openbaar vervoer binnen Altena";
            document.getElementById("popupMsgsubheader").innerHTML = "Door de verschillende trends en ontwikkelingen op het gebied van openbaar vervoer en de COVID-19-crisis is het lastig een gerichte koers te bepalen voor het openbaar vervoer binnen Altena. Daarom zullen we in dit project samen met de provincie Noord-Brabant vier scenario’s verkennen: een snelbus, flexibel vervoer op maat, een reizigersbudget voor iedere inwoner om zelf vervoer in te kopen en/of deelmobiliteiten bij elke mobiliteitshub. De mobiliteitshubs spelen in ieder scenario een belangrijke rol als schakel (zie ook projecten 10 en 11).";
            break;
        case 13:
            document.getElementById("popupMsgheader").innerHTML = "13. Verbeteren verbinding tussen Werkendam en de A27 voor gemotoriseerd verkeer";
            document.getElementById("popupMsgsubheader").innerHTML = "De kern van Werkendam groeit. De toenemende bedrijvigheid en komst van nieuwe woningbouwontwikkelingen zorgen ervoor dat de Dijkgraaf den Dekkerweg (incl. aansluitingen met snelweg) tegen zijn capaciteitsgrenzen aan gaat lopen. Daarom is de gemeente in 2020 in samenwerking met inwoners een onderzoek gestart om Werkendam in de toekomst bereikbaar te houden. Hierbij onderzoeken we twee oplossingsrichtingen: een noordelijke ontsluiting of het opwaarderen van de Dijkgraaf den Dekkerweg zelf. Eén van deze varianten wordt nog voor de zomer van 2021 als voorkeursvariant aan de raad voorgelegd.";
            break;
        case 14:
            document.getElementById("popupMsgheader").innerHTML = "14. Aanpak file knelpunt N267 (Kromme Nol / Heusdense brug)";
            document.getElementById("popupMsgsubheader").innerHTML = "Het fileprobleem bij de Heusdense brug en de rotonde bij de Kromme Nol staat bij de provincie Noord-Brabant op de agenda en zij zijn in 2019 een planstudie gestart naar de aanpak van dit knelpunt. Zowel de gemeente als provincie pleiten voor een versnelde aanpak, nog voor de A27 op de schop gaat.";
            break;
        case 15:
            document.getElementById("popupMsgheader").innerHTML = "15. Aangehaakt blijven bij reconstructie A27";
            document.getElementById("popupMsgsubheader").innerHTML = "De verbreding van de A27 moet een sterke bijdrage leveren aan een verbeterde doorstroming en het oplossen van de dagelijkse files bij de Merwedebrug. Dat is ook een goede zaak voor de bereikbaarheid van onze gemeente. We willen zoveel mogelijk de vruchten plukken van deze reconstructie en de aansluitingen op de A27 goed aanpakken. Tegelijkertijd zoeken we in samenspraak met Rijkswaterstaat en andere gemeenten langs het traject via de Minder Hinder-aanpak naar het beperken van de overlast en het bereikbaar houden van de kernen (zie ook project 16).";
            break;
        case 16:
            document.getElementById("popupMsgheader").innerHTML = "16. Aanpak sluipverkeer nabij kernen A27";
            document.getElementById("popupMsgsubheader").innerHTML = "Samen met inwoners werkt Altena op dit moment al aan het aanpakken van overlast door sluipverkeer van de A27. Dit sluipverkeer doet zich voor bij Uppel, Nieuwendijk, Dussen, Hank en omgeving. In de aanpak zet Altena in op drie pijlers: (1) een gedragscampagne door campagneborden langs de sluiproute, (2) intensievere handhaving en (3) fysieke ingrepen zoals het minder aantrekkelijk maken van huidige sluiproutes. De maatregelen voeren we gefaseerd uit. In eerste instantie richten we ons op de routes door de kernen, omdat sluipverkeer hier voor de meeste overlast zorgt. De huidige aanpak zal goed worden gemonitord om ook ten tijde van de ombouw van de A27 de overlast tot een minimum te beperken.";
            break;
        case 17:
            document.getElementById("popupMsgheader").innerHTML = "17. Verbeteren hoofdstructuur gemotoriseerd verkeer Tol – Woudrichem – de Rietdijk";
            document.getElementById("popupMsgsubheader").innerHTML = "De ontsluiting van o.a. Woudrichem en Oudendijk op het hoofdwegennet is niet optimaal en dit zorgt voor ongewenst doorgaand verkeer op wegen als de Rijksstraatweg in Sleeuwijk en de Almweg/Parallelweg in Rijswijk en Giessen. Daarnaast zal het bedrijventerrein De Rietdijk de komende jaren verder groeien en brengt dit extra (vracht)verkeer met zich mee. In dit project willen we daarom de hoofdstructuur tussen De Tol (A27), Woudrichem en De Rietdijk (N322/N267) gaan verbeteren. Daarbij zullen we verschillende oplossingsrichtingen verkennen en denken we na over een nieuwe verbinding.";
            break;
        case 18:
            document.getElementById("popupMsgheader").innerHTML = "18. Aanpak landbouwverkeer opstellen en uitvoeren";
            document.getElementById("popupMsgsubheader").innerHTML = "Landbouwverkeer is door de hele gemeente heen een aspect om aandacht voor te hebben. Altena kent namelijk zeer verspreide herkomsten en bestemmingen, gerelateerd aan het landbouwverkeer. Er is daarom gekozen om een apart project op te zetten rond een aanpak voor het landbouwverkeer. Het bereiken van het perceel door agrariërs wordt daarbij steeds gewaarborgd en we kijken specifiek naar plekken waar we conflicten zien of verwachten met andere verkeersdeelnemers. Dat speelt enerzijds in de kernen Hank en Nieuwendijk, waar grotere stromen landbouwverkeer door de kern gaan. Anderzijds kijken we naar plekken waar we grotere stromen landbouwverkeer verwachten in combinatie met een regionale fietsroute. ";
            break;
        case 19:
            document.getElementById("popupMsgheader").innerHTML = "19. Op orde maken kwaliteit hoofdnetwerk auto met aandacht voor slimme voertuigen";
            document.getElementById("popupMsgsubheader").innerHTML = "In verschilldende projecten (13, 14, 15 en 17) gaat worden gewerkt aan de doorstroming op een aantal hoofdwegen. Ook op rest van het hoofdnetwerk gaan we aan de slag om de wegen aan de kwaliteitseisen te laten voldoen zoals die zijn opgenomen in landelijke normen van het CROW. Dit doen we doorlopend tot 2040 door de kwaliteitseisen als randvoorwaarde mee te nemen in de reguliere beheer- en onderhoudsplannen. Bij de herinrichtingen houden we speciaal rekening met herkenbaarheid en eenduidigheid. Dit doen we niet alleen voor de gebruikers vandaag maar ook om steeds slimmer wordende voertuigen optimaal te faciliteren.";
            break;
        case 20:
            document.getElementById("popupMsgheader").innerHTML = "20. Opstellen laadstrategie auto";
            document.getElementById("popupMsgsubheader").innerHTML = "Elektrisch rijden wordt steeds populairder en het aantal elektrische auto’s neemt ieder jaar toe. Daarmee neemt ook de vraag naar laadvoorzieningen toe. Om aan de stijgende laadbehoefte te kunnen voldoen en het gebruik van schonere voertuigen te stimuleren, werken we nu al aan een strategisch plan rondom de openbare oplaadinfrastructuur voor auto’s. Het voornemen is om tussen nu en 4 jaar 120 extra laadpalen te realiseren op logische plekken binnen de gemeente. Bij het opstellen van de laadstrategie auto wordt ook gekeken naar mogelijkheden voor tankinfrastructuur voor auto’s die rijden op waterstof. ";
            break;
        case 21:
            document.getElementById("popupMsgheader").innerHTML = "21. Opstellen laadstrategie fiets";
            document.getElementById("popupMsgsubheader").innerHTML = "De elektrische fiets is bezig aan een ongekende opmars. De helft van de verkochte fietsen in 2020 heeft elektrische ondersteuning. Evenals voor de elektrische auto, gaan we ook voor de elektrische fiets werken aan een gemeentebrede laadstrategie voor de oplaadinfrastructuur in de openbare ruimte.";
            break;
        case 22:
            document.getElementById("popupMsgheader").innerHTML = "22. Gedrag beïnvloeden met slimme marketing, educatie en gedragscampagnes";
            document.getElementById("popupMsgsubheader").innerHTML = "Voor een groot deel zijn de weggebruikers zelf verantwoordelijk voor de keuzes die ze maken op het gebied van mobiliteit. Enerzijds willen we door middel van gedragsmaatregelen gebruikers (kinderen en werkgevers in het bijzonder) stimuleren om duurzame keuzes te maken. Anderzijds zien we dat gedrag en educatie belangrijk is op het gebied van verkeersveiligheid. Hier zijn jongeren en ouderen voornamelijk onze doelgroep. Zo zetten we aan de ene kant in op schoolcampagnes gericht op verkeersveiligheid, maar willen we aan de andere kant ook ouderen leren om veilig om te gaan met nieuwe vervoermiddelen als elektrische fietsen of om op de hoogte te blijven van regels. Waar het kan haken we aan bij provinciale en landelijke initiatieven als het Brabants VerkeersveiligheidsLabel (BVL) en TotallyTraffic.";
            break;

        default:
            document.getElementById("popupMsgheader").innerHTML = "Project titel";
            document.getElementById("popupMsgsubheader").innerHTML = "Hier komt een beschrijving van het project";

    };
};
