var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muy bien"; messageTime="Tiempo Agotado"; messageError="Lo Siento"; messageErrorG="Lo Siento"; messageAttempts="intento Agotados"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="T3JkZW5hcl9sYXNfRnJhc2Vz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["RWwgbmFjaW1pZW50byBkZSBKZXN1cyBlcyB1bm8gZGUgbG9zIGhlY2hvcyBtYXMgaW1wb3J0YW50ZSBkZSBsYSBmZSBjcmlzdGlhbmE=","SmVzdXMgaW5pY2lvIHN1IG1pbmlzdGVyaW8gZGVzcHVlcyBkZWwgYmF1dGl6bW8gZW4gZWwgcmlvIGpvcmRhbg==","TGEgU2FudGEgQ2VuYSBvIEV1Y2FyaXN0aWEgZXMgdW5vcyBkZSBsb3MgaGVjaG9zIG1hcyBpbXBvcnRhbnRlIGRlIGxhIGZlIGNyaXN0aWFuYQ==","TGEgbXVlcnRlIGRlIEplc3VzIGVzIHVub3MgZGUgbG9zIGhlY2hvcyBtYXMgdHJhY2VuZGVudGFsZXMgZGUgbGEgZmUgY3Jpc3RpYW4=","SmVzdXMgcmVzdXNpc3RvIGFsIHRlcmNlciBkaWEgcHJvYmFuZG8gcXVlIGVyYSBlbCB2ZXJkYWVybyBoaWpvIGRlIERpb3M="];imaW=["descarga__4_.jpeg","descarga__5_.jpeg","descarga__1_.jpeg","descarga.jpeg","descarga__2_.jpeg"];queW=["","","","",""];altW=["","","","",""];c=[77,64,82,77,71];
var infoW=["","","","",""];
var auW=["","","","",""];
var actMaxWidth="600"; actMaxHeight="300";indexG=0;profG=0;dirMedia="Ordenar_las_Frases_resources/media/"; textBNext="";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];alterW=[];informaW=[];
