$(document).ready(function() 

{

	console.log("winter is coming!");

 
	// populator();



	$("#family").click(function()

		{

			$("#loader").show(); 
			$(".picholder").hide();

		

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

						var xactuall = charnames[ttl].family.toUpperCase();
						var xactuallrep = xactuall.replace("_"," ");
						var xactuallrepp = xactuallrep.replace("_"," ");
						// console.log (xactuallrepp);
						$(this).text(xactuallrepp);

						$(this).css("background-color",charnames[ttl].bg);

					});
				$("#loader").hide(); 
				$(".picholder").show();

				next();

			});

        

        	







		});



	$("#name").click(function()

		{

			$("#loader").show(); 
			$(".picholder").hide();



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
				$(".picholder").show();

				next();

			});



		});



	$("#fname").click(function()

		{

			$("#loader").show(); 
			$(".picholder").hide();

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
				$(".picholder").show();

				next();

			});



		});

// 	var f =X
// 	console.log(f)
// 	var ff = f.replace(/_/g, " ").toUpperCase();

// $(".proftitle,.family").replaceWith(f);




$(".profpics").click(function(event)

	{


		event.preventDefault();

		// console.log("PHP!!!");

		var x=event.target.id;

		var z = $("#getter").val(x);

		$.get("got.php?xxxx="+$("#getter").val(),function(data)

		{
			// var domainRegex = data.match(/(.*?)[^w{3}.]([a-zA-Z0-9]([a-zA-Z0-9-]{0,65}[a-zA-Z0-9])?.)+[a-zA-Z]{2,6}/igm);
			// var imageRegex =data.match(/img/g); 

			// $(data).remove(imageRegex);
			// $(data).remove(domainRegex);
			// console.log(data);

			var v=data.replace("<script>", '<p id="scriptdestroy">');
			var vv = v.replace('<script>JSSnippetsStack.push({dependencies:[{"url":"http://slot1.images3.wikia.nocookie.net/__am/1477060702/group/-/wikia_photo_gallery_js","type":"js"},{"url":"http://slot1.images3.wikia.nocookie.net/__am/1477060702/sass/background-dynamic%3Dtrue%26background-image%3Dhttp%253A%252F%252Fimg4.wikia.nocookie.net%252F__cb20150716154804%252Fgameofthrones%252Fimages%252F5%252F50%252FWiki-background%26background-image-height%3D720%26background-image-width%3D1920%26color-body%3D%2523000%26color-body-middle%3D%2523000000%26color-buttons%3D%25231e5467%26color-header%3D%25235f4416%26color-links%3D%252347518e%26color-page%3D%2523d7cbab%26oasisTypography%3D1%26page-opacity%3D100%26widthType%3D0/extensions/wikia/WikiaPhotoGallery/css/gallery.scss","type":"css"}],callback:function(json){WikiaPhotoGalleryView.init(json)},id:"WikiaPhotoGalleryView.init"})</script>'," ");
			var vvv= vv.replace('id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr mw-content-text">'," ");
			var vvvv = vvv.replace("floatright","floatleft");
			var vvvvvv =vvvv.replace(/{/g, "(");	
			var vvvvvvv =vvvvvv.replace(/}/g, ")");



			$("#infoholder").html(vvvvvvv);	
			var n =x.replace(/_|%|\(|\)/g, " ");
			var nn = n.toLowerCase();
			$("#profilepic").attr("src","got/"+nn+".jpg");
			$("#title,#holder").fadeOut(100);	
			$("#bigholder").fadeIn(500);


			var tot = event.target.parentNode.parentNode.id;
			var totter = tot.toUpperCase();
			var xR = x.replace(/_/g," ").replace(/%27/g,"'").replace(/(/g,"</p><br><p id='titlepp'>").toUpperCase();
			$("#titlepp").text(xR);

		});



	});

$("#closer").click(function()
{

			$("#infoholder").scrollTop(0);
			$(window).scrollTop(0);
			$("#bigholder").fadeOut(500);
			$("#title,#holder").fadeIn(500);	

			
});

$(".family").click(function(event)

	{
event.preventDefault();

		// console.log("PHP!!!");

		var x=event.target.id;

		var z = $("#getter").val(x);

		$.get("gotfam.php?xxxA="+$("#getter").val(),function(data)

		{
			// var domainRegex = data.match(/(.*?)[^w{3}.]([a-zA-Z0-9]([a-zA-Z0-9-]{0,65}[a-zA-Z0-9])?.)+[a-zA-Z]{2,6}/igm);
			// var imageRegex =data.match(/img/g); 

			// $(data).remove(imageRegex);
			// $(data).remove(domainRegex);
			// console.log(data);
			var v=data.replace("<script>", '<p id="scriptdestroy">');
			var vv = v.replace('</script>',"</p>");
			var vvv= vv.replace('id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr.mw-content-text">'," ");
			var vvvv = vvv.replace("floatright","floatleft");
			var vvvvv = vvvv.replace('<div style=','<div style="display:none"');
			var vvvvvv =vvvvv.replace(/{/g, "(");	
			var vvvvvvv =vvvvvv.replace(/}/g, ")");
			var vvvvvvvv=vvvvvvv.replace("<script>JSSnippetsStack", '<p id="scriptdestroy">');
			$("#infoholder").html(vvvvvvvv);	
			var n =x.replace(/_|%|\(|\)/g, " ");
			var nn = n.toLowerCase();
			$("#profilepic").attr("src","houseflags/"+x+".jpg");
			$("#title,#holder").fadeOut(100);	
			$("#bigholder").fadeIn(500);
						var nN = n.replace(/_/g,"  ").toUpperCase();
			$("#titlepp").text(nN);

		});




	});




});