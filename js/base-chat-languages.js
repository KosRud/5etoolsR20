function baseChatLanguages () {
	d20plus.chat = d20plus.chat || {};

	// Data for generating fake messages in in-game languages in base-chat gibberish()
	// lexis: list of 100 fake words for each in-game language;
	// particles: 9 fake short words imitating parts of speech like prepositions or
	// conjunctions or interjections etc. adding more "flavor" to generated text
	// factor: integer that determines the frequency of particle occurrences
	/* eslint-disable */
	d20plus.chat.languages = {
		"common": {
			"title": "common",
			// Most words copied or modified from
			// https://forgottenrealms.fandom.com/wiki/Common_dictionary
			"lexis": [
				"alae",
				"alavairthae",
				"alehose",
				"amarast",
				"anyhail",
				"badaulder",
				"darchains",
				"dathna",
				"deven",
				"drios",
				"durgos",
				"elsun",
				"evenfeast",
				"eventide",
				"fieldings",
				"fireseared",
				"galad",
				"glim",
				"haelhard",
				"harbright",
				"hardjaws",
				"harnor",
				"haularake",
				"hawksnarl",
				"highsun",
				"hrammar",
				"hrast",
				"hrasting",
				"hugor",
				"hykyath",
				"jursak",
				"keghand",
				"kell",
				"lalandath",
				"lamenor",
				"lammath",
				"lifeblood",
				"marrado",
				"mayhap",
				"murdath",
				"naed",
				"naeth",
				"nandra",
				"navalar",
				"nightjack",
				"nightmaid",
				"olor",
				"orbal",
				"parharding",
				"plounce",
				"potjack",
				"potmaid",
				"punnet",
				"rhambukkya",
				"rivvim",
				"roofwrack",
				"sabbas",
				"sabruin",
				"saer",
				"sark",
				"scorchkettle",
				"sel",
				"shaeling",
				"sheelie",
				"sildur",
				"silverfin",
				"skaether",
				"slake",
				"sorn",
				"spear",
				"spurnarmor",
				"standath",
				"steading",
				"stettar",
				"stlarn",
				"stomran",
				"straek",
				"sumbor",
				"tantam",
				"tasmar",
				"tenday",
				"thael",
				"thargur",
				"tharsun",
				"thoats",
				"thruss",
				"thulsun",
				"tindertwig",
				"tluin",
				"topon",
				"tumin",
				"uluvathae",
				"vasark",
				"vlandranna",
				"voh",
				"waelo",
				"wanton",
				"wenich",
				"winker",
				"zzar"
			],
			"particles": [
				"fol",
				"a",
				"me",
				"on",
				"an",
				"fo-",
				"to-",
				"do",
				"per"
			],
			"alias": [
				"human",
			],
			"factor": 4
		},
		"dwarvish": {
			"title": "dwarvish",
			// Most words copied or modified from
			// http://www.bugmansbrewery.com/tutorials/article/115-dwarf-language-english-to-khazalid-dictionary/
			"lexis": [
				"akrak",
				"angaz",
				"azamar",
				"azgal",
				"azul",
				"bakraz",
				"barag",
				"barak",
				"baraz",
				"binaz",
				"bolg",
				"brog",
				"chuf",
				"dal",
				"dar",
				"dharkhangron",
				"doh",
				"drakk",
				"drazh",
				"drek",
				"drongnel",
				"fleg",
				"gorak",
				"gorm",
				"gorog",
				"goruz",
				"grim",
				"grimaz",
				"grom",
				"gromdal",
				"grongol",
				"gronit",
				"grumbak",
				"guz",
				"guzzen",
				"hunk",
				"karu",
				"kazad",
				"kazak",
				"kazhunki",
				"kazid",
				"khaz",
				"khazukan",
				"klad",
				"krink",
				"kro",
				"kron",
				"kruk",
				"kruti",
				"migdhal",
				"mizpal",
				"muzkhgrum",
				"naggrund",
				"nar",
				"onk",
				"orrud",
				"ragarin",
				"rik",
				"rikigraz",
				"rorkaz",
				"ruf",
				"runk",
				"ruvalk",
				"sar",
				"skarrenruf",
				"skruff",
				"skrund",
				"skuf",
				"stok",
				"thagi",
				"thingaz",
				"thongli",
				"throng",
				"thrund",
				"thrynaz",
				"tiwaz",
				"trogg",
				"umanar",
				"und",
				"undi",
				"ungor",
				"urbaz",
				"urk",
				"varaz",
				"varf",
				"varn",
				"vengryn",
				"vithang",
				"vlag",
				"vorkhul",
				"wan",
				"wanaz",
				"wattock",
				"wazzock",
				"werit",
				"wyr",
				"zak",
				"zaki",
				"zan",
				"zank"
			],
			"particles": [
				"ha",
				"a-",
				"un",
				"um",
				"dum-",
				"on-",
				"or",
				"ad",
				"har"
			],
			"alias": [
				"dwarven"
			],
			"factor": 3
		},
		"elvish": {
			"title": "elvish",
			// Most words copied or modified from
			// https://www.elfdict.com/w/?language=quenya
			"lexis": [
				"alahen",
				"alamanyar",
				"alaninquitálima",
				"alasaila",
				"alaurē",
				"alcárima",
				"alcorin",
				"aleldarin",
				"alfárima",
				"alfirin",
				"alistima",
				"alómear",
				"alquettima",
				"ampanotalea",
				"ancale",
				"ancárima",
				"andúne",
				"asanye",
				"avante",
				"celure",
				"ceníte",
				"cirmacin",
				"ennie",
				"etya",
				"etyarin",
				"farale",
				"farastea",
				"himíte",
				"ilquárea",
				"induinen",
				"indyel",
				"insil",
				"intin",
				"isil",
				"istalima",
				"istare",
				"lacalima",
				"laistea",
				"laistila",
				"laman",
				"lamate",
				"lambion",
				"lamélima",
				"lirale",
				"líruima",
				"manar",
				"mára",
				"mastima",
				"mecin",
				"milyar",
				"mólome",
				"nairea",
				"naitie",
				"nandor",
				"nasque",
				"nefíte",
				"nemestea",
				"nengwear",
				"níríte",
				"noldorin",
				"númen",
				"númerea",
				"nyárula",
				"nyelle",
				"ocamnar",
				"ólamar",
				"ontale",
				"ortalima",
				"ortare",
				"perómandar",
				"púlima",
				"puntar",
				"qualme",
				"quende",
				"quenderin",
				"quenelya",
				"quettima",
				"raiqua",
				"símen",
				"sinan",
				"sinar",
				"sindar",
				"sinome",
				"sintar",
				"súrimar",
				"suryar",
				"taltea",
				"tancal",
				"tauvar",
				"telerin",
				"tírima",
				"turindura",
				"túvima",
				"tyen",
				"úcalima",
				"úcárima",
				"umbar",
				"vanima",
				"vórear",
				"yúlima"
			],
			"particles": [
				"na",
				"en'",
				"il'",
				"né",
				"ol'",
				"an",
				"o'",
				"lor-",
				"i-"
			],
			"alias": [
				"elven",
				"elf"
			],
			"factor": 5
		},
		"giant": {
			"title": "giant",
			// Most words copied or modified from
			// https://www.paolini.net/fans/invented-languages-inheritance-cycle/dwarf-language/dwarf-language-english-dictionary/
			"lexis": [
				"arûna",
				"ascûdgamln",
				"astim",
				"athrid",
				"bahst",
				"barzûl",
				"barzûln",
				"belard",
				"beor",
				"borith",
				"brâgha",
				"brak",
				"carharûg",
				"carkna",
				"carn",
				"darm",
				"delva",
				"dem",
				"derûndân",
				"dômar",
				"dorzada",
				"drâth",
				"dûnost",
				"dûrgrimst",
				"dûrmgrist",
				"ebardac",
				"edaris",
				"egraz",
				"encesti",
				"erôth",
				"erôthknurl",
				"estvarn",
				"estver",
				"etal",
				"fanghur",
				"feldûnost",
				"felfarthen",
				"felrast",
				"formv",
				"frekk",
				"fûthmér",
				"gáld",
				"gáldhiem",
				"gaml",
				"ganaht",
				"garth",
				"gauhnith",
				"gedthrall",
				"gerdûm",
				"ghastgar",
				"goroth",
				"grimstnzhadn",
				"gûntera",
				"harng",
				"harûg",
				"hefthyn",
				"helzvog",
				"hert",
				"hiem",
				"hírna",
				"hort",
				"hrenth",
				"hrestvog",
				"hreth",
				"hrethcarach",
				"hûthvír",
				"hûtt",
				"ingeitum",
				"knurlcarathn",
				"ledwonnû",
				"meitder",
				"mendûnost",
				"menknurlan",
				"mensagh",
				"menthiv",
				"menwarrev",
				"mérna",
				"mezzintar",
				"mithrim",
				"môgh",
				"môgren",
				"nal",
				"narho",
				"quan",
				"ragni",
				"sartos",
				"sartosvrenht",
				"sesti",
				"sheilve",
				"sweld",
				"thardsvergûndnzmal",
				"thargen",
				"thorv",
				"thriknzdal",
				"thrond",
				"trangnarn",
				"urzhad",
				"vrem",
				"vrenht",
				"wharn"
			],
			"particles": [
				"dûr",
				"az",
				"azt",
				"og",
				"rra-",
				"rna-",
				"da-",
				"rr-",
				"gro"
			],
			"alias": [
				"ogre"
			],
			"factor": 3
		},
		"gnomish": {
			"title": "gnomish",
			// Most words copied or modified from
			// https://www.elfdict.com/w/?language=telerin
			"lexis": [
				"athon",
				"aumata",
				"budhu",
				"burbo",
				"buspo",
				"caw",
				"cewin",
				"cha",
				"curunír",
				"eglath",
				"ettuli",
				"ghaik",
				"ghustil",
				"gurgof",
				"hacta",
				"hadhwa",
				"haedh",
				"hamna",
				"hanin",
				"hatta",
				"hauda",
				"haudh",
				"hîn",
				"huine",
				"jez",
				"kaincha",
				"kainu",
				"kait",
				"kalach",
				"kalas",
				"kel",
				"kelu",
				"khamu",
				"kheru",
				"kith",
				"koilu",
				"koiru",
				"koitā",
				"kuinu",
				"kuitā",
				"kurwē",
				"lauda",
				"laudh",
				"linna",
				"liru",
				"madha",
				"mascu",
				"matjā",
				"matulā",
				"melā",
				"mîdh",
				"mirhanac",
				"nacte",
				"nadha",
				"naedh",
				"nathu",
				"natte",
				"ndilā",
				"necte",
				"nette",
				"nidh",
				"nîdh",
				"nídha",
				"niñkwis",
				"ōmata",
				"omnu",
				"peles",
				"pelsa",
				"pentro",
				"psar",
				"psára",
				"raef",
				"rak",
				"rakkma",
				"rathki",
				"resta",
				"revrykal",
				"rîdh",
				"sedu",
				"taltas",
				"tancula",
				"tañkas",
				"teles",
				"telu",
				"thar",
				"thillu",
				"thilnu",
				"thoron",
				"tinnúviel",
				"tithilla",
				"tolen",
				"tolu",
				"tuilu",
				"tyaz",
				"uba",
				"umitl",
				"varsh",
				"vlaakith",
				"xarā",
				"xenna"
			],
			"particles": [
				"ae",
				"et",
				"en",
				"dam",
				"bom",
				"ne",
				"m",
				"ik",
				"ro"
			],
			"alias": [
				"gnome"
			],
			"factor": 4
		},
		"goblin": {
			"title": "goblin",
			// Most words copied or modified from
			// https://forgottenrealms.fandom.com/wiki/Goblin_dictionary
			"lexis": [
				"ana",
				"ari",
				"armauk",
				"auga",
				"bagal",
				"banam",
				"banos",
				"bauruk",
				"bizel",
				"booyahg",
				"braeunk",
				"breek",
				"dabog",
				"dargrath",
				"dargum",
				"daul",
				"dha",
				"durbuluk",
				"fak",
				"foshnu",
				"fund",
				"fushat",
				"gever",
				"gog",
				"golog",
				"guthash",
				"hak",
				"hruggekolohk",
				"huhak",
				"hum",
				"illska",
				"karanzol",
				"karkat",
				"karkitas",
				"kherek",
				"kurrauz",
				"kykat",
				"laug",
				"lind",
				"lodar",
				"lorach",
				"loz",
				"mabus",
				"magas",
				"margim",
				"mub",
				"mubaram",
				"mubulat",
				"mug",
				"nagransham",
				"namat",
				"nixir",
				"noldo",
				"nor",
				"nying",
				"ovani",
				"paflok",
				"pafund",
				"paken",
				"palkas",
				"parat",
				"parhor",
				"pik",
				"plak",
				"plasas",
				"plasi",
				"pluhun",
				"poni",
				"porandor",
				"rup",
				"ryk",
				"sapat",
				"shakab",
				"shakapon",
				"shakutarbik",
				"shat",
				"skag",
				"tarthur",
				"thag",
				"tharb",
				"thark",
				"tharm",
				"thos",
				"thur",
				"tok",
				"trolkh",
				"vadoksam",
				"vadoksog",
				"vaws",
				"vaza",
				"vek",
				"vhos",
				"vok",
				"vosh",
				"voz",
				"yark",
				"zabraz",
				"zan",
				"zongot",
				"zorrat"
			],
			"particles": [
				"ta",
				"vo",
				"no",
				"suk",
				"ya",
				"yol",
				"mar",
				"mak",
				"psa"
			],
			"alias": [
				"goblinoid"
			],
			"factor": 3
		},
		"halfling": {
			"title": "halfling",
			// Most words copied or modified from
			// http://www.quicksilver899.com/Tolkien/Hobbitry.html
			"lexis": [
				"adaldrida",
				"balc",
				"banakil",
				"banta",
				"banzir",
				"barabatta",
				"bas",
				"bilba",
				"bolgra",
				"bophîn",
				"branda",
				"brandu",
				"brandugamba",
				"bree",
				"carbandur",
				"carbanga",
				"cast",
				"castu",
				"chet",
				"cubuc",
				"cugbagu",
				"dûkan",
				"dûkaru",
				"fallohide",
				"froda",
				"gad",
				"galab",
				"galbassi",
				"galpsi",
				"gamba",
				"globa",
				"gluva",
				"grad",
				"hamanullas",
				"hamfast",
				"harfoots",
				"hloth",
				"hlothran",
				"isen",
				"kali",
				"kalimac",
				"karningul",
				"kast",
				"kili",
				"kûd",
				"kuduk",
				"labin",
				"labingi",
				"lograd",
				"loho",
				"lohtur",
				"lothran",
				"luthran",
				"luthur",
				"mathom",
				"maura",
				"nahald",
				"nargian",
				"nec",
				"nîn",
				"peppin",
				"pharë",
				"phur",
				"phurunargian",
				"ram",
				"ran",
				"rapha",
				"rasputa",
				"raspûta",
				"raza",
				"razan",
				"razanur",
				"razar",
				"rog",
				"sharku",
				"smial",
				"soval",
				"stenr",
				"stjarna",
				"stoor",
				"stydja",
				"sund",
				"sûza",
				"tapuc",
				"thain",
				"tharantin",
				"tharni",
				"tóbias",
				"tragu",
				"trahald",
				"trahan",
				"trân",
				"tuca",
				"tung",
				"tur",
				"turac",
				"wini",
				"zara",
				"zilbirapha",
				"zir"
			],
			"particles": [
				"a",
				"o",
				"ol-",
				"nî",
				"ul",
				"lo",
				"u",
				"u-",
				"so-"
			],
			"alias": [
				"hobbit",
			],
			"factor": 4
		},
		"orcish": {
			"title": "orcish",
			// Most words copied or modified from
			// https://www.angelfire.com/ia/orcishnations/englishorcish.html
			"lexis": [
				"arau",
				"asht",
				"bartas",
				"bashkaum",
				"blog",
				"blotaz",
				"bogi",
				"bosnauk",
				"broz",
				"brulk",
				"bujukasi",
				"buk",
				"bukol",
				"bungo",
				"curr",
				"dajal",
				"dhaub",
				"dorr",
				"doturog",
				"fatoft",
				"frib",
				"fushjalut",
				"gijak",
				"gijakpis",
				"gijakudob",
				"gogan",
				"goltur",
				"gubuk",
				"hanksar",
				"inras",
				"kafsog",
				"kakok",
				"kalaum",
				"kalkan",
				"kalush",
				"kapuk",
				"karash",
				"kartart",
				"kaup",
				"kazorm",
				"kishaulus",
				"kishtraum",
				"kokan",
				"kokar",
				"kolaubar",
				"kolk",
				"korpaus",
				"kosh",
				"krah",
				"kridash",
				"krimp",
				"kular",
				"kumbon",
				"lak",
				"larg",
				"lavozagh",
				"lundar",
				"lup",
				"lutaum",
				"mabas",
				"maush",
				"mazat",
				"mikar",
				"molva",
				"mosal",
				"mosh",
				"moshar",
				"motsham",
				"mubarshtaum",
				"nadar",
				"nudertog",
				"pargijakun",
				"parkulun",
				"paustar",
				"pogalm",
				"rraus",
				"rung",
				"shataz",
				"shaugit",
				"shendrautsham",
				"shul",
				"skalkisham",
				"skopar",
				"skort",
				"skup",
				"stargush",
				"staz",
				"suksh",
				"sulmog",
				"sulmus",
				"tanfuksham",
				"thoror",
				"thrak",
				"ugrukh",
				"urdanog",
				"ushtar",
				"ushtarak",
				"zagavarr",
				"zemaraum",
				"zoshkat"
			],
			"particles": [
				"uk",
				"agh",
				"ur",
				"zug",
				"rek",
				"rog",
				"dru",
				"sud-",
				"vor-"
			],
			"alias": [
				"orc"
			],
			"factor": 2
		},
		"abyssal": {
			"title": "abyssal",
			// Most words copied or modified from
			// https://www.paolini.net/fans/invented-languages-inheritance-cycle/ancient-language/ancient-language-english-dictionary/
			"lexis": [
				"aldanarí",
				"argetlam",
				"äthalvard",
				"bjartskular",
				"bjartstál",
				"blödhgarm",
				"blödhren",
				"brisingr",
				"dagshelgr",
				"darmthrell",
				"dauthdaert",
				"dauthleikr",
				"dröttning",
				"dröttningu",
				"ebrithil",
				"edoc’sil",
				"eïnradhin",
				"eldhrimner",
				"eldrvarí",
				"eldrvarya",
				"eldunarí",
				"ellesméra",
				"elthrimórno",
				"ethilnadras",
				"ethildurin",
				"faelnirv",
				"fëon",
				"finiarel",
				"flutningr",
				"förn",
				"framvír",
				"frethya",
				"galbatorix",
				"garjzla",
				"gëuloth",
				"haldthin",
				"helgrind",
				"herdtha",
				"hernskja",
				"hljödhr",
				"hröslvalhr",
				"ikonoka",
				"íllgrathr",
				"ilumaro",
				"indlvarn",
				"islingr",
				"istalrí",
				"könungr",
				"kvaedhí",
				"kvaedhí",
				"kveykva",
				"lámarae",
				"laufsblädr",
				"lethrblaka",
				"loivissa",
				"malthinae",
				"midhring",
				"mor’ranr",
				"mulabra",
				"nalgask",
				"nangoröth",
				"nángoröth",
				"nïdhwal",
				"niernen",
				"orgetorix",
				"orothrim",
				"osthato",
				"otherúm",
				"pömnuria",
				"rextugenos",
				"ristvak’baen",
				"sharjalví",
				"shur’tugal",
				"silbena",
				"sköliro",
				"skulblaka",
				"snalglí",
				"sundavar",
				"sundavrblaka",
				"svit-kona",
				"thaefathan",
				"theirra",
				"thelduin",
				"thornessa",
				"thrautha",
				"threyja",
				"thrífask",
				"thringa",
				"thrysta",
				"titlingr",
				"traevam",
				"vanyalí",
				"vercingetorix",
				"vergandí",
				"vergarí",
				"vergathos",
				"verrunsmal",
				"vervada",
				"weldenvarden",
				"weohnataí"
			],
			"particles": [
				"ash'",
				"ash'",
				"ath'",
				"ath'",
				"tero-",
				"tero-",
				"al'",
				"al'",
				"al'"
			],
			"alias": [
				"demon"
			],
			"factor": 2
		},
		"celestial": {
			"title": "celestial",
			// Most words copied or modified from
			// https://dndtopics.com/languages/celestial/
			"lexis": [
				"aujinn",
				"aurix",
				"aussit",
				"austrat",
				"axun",
				"baeshran",
				"bakam",
				"barb",
				"bejik",
				"bensvelk",
				"caesin",
				"caex",
				"chaorkartel",
				"charchukan",
				"charil",
				"chmertehoschta",
				"ciaptoop",
				"clax",
				"darahar",
				"darastrix",
				"darastrixethe",
				"djerad",
				"eanm",
				"eesem",
				"farang",
				"farothai",
				"fintir",
				"fliaot",
				"flolhwouth",
				"flonn",
				"flonna",
				"frahr",
				"garurt",
				"geth",
				"ghent",
				"ghik",
				"ghontix",
				"gixustrat",
				"grovisv",
				"hengoth",
				"henich",
				"hesjing",
				"hlarn",
				"horthinn",
				"hwinn",
				"hwith",
				"hwoul",
				"hwulceat",
				"koshqal",
				"kosja",
				"kosjth",
				"kothan",
				"kuhri",
				"kuhroom",
				"laraek",
				"lauth",
				"leirith",
				"levethix",
				"levex",
				"lexi",
				"litrix",
				"loerchik",
				"loex",
				"loreat",
				"lovac",
				"maekrix",
				"malsvir",
				"martivir",
				"miirik",
				"moonth",
				"mrith",
				"munthrek",
				"nannan",
				"ner",
				"noachi",
				"nurh",
				"nurthul",
				"nychaki",
				"okarthel",
				"oth",
				"pehweenm",
				"saurach",
				"scithhwo",
				"setfloom",
				"siapsceth",
				"sootn",
				"svern",
				"taaldarax",
				"taloosch",
				"teack",
				"terunt",
				"thaenar",
				"theethweet",
				"thlann",
				"thraenn",
				"throden",
				"vegatus",
				"virlym",
				"vivex",
				"volikma"
			],
			"particles": [
				"har",
				"sa",
				"hel",
				"k'",
				"x'",
				"ma'",
				"hal",
				"tha",
				"aln"
			],
			"alias": [],
			"factor": 3
		},
		"draconic": {
			"title": "draconic",
			// Most words copied or modified from
			// https://forgottenrealms.fandom.com/wiki/Draconic_dictionary
			"lexis": [
				"aesthyr",
				"aithyas",
				"arcaniss",
				"aryte",
				"arytiss",
				"athear",
				"bahamuti",
				"darasv",
				"darathric",
				"darss",
				"ekess",
				"elaress",
				"eorikc",
				"erekess",
				"faessi",
				"faestir",
				"ghoros",
				"karshoj",
				"kear",
				"kepesk",
				"kethend",
				"kiskartchi",
				"korth",
				"kosjmyrni",
				"oposs",
				"ossalur",
				"osvith",
				"othokent",
				"panjar",
				"persvek",
				"petisse",
				"pok",
				"pothachi",
				"pothoc",
				"potvych",
				"qalli",
				"qallim",
				"rach",
				"rasvim",
				"rauhiss",
				"renthisj",
				"rhyaex",
				"rhyisj",
				"rhyvos",
				"sauriv",
				"shafaer",
				"shar",
				"shuk",
				"sjach",
				"sjashukri",
				"sjek",
				"sjerit",
				"sjir",
				"ssearth",
				"ssej",
				"ssifisv",
				"ssissth",
				"sthyr",
				"strix",
				"strixiki",
				"sukriya",
				"sunathaer",
				"sveargith",
				"throtominarr",
				"thurgix",
				"thurirl",
				"thurkear",
				"tiamash",
				"tiathar",
				"tibur",
				"toovir",
				"troth",
				"tundar",
				"tuor",
				"turalisj",
				"turalisjth",
				"turasjir",
				"vaecaesin",
				"vaeri",
				"vaess",
				"vaex",
				"valeij",
				"valignat",
				"vargach",
				"vargus",
				"vayemniri",
				"versel",
				"versvesh",
				"veschik",
				"vorastrix",
				"vorel",
				"vorellim",
				"vrak",
				"vur",
				"vutha",
				"vyth",
				"waere",
				"waeth",
				"wux",
				"xorvintaal"
			],
			"particles": [
				"qal",
				"irn",
				"orn",
				"oth'",
				"va",
				"qa",
				"ia",
				"iss",
				"osh"
			],
			"alias": [
				"tymantheran",
				"yipyak"
			],
			"factor": 3
		},
		"deepspeech": {
			"title": "deepspeech",
			// Most words copied or modified from
			// https://lingojam.com/CommontoDwarvishTranslator
			"lexis": [
				"aat",
				"abakavith",
				"achthend",
				"achuak",
				"adreda",
				"alor",
				"alstgrana",
				"arboth",
				"arn",
				"ath",
				"avglaga",
				"avka",
				"avobi",
				"avrez",
				"avurtsi",
				"azlang",
				"badorank",
				"bathjert",
				"bavta",
				"beal",
				"blozwatan",
				"bod",
				"bodsith",
				"borla",
				"bosumr",
				"djor",
				"djorr",
				"dramath",
				"eom",
				"ertond",
				"ezol",
				"gamlormeth",
				"gelevan",
				"gemagal",
				"gerk",
				"hjandlom",
				"hrut",
				"hverth",
				"ialdra",
				"ialdrar",
				"imurt",
				"imurtr",
				"jarburrir",
				"jektor",
				"jektorgurd",
				"jektorigur",
				"jektraldr",
				"kolav",
				"konuxja",
				"krenl",
				"krugg",
				"kruggr",
				"legjan",
				"lether",
				"lurl",
				"lurlom",
				"lurlthjold",
				"lurlurt",
				"matmurzar",
				"merklesh",
				"morz",
				"morzr",
				"navlat",
				"neastlik",
				"nutha",
				"ommathur",
				"orgrad",
				"orthrumt",
				"orthrumtr",
				"orzra",
				"oved",
				"ovgathi",
				"rithar",
				"rothilr",
				"skegga",
				"skjurvjaklud",
				"slalig",
				"sloshtar",
				"sloshtard",
				"tjorn",
				"unge",
				"ungermoth",
				"ura",
				"uxja",
				"valbleth",
				"valblethr",
				"vethethaz",
				"vlitagana",
				"vold",
				"voldreg",
				"vothnak",
				"vrenka",
				"vrutan",
				"withaur",
				"wundstr",
				"yrja",
				"zarathag",
				"zirund",
				"zirundr",
				"zwatan"
			],
			"particles": [],
			"alias": [
				"deep speech"
			],
			"factor": 0
		},
		"infernal": {
			"title": "infernal",
			// Most words copied or modified from
			// https://wowpedia.fandom.com/wiki/Eredun
			"lexis": [
				"achor",
				"adare",
				"akimkurai",
				"akminkurai",
				"akreesh",
				"akris",
				"amanalar",
				"amanare",
				"amanemodas",
				"arakal",
				"arakalada",
				"archim",
				"archimtiros",
				"ashjraka",
				"ashjrakamas",
				"ashjrethul",
				"azgala",
				"azgalada",
				"azrathud",
				"ban",
				"belan",
				"belankar",
				"belaros",
				"benthadoom",
				"buras",
				"burasadare",
				"danashj",
				"enkil",
				"enkilgular",
				"enkilzar",
				"ered",
				"faramos",
				"galar",
				"golad",
				"gulamir",
				"gular",
				"kamil",
				"kamilgolad",
				"kanrethad",
				"karaman",
				"karkun",
				"kazile",
				"kieldaz",
				"kirasath",
				"kirestalak",
				"kurai",
				"maev",
				"maladath",
				"mannor",
				"mannorgulan",
				"matheredor",
				"melar",
				"melarnagas",
				"melarorah",
				"mishun",
				"mishunadare",
				"modas",
				"mordanas",
				"nagas",
				"nagasraka",
				"nash",
				"nazthagos",
				"naztheros",
				"normenoth",
				"nortalesh",
				"pathrebosh",
				"rakeesh",
				"rakir",
				"rakkan",
				"rakkas",
				"reesh",
				"refir",
				"rethul",
				"rethule",
				"revola",
				"revos",
				"romathis",
				"rukadare",
				"shazakiel",
				"sheekthrish",
				"sheetsah",
				"sheki",
				"shudas",
				"soran",
				"soranaman",
				"sorankar",
				"teamanare",
				"theramas",
				"thorje",
				"tichar",
				"ticharamir",
				"tiriosh",
				"tiros",
				"toralar",
				"urzul",
				"zekul",
				"zekulrakkas",
				"zennrakkan",
				"zennshi",
				"zilthuras"
			],
			"particles": [
				"al'",
				"al'",
				"al'",
				"al'",
				"al'",
				"al'",
				"al'",
				"al'",
				"al'"
			],
			"alias": [
				"devil"
			],
			"factor": 2
		},
		"primordial": {
			"title": "primordial",
			// Most words copied or modified from
			// https://lingojam.com/CommontoDwarvishTranslator
			"lexis": [
				"aav",
				"alr",
				"andtur",
				"askung",
				"avur",
				"baksmalk",
				"bal",
				"balr",
				"bjorgart",
				"bondra",
				"bort",
				"bortr",
				"dagr",
				"dehur",
				"djerg",
				"djergr",
				"dlizik",
				"druld",
				"dwjord",
				"dwjorgumal",
				"eigur",
				"erz",
				"erzan",
				"erzanr",
				"fraluv",
				"gebork",
				"genogan",
				"gerkun",
				"glaek",
				"gleen",
				"gog",
				"gotek",
				"goth",
				"gothr",
				"grazz",
				"grea",
				"grethir",
				"guthavok",
				"guthavokr",
				"halkbrelna",
				"herolstor",
				"hign",
				"horukneth",
				"hrendi",
				"hrendir",
				"humtje",
				"hvorbl",
				"inni",
				"ithorm",
				"ithormr",
				"jarlethurkon",
				"jarnjulbort",
				"javnung",
				"jerklirunslaak",
				"jommok",
				"jooki",
				"jookir",
				"kaeleth",
				"kjekje",
				"kralt",
				"kyrv",
				"kyrvr",
				"luglaus",
				"lurl",
				"lyr",
				"lyrglang",
				"lyrr",
				"migvulur",
				"mimm",
				"mimmal",
				"monmur",
				"nenn",
				"nothaar",
				"nunoff",
				"ogalthr",
				"olv",
				"orvrutanr",
				"othruf",
				"othyrth",
				"ott",
				"slok",
				"slokspral",
				"snarla",
				"theov",
				"tjuni",
				"tjunir",
				"torth",
				"trarzurjald",
				"ulvunr",
				"ungvliz",
				"ungvlizr",
				"unnlat",
				"vargunr",
				"varzank",
				"vavi",
				"vavir",
				"verol",
				"veroldr",
				"vlel",
				"vromungvro"
			],
			"particles": [],
			"alias": [
				"elemental",
				"auran",
				"aquan",
				"ignan",
				"rettan"
			],
			"factor": 0
		},
		"sylvan": {
			"title": "sylvan",
			// Most words copied or modified from
			// https://forgottenrealms.fandom.com/wiki/Elven_dictionary
			"lexis": [
				"aegiskeryn",
				"aerister",
				"aethen",
				"akhiilor",
				"aloun",
				"amakiir",
				"ammur",
				"ansrivarr",
				"arakhor",
				"armiel",
				"arselu",
				"auglathla",
				"bhin",
				"biir",
				"bwaelan",
				"calann",
				"cinnaelos",
				"cryshal",
				"damia",
				"darrdartha",
				"dhaerow",
				"durmista",
				"ebrath",
				"elgg",
				"erdel",
				"faer",
				"groef",
				"hethtalos",
				"hirdel",
				"holimion",
				"hond",
				"huan",
				"hurbryn",
				"huthammuth",
				"illunathros",
				"ilphelkiir",
				"iqua",
				"irinal",
				"ivaebhin",
				"kelytha",
				"kerym",
				"kiira",
				"kirthol",
				"kyre",
				"ladrother",
				"lalala",
				"laranlors",
				"liadon",
				"liyan",
				"lurleath",
				"malenti",
				"meliamne",
				"naes",
				"noromath",
				"nyrhlas",
				"nyrtlassa",
				"oloth",
				"pyesigen",
				"quessir",
				"raer",
				"relthwin",
				"renyth",
				"ruathimaer",
				"rum",
				"rysar",
				"sablaes",
				"saece",
				"sathu",
				"savalir",
				"selu",
				"shaedar",
				"shantar",
				"solicallor",
				"sreea",
				"srendaen",
				"ssussun",
				"taar",
				"talibund",
				"tammin",
				"taran",
				"tath",
				"telere",
				"tellarier",
				"tellyath",
				"thaethiira",
				"thiil",
				"tirith",
				"trazaethe",
				"uluvathaer",
				"vaelhar",
				"vaendaan",
				"vaendin",
				"velahr",
				"vyshaan",
				"wael",
				"walaxyrvaan",
				"xiloscient",
				"yyllethyn",
				"zenar",
				"zeranas"
			],
			"particles": [
				"ef",
				"byr",
				"hir",
				"ath-",
				"ai",
				"sa",
				"ol",
				"reb-",
				"thy-"
			],
			"alias": [
				"fey"
			],
			"factor": 5
		},
		"undercommon": {
			"title": "undercommon",
			// Most words copied or modified from
			// https://forgottenrealms.fandom.com/wiki/Drow_dictionary
			"lexis": [
				"abban",
				"abbil",
				"angardh",
				"araj",
				"asanque",
				"bae",
				"bauth",
				"belbol",
				"brorn",
				"caballin",
				"colbauth",
				"crinti",
				"darthiir",
				"dobluth",
				"dosst",
				"dosstan",
				"draa",
				"draada",
				"draghazar",
				"droc",
				"elamshin",
				"elendar",
				"elghinn",
				"feleal",
				"fhaazht",
				"golhyrr",
				"harl",
				"honglath",
				"hyrr",
				"ilharess",
				"ilharn",
				"ilindith",
				"inthigg",
				"jivvin",
				"khal",
				"khaless",
				"khazid",
				"kulg",
				"kyone",
				"kyorl",
				"kyorlin",
				"llar",
				"lueth",
				"malla",
				"mzild",
				"natha",
				"neideirra",
				"neirt",
				"nindyn",
				"noamuth",
				"obsul",
				"olist",
				"oloth",
				"orthae",
				"phindar",
				"phlar",
				"pholar",
				"phuul",
				"plynn",
				"qeshel",
				"qual",
				"quarthen",
				"ragar",
				"rathrae",
				"rivvil",
				"sargh",
				"sargtlin",
				"shavrak",
				"shea",
				"shrome",
				"streea",
				"taga",
				"talinth",
				"talthalra",
				"thae",
				"thaerra",
				"thalack",
				"thalra",
				"tinguin",
				"tuth",
				"uente",
				"ultrin",
				"ultrinnan",
				"usstan",
				"valsharess",
				"velkyn",
				"velve",
				"vidrinath",
				"wund",
				"xittalsh",
				"xorr",
				"xund",
				"xundus",
				"yath",
				"yathrin",
				"yathtallar",
				"yorn",
				"zedrinset",
				"zhah",
				"zhaun"
			],
			"particles": [
				"dro",
				"duk",
				"tak",
				"il",
				"zin-",
				"qu-",
				"uh",
				"uss",
				"akh-"
			],
			"alias": [
				"underdark"
			],
			"factor": 4
		},
		"fakefrench": {
			"title": "fakefrench",
			// Most words copied or modified from
			// https://www.generatormix.com/random-french-words-generator
			"lexis": [
				"aide",
				"aille",
				"aimait",
				"allons",
				"américains",
				"annonce",
				"appelles",
				"appris",
				"asseoir",
				"attendre",
				"aucun",
				"autrement",
				"avons",
				"beaucoup",
				"blanche",
				"certaine",
				"chez",
				"coffre",
				"connaissez",
				"connaître",
				"conneries",
				"contraire",
				"crains",
				"crime",
				"dégage",
				"déjà",
				"difficile",
				"emmène",
				"enfant",
				"extérieur",
				"fallait",
				"félicitations",
				"femmes",
				"feras",
				"file",
				"finir",
				"formidable",
				"fort",
				"frappé",
				"fusil",
				"garçons",
				"génial",
				"genoux",
				"grande",
				"honneur",
				"image",
				"intéressant",
				"jake",
				"joie",
				"leurs",
				"lycée",
				"maman",
				"manqué",
				"message",
				"met",
				"militaire",
				"moyens",
				"noire",
				"nul",
				"oublier",
				"ouest",
				"ouvre",
				"partez",
				"pas",
				"passera",
				"patron",
				"pensait",
				"personnes",
				"petit",
				"points",
				"premier",
				"presse",
				"preuves",
				"prochain",
				"projet",
				"puisse",
				"puissant",
				"queue",
				"ravi",
				"rencontré",
				"répondu",
				"reprendre",
				"retrouve",
				"revient",
				"rouge",
				"salut",
				"signer",
				"soldats",
				"sorte",
				"souris",
				"télé",
				"tenir",
				"fournir",
				"trés",
				"trouver",
				"tueur",
				"univers",
				"vidéo",
				"vient",
				"vrais"
			],
			"particles": [
				"en",
				"de",
				"pour",
				"le",
				"au-",
				"d'",
				"il",
				"à",
				"sur"
			],
			"alias": [],
			"factor": 3
		},
		"fakegerman": {
			"title": "fakegerman",
			// Most words copied or modified from
			// https://www.generatormix.com/random-german-words-generator
			"lexis": [
				"allem",
				"anderer",
				"anders",
				"angefangen",
				"beispiel",
				"bier",
				"blut",
				"brauchen",
				"brüder",
				"dein",
				"deshalb",
				"druck",
				"durch",
				"eher",
				"eigenen",
				"eingeladen",
				"erstes",
				"fand",
				"fantastisch",
				"fast",
				"fehler",
				"fern",
				"fertig",
				"frage",
				"frank",
				"freuen",
				"funktioniert",
				"gefällt",
				"geliebt",
				"geschlafen",
				"geschlagen",
				"gewehr",
				"glaube",
				"glückwunsch",
				"gutes",
				"haltet",
				"hand",
				"hasst",
				"heiß",
				"held",
				"hielt",
				"hoffentlich",
				"holen",
				"irgendetwas",
				"jemandem",
				"jungen",
				"kennst",
				"kennt",
				"knie",
				"kommen",
				"krankenhaus",
				"lehrer",
				"leiden",
				"lhrem",
				"lst",
				"monster",
				"namens",
				"ohne",
				"person",
				"plan",
				"planeten",
				"rechte",
				"rom",
				"ruhig",
				"sagten",
				"schätze",
				"schreiben",
				"schuld",
				"freitag",
				"schwer",
				"schwierig",
				"seine",
				"seiten",
				"senator",
				"solange",
				"spiel",
				"steckt",
				"stimmen",
				"super",
				"tag",
				"taten",
				"töte",
				"überleben",
				"unglaublich",
				"versuchte",
				"voller",
				"völlig",
				"weib",
				"weil",
				"weise",
				"weisst",
				"weit",
				"werd",
				"werfen",
				"wohnen",
				"wollt",
				"zeiten",
				"zeug",
				"zweite",
				"zeitgeist"
			],
			"particles": [
				"ich",
				"bin",
				"sie",
				"zu",
				"auf",
				"an",
				"du",
				"wir",
				"für"
			],
			"alias": [],
			"factor": 3
		},
		"fakeitalian": {
			"title": "fakeitalian",
			// Most words copied or modified from
			// https://www.generatormix.com/random-italian-words-generator
			"lexis": [
				"abby",
				"affrontare",
				"agenzia",
				"albert",
				"andiamo",
				"fratello",
				"non",
				"mastroianni",
				"tutti",
				"funyunsetti",
				"angolo",
				"apri",
				"ascoltato",
				"baciare",
				"braccia",
				"buonanotte",
				"cameriera",
				"campeggio",
				"carrie",
				"cassetto",
				"cazzata",
				"chiede",
				"circostanze",
				"colonnello",
				"combinato",
				"consegnare",
				"cooper",
				"corona",
				"credete",
				"desiderio",
				"dire",
				"distrutta",
				"dito",
				"dottor",
				"dovuto",
				"effetti",
				"ellie",
				"eroina",
				"facesse",
				"finestre",
				"fonte",
				"for",
				"freddo",
				"gentiluomo",
				"gioca",
				"gridare",
				"hey",
				"incontro",
				"indizio",
				"intendi",
				"jimmy",
				"leon",
				"libera",
				"litigato",
				"malato",
				"morirai",
				"museo",
				"naomi",
				"occhio",
				"offrire",
				"ottenere",
				"pesante",
				"portafoglio",
				"possano",
				"preferisco",
				"preparare",
				"promessa",
				"pulizie",
				"puntata",
				"puttane",
				"quartiere",
				"quelli",
				"radio",
				"rende",
				"revisione",
				"riuscite",
				"roma",
				"rotto",
				"salire",
				"saprai",
				"scoprire",
				"scorsa",
				"scusarmi",
				"sederti",
				"sembri",
				"servi",
				"settembre",
				"sociale",
				"sollievo",
				"sorpreso",
				"terribili",
				"torniamo",
				"trattamento",
				"troveremo",
				"utile",
				"vacanze",
				"vada",
				"vari",
				"vinto",
				"viviamo"
			],
			"particles": [
				"di",
				"del",
				"al",
				"il",
				"la",
				"in",
				"su",
				"da",
				"ai"
			],
			"alias": [],
			"factor": 3
		},
		"fakelatin": {
			"title": "fakelatin",
			// Most words copied or modified from
			// https://www.generatormix.com/random-latin-words-generator
			"lexis": [
				"adsum",
				"aegrotatio",
				"aegrus",
				"ager",
				"aliquis",
				"brevitas",
				"cicuta",
				"comburo",
				"comminuo",
				"conculco",
				"concupisco",
				"conscientia",
				"constupro",
				"contemplor",
				"corripio",
				"crepusculum",
				"defessus",
				"defetiscor",
				"defigo",
				"delecto",
				"demens",
				"derelinquo",
				"deus",
				"duro",
				"ego",
				"egrotatio",
				"emiror",
				"excrucio",
				"exigo",
				"expedio",
				"facio",
				"fas",
				"grando",
				"hesito",
				"hortor",
				"illis",
				"immanitas",
				"improbus",
				"impunitus",
				"incido",
				"infidus",
				"influo",
				"influxum",
				"insula",
				"insurgi",
				"insurgo",
				"insurrectum",
				"intumesco",
				"lacero",
				"lacerta",
				"maculosus",
				"mansuetus",
				"mellitus",
				"mens",
				"mentis",
				"ministro",
				"munimentum",
				"nasci",
				"nascor",
				"natus",
				"obdormio",
				"omnipotens",
				"onis",
				"opinio",
				"pactus",
				"peregrinus",
				"pia",
				"pica",
				"pium",
				"plebis",
				"posthabeo",
				"potens",
				"proletarius",
				"proprie",
				"propugnaculum",
				"purgatio",
				"quamquam",
				"quatenus",
				"quatinus",
				"rex",
				"rodoenus",
				"sanctus",
				"serius",
				"socius",
				"sophismata",
				"speciosus",
				"subito",
				"supernus",
				"surgo",
				"surrectum",
				"surrexi",
				"taedium",
				"temperantia",
				"teneo",
				"terminus",
				"uter",
				"utrius",
				"vociferor",
				"vulgus",
				"vulnus"
			],
			"particles": [
				"et",
				"hic",
				"quo",
				"ad",
				"ex",
				"ab",
				"ob",
				"per",
				"pro"
			],
			"alias": [],
			"factor": 3
		},
		"fakerussian": {
			"title": "fakerussian",
			// Most words copied or modified from
			// https://www.generatormix.com/random-russian-words-generator
			"lexis": [
				"avtor",
				"babushka",
				"beseda",
				"chas",
				"dengi",
				"devushka",
				"doktor",
				"dokument",
				"dom",
				"drug",
				"drugi",
				"dver",
				"golos",
				"golova",
				"gorod",
				"groznii",
				"gusto",
				"hleb",
				"hudozhnik",
				"igra",
				"imperskii",
				"institut",
				"interes",
				"izbrannii",
				"kabinet",
				"kachestvo",
				"koleno",
				"komnata",
				"kompaniya",
				"konets",
				"koridor",
				"kuhnya",
				"ladon",
				"leitenant",
				"litso",
				"logicheskii",
				"lopata",
				"mesto",
				"metr",
				"minuta",
				"molodaya",
				"moloko",
				"morozhenoe",
				"muzhik",
				"nabratsya",
				"nachalo",
				"nastoyaschii",
				"natknutsya",
				"nauka",
				"noch",
				"noga",
				"obeschanie",
				"obraschat",
				"okno",
				"otets",
				"pachka",
				"polovina",
				"posol",
				"pravda",
				"predshestvennik",
				"protsessor",
				"pyatsot",
				"rabota",
				"rasskaz",
				"razvitie",
				"rebyonok",
				"reshenie",
				"rodstvennii",
				"roman",
				"ryad",
				"samolet",
				"schet",
				"sila",
				"slovo",
				"sluzhba",
				"spokoistvie",
				"sponsor",
				"stalnoi",
				"stol",
				"storona",
				"strana",
				"supruzheskii",
				"svet",
				"techenie",
				"temperatura",
				"tezis",
				"trubka",
				"vibratsya",
				"voda",
				"voina",
				"voobsche",
				"vopros",
				"vosstanovlenie",
				"vrag",
				"vsemirnii",
				"vstrecha",
				"zanyatie",
				"zemlya",
				"zhena",
				"zhuchara"
			],
			"particles": [
				"da",
				"na",
				"ot",
				"i",
				"ne",
				"po",
				"do",
				"pro",
				"ty"
			],
			"alias": [],
			"factor": 3
		},
		"fakespanish": {
			"title": "fakespanish",
			// Most words copied or modified from
			// https://www.generatormix.com/random-spanish-words
			"lexis": [
				"abajo",
				"abrazo",
				"acabar",
				"acercarse",
				"acompañar",
				"acostarse",
				"agradecer",
				"alcalde",
				"arriba",
				"atrás",
				"autoridad",
				"averiguar",
				"barrio",
				"bonito",
				"bosillo",
				"broma",
				"bulto",
				"caballero",
				"camarero",
				"campana",
				"canción",
				"claro",
				"cliente",
				"cobrar",
				"conmigo",
				"corregir",
				"cosa",
				"costumbre",
				"cuaderno",
				"cuadra",
				"cuarto",
				"deporte",
				"descubrir",
				"devolver",
				"dirección",
				"dónde",
				"durar",
				"ejemplo",
				"enfermo",
				"entrar",
				"equipaje",
				"escribir",
				"escuela",
				"estómago",
				"estudiar",
				"extrañar",
				"extraño",
				"fósforo",
				"frontera",
				"hombre",
				"huésped",
				"jamás",
				"jardín",
				"joven",
				"juez",
				"kilómetro",
				"laudar",
				"levantar",
				"listo",
				"lleno",
				"mañana",
				"mediodía",
				"mentira",
				"merienda",
				"método",
				"mientras",
				"muerto",
				"nevar",
				"norte",
				"nunca",
				"obligar",
				"pariente",
				"patrón",
				"permiso",
				"picante",
				"pico",
				"pierna",
				"píldora",
				"planchar",
				"pluma",
				"pobre",
				"promesa",
				"receta",
				"recuerdo",
				"regalo",
				"régimen",
				"repente",
				"repitir",
				"reunión",
				"rodilla",
				"según",
				"señorita",
				"servir",
				"siempre",
				"silla",
				"sólo",
				"temprano",
				"tijeras",
				"tinta",
				"vestirse"
			],
			"particles": [
				"las",
				"la",
				"de",
				"des",
				"a",
				"con",
				"por",
				"el",
				"acá"
			],
			"alias": [],
			"factor": 3
		},
	};
	/* eslint-enable */
}

SCRIPT_EXTENSIONS.push(baseChatLanguages);
