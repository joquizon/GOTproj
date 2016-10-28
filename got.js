$(document).ready(function() 
{
	console.log("winter is coming!");


for(var i = 0; i <109; i++)
	{
    	$("#0").clone().attr("id",i+1).appendTo("#holder");
	};



var charnames = 
		[
			maesteraemon = {og:"Aemon Maester",titlepic:"maester aemon",family:"targaryen",bg:"red"}	
			,anguy = {og:"Anguy",titlepic:"anguy",family:"brotherhood w/o banners",bg:"#525252"}
			,robinarryn   = {og:"Arryn Robin  ",titlepic:"robin arryn",family:"arryn",bg:"#5480E0"}
			,petyrbaelish = {og:"Baelish Petyr",titlepic:"petyr baelish",family:"tully",bg:"#76BD88"}
			,joffreybaratheon = {og:"Baratheon Joffrey",titlepic:"joffrey baratheon",family:"baratheon",bg:"#FFD700"}
			,myrcellabaratheon = {og:"Baratheon Myrcella",titlepic:"myrcella baratheon",family:"baratheon",bg:"#FFD700"}
			,renlybaratheon = {og:"Baratheon Renly",titlepic:"renly baratheon",family:"baratheon",bg:"#FFD700"}
			,robertbaratheon = {og:"Baratheon Robert",titlepic:"robert baratheon",family:"baratheon",bg:"#FFD700"}
			,selysebaratheon = {og:"Baratheon Selyse",titlepic:"selyse baratheon",family:"baratheon",bg:"#FFD700"}
			,shireenbaratheon = {og:"Baratheon Shireen",titlepic:"shireen baratheon",family:"baratheon",bg:"#FFD700"}
			,stannisbaratheon = {og:"Baratheon Stannis",titlepic:"stannis baratheon",family:"baratheon",bg:"#FFD700"}
			,tommenbaratheon = {og:"Baratheon Tommen",titlepic:"tommen baratheon",family:"baratheon",bg:"#FFD700"}
			,ramsaybolton = {og:"Bolton Ramsay",titlepic:"ramsay bolton",family:"bolton",bg:"#A64260"}
			,roosebolton = {og:"Bolton Roose",titlepic:"roose bolton",family:"bolton",bg:"#A64260"}
			,bronn= {og:"Bronn",titlepic:"bronn",family:"lannister",bg:"#FF4A24"}
			,rodrikcassel = {og:"Cassel Rodrik",titlepic:"rodrik cassel",family:"stark",bg:"#A1C1C6"}
			,gregorclegane = {og:"Clegane Gregor",titlepic:"gregor clegane",family:"lannister",bg:"#FF4A24"}
			,sandorclegane = {og:"Clegane Sandor",titlepic:"sandor clegane",family:" ",bg:"red"}
			,bericdondarrion  = {og:"Dondarrion Beric ",titlepic:"beric dondarrion",family:"brotherhood w/o banners",bg:"#525252"}
			,doreah= {og:"Doreah",titlepic:"doreah",family:"targaryen",bg:"red"}
			,khaldrogo = {og:"Drogo Khal",titlepic:"khal drogo",family:"dothraki",bg:"#9C9057"}
			,lotharfrey  = {og:"Frey Lothar ",titlepic:"lothar frey",family:"frey",bg:"#AD8CD2"}
			,gendry= {og:"Gendry",titlepic:"gendry",family:"baratheon",bg:"#FFD700"}
			,tormundgiantsbane = {og:"Giantsbane Tormund",titlepic:"tormund giantsbane",family:"free folk",bg:"#78C0E9"}
			,gilly= {og:"Gilly",titlepic:"gilly",family:"free folk",bg:"#78C0E9"}
			,grenn= {og:"Grenn",titlepic:"grenn",family:"night's watch",bg:"#C1A543"}
			,theongreyjoy = {og:"Greyjoy Theon",titlepic:"theon greyjoy",family:"greyjoy",bg:"#A6A6A6"}
			,yaragreyjoy = {og:"Greyjoy Yara",titlepic:"yara greyjoy",family:"greyjoy",bg:"#A6A6A6"}
			,jaqenhghar = {og:"Hghar Jaqen",titlepic:"jaqen hghar",family:" ",bg:"red"}
			,highsparrow = {og:"High Sparrow",titlepic:"high sparrow",family:" ",bg:"red"}
			,hizdahrzoloraq = {og:"zo Hizdahr Loraq",titlepic:"hizdahr zo loraq",family:"targaryen",bg:"red"}
			,hodor= {og:"Hodor",titlepic:"hodor",family:"stark",bg:"#A1C1C6"}
			,dontoshollard  = {og:"Hollard Dontos ",titlepic:"dontos hollard",family:"baratheon",bg:"#FFD700"}
			,areohotah = {og:"Hotah Areo",titlepic:"areo hotah",family:"martell",bg:"#8BBD5C"}
			,irri= {og:"Irri",titlepic:"irri",family:"stark",bg:"#A1C1C6"}
			,jonsnow = {og:"Snow Jon",titlepic:"jon snow",family:"stark",bg:"#A1C1C6"}
			,rickardkarstark = {og:"Rickard Karstark",titlepic:"rickard karstark",family:"stark",bg:"#A1C1C6"}
			,kovarro= {og:"Kovarro",titlepic:"kovarro",family:"dothraki",bg:"#9C9057"}
			,cerseilannister = {og:"Lannister Cersei",titlepic:"cersei lannister",family:"lannister",bg:"#FF4A24"}
			,jaimelannister = {og:"Lannister Jaime",titlepic:"jaime lannister",family:"lannister",bg:"#FF4A24"}
			,kevanlannister = {og:"Lannister Kevan",titlepic:"kevan lannister",family:"lannister",bg:"#FF4A24"}
			,lancellannister = {og:"Lannister Lancel",titlepic:"lancel lannister",family:"lannister",bg:"#FF4A24"}
			,tyrionlannister = {og:"Lannister Tyrion",titlepic:"tyrion lannister",family:"lannister",bg:"#FF4A24"}
			,tywinlannister = {og:"Lannister Tywin",titlepic:"tywin lannister",family:"lannister",bg:"#FF4A24"}
			,locke= {og:"Locke",titlepic:"locke",family:"bolton",bg:"#A64260"}
			,maesterluwin = {og:"Luwin Maester",titlepic:"maester luwin",family:"stark",bg:"#A1C1C6"}
			,marei= {og:"Marei",titlepic:"marei",family:" ",bg:"red"}
			,bowenmarsh = {og:"Marsh Bowen",titlepic:"bowen marsh",family:"night's watch",bg:"#C1A543"}
			,oberynmartell = {og:"Martell Oberyn",titlepic:"oberyn martell",family:"martell",bg:"#8BBD5C"}
			,melisandre= {og:"Melisandre",titlepic:"melisandre",family:"baratheon",bg:"#FFD700"}
			,missandei= {og:"Missandei",titlepic:"missandei",family:"targaryen",bg:"red"}
			,septamordane = {og:"Mordane Septa",titlepic:"septa mordane",family:"stark",bg:"#A1C1C6"}
			,jeormormont = {og:"Mormont Jeor",titlepic:"jeor mormont",family:"night's watch",bg:"#C1A543"}
			,jorahmormont = {og:"Mormont Jorah",titlepic:"jorah mormont",family:"targaryen",bg:"red"}
			,myranda= {og:"Myranda",titlepic:"myranda",family:"bolton",bg:"#A64260"}
			,daarionaharis = {og:"Naharis Daario",titlepic:"daario naharis",family:"targaryen",bg:"red"}
			,olly= {og:"Olly",titlepic:"olly",family:"night's watch",bg:"#C1A543"}
			,olyvar= {og:"Olyvar",titlepic:"olyvar",family:" ",bg:"red"}
			,orell= {og:"Orell",titlepic:"orell",family:"free folk",bg:"#78C0E9"}
			,osha= {og:"Osha",titlepic:"osha",family:"stark",bg:"#A1C1C6"}
			,podrickpayne = {og:"Payne Podrick",titlepic:"podrick payne",family:" ",bg:"red"}
			,hotpie = {og:"Pie Hot",titlepic:"hot pie",family:" ",bg:"red"}
			,maesterpycelle = {og:"Pycelle Maester",titlepic:"maester pycelle",family:"baratheon",bg:"#FFD700"}
			,pypar= {og:"Pypar",titlepic:"pypar",family:"night's watch",bg:"#C1A543"}
			,qotho= {og:"Qotho",titlepic:"qotho",family:"dothraki",bg:"#9C9057"}
			,qyburn= {og:"Qyburn",titlepic:"qyburn",family:" ",bg:"red"}
			,rakharo= {og:"Rakharo",titlepic:"rakharo",family:"targaryen",bg:"red"}
			,rast= {og:"Rast",titlepic:"rast",family:"night's watch",bg:"#C1A543"}
			,jojenreed = {og:"Reed Jojen",titlepic:"jojen reed",family:"stark",bg:"#A1C1C6"}
			,meerareed = {og:"Reed Meera",titlepic:"meera reed",family:"stark",bg:"#A1C1C6"}
			,blackwalderrivers = {og:"Walder Black Rivers",titlepic:"black walder rivers",family:"frey",bg:"#AD8CD2"}
			,ros= {og:"Ros",titlepic:"ros",family:"targaryen",bg:"red"}
			,ellariasand = {og:"Sand Ellaria",titlepic:"ellaria sand",family:"martell",bg:"#8BBD5C"}
			,nymeriasand = {og:"Sand Nymeria",titlepic:"nymeria sand",family:"martell",bg:"#8BBD5C"}
			,obarasand = {og:"Sand Obara",titlepic:"obara sand",family:"martell",bg:"#8BBD5C"}
			,tyenesand = {og:"Sand Tyene",titlepic:"tyene sand",family:"martell",bg:"#8BBD5C"}
			,davosseaworth = {og:"Seaworth Davos",titlepic:"davos seaworth",family:"stark",bg:"#A1C1C6"}
			,barristanselmy = {og:"Selmy Barristan",titlepic:"barristan selmy",family:"targaryen",bg:"red"}
			,shae= {og:"Shae",titlepic:"shae",family:"targaryen",bg:"red"}
			,janosslynt = {og:"Slynt Janos",titlepic:"janos slynt",family:"night's watch",bg:"#C1A543"}
			,aryastark = {og:"Stark Arya",titlepic:"arya stark",family:"stark",bg:"#A1C1C6"}
			,branstark = {og:"Stark Bran",titlepic:"bran stark",family:"stark",bg:"#A1C1C6"}
			,catelynstark = {og:"Stark Catelyn",titlepic:"catelyn stark",family:"stark",bg:"#A1C1C6"}
			,nedstark = {og:"Stark Ned",titlepic:"eddard stark",family:"stark",bg:"#A1C1C6"}
			,rickonstark = {og:"Stark Rickon",titlepic:"rickon stark",family:"stark",bg:"#A1C1C6"}
			,robbstark = {og:"Stark Robb",titlepic:"robb stark",family:"stark",bg:"#A1C1C6"}
			,sansastark = {og:"Stark Sansa",titlepic:"sansa stark",family:"stark",bg:"#A1C1C6"}
			,talisastark = {og:"Stark Talisa",titlepic:"talisa stark",family:"stark",bg:"#A1C1C6"}
			,daenerystargaryen = {og:"Targaryen Daenerys",titlepic:"daenerys targaryen",family:"targaryen",bg:"red"}
			,viserystargaryen = {og:"Targaryen Viserys",titlepic:"viserys targaryen",family:"targaryen",bg:"red"}
			,tarthbrienneof  = {og:"Tarth Brienne of ",titlepic:"brienne of tarth",family:"stark",bg:"#A1C1C6"}
			,tarlysamwell = {og:"Samwell Tarly",titlepic:"samwell tarly",family:"night's watch",bg:"#C1A543"}		
			,thesecondhighsepton = {og:"the second High Septon",titlepic:"the second high septon",family:"targaryen",bg:"red"}
			,alliserthorne = {og:"Thorne Alliser",titlepic:"alliser thorne",family:"night's watch",bg:"#C1A543"}
			,thorosmyrof  = {og:"Myr Thoros of ",titlepic:"thoros of myr",family:"brotherhood w/o banners",bg:"#525252"}
			,eddisontollett = {og:"Tollett Eddison",titlepic:"eddison tollett",family:"stark",bg:"#A1C1C6"}
			,meryntrant = {og:"Trant Meryn",titlepic:"meryn trant",family:"targaryen",bg:"red"}
			,bryndentully  = {og:"Tully Brynden ",titlepic:"brynden tully",family:"tully",bg:"#76BD88"}
			,edmuretully  = {og:"Tully Edmure ",titlepic:"edmure tully",family:"tully",bg:"#76BD88"}
			,lorastyrell = {og:"Tyrell Loras",titlepic:"loras tyrell",family:"tyrell",bg:"#AD5DAB"}
			,macetyrell = {og:"Tyrell Mace",titlepic:"mace tyrell",family:"tyrell",bg:"#AD5DAB"}
			,margaerytyrell = {og:"Tyrell Margaery",titlepic:"margaery tyrell",family:"tyrell",bg:"#AD5DAB"}
			,olennatyrell = {og:"Tyrell Olenna",titlepic:"olenna tyrell",family:"tyrell",bg:"#AD5DAB"}
			,septaunella = {og:"Unella Septa",titlepic:"septa unella",family:"faith militant",bg:"#DE4A4A"}
			,varys= {og:"Varys",titlepic:"varys",family:"targaryen",bg:"red"}
			,waif= {og:"Waif",titlepic:"waif",family:"targaryen",bg:"red"}
			,greyworm = {og:"Worm Grey",titlepic:"grey worm",family:"targaryen",bg:"red"}
			,othellyarwyck = {og:"Yarwyck Othell",titlepic:"othell yarwyck",family:"night's watch",bg:"#C1A543"}
			,ygritte= {og:"Ygritte",titlepic:"ygritte",family:"free folk",bg:"#78C0E9"}
			,yoren= {og:"Yoren",titlepic:"yoren",family:"night's watch",bg:"#C1A543"}]
// var z = charnames[9]
// alert(z.titlepic);
// alert(z.family)


 

	$(".profpics").each(function(i)
		{


			 $(this).each(function(i)
			 	{
			 		var ttl = $(this).parent().attr("id");
					var xactual = charnames[ttl]
					console.log(xactual);
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
					var xactuall = charnames[ttl].family.toUpperCase()
					$(this).text(xactuall);
				});

		});

	$("#family").click(function()
		{
			function SortByName(a, b)
			{
			  var aName = a.family.toLowerCase();
			  var bName = b.family.toLowerCase();
			  return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
			}

			charnames.sort(SortByName);


			$(".profpics").each(function(i)
				{


					 $(this).each(function(i)
					 	{
					 		var ttl = $(this).parent().attr("id");
							var xactual = charnames[ttl]
							console.log(xactual);
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
							var xactuall = charnames[ttl].family.toUpperCase()
							$(this).text(xactuall);
							$(this).css("background-color",charnames[ttl].bg);
						});

				});

		});

	$("#name").click(function()
		{
			function SortByName(a, b)
			{
			  var aName = a.og.toLowerCase();
			  var bName = b.og.toLowerCase();
			  return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
			}

			charnames.sort(SortByName);


			$(".profpics").each(function(i)
				{


					 $(this).each(function(i)
					 	{
					 		var ttl = $(this).parent().attr("id");
							var xactual = charnames[ttl]
							console.log(xactual);
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
							var xactuall = charnames[ttl].family.toUpperCase()
							$(this).text(xactuall);
							$(this).css("background-color","white");
						});

				});

		});










// 			 // $(".yearholder").each(function()
// 			 // {
// 			 // 	var par = $(this).parent()
// 				// $(par).prepend("<p class='closer'>X<p>");
// 			 // })

// 		});

  //   	$(".profpics").each(function()
		// {
		// 	for(var x = 0; x <79; x++)
		// 	{
		// 	$(this).attr("id",x+1);
		// 	};
		// });

});