<?php



// $homepage = file_get_contents('http://www.imdb.com/find?ref_=');
// $info = file_get_contents('http://www.imdb.com/find?q='.$X.'&s=tt&exact=true&ref_=fn_al_tt_ex')
// echo $homepage;




$info = file_get_contents('http://gameofthrones.wikia.com/wiki/'.$getter);

preg_match('/<span class="mw-headline" id="Biography"> Biography <\/span>(.*?)id="Seas/s',$info, $subinfo);
echo $subinfo[0];

?>