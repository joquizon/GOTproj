<?php







// $homepage = file_get_contents('http://www.imdb.com/find?ref_=');

// $info = file_get_contents('http://www.imdb.com/find?q='.$X.'&s=tt&exact=true&ref_=fn_al_tt_ex')

// echo $homepage;

// http://gameofthrones.wikia.com/wiki/Jon_Snow



$baseUrl= "http://gameofthrones.wikia.com/";

$xxxx=$_GET['xxxx'];

$xxxxL=$xxxx;

$info = file_get_contents("http://gameofthrones.wikia.com/wiki/".$xxxxL);







preg_match('/<span class="mw-headline" id="Background">Background(.*?)id="A/s',$info, $subinfo);


print_r($subinfo[0]);

