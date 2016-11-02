<?php







// $homepage = file_get_contents('http://www.imdb.com/find?ref_=');

// $info = file_get_contents('http://www.imdb.com/find?q='.$X.'&s=tt&exact=true&ref_=fn_al_tt_ex')

// echo $homepage;

// http://gameofthrones.wikia.com/wiki/Jon_Snow



$baseUrl= "http://gameofthrones.wikia.com/";

$xxxA=$_GET['xxxA'];

$xxxxL=$xxxA;

$info = file_get_contents("http://gameofthrones.wikia.com/wiki/".$xxxxL);







preg_match('/id="WikiaMainContent"(.*?)id="References"/s',$info, $subinfo);


echo($subinfo[0]);

