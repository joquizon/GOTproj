$(document).ready(function() 
{
	console.log("winter is coming!");

for(var i = 0; i <109; i++)
	{
    	$("#0").clone().attr("id",i+1).appendTo("#holder");
	};



var charnames = 
		[
		maesteraemon = {linkname:"Maester_Aemon", og:"Aemon Maester",titlepic:"maester aemon",family:"targaryen",bg:"red",appearance1:"#5A5A5A",appearance2:"white",appearance3:"#C9A735",appearance4:"#5A5A5A",appearance5:"#5A5A5A",appearance6:"white",appearance7:"white"}

			,anguy = {linkname:"Anguy", og:"Anguy",titlepic:"anguy",family:"Brotherhood Without Banners",bg:"#DB7701",appearance1:"white",appearance2:"white",appearance3:"#5A5A5A",appearance4:"white",appearance5:"white",appearance6:"white",appearance7:"white"}

			,robinarryn   = {linkname:"Robin_Arryn", og:"Arryn Robin  ",titlepic:"robin arryn",family:"arryn",bg:"#5480E0",appearance1:"#5A5A5A",appearance2:"white",appearance3:"white",appearance4:"#5A5A5A",appearance5:"#5A5A5A",appearance6:"#5A5A5A",appearance7:"white"}

			,petyrbaelish = {linkname:"Petyr_Baelish", og:"Baelish Petyr",titlepic:"petyr baelish",family:"tully",bg:"#76BD88",appearance1:"black",appearance2:"black",appearance3:"black",appearance4:"black",appearance5:"black",appearance6:"black",appearance7:"black"}

			,joffreybaratheon = {linkname:"Joffrey_Baratheon", og:"Baratheon Joffrey",titlepic:"joffrey baratheon",family:"baratheon",bg:"#49803B",appearance1:"black",appearance2:"black",appearance3:"black",appearance4:"black",appearance5:"white",appearance6:"white",appearance7:"white"}

			,myrcellabaratheon = {linkname:"Myrcella_Baratheon", og:"Baratheon Myrcella",titlepic:"myrcella baratheon",family:"baratheon",bg:"#49803B",appearance1:"#5a5a5a",appearance2:"#5a5a5a",appearance3:"white",appearance4:"white",appearance5:"#5a5a5a",appearance6:"#C9A735",appearance7:"white"}

			,renlybaratheon = {linkname:"Renly_Baratheon", og:"Baratheon Renly",titlepic:"renly baratheon",family:"baratheon",bg:"#49803B",appearance1:"#5A5A5A",appearance2:"#5A5A5A",appearance3:"white",appearance4:"white",appearance5:"white",appearance6:"white",appearance7:"white"}

			,robertbaratheon = {linkname:"Robert_Baratheon", og:"Baratheon Robert",titlepic:"robert baratheon",family:"baratheon",bg:"#49803B",appearance1:"black",appearance2:"white",appearance3:"white",appearance4:"white",appearance5:"white",appearance6:"white",appearance7:"white"}

			,selysebaratheon = {linkname:"Selyse_Baratheon", og:"Baratheon Selyse",titlepic:"selyse baratheon",family:"baratheon",bg:"#49803B",appearance1:"white",appearance2:"#C9A735",appearance3:"#C9A735",appearance4:"#5A5A5A",appearance5:"#5A5A5A",appearance6:"white",appearance7:"white"}

			,shireenbaratheon = {linkname:"Shireen_Baratheon", og:"Baratheon Shireen",titlepic:"shireen baratheon",family:"baratheon",bg:"#49803B",appearance1:"white",appearance2:"white",appearance3:"#5A5A5A",appearance4:"#5A5A5A",appearance5:"#5A5A5A",appearance6:"white",appearance7:"white"}

			,stannisbaratheon = {linkname:"Stannis_Baratheon", og:"Baratheon Stannis",titlepic:"stannis baratheon",family:"baratheon",bg:"#49803B",appearance1:"white",appearance2:"black",appearance3:"black",appearance4:"black",appearance5:"black",appearance6:"white",appearance7:"white"}

			,tommenbaratheon = {linkname:"Tommen_Baratheon", og:"Baratheon Tommen",titlepic:"tommen baratheon",family:"baratheon",bg:"#49803B",appearance1:"#5a5a5a",appearance2:"#5a5a5a",appearance3:"white",appearance4:"#5a5a5a",appearance5:"black",appearance6:"black",appearance7:"white"}

			,ramsaybolton = {linkname:"Ramsay_Bolton", og:"Bolton Ramsay",titlepic:"ramsay bolton",family:"bolton",bg:"#A64260",appearance1:"white",appearance2:"white",appearance3:"#5a5a5a",appearance4:"black",appearance5:"black",appearance6:"black",appearance7:"white"}

			,roosebolton = {linkname:"Roose_Bolton", og:"Bolton Roose",titlepic:"roose bolton",family:"bolton",bg:"#A64260",appearance1:"white",appearance2:"#5a5a5a",appearance3:"#5a5a5a",appearance4:"#5a5a5a",appearance5:"black",appearance6:"black",appearance7:"white"}

			,bronn= {linkname:"Bronn", og:"Bronn",titlepic:"bronn",family:"lannister",bg:"#FF4A24",appearance1:"#5a5a5a",appearance2:"black",appearance3:"black",appearance4:"black",appearance5:"black",appearance6:"black",appearance7:"black"}

			,rodrikcassel = {linkname:"Rodrik_Cassel", og:"Cassel Rodrik",titlepic:"rodrik cassel",family:"stark",bg:"#A1C1C6",appearance1:"#5A5A5A",appearance2:"#5A5A5A",appearance3:"white",appearance4:"white",appearance5:"white",appearance6:"#5A5A5A",appearance7:"white"}

			,gregorclegane = {linkname:"Gregor_Clegane", og:"Clegane Gregor",titlepic:"gregor clegane",family:"lannister",bg:"#FF4A24",appearance1:"#5a5a5a",appearance2:"#5a5a5a",appearance3:"white",appearance4:"#5a5a5a",appearance5:"#5a5a5a",appearance6:"#5a5a5a",appearance7:"white"}

			,sandorclegane = {linkname:"Sandor_Clegane", og:"Clegane Sandor",titlepic:"sandor clegane",family:" ",bg:"red",appearance1:"black",appearance2:"black",appearance3:"black",appearance4:"black",appearance5:"white",appearance6:"black",appearance7:"black"}

			,bericdondarrion  = {linkname:"Beric_Dondarrion", og:"Dondarrion Beric ",titlepic:"beric dondarrion",family:"Brotherhood Without Banners",bg:"#DB7701",appearance1:"#5A5A5A",appearance2:"white",appearance3:"#5A5A5A",appearance4:"white",appearance5:"white",appearance6:"#5A5A5A",appearance7:"white"}

			,doreah= {linkname:"Doreah", og:"Doreah",titlepic:"doreah",family:"targaryen",bg:"red",appearance1:"#5A5A5A",appearance2:"#5A5A5A",appearance3:"white",appearance4:"white",appearance5:"white",appearance6:"white",appearance7:"white"}

			,khaldrogo = {linkname:"Khal_Drogo", og:"Drogo Khal",titlepic:"khal drogo",family:"dothraki",bg:"#9C9057",appearance1:"black",appearance2:"black",appearance3:"white",appearance4:"white",appearance5:"white",appearance6:"white",appearance7:"white"}

			,lotharfrey  = {linkname:"Lothar_Frey", og:"Frey Lothar ",titlepic:"lothar frey",family:"frey",bg:"#AD8CD2",appearance1:"white",appearance2:"white",appearance3:"#5A5A5A",appearance4:"white",appearance5:"white",appearance6:"#5A5A5A",appearance7:"white"}

			,gendry= {linkname:"Gendry", og:"Gendry",titlepic:"gendry",family:"baratheon",bg:"#49803B",appearance1:"#5a5a5a",appearance2:"#5a5a5a",appearance3:"black",appearance4:"white",appearance5:"white",appearance6:"white",appearance7:"white"}

			,tormundgiantsbane = {linkname:"Tormund_Giantsbane", og:"Giantsbane Tormund",titlepic:"tormund giantsbane",family:"free folk",bg:"#78C0E9",appearance1:"white",appearance2:"white",appearance3:"#5a5a5a",appearance4:"black",appearance5:"black",appearance6:"black",appearance7:"black"}

			,gilly= {linkname:"Gilly", og:"Gilly",titlepic:"gilly",family:"free folk",bg:"#78C0E9",appearance1:"white",appearance2:"#5a5a5a",appearance3:"#5a5a5a",appearance4:"black",appearance5:"black",appearance6:"black",appearance7:"black"}

			,grenn= {linkname:"Grenn", og:"Grenn",titlepic:"grenn",family:"Night's Watch",bg:"#737CB6",appearance1:"#5a5a5a",appearance2:"#5a5a5a",appearance3:"#5a5a5a",appearance4:"#5a5a5a",appearance5:"white",appearance6:"white",appearance7:"white"}

			,theongreyjoy = {linkname:"Theon_Greyjoy", og:"Greyjoy Theon",titlepic:"theon greyjoy",family:"greyjoy",bg:"#A6A6A6",appearance1:"black",appearance2:"black",appearance3:"black",appearance4:"black",appearance5:"black",appearance6:"black",appearance7:"black"}

			,yaragreyjoy = {linkname:"Yara_Greyjoy", og:"Greyjoy Yara",titlepic:"yara greyjoy",family:"greyjoy",bg:"#A6A6A6",appearance1:"white",appearance2:"#5A5A5A",appearance3:"#C9A735",appearance4:"#C9A735",appearance5:"white",appearance6:"#5A5A5A",appearance7:"#5A5A5A"}

			,jaqenhghar = {linkname:"Jaqen_Hghar", og:"Hghar Jaqen",titlepic:"jaqen hghar",family:" ",bg:"red",appearance1:"#C9A735",appearance2:"#5a5a5a",appearance3:"white",appearance4:"white",appearance5:"black",appearance6:"black",appearance7:"white"}

			,highsparrow = {linkname:"High_Sparrow", og:"High Sparrow",titlepic:"high sparrow",family:" ",bg:"red",appearance1:"white",appearance2:"white",appearance3:"white",appearance4:"white",appearance5:"#5a5a5a",appearance6:"black",appearance7:"white"}

			,hodor= {linkname:"Hodor", og:"Hodor",titlepic:"hodor",family:"stark",bg:"#A1C1C6",appearance1:"#5a5a5a",appearance2:"#5a5a5a",appearance3:"#5a5a5a",appearance4:"#5a5a5a",appearance5:"white",appearance6:"#5a5a5a",appearance7:"white"}

			,dontoshollard  = {linkname:"Dontos_Hollard", og:"Hollard Dontos ",titlepic:"dontos hollard",family:"baratheon",bg:"#49803B",appearance1:"white",appearance2:"#5A5A5A",appearance3:"white",appearance4:"#5A5A5A",appearance5:"white",appearance6:"white",appearance7:"white"}

			,areohotah = {linkname:"Areo_Hotah", og:"Hotah Areo",titlepic:"areo hotah",family:"martell",bg:"#8BBD5C",appearance1:"white",appearance2:"white",appearance3:"white",appearance4:"white",appearance5:"#5A5A5A",appearance6:"#5A5A5A",appearance7:"white"}

			,irri= {linkname:"Irri", og:"Irri",titlepic:"irri",family:"stark",bg:"#A1C1C6",appearance1:"#5A5A5A",appearance2:"#5A5A5A",appearance3:"white",appearance4:"white",appearance5:"white",appearance6:"white",appearance7:"white"}

			,rickardkarstark = {linkname:"Karstark_Rickard", og:"Rickard Karstark",titlepic:"rickard karstark",family:"stark",bg:"#A1C1C6",appearance1:"$5A5A5A",appearance2:"#5A5A5A",appearance3:"$5A5A5A",appearance4:"white",appearance5:"white",appearance6:"white",appearance7:"white"}

			,kovarro= {linkname:"Kovarro", og:"Kovarro",titlepic:"kovarro",family:"dothraki",bg:"#9C9057",appearance1:"white",appearance2:"#5A5A5A",appearance3:"white",appearance4:"white",appearance5:"white",appearance6:"white",appearance7:"white"}

			,cerseilannister = {linkname:"Cersei_Lannister", og:"Lannister Cersei",titlepic:"cersei lannister",family:"lannister",bg:"#FF4A24",appearance1:"black",appearance2:"black",appearance3:"black",appearance4:"black",appearance5:"black",appearance6:"black",appearance7:"black"}

			,jaimelannister = {linkname:"Jaime_Lannister", og:"Lannister Jaime",titlepic:"jaime lannister",family:"lannister",bg:"#FF4A24",appearance1:"black",appearance2:"black",appearance3:"black",appearance4:"black",appearance5:"black",appearance6:"black",appearance7:"black"}

			,kevanlannister = {linkname:"Kevan_Lannister", og:"Lannister Kevan",titlepic:"kevan lannister",family:"lannister",bg:"#FF4A24",appearance1:"#5a5a5a",appearance2:"#C9A735",appearance3:"white",appearance4:"white",appearance5:"#5a5a5a",appearance6:"#5a5a5a",appearance7:"white"}

			,lancellannister = {linkname:"Lancel_Lannister", og:"Lannister Lancel",titlepic:"lancel lannister",family:"lannister",bg:"#FF4A24",appearance1:"#5a5a5a",appearance2:"#5a5a5a",appearance3:"white",appearance4:"white",appearance5:"#5a5a5a",appearance6:"#5a5a5a",appearance7:"white"}

			,tyrionlannister = {linkname:"Tyrion_Lannister", og:"Lannister Tyrion",titlepic:"tyrion lannister",family:"lannister",bg:"#FF4A24",appearance1:"black",appearance2:"black",appearance3:"black",appearance4:"black",appearance5:"black",appearance6:"black",appearance7:"black"}

			,tywinlannister = {linkname:"Tywin_Lannister", og:"Lannister Tywin",titlepic:"tywin lannister",family:"lannister",bg:"#FF4A24",appearance1:"#5a5a5a",appearance2:"black",appearance3:"black",appearance4:"black",appearance5:"black",appearance6:"white",appearance7:"white"}

			,locke= {linkname:"Locke", og:"Locke",titlepic:"locke",family:"bolton",bg:"#A64260",appearance1:"white",appearance2:"white",appearance3:"#5A5A5A",appearance4:"#5A5A5A",appearance5:"white",appearance6:"white",appearance7:"white"}						

			,hizdahrzoloraq = {linkname:"Hizdahr_zo_Loraq", og:"zo Hizdahr Loraq",titlepic:"hizdahr zo loraq",family:"targaryen",bg:"red",appearance1:"white",appearance2:"white",appearance3:"white",appearance4:"#5A5A5A",appearance5:"#5A5A5A",appearance6:"white",appearance7:"white"}						

			,maesterluwin = {linkname:"Maester_Luwin", og:"Luwin Maester",titlepic:"maester luwin",family:"stark",bg:"#A1C1C6",appearance1:"#5A5A5A",appearance2:"#5A5A5A",appearance3:"white",appearance4:"white",appearance5:"white",appearance6:"white",appearance7:"white"}

			,marei= {linkname:"Marei", og:"Marei",titlepic:"marei",family:" ",bg:"red",appearance1:"white",appearance2:"#5A5A5A",appearance3:"#5A5A5A",appearance4:"#5A5A5A",appearance5:"#5A5A5A",appearance6:"#5A5A5A",appearance7:"#5A5A5A"}

			,bowenmarsh = {linkname:"Bowen_Marsh", og:"Marsh Bowen",titlepic:"bowen marsh",family:"Night's Watch",bg:"#737CB6",appearance1:"white",appearance2:"white",appearance3:"white",appearance4:"white",appearance5:"#5A5A5A",appearance6:"#5A5A5A",appearance7:"white"}

		,oberynmartell = {linkname:"Oberyn_Martell", og:"Martell Oberyn",titlepic:"oberyn martell",family:"martell",bg:"#8BBD5C",appearance1:"white",appearance2:"white",appearance3:"white",appearance4:"#5A5A5A",appearance5:"white",appearance6:"white",appearance7:"white"}

			,melisandre= {linkname:"Melisandre", og:"Melisandre",titlepic:"melisandre",family:"baratheon",bg:"#49803B",appearance1:"white",appearance2:"black",appearance3:"black",appearance4:"black",appearance5:"black",appearance6:"black",appearance7:"white"}

			,missandei= {linkname:"Missandei", og:"Missandei",titlepic:"missandei",family:"targaryen",bg:"red",appearance1:"white",appearance2:"white",appearance3:"#5a5a5a",appearance4:"#5a5a5a",appearance5:"black",appearance6:"black",appearance7:"black"}

			,septamordane = {linkname:"Septa_Mordane", og:"Mordane Septa",titlepic:"septa mordane",family:"stark",bg:"#A1C1C6",appearance1:"#5A5A5A",appearance2:"white",appearance3:"white",appearance4:"white",appearance5:"white",appearance6:"white",appearance7:"white"}

			,jeormormont = {linkname:"Jeor_Mormont", og:"Mormont Jeor",titlepic:"jeor mormont",family:"Night's Watch",bg:"#737CB6",appearance1:"#5a5a5a",appearance2:"black",appearance3:"black",appearance4:"white",appearance5:"white",appearance6:"white",appearance7:"white"}

			,jorahmormont = {linkname:"Jorah_Mormont", og:"Mormont Jorah",titlepic:"jorah mormont",family:"targaryen",bg:"red",appearance1:"black",appearance2:"black",appearance3:"black",appearance4:"black",appearance5:"black",appearance6:"black",appearance7:"black"}

			,myranda= {linkname:"Myranda", og:"Myranda",titlepic:"myranda",family:"bolton",bg:"#A64260",appearance1:"white",appearance2:"white",appearance3:"#5A5A5A",appearance4:"#5A5A5A",appearance5:"#5A5A5A",appearance6:"#5A5A5A",appearance7:"white"}

			,daarionaharis = {linkname:"Daario_Naharis", og:"Naharis Daario",titlepic:"daario naharis",family:"targaryen",bg:"red",appearance1:"white",appearance2:"white",appearance3:"#5a5a5a",appearance4:"#5a5a5a",appearance5:"black",appearance6:"black",appearance7:"white"}

			,olly= {linkname:"Olly", og:"Olly",titlepic:"olly",family:"Night's Watch",bg:"#737CB6",appearance1:"white",appearance2:"white",appearance3:"white",appearance4:"#5A5A5A",appearance5:"#5A5A5A",appearance6:"#5A5A5A",appearance7:"white"}

			,olyvar= {linkname:"Olyvar", og:"Olyvar",titlepic:"olyvar",family:" ",bg:"red",appearance1:"white",appearance2:"white",appearance3:"#5A5A5A",appearance4:"#5A5A5A",appearance5:"#5A5A5A",appearance6:"white",appearance7:"white"}

			,orell= {linkname:"Orell", og:"Orell",titlepic:"orell",family:"free folk",bg:"#78C0E9",appearance1:"white",appearance2:"white",appearance3:"#5A5A5A",appearance4:"white",appearance5:"white",appearance6:"white",appearance7:"white"}

			,osha= {linkname:"Osha", og:"Osha",titlepic:"osha",family:"stark",bg:"#A1C1C6",appearance1:"#5A5A5A",appearance2:"#5A5A5A",appearance3:"white",appearance4:"white",appearance5:"white",appearance6:"#5A5A5A",appearance7:"white"}

			,podrickpayne = {linkname:"Podrick_Payne", og:"Payne Podrick",titlepic:"podrick payne",family:" ",bg:"red",appearance1:"white",appearance2:"#5A5A5A",appearance3:"#5A5A5A",appearance4:"#5A5A5A",appearance5:"#5A5A5A",appearance6:"#5A5A5A",appearance7:"white"}

			,hotpie = {linkname:"Pie_Hot", og:"Pie Hot",titlepic:"hot pie",family:" ",bg:"red",appearance1:"#C9A735",appearance2:"#5a5a5a",appearance3:"#5a5a5a",appearance4:"#C9A735",appearance5:"white",appearance6:"white",appearance7:"white"}

			,maesterpycelle = {linkname:"Maester_Pycelle", og:"Pycelle Maester",titlepic:"maester pycelle",family:"baratheon",bg:"#49803B",appearance1:"#5a5a5a",appearance2:"#5a5a5a",appearance3:"#5a5a5a",appearance4:"#5a5a5a",appearance5:"#5a5a5a",appearance6:"#5a5a5a",appearance7:"white"}

			,pypar= {linkname:"Pypar", og:"Pypar",titlepic:"pypar",family:"Night's Watch",bg:"#737CB6",appearance1:"#C9A735",appearance2:"white",appearance3:"#C9A735",appearance4:"#5a5a5a",appearance5:"white",appearance6:"white",appearance7:"white"}

			,qotho= {linkname:"Qotho", og:"Qotho",titlepic:"qotho",family:"dothraki",bg:"#9C9057",appearance1:"#5A5A5A",appearance2:"white",appearance3:"white",appearance4:"white",appearance5:"white",appearance6:"white",appearance7:"white"}

			,qyburn= {linkname:"Qyburn", og:"Qyburn",titlepic:"qyburn",family:" ",bg:"red",appearance1:"white",appearance2:"white",appearance3:"#5A5A5A",appearance4:"#5A5A5A",appearance5:"#5A5A5A",appearance6:"#5A5A5A",appearance7:"white"}

			,rakharo= {linkname:"Rakharo", og:"Rakharo",titlepic:"rakharo",family:"targaryen",bg:"red",appearance1:"#5A5A5A",appearance2:"#5A5A5A",appearance3:"white",appearance4:"white",appearance5:"white",appearance6:"white",appearance7:"white"}

			,rast= {linkname:"Rast", og:"Rast",titlepic:"rast",family:"Night's Watch",bg:"#737CB6",appearance1:"#5A5A5A",appearance2:"white",appearance3:"#5A5A5A",appearance4:"#5a5a5a",appearance5:"white",appearance6:"white",appearance7:"white"}

			,jojenreed = {linkname:"Jojen_Reed", og:"Reed Jojen",titlepic:"jojen reed",family:"stark",bg:"#A1C1C6",appearance1:"white",appearance2:"white",appearance3:"#5A5A5A",appearance4:"#5A5A5A",appearance5:"white",appearance6:"white",appearance7:"white"}

			,meerareed = {linkname:"Meera_Reed", og:"Reed Meera",titlepic:"meera reed",family:"stark",bg:"#A1C1C6",appearance1:"white",appearance2:"white",appearance3:"#5A5A5A",appearance4:"#5A5A5A",appearance5:"white",appearance6:"#5A5A5A",appearance7:"white"}

			,blackwalderrivers = {linkname:"Black_Walder_Rivers", og:"Walder Black Rivers",titlepic:"black walder rivers",family:"frey",bg:"#AD8CD2",appearance1:"white",appearance2:"white",appearance3:"#5A5A5A",appearance4:"white",appearance5:"white",appearance6:"#5A5A5A",appearance7:"white"}

			,ros= {linkname:"Ros", og:"Ros",titlepic:"ros",family:"targaryen",bg:"red",appearance1:"#5A5A5A",appearance2:"#5A5A5A",appearance3:"white",appearance4:"white",appearance5:"white",appearance6:"white",appearance7:"white"}

			,ellariasand = {linkname:"Ellaria_Sand", og:"Sand Ellaria",titlepic:"ellaria sand",family:"martell",bg:"#8BBD5C",appearance1:"white",appearance2:"white",appearance3:"white",appearance4:"#5a5a5a",appearance5:"black",appearance6:"black",appearance7:"black"}

			,nymeriasand = {linkname:"Nymeria_Sand", og:"Sand Nymeria",titlepic:"nymeria sand",family:"martell",bg:"#8BBD5C",appearance1:"white",appearance2:"white",appearance3:"white",appearance4:"white",appearance5:"#5A5A5A",appearance6:"#5A5A5A",appearance7:"#5A5A5A"}

			,obarasand = {linkname:"Obara_Sand", og:"Sand Obara",titlepic:"obara sand",family:"martell",bg:"#8BBD5C",appearance1:"white",appearance2:"white",appearance3:"white",appearance4:"white",appearance5:"#5A5A5A",appearance6:"#5A5A5A",appearance7:"white"}

			,tyenesand = {linkname:"Tyene_Sand", og:"Sand Tyene",titlepic:"tyene sand",family:"martell",bg:"#8BBD5C",appearance1:"white",appearance2:"white",appearance3:"white",appearance4:"white",appearance5:"#5A5A5A",appearance6:"#5A5A5A",appearance7:"#5A5A5A"}

			,davosseaworth = {linkname:"Seaworth_Davos", og:"Seaworth Davos",titlepic:"davos seaworth",family:"stark",bg:"#A1C1C6",appearance1:"white",appearance2:"black",appearance3:"black",appearance4:"black",appearance5:"black",appearance6:"black",appearance7:"black"}

			,barristanselmy = {linkname:"Barristan_Selmy", og:"Selmy Barristan",titlepic:"barristan selmy",family:"targaryen",bg:"red",appearance1:"#5A5A5A",appearance2:"white",appearance3:"#5A5A5A",appearance4:"#5A5A5A",appearance5:"#5A5A5A",appearance6:"white",appearance7:"white"}

			,shae= {linkname:"Shae", og:"Shae",titlepic:"shae",family:"targaryen",bg:"red",appearance1:"#5a5a5a",appearance2:"black",appearance3:"black",appearance4:"black",appearance5:"white",appearance6:"white",appearance7:"white"}

			,janosslynt = {linkname:"Janos_Slynt", og:"Slynt Janos",titlepic:"janos slynt",family:"Night's Watch",bg:"#737CB6",appearance1:"#5A5A5A",appearance2:"#5A5A5A",appearance3:"white",appearance4:"#5A5A5A",appearance5:"#5A5A5A",appearance6:"white",appearance7:"white"}

			,jonsnow = {linkname:"Jon_Snow", og:"Snow Jon",titlepic:"jon snow",family:"stark",bg:"#A1C1C6",appearance1:"black",appearance2:"black",appearance3:"black",appearance4:"black",appearance5:"black",appearance6:"black",appearance7:"black"}

			,aryastark = {linkname:"Arya_Stark", og:"Stark Arya",titlepic:"arya stark",family:"stark",bg:"#A1C1C6",appearance1:"black",appearance2:"black",appearance3:"black",appearance4:"black",appearance5:"black",appearance6:"black",appearance7:"black"}

			,branstark = {linkname:"Bran_Stark", og:"Stark Bran",titlepic:"bran stark",family:"stark",bg:"#A1C1C6",appearance1:"black",appearance2:"black",appearance3:"black",appearance4:"black",appearance5:"white",appearance6:"black",appearance7:"black"}

			,catelynstark = {linkname:"Catelyn_Stark", og:"Stark Catelyn",titlepic:"catelyn stark",family:"stark",bg:"#A1C1C6",appearance1:"black",appearance2:"black",appearance3:"black",appearance4:"white",appearance5:"white",appearance6:"white",appearance7:"white"}

			,nedstark = {linkname:"Ned_Stark", og:"Stark Ned",titlepic:"eddard stark",family:"stark",bg:"#A1C1C6",appearance1:"black",appearance2:"white",appearance3:"white",appearance4:"white",appearance5:"white",appearance6:"#5A5A5A",appearance7:"white"}

			,rickonstark = {linkname:"Rickon_Stark", og:"Stark Rickon",titlepic:"rickon stark",family:"stark",bg:"#A1C1C6",appearance1:"#5A5A5A",appearance2:"#5A5A5A",appearance3:"white",appearance4:"white",appearance5:"white",appearance6:"#5A5A5A",appearance7:"white"}

			,robbstark = {linkname:"Robb_Stark", og:"Stark Robb",titlepic:"robb stark",family:"stark",bg:"#A1C1C6",appearance1:"black",appearance2:"black",appearance3:"black",appearance4:"white",appearance5:"white",appearance6:"white",appearance7:"white"}

			,sansastark = {linkname:"Sansa_Stark", og:"Stark Sansa",titlepic:"sansa stark",family:"stark",bg:"#A1C1C6",appearance1:"black",appearance2:"black",appearance3:"black",appearance4:"black",appearance5:"black",appearance6:"black",appearance7:"black"}

			,talisastark = {linkname:"Talisa_Stark", og:"Stark Talisa",titlepic:"talisa stark",family:"stark",bg:"#A1C1C6",appearance1:"white",appearance2:"#5a5a5a",appearance3:"black",appearance4:"white",appearance5:"white",appearance6:"white",appearance7:"white"}

			,daenerystargaryen = {linkname:"Daenerys_Targaryen", og:"Targaryen Daenerys",titlepic:"daenerys targaryen",family:"targaryen",bg:"red",appearance1:"black",appearance2:"black",appearance3:"black",appearance4:"black",appearance5:"black",appearance6:"black",appearance7:"black"}

			,viserystargaryen = {linkname:"Viserys_Targaryen", og:"Targaryen Viserys",titlepic:"viserys targaryen",family:"targaryen",bg:"red",appearance1:"black",appearance2:"white",appearance3:"white",appearance4:"white",appearance5:"white",appearance6:"white",appearance7:"white"}

			,tarthbrienneof  = {linkname:"Brienne_of_Tarth", og:"Tarth Brienne of ",titlepic:"brienne of tarth",family:"stark",bg:"#A1C1C6",appearance1:"white",appearance2:"#5a5a5a",appearance3:"#5a5a5a",appearance4:"black",appearance5:"black",appearance6:"black",appearance7:"black"}

			,tarlysamwell = {linkname:"Tarly_Samwell", og:"Samwell Tarly",titlepic:"samwell tarly",family:"Night's Watch",bg:"#737CB6",appearance1:"#5a5a5a",appearance2:"black",appearance3:"black",appearance4:"black",appearance5:"black",appearance6:"black",appearance7:"black"}	

			,thesecondhighsepton = {linkname:"High_Septon_(After_the_riot_of_King%27s_Landing)", og:"the second High Septon",titlepic:"the second high septon",family:"targaryen",bg:"red",appearance1:"white",appearance2:"white",appearance3:"#5A5A5A",appearance4:"#5A5A5A",appearance5:"#5A5A5A",appearance6:"white",appearance7:"white"}

			,alliserthorne = {linkname:"Alliser_Thorne", og:"Thorne Alliser",titlepic:"alliser thorne",family:"Night's Watch",bg:"#737CB6",appearance1:"#5a5a5a",appearance2:"white",appearance3:"white",appearance4:"#5a5a5a",appearance5:"#5a5a5a",appearance6:"#5a5a5a",appearance7:"white"}

			,thorosmyrof  = {linkname:"Thoros_of_Myr", og:"Myr Thoros of ",titlepic:"thoros of myr",family:"Brotherhood Without Banners",bg:"#DB7701",appearance1:"white",appearance2:"white",appearance3:"#5A5A5A",appearance4:"#5A5A5A",appearance5:"#5A5A5A",appearance6:"#5A5A5A",appearance7:"white"}

			,eddisontollett = {linkname:"Eddison_Tollett", og:"Tollett Eddison",titlepic:"eddison tollett",family:"stark",bg:"#A1C1C6",appearance1:"white",appearance2:"#5A5A5A",appearance3:"#5A5A5A",appearance4:"#5A5A5A",appearance5:"#5A5A5A",appearance6:"#5A5A5A",appearance7:"white"}

			,meryntrant = {linkname:"Meryn_Trant", og:"Trant Meryn",titlepic:"meryn trant",family:"targaryen",bg:"red",appearance1:"#5a5a5a",appearance2:"#5a5a5a",appearance3:"#5a5a5a",appearance4:"#5a5a5a",appearance5:"#5a5a5a",appearance6:"white",appearance7:"white"}

			,bryndentully  = {linkname:"Brynden_Tully", og:"Tully Brynden ",titlepic:"brynden tully",family:"tully",bg:"#76BD88",appearance1:"white",appearance2:"white",appearance3:"#5A5A5A",appearance4:"#5A5A5A",appearance5:"#5A5A5A",appearance6:"#5A5A5A",appearance7:"white"}

			,edmuretully  = {linkname:"Edmure_Tully", og:"Tully Edmure ",titlepic:"edmure tully",family:"tully",bg:"#76BD88",appearance1:"white",appearance2:"white",appearance3:"#5A5A5A",appearance4:"#5A5A5A",appearance5:"#5A5A5A",appearance6:"#5A5A5A",appearance7:"white"}

			,lorastyrell = {linkname:"Loras_Tyrell", og:"Tyrell Loras",titlepic:"loras tyrell",family:"tyrell",bg:"#AD5DAB",appearance1:"#C9A735",appearance2:"#5a5a5a",appearance3:"#5a5a5a",appearance4:"white",appearance5:"white",appearance6:"#5a5a5a",appearance7:"#5A5A5A"}

			,macetyrell = {linkname:"Mace_Tyrell", og:"Tyrell Mace",titlepic:"mace tyrell",family:"tyrell",bg:"#AD5DAB",appearance1:"white",appearance2:"white",appearance3:"white",appearance4:"#5A5A5A",appearance5:"#5A5A5A",appearance6:"#5A5A5A",appearance7:"white"}

			,margaerytyrell = {linkname:"Margaery_Tyrell", og:"Tyrell Margaery",titlepic:"margaery tyrell",family:"tyrell",bg:"#AD5DAB",appearance1:"white",appearance2:"black",appearance3:"black",appearance4:"black",appearance5:"black",appearance6:"black",appearance7:"white"}

			,olennatyrell = {linkname:"Olenna_Tyrell", og:"Tyrell Olenna",titlepic:"olenna tyrell",family:"tyrell",bg:"#AD5DAB",appearance1:"white",appearance2:"white",appearance3:"#5A5A5A",appearance4:"#5A5A5A",appearance5:"#5A5A5A",appearance6:"#5A5A5A",appearance7:"#5A5A5A"}

			,septaunella = {linkname:"Septa_Unella", og:"Unella Septa",titlepic:"septa unella",family:"faith militant",bg:"#408A75",appearance1:"white",appearance2:"white",appearance3:"white",appearance4:"white",appearance5:"#5A5A5A",appearance6:"#5A5A5A",appearance7:"white"}

			,varys= {linkname:"Varys", og:"Varys",titlepic:"varys",family:"targaryen",bg:"red",appearance1:"#5a5a5a",appearance2:"black",appearance3:"black",appearance4:"black",appearance5:"black",appearance6:"black",appearance7:"black"}

			,waif= {linkname:"Waif", og:"Waif",titlepic:"waif",family:"targaryen",bg:"red",appearance1:"white",appearance2:"white",appearance3:"white",appearance4:"white",appearance5:"#5A5A5A",appearance6:"#5A5A5A",appearance7:"white"}

			,greyworm = {linkname:"Grey_Worm", og:"Worm Grey",titlepic:"grey worm",family:"targaryen",bg:"red",appearance1:"white",appearance2:"white",appearance3:"#5A5A5A",appearance4:"#5A5A5A",appearance5:"#5A5A5A",appearance6:"#5A5A5A",appearance7:"white"}

			,othellyarwyck = {linkname:"Othell_Yarwyck", og:"Yarwyck Othell",titlepic:"othell yarwyck",family:"Night's Watch",bg:"#737CB6",appearance1:"#5a5a5a",appearance2:"white",appearance3:"white",appearance4:"#5a5a5a",appearance5:"#5a5a5a",appearance6:"#5a5a5a",appearance7:"white"}

			,ygritte= {linkname:"Ygritte", og:"Ygritte",titlepic:"ygritte",family:"free folk",bg:"#78C0E9",appearance1:"white",appearance2:"#5a5a5a",appearance3:"black",appearance4:"black",appearance5:"white",appearance6:"white",appearance7:"white"}

			,yoren= { linkname:"Yoren", og:"Yoren",titlepic:"yoren",family:"Night's Watch",bg:"#737CB6",appearance1:"#5A5A5A",appearance2:"#5A5A5A",appearance3:"white",appearance4:"white",appearance5:"white",appearance6:"white",appearance7:"white"}

			]
// var z = charnames[9]
// alert(z.titlepic);
// alert(z.family)


 

	function populator(){
		$(".profpics").each(function(i)
		{
			$(".links").each(function(i)
			 	{
			 		var ttl = $(this).parent().attr("id");
					var xactuallinks = charnames[ttl].linkname
					$(this).attr("id",xactuallinks);
			 	});

			 $(this).each(function(i)
			 	{
			 		var ttl = $(this).parent().parent().attr("id");
					var xactual = charnames[ttl]
					var z = (xactual.titlepic)
					$(this).attr("id",z);

					$(this).attr("src","got/"+z+".jpg");
				});
					
			$(".proftitle").each(function(i)
				{	
					var ttl = $(this).parent().attr("id");
					var xactual = charnames[ttl].titlepic.toUpperCase()
					$(this).text(xactual);
					
				});
			$(".family").each(function(i)
				{	
					var ttl = $(this).parent().attr("id");
					var xactuall = charnames[ttl].family
					$(this).attr("href","http://gameofthrones.wikia.com/wiki/"+xactuall);
					$(this).text(xactuall);
				});

			$(".a").each(function(i)
				{	
					var ttl = $(this).parent().attr("id");
					var xactualll = charnames[ttl].appearance1
					$(this).css("background-color",xactualll);
				});

			$(".b").each(function(i)
				{	
					var ttl = $(this).parent().attr("id");
					var xactualll = charnames[ttl].appearance2
					$(this).css("background-color",xactualll);
				});


			$(".c").each(function(i)
				{	
					var ttl = $(this).parent().attr("id");
					var xactualll = charnames[ttl].appearance3
					$(this).css("background-color",xactualll);
				});							

			$(".d").each(function(i)
				{	
					var ttl = $(this).parent().attr("id");
					var xactualll = charnames[ttl].appearance4
					$(this).css("background-color",xactualll);
				});

			$(".e").each(function(i)
				{	
					var ttl = $(this).parent().attr("id");
					var xactualll = charnames[ttl].appearance5
					$(this).css("background-color",xactualll);
				});

			$(".f").each(function(i)
				{	
					var ttl = $(this).parent().attr("id");
					var xactualll = charnames[ttl].appearance6
					$(this).css("background-color",xactualll);
				});

			$(".g").each(function(i)
				{	
					var ttl = $(this).parent().attr("id");
					var xactualll = charnames[ttl].appearance7
					$(this).css("background-color",xactualll);
				});
								$(".family").each(function(i)
						{	
							var ttl = $(this).parent().attr("id");
							var xactuall = charnames[ttl].family.toUpperCase()
							$(this).text(xactuall);
							$(this).css("background-color","#BBBBBB");
						});
				});
		};
	
	populator();

	$("#family").click(function()
		{
			$("#loader").show(); 
		
			function SortByName(a, b)
			{
			  var aName = a.family.toLowerCase();
			  var bName = b.family.toLowerCase();
			  return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
			}
			
			charnames.sort(SortByName);

			$("#family").hide();
			$("#name").show().attr("class","sorter2");
			$("#fname").show().delay(100).queue( function(next)
      		{ 
				populator();
				$(".family").each(function(i)
					{	
						var ttl = $(this).parent().attr("id");
						var xactuall = charnames[ttl].family.toUpperCase()
						$(this).text(xactuall);
						$(this).css("background-color",charnames[ttl].bg);
					});$("#loader").hide(); 
				next();
			});
        
        	



		});

	$("#name").click(function()
		{
			$("#loader").show(); 

			function SortByName(a, b)
			{
			  var aName = a.og.toLowerCase();
			  var bName = b.og.toLowerCase();
			  return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
			}			
			charnames.sort(SortByName);

			$(this).hide().attr("class","sorter");
			$("#fname").show();
			$("#family").show().delay(100).queue( function(next)
      		{ 
				populator();
				$("#loader").hide(); 
				next();
			});

		});

	$("#fname").click(function()
		{
			$("#loader").show(); 
			function SortByName(a, b)
			{
			  var aName = a.titlepic.toLowerCase();
			  var bName = b.titlepic.toLowerCase();
			  return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
			}

			charnames.sort(SortByName);
			$(this).hide();
			$("#family").show();		
			$("#name").attr("class","sorter").show().delay(100).queue( function(next)
      		{ 
				populator();
				$("#loader").hide(); 
				next();
			});

		});



$(".links").click(function(event)
	{
		event.preventDefault();
		console.log("PHP!!!");
		var getter =event.target.id
		$.get("got.php?/getter="+getter,function(data)
		{
			console.log(data)
		});

	});


});