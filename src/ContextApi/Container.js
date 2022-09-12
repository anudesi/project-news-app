import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "./Context";
export default function Container({ children }) {
  /* const [data, setData] = useState([]); */
  const [weather,setWeather] = useState({});

  const data={
    "headlines": [
        {
            "source": {
                "id": null,
                "name": "Www.fr.de"
            },
            "author": null,
            "title": "+++ Ukraine-News: Ukraine erobert 500 Quadratkilometer zurück - Russland will Krieg bis zum „Erreichen der Zie - fr.de",
            "description": "Ukrainische Truppen rücken weiter vor, Russland greift wieder an. Derweil erhebt der russische Botschafter schwere Vorwürfe gegen Deutschland. Der News-Ticker.",
            "url": "https://www.fr.de/politik/wendepunkt-wladimir-putin-militaer-ticker-ukraine-news-russland-krieg-zr-91770388.html",
            "urlToImage": "https://www.fr.de/bilder/2022/09/06/91770388/29820446-ukrainische-soldaten-nationalflagge-russischen-panzer-krieg-3bnAOK4fXmfe.jpg",
            "publishedAt": "2022-09-12T12:12:00Z",
            "content": "<ol><li>Startseite</li><li>Politik</li></ol>Erstellt: 12.09.2022, 14:12 Uhr\r\nVon: Helena Gries, Teresa Toth, Karolin Schäfer, Moritz Serif, Diana Rissmann, Nadja Austel, Vincent Büssow, Nail Akkoyun,… [+12303 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "N-tv.de"
            },
            "author": "n-tv NACHRICHTEN",
            "title": "Javier Marías ist tot: Der \"ewige Nobelpreiskandidat\" stirbt nach Corona-Infektion - n-tv NACHRICHTEN",
            "description": "Die Bücher von Javier Marías gelten in Deutschland lange als schwer verkäuflich - bis sein Werk \"Mein Herz so weiß\" im Sommer 1996 mit Lob überschüttet wird. Der Schriftsteller war einer der erfolgreichsten spanischen Schriftsteller der Gegenwart. Kurz vor se…",
            "url": "https://www.n-tv.de/leute/Javier-Marias-ist-tot-Der-ewige-Nobelpreiskandidat-stirbt-nach-Corona-Infektion-article23582293.html",
            "urlToImage": "https://bilder1.n-tv.de/img/incoming/crop23582280/9051321786-cImg_16_9-w1200/256433447.jpg",
            "publishedAt": "2022-09-12T11:54:00Z",
            "content": "Die Bücher von Javier Marías gelten in Deutschland lange als schwer verkäuflich - bis sein Werk \"Mein Herz so weiß\" im Sommer 1996 mit Lob überschüttet wird. Der Schriftsteller war einer der erfolgre… [+4997 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DIE WELT"
            },
            "author": "Frank Stocker",
            "title": "Diese 6 Aktien sind Gewinner der Zinserhöhung - WELT",
            "description": "Die Europäische Zentralbank hat die Zinsen erneut erhöht und deutlich gemacht, dass weitere Schritte folgen. So verstärkt sie das Risiko einer Rezession, was viele Unternehmen ins Straucheln bringen dürfte. Doch einige wenige profitieren sogar. Das macht ihre…",
            "url": "https://www.welt.de/finanzen/geldanlage/plus240964983/Diese-6-Aktien-sind-Gewinner-der-Zinserhoehung.html",
            "urlToImage": "https://img.welt.de/img/finanzen/geldanlage/mobile240973871/3561354527-ci16x9-w1200-fnov-fpotl-fpi157750653/DWO-Teaser-Ruecklagen-Pensionen-ks.jpg",
            "publishedAt": "2022-09-12T11:53:35Z",
            "content": "Pleuu! Flplullpek! Blu Benheupektea! Pu hteua ep eO Buuuelplea lu peu FeupetplonOeu. Ble Bnluoolpeke Neulletpeuh (BNP) kelle aelepe ple Nlupeu elkokl, pu plelh vle uuek ule lu lklel 6epeklekle. Uuu 9… [+7189 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Heilpraxisnet.de"
            },
            "author": "Alexander Stindt",
            "title": "Mit dieser Ernährung das Immunsystem von Kindern stärken - Heilpraxisnet.de",
            "description": "Kinder durch gesunde Ernährung vor Krankheiten schützen Durch bestimmte Nährstoffe und Vitamine kann das Immunsystem von Kindern so gestärkt werden, dass sie besser gegen krankheitserregende Keime geschützt sind. Die Ernährungsberaterin Julia Zumpano von der …",
            "url": "https://www.heilpraxisnet.de/naturheilpraxis/mit-dieser-ernaehrung-das-immunsystem-von-kindern-staerken-20220912565667/",
            "urlToImage": "https://www.heilpraxisnet.de/wp-content/uploads/2020/01/Kochsendungen-Kinder-scaled.jpeg",
            "publishedAt": "2022-09-12T11:42:46Z",
            "content": "Kinder durch gesunde Ernährung vor Krankheiten schützen\r\nDurch bestimmte Nährstoffe und Vitamine kann das Immunsystem von Kindern so gestärkt werden, dass sie besser gegen krankheitserregende Keime g… [+7599 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "N-tv.de"
            },
            "author": "n-tv NACHRICHTEN",
            "title": "Fehlstart und Vertrauensverlust: VfL Bochum schmeißt Aufstiegsheld Reis raus - n-tv NACHRICHTEN",
            "description": "Sechs Spieltage, null Punkte, dazu reichlich verspieltes Vertrauen beim Vorstand: Der Fußball-Bundesligist VfL Bochum trennt sich von Trainer Thomas Reis. Der Aufstiegsheld hatte trotz des katastrophalen Saisonstarts und der Derbyniederlage beim FC Schalke 04…",
            "url": "https://www.n-tv.de/sport/fussball/VfL-Bochum-schmeisst-Aufstiegsheld-Reis-raus-article23583515.html",
            "urlToImage": "https://bilder1.n-tv.de/img/incoming/crop23576180/387132456-cImg_16_9-w1200/imago1014413615h.jpg",
            "publishedAt": "2022-09-12T11:37:00Z",
            "content": "Sechs Spieltage, null Punkte, dazu reichlich verspieltes Vertrauen beim Vorstand: Der Fußball-Bundesligist VfL Bochum trennt sich von Trainer Thomas Reis. Der Aufstiegsheld hatte trotz des katastroph… [+1967 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Www.br.de"
            },
            "author": "Katrin Bohlmann",
            "title": "Aufmerksamkeits-Defizit/Hyperaktivitäts-Störung: ADHS bei Kindern und Erwachsenen | BR.de - br.de",
            "description": "Unaufmerksam, hyperaktiv und impulsiv - das sind die Hauptmerkmale von ADHS, der Aufmerksamkeits-Defizit/Hyperaktivitäts-Störung.",
            "url": "https://www.br.de/radio/bayern2/adhs-bei-kindern-und-erwachsenen-100.html",
            "urlToImage": "https://www.br.de/radio/bayern2/adhs-titelbild-100~_v-img__16__9__xl_-d31c35f8186ebeb80b0cd843a7c267a0e0c81647.jpg?version=292d6",
            "publishedAt": "2022-09-12T11:00:58Z",
            "content": "Wird sie nicht behandelt, beeinträchtigt sie die schulische und berufliche Leistungsfähigkeit, sowie die sozialen Kontakte. Therapie und eine gute Lebensplanung können aber helfen.\r\nDem Text liegt ei… [+14587 chars]"
        },
        {
            "source": {
                "id": "spiegel-online",
                "name": "Spiegel Online"
            },
            "author": "Fritz Schaap",
            "title": "Bürgerkrieg und Hungersnot in Äthiopien: Wo Menschen Gras essen müssen - DER SPIEGEL",
            "description": "Kaum fünf Monate hielt der Waffenstillstand in Tigray, unter den neuerlichen Kämpfen leidet besonders die Zivilbevölkerung. Derzeit gelangt keine Hilfe in die Region – der WHO-Chef spricht von der »schlimmsten Katastrophe der Welt«.",
            "url": "https://www.spiegel.de/ausland/aethiopien-neue-gefechte-in-tigray-die-schlimmste-katastrophe-der-welt-a-85d32aa1-b594-467b-8119-e0ecb7957b28",
            "urlToImage": "https://cdn.prod.www.spiegel.de/images/99440c3a-045a-4039-87a9-2f5750a246a8_w1280_r1.77_fpx47_fpy47.jpg",
            "publishedAt": "2022-09-12T10:53:56Z",
            "content": "Mehr Perspektiven, mehr verstehen.\r\nFreier Zugang zu allen Artikeln, Videos, Audioinhalten und Podcasts\r\n<ul><li>\r\nAlle Artikel auf SPIEGEL.de frei zugänglich\r\n</li><li>\r\nDER SPIEGEL als E-Paper und … [+743 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Süddeutsche Zeitung"
            },
            "author": "Tobias Bug, Leopold Zaak, Kerstin Lottritz, Kassian Stroh, Leila Al-Serori, Philipp Saul, Oliver Klasen",
            "title": "Queen: Tausende wollen in Edinburgh Abschied nehmen - Politik - SZ.de - Süddeutsche Zeitung - SZ.de",
            "description": "Der neue König Charles III. wird die Trauerprozession in der schottischen Hauptstadt anführen.",
            "url": "https://www.sueddeutsche.de/politik/queen-elizabeth-news-charles-edinburgh-1.5653764",
            "urlToImage": "https://www.sueddeutsche.de/image/sz.1.5655541/1200x675?v=1662975657",
            "publishedAt": "2022-09-12T09:59:52Z",
            "content": "Queen Elizabeth II., die am längsten regierende britische Monarchin, ist im Alter von 96 Jahren gestorben. Alle Entwicklungen im Liveblog:\r\nMit Material der Nachrichtenagenturen"
        },
        {
            "source": {
                "id": null,
                "name": "tagesschau.de"
            },
            "author": "tagesschau",
            "title": "Grundsatzrede von Lambrecht: \"Deutschlands Gewicht macht uns zur Führungsmacht\" - tagesschau.de",
            "description": "Verteidigungsministerin Lambrecht hat sich in einer Grundsatzrede zur Nationalen Sicherheitsstrategie für eine stärkere militärische Rolle Deutschlands ausgesprochen. Dazu müsse dauerhaft mehr für die Verteidigung ausgegeben werden.",
            "url": "https://www.tagesschau.de/inland/lambrecht-ausgaben-verteidigung-101.html",
            "urlToImage": "https://www.tagesschau.de/multimedia/bilder/lambrecht-185~_v-original.jpg",
            "publishedAt": "2022-09-12T09:48:55Z",
            "content": "Verteidigungsministerin Lambrecht hat sich in einer Grundsatzrede zur Nationalen Sicherheitsstrategie für eine stärkere militärische Rolle Deutschlands ausgesprochen. Dazu müsse dauerhaft mehr für di… [+2936 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DIE WELT"
            },
            "author": "WELT",
            "title": "Inflation: Ifo-Institut erwartet „Winter-Rezession“ und steigende Inflation - WELT",
            "description": "Das Ifo-Institut geht von einer weiter hohen Inflation von in der Spitze bis zu elf Prozent aus. Die Wirtschaft schrumpfe, die Experten erwarten eine Winter-Rezession. Erst 2024 soll es eine Normalisierung von Inflation und Wachstum geben.",
            "url": "https://www.welt.de/wirtschaft/article241002583/Inflation-Ifo-Institut-erwartet-Winter-Rezession-und-steigende-Inflation.html",
            "urlToImage": "https://img.welt.de/img/wirtschaft/mobile241002679/8781355907-ci16x9-w1200/Nach-dem-Ende-des-Tankrabatts-Potsdam.jpg",
            "publishedAt": "2022-09-12T09:32:38Z",
            "content": "Inflation rauf, Wirtschaft runter: Das Ifo-Institut geht von weiter steigenden Inflationsraten und einer schrumpfenden Wirtschaftsleistung in Deutschland aus. Für dieses Jahr rechnen die Münchner Öko… [+1949 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Computerwoche.de Live"
            },
            "author": "Halyna Kubiv",
            "title": "iOS 16: Diese iPhones erhalten das Update - computerwoche.de - Computerwoche.de Live",
            "description": "Es ist so weit, das Update auf iOS 16 kommt. Doch welche iPhones erhalten überhaupt die neuesten Features? Alle Infos.",
            "url": "https://www.computerwoche.de/a/diese-iphones-erhalten-das-update,3612771",
            "urlToImage": "https://images.computerwoche.de/bdb/3366782/640x360.jpg",
            "publishedAt": "2022-09-12T09:30:02Z",
            "content": "Fach- und Führungskräfte vieler Branchen nutzen tägliche die IDG-Medien, um sich über aktuelle Neuigkeiten im IT- und Digitalisierungssegment zu informieren. Die Autoren im IDG-Expertennetzwerk trage… [+329 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "B.Z. Berlin"
            },
            "author": "B.Z./dpa",
            "title": "Prinz Harry: Windsor ist ein „einsamer Ort“ ohne die Queen - B.Z. – Die Stimme Berlins",
            "description": "Die Bilder sorgten am Wochenende für Aufsehen: Die zerstrittenen Queen-Enkel William und Harry gemeinsam mit ihren Frauen vor Schloss Windsor.",
            "url": "https://www.bz-berlin.de/unterhaltung/prinz-harry-windsor-ist-ein-einsamer-ort-ohne-die-queen",
            "urlToImage": "https://image.bz-berlin.de/data/uploads/2022/09/314886029.jpg",
            "publishedAt": "2022-09-12T09:11:10Z",
            "content": "Von B.Z./dpa\r\nDie Bilder sorgten am Wochenende für Aufsehen: Die zerstrittenen Queen-Enkel William und Harry gemeinsam mit ihren Frauen vor Schloss Windsor. \r\nNun wurde ein Video des Auftritts öffent… [+2243 chars]"
        },
        {
            "source": {
                "id": "spiegel-online",
                "name": "Spiegel Online"
            },
            "author": "DER SPIEGEL",
            "title": "Toronto Film Festival: Harry Styles erstmals als Schauspieler geehrt - DER SPIEGEL",
            "description": "Zweiter Film, erster Schauspielpreis: Nach seinem viel diskutierten Auftritt in Venedig ist Harry Styles in Toronto im Drama »My Policeman« zu sehen. Die Festivalleitung zeichnete das Ensemble mit dem Tribute Award aus.",
            "url": "https://www.spiegel.de/kultur/kino/harry-styles-tribute-award-in-toronto-fuer-my-policeman-a-cbb9a0e5-86fe-4e94-af6d-afc5fe92bafd",
            "urlToImage": "https://cdn.prod.www.spiegel.de/images/ee59e4d1-9372-4362-85ba-9e1796308e70_w1280_r1.77_fpx50_fpy46.jpg",
            "publishedAt": "2022-09-12T09:06:07Z",
            "content": "Knapp 260 internationale Filmproduktionen\r\nDas Festival wurde am Donnerstagabend mit der Weltpremiere von »The Swimmers« der Regisseurin Sally El Hosaini eröffnet. Bis zum 18. September werden in Tor… [+475 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WEB.DE News"
            },
            "author": null,
            "title": "Stichwahl zwischen SPD und AfD um Oberbürgermeister-Posten in Cottbus - WEB.DE News",
            "description": "In Cottbus kommt es zur Stichwahl zwischen dem SPD-Bewerber Tobias Schick und dem AfD-Kandidaten Lars Schieske. Keiner der sieben angetretenen Kandidaten erhielt am Sonntag die absolute Mehrheit der Stimmen.",
            "url": "https://web.de/magazine/politik/stichwahl-spd-afd-posten-cottbus-37284958",
            "urlToImage": "https://i0.web.de/image/962/37284962,pd=3,f=opengraph/oberbuergermeisterwahl-cottbus.jpg",
            "publishedAt": "2022-09-12T08:41:47Z",
            "content": "<ul><li>In Cottbus kommt es zur Stichwahl zwischen dem SPD-Bewerber Tobias Schick und dem AfD-Kandidaten Lars Schieske.</li><li>Keiner der sieben angetretenen Kandidaten erhielt am Sonntag die absolu… [+1907 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SPORT1"
            },
            "author": "SPORT1",
            "title": "FC Bayern vs. Barca: Rummenigge kritisiert Nagelsmann! - SPORT1",
            "description": "Karl-Heinz Rummenigge äußert sich zum anstehenden Champions-League-Spiel gegen den FC Barcelona. Für Julian Nagelsmann hat er eine deutliche Botschaft. Auch zum Wiedersehen mit Robert Lewandowski hat er eine klare Meinung.",
            "url": "https://www.sport1.de/news/fussball/champions-league/2022/09/fc-bayern-vs-barca-rummenigge-kritisiert-nagelsmann",
            "urlToImage": "https://reshape.sport1.de/c/t/0ad39a0f-6e52-4850-aa80-347544ed728f/1200x630",
            "publishedAt": "2022-09-12T08:38:49Z",
            "content": "Das Duell zwischen dem FC Bayern München und dem FC Barcelona wirft seine Schatten voraus.\r\nNagelsmann soll sich auf eigenen Kompetenzbereich beschränken\r\nKurze Zeit später war der Bayern-Coach zurüc… [+3324 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Golem.de"
            },
            "author": null,
            "title": "Apple: iOS 16 erkennt gefälschte Airpods - Golem.de - Golem.de",
            "description": null,
            "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https:%2F%2Fwww.golem.de%2Fnews%2Fapple-ios-16-erkennt-gefaelschte-airpods-2209-168217.html",
            "urlToImage": null,
            "publishedAt": "2022-09-12T08:34:02Z",
            "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking, indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informatio… [+575 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DIE WELT"
            },
            "author": "WELT",
            "title": "Ukraine-News: +++ Russischer Botschafter wirft Berlin vor, „rote Linie“ überschritten zu haben +++ - WELT",
            "description": "Deutschland habe mit den Waffen-Lieferungen an die Ukraine eine „rote Linie“ überschritten, heißt es von Sergej Netschajew, dem russischen Botschafter in Berlin. Die gute bilaterale Beziehung zwischen den Ländern sei zerstört. Mehr im Liveticker.",
            "url": "https://www.welt.de/politik/ausland/article240998277/Ukraine-News-Russischer-Botschafter-wirft-Berlin-vor-rote-Linie-ueberschritten-zu-haben.html",
            "urlToImage": "https://img.welt.de/img/kultur/mobile235719950/2971353927-ci16x9-w1200/Russischer-Botschafter-Sergej-Netschajew.jpg",
            "publishedAt": "2022-09-12T08:30:48Z",
            "content": "Der russische Botschafter in Berlin, Sergej Netschajew, hat schwere Vorwürfe gegen Deutschland wegen der Waffenlieferungen zur Verteidigung der Ukraine gegen den russischen Angriffskrieg erhoben. All… [+6840 chars]"
        },
        {
            "source": {
                "id": "die-zeit",
                "name": "Die Zeit"
            },
            "author": null,
            "title": "Grenze zu Deutschland: Schweiz erklärt Standort für Atommülllager mit geologischen Gründen - zeit.de",
            "description": "",
            "url": "https://www.zeit.de/zustimmung?url=https:%2F%2Fwww.zeit.de%2Fpolitik%2Fausland%2F2022-09%2Fatommuell-endlager-schweiz-geologische-gruende",
            "urlToImage": null,
            "publishedAt": "2022-09-12T08:17:00Z",
            "content": "When browsing with ads:\r\nWe collect personal data and also transmit it to third-party providers\r\n that help us improve and finance our digital content. Some of the information stored on your device, … [+732 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "tagesschau.de"
            },
            "author": "tagesschau",
            "title": "Nach Tod von Elizabeth II.: Was sich für die Briten nun ändert - tagesschau.de",
            "description": "\"God Save the King\" - an diese neuen Worte ihrer Nationalhymne müssen sich viele Briten wohl erst noch gewöhnen. Doch das ist bei Weitem nicht die einzige Veränderung, auf die sich die Untertanen Ihrer Majestät einstellen müssen.",
            "url": "https://www.tagesschau.de/tod-queen-was-sich-fuer-briten-aendert-101.html",
            "urlToImage": "https://www.tagesschau.de/multimedia/bilder/pfund-100~_v-original.jpg",
            "publishedAt": "2022-09-12T08:01:03Z",
            "content": "\"God Save the King\" - an diese neuen Worte ihrer Nationalhymne müssen sich viele Briten wohl erst noch gewöhnen. Doch das ist bei Weitem nicht die einzige Veränderung, auf die sich die Untertanen Ihr… [+3338 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "tagesschau.de"
            },
            "author": "tagesschau",
            "title": "Kursgewinne zum Wochenstart: DAX bleibt im Aufwind - tagesschau.de",
            "description": "Die Erholung an der Börse setzt sich am Mittag fort. Der DAX flirtet sogar mit der Marke von 13.300 Punkten. Gefragt sind Bankaktien, die besonders von höheren Zinsen profitieren.",
            "url": "https://www.tagesschau.de/wirtschaft/finanzen/marktberichte/marktbericht-dax-dollar-boerse-101.html",
            "urlToImage": "https://www.tagesschau.de/multimedia/bilder/skyline-frankfurt-115~_v-original.jpg",
            "publishedAt": "2022-09-12T07:56:00Z",
            "content": "Die Erholung an der Börse setzt sich am Mittag fort. Der DAX flirtet sogar mit der Marke von 13.300 Punkten. Gefragt sind Bankaktien, die besonders von höheren Zinsen profitieren. \r\nDer DAX baut am M… [+10291 chars]"
        }
    ],
    "sports": [
        {
            "id": "bbc-sport",
            "name": "BBC Sport",
            "description": "The home of BBC Sport online. Includes live sports coverage, breaking news, results, video, audio and analysis on Football, F1, Cricket, Rugby Union, Rugby League, Golf, Tennis and all the main world sports, plus major events such as the Olympic Games.",
            "url": "http://www.bbc.co.uk/sport",
            "category": "sports",
            "language": "en",
            "country": "gb"
        },
        {
            "id": "bleacher-report",
            "name": "Bleacher Report",
            "description": "Sports journalists and bloggers covering NFL, MLB, NBA, NHL, MMA, college football and basketball, NASCAR, fantasy sports and more. News, photos, mock drafts, game scores, player profiles and more!",
            "url": "http://www.bleacherreport.com",
            "category": "sports",
            "language": "en",
            "country": "us"
        },
        {
            "id": "espn",
            "name": "ESPN",
            "description": "ESPN has up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, MLB, NBA, College Football, NCAA Basketball and more.",
            "url": "http://espn.go.com",
            "category": "sports",
            "language": "en",
            "country": "us"
        },
        {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info",
            "description": "ESPN Cricinfo provides the most comprehensive cricket coverage available including live ball-by-ball commentary, news, unparalleled statistics, quality editorial comment and analysis.",
            "url": "http://www.espncricinfo.com/",
            "category": "sports",
            "language": "en",
            "country": "us"
        },
        {
            "id": "football-italia",
            "name": "Football Italia",
            "description": "Italian football news, analysis, fixtures and results for the latest from Serie A, Serie B and the Azzurri.",
            "url": "http://www.football-italia.net",
            "category": "sports",
            "language": "en",
            "country": "it"
        },
        {
            "id": "four-four-two",
            "name": "FourFourTwo",
            "description": "The latest football news, in-depth features, tactical and statistical analysis from FourFourTwo, the UK&#039;s favourite football monthly.",
            "url": "http://www.fourfourtwo.com/news",
            "category": "sports",
            "language": "en",
            "country": "gb"
        },
        {
            "id": "fox-sports",
            "name": "Fox Sports",
            "description": "Find live scores, player and team news, videos, rumors, stats, standings, schedules and fantasy games on FOX Sports.",
            "url": "http://www.foxsports.com",
            "category": "sports",
            "language": "en",
            "country": "us"
        },
        {
            "id": "lequipe",
            "name": "L'equipe",
            "description": "Le sport en direct sur L'EQUIPE.fr. Les informations, résultats et classements de tous les sports. Directs commentés, images et vidéos à regarder et à partager !",
            "url": "https://www.lequipe.fr",
            "category": "sports",
            "language": "fr",
            "country": "fr"
        },
        {
            "id": "marca",
            "name": "Marca",
            "description": "La mejor información deportiva en castellano actualizada minuto a minuto en noticias, vídeos, fotos, retransmisiones y resultados en directo.",
            "url": "http://www.marca.com",
            "category": "sports",
            "language": "es",
            "country": "es"
        },
        {
            "id": "nfl-news",
            "name": "NFL News",
            "description": "The official source for NFL news, schedules, stats, scores and more.",
            "url": "http://www.nfl.com/news",
            "category": "sports",
            "language": "en",
            "country": "us"
        },
        {
            "id": "nhl-news",
            "name": "NHL News",
            "description": "The most up-to-date breaking hockey news from the official source including interviews, rumors, statistics and schedules.",
            "url": "https://www.nhl.com/news",
            "category": "sports",
            "language": "en",
            "country": "us"
        },
        {
            "id": "talksport",
            "name": "TalkSport",
            "description": "Tune in to the world's biggest sports radio station - Live Premier League football coverage, breaking sports news, transfer rumours &amp; exclusive interviews.",
            "url": "http://talksport.com",
            "category": "sports",
            "language": "en",
            "country": "gb"
        },
        {
            "id": "the-sport-bible",
            "name": "The Sport Bible",
            "description": "TheSPORTbible is one of the largest communities for sports fans across the world. Send us your sporting pictures and videos!",
            "url": "https://www.thesportbible.com",
            "category": "sports",
            "language": "en",
            "country": "gb"
        }
    ],
    "science": [
        {
            "id": "national-geographic",
            "name": "National Geographic",
            "description": "Reporting our world daily: original nature and science news from National Geographic.",
            "url": "http://news.nationalgeographic.com",
            "category": "science",
            "language": "en",
            "country": "us"
        },
        {
            "id": "new-scientist",
            "name": "New Scientist",
            "description": "Breaking science and technology news from around the world. Exclusive stories and expert analysis on space, technology, health, physics, life and Earth.",
            "url": "https://www.newscientist.com/section/news",
            "category": "science",
            "language": "en",
            "country": "us"
        },
        {
            "id": "next-big-future",
            "name": "Next Big Future",
            "description": "Coverage of science and technology that have the potential for disruption, and analysis of plans, policies, and technology that enable radical improvement.",
            "url": "https://www.nextbigfuture.com",
            "category": "science",
            "language": "en",
            "country": "us"
        }
    ],
    "entertainment": [
        {
            "id": "buzzfeed",
            "name": "Buzzfeed",
            "description": "BuzzFeed is a cross-platform, global network for news and entertainment that generates seven billion views each month.",
            "url": "https://www.buzzfeed.com",
            "category": "entertainment",
            "language": "en",
            "country": "us"
        },
        {
            "id": "entertainment-weekly",
            "name": "Entertainment Weekly",
            "description": "Online version of the print magazine includes entertainment news, interviews, reviews of music, film, TV and books, and a special area for magazine subscribers.",
            "url": "http://www.ew.com",
            "category": "entertainment",
            "language": "en",
            "country": "us"
        },
        {
            "id": "ign",
            "name": "IGN",
            "description": "IGN is your site for Xbox One, PS4, PC, Wii-U, Xbox 360, PS3, Wii, 3DS, PS Vita and iPhone games with expert reviews, news, previews, trailers, cheat codes, wiki guides and walkthroughs.",
            "url": "http://www.ign.com",
            "category": "entertainment",
            "language": "en",
            "country": "us"
        },
        {
            "id": "mashable",
            "name": "Mashable",
            "description": "Mashable is a global, multi-platform media and entertainment company.",
            "url": "https://mashable.com",
            "category": "entertainment",
            "language": "en",
            "country": "us"
        },
        {
            "id": "mtv-news",
            "name": "MTV News",
            "description": "The ultimate news source for music, celebrity, entertainment, movies, and current events on the web. It's pop culture on steroids.",
            "url": "http://www.mtv.com/news",
            "category": "entertainment",
            "language": "en",
            "country": "us"
        },
        {
            "id": "mtv-news-uk",
            "name": "MTV News (UK)",
            "description": "All the latest celebrity news, gossip, exclusive interviews and pictures from the world of music and entertainment.",
            "url": "http://www.mtv.co.uk/news",
            "category": "entertainment",
            "language": "en",
            "country": "gb"
        },
        {
            "id": "polygon",
            "name": "Polygon",
            "description": "Polygon is a gaming website in partnership with Vox Media. Our culture focused site covers games, their creators, the fans, trending stories and entertainment news.",
            "url": "http://www.polygon.com",
            "category": "entertainment",
            "language": "en",
            "country": "us"
        },
        {
            "id": "the-lad-bible",
            "name": "The Lad Bible",
            "description": "The LAD Bible is one of the largest community for guys aged 16-30 in the world. Send us your funniest pictures and videos!",
            "url": "https://www.theladbible.com",
            "category": "entertainment",
            "language": "en",
            "country": "gb"
        }
    ],
    "business": [
        {
            "id": "argaam",
            "name": "Argaam",
            "description": "ارقام موقع متخصص في متابعة سوق الأسهم السعودي تداول - تاسي - مع تغطيه معمقة لشركات واسعار ومنتجات البتروكيماويات , تقارير مالية الاكتتابات الجديده ",
            "url": "http://www.argaam.com",
            "category": "business",
            "language": "ar",
            "country": "sa"
        },
        {
            "id": "australian-financial-review",
            "name": "Australian Financial Review",
            "description": "The Australian Financial Review reports the latest news from business, finance, investment and politics, updated in real time. It has a reputation for independent, award-winning journalism and is essential reading for the business and investor community.",
            "url": "http://www.afr.com",
            "category": "business",
            "language": "en",
            "country": "au"
        },
        {
            "id": "bloomberg",
            "name": "Bloomberg",
            "description": "Bloomberg delivers business and markets news, data, analysis, and video to the world, featuring stories from Businessweek and Bloomberg News.",
            "url": "http://www.bloomberg.com",
            "category": "business",
            "language": "en",
            "country": "us"
        },
        {
            "id": "business-insider",
            "name": "Business Insider",
            "description": "Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.",
            "url": "http://www.businessinsider.com",
            "category": "business",
            "language": "en",
            "country": "us"
        },
        {
            "id": "business-insider-uk",
            "name": "Business Insider (UK)",
            "description": "Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.",
            "url": "http://uk.businessinsider.com",
            "category": "business",
            "language": "en",
            "country": "gb"
        },
        {
            "id": "die-zeit",
            "name": "Die Zeit",
            "description": "Aktuelle Nachrichten, Kommentare, Analysen und Hintergrundberichte aus Politik, Wirtschaft, Gesellschaft, Wissen, Kultur und Sport lesen Sie auf ZEIT ONLINE.",
            "url": "http://www.zeit.de/index",
            "category": "business",
            "language": "de",
            "country": "de"
        },
        {
            "id": "financial-post",
            "name": "Financial Post",
            "description": "Find the latest happenings in the Canadian Financial Sector and stay up to date with changing trends in Business Markets. Read trading and investing advice from professionals.",
            "url": "http://business.financialpost.com",
            "category": "business",
            "language": "en",
            "country": "ca"
        },
        {
            "id": "fortune",
            "name": "Fortune",
            "description": "Fortune 500 Daily and Breaking Business News",
            "url": "http://fortune.com",
            "category": "business",
            "language": "en",
            "country": "us"
        },
        {
            "id": "handelsblatt",
            "name": "Handelsblatt",
            "description": "Auf Handelsblatt lesen sie Nachrichten über Unternehmen, Finanzen, Politik und Technik. Verwalten Sie Ihre Finanzanlagen mit Hilfe unserer Börsenkurse.",
            "url": "http://www.handelsblatt.com",
            "category": "business",
            "language": "de",
            "country": "de"
        },
        {
            "id": "il-sole-24-ore",
            "name": "Il Sole 24 Ore",
            "description": "Notizie di economia, cronaca italiana ed estera, quotazioni borsa in tempo reale e di finanza, norme e tributi, fondi e obbligazioni, mutui, prestiti e lavoro a cura de Il Sole 24 Ore.",
            "url": "https://www.ilsole24ore.com",
            "category": "business",
            "language": "it",
            "country": "it"
        },
        {
            "id": "info-money",
            "name": "InfoMoney",
            "description": "No InfoMoney você encontra tudo o que precisa sobre dinheiro. Ações, investimentos, bolsas de valores e muito mais. Aqui você encontra informação que vale dinheiro!",
            "url": "https://www.infomoney.com.br",
            "category": "business",
            "language": "pt",
            "country": "br"
        },
        {
            "id": "les-echos",
            "name": "Les Echos",
            "description": "Toute l'actualité économique, financière et boursière française et internationale sur Les Echos.fr",
            "url": "https://www.lesechos.fr",
            "category": "business",
            "language": "fr",
            "country": "fr"
        },
        {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal",
            "description": "WSJ online coverage of breaking news and current headlines from the US and around the world. Top stories, photos, videos, detailed analysis and in-depth reporting.",
            "url": "http://www.wsj.com",
            "category": "business",
            "language": "en",
            "country": "us"
        },
        {
            "id": "wirtschafts-woche",
            "name": "Wirtschafts Woche",
            "description": "Das Online-Portal des führenden Wirtschaftsmagazins in Deutschland. Das Entscheidende zu Unternehmen, Finanzen, Erfolg und Technik.",
            "url": "http://www.wiwo.de",
            "category": "business",
            "language": "de",
            "country": "de"
        }
    ]
}

    /* useEffect(() => {
    (async function () {
      const urls = [
        `https://newsapi.org/v2/top-headlines?country=de&apiKey=${process.env.REACT_APP_API_KEY}`,
        `https://newsapi.org/v2/top-headlines/sources?category=sports&apikey=${process.env.REACT_APP_API_KEY}`,
        `https://newsapi.org/v2/top-headlines/sources?category=business&apikey=${process.env.REACT_APP_API_KEY}`,
        `https://newsapi.org/v2/top-headlines/sources?category=entertainment&apikey=${process.env.REACT_APP_API_KEY}`,
        `https://newsapi.org/v2/top-headlines/sources?category=science&apikey=${process.env.REACT_APP_API_KEY}`,
        `https://api.openweathermap.org/data/2.5/weather?q=hamburg&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
      ];

      async function getNews(url) {
        let response = await fetch(url);
        let sportsUrl = await response.json();
        return sportsUrl;
      }

      const headlines = await getNews(urls[0]);
      const sports = await getNews(urls[1]);
      const business = await getNews(urls[2]);
      const entertainment = await getNews(urls[3]);
      const science = await getNews(urls[4]); 
      const weatherResult = await getNews(urls[5]);

       const headlinesArr = headlines.articles;
      const sportsArr = sports.sources;
      const businessArr = business.sources;
      const entertainmentArr = entertainment.sources;
      const scienceArr = science.sources; 
      const weatherData = weatherResult
   
       setData({
        headlines: headlinesArr,
        sports: sportsArr,
        science: scienceArr,
        entertainment: entertainmentArr,
        business: businessArr
      }); 

      setWeather({
        city:weatherData.name,       
        temp:weatherData.main.temp
      })
      
    })();
  }, []);  
   */
  
  return (
    <MyContext.Provider value={{ data, /* setData , */weather,setWeather}}>
      {children}
    </MyContext.Provider>
  );
}
