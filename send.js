var chatid = "-1001312538029";
var token = "1133420646:AAHHXNVYr8bVFMnr1Lnpwdc-THU1FtH87HQ";
var text = "Текст для <b>нашего</b> бота";
//Отправляем текст в наш телеграм канал
//otpravka(token,text,chatid);
 
function otpravka(token,text,chatid){
  var z=$.ajax({
  type: "POST",  
  url: "https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chatid,
  data: "parse_mode=HTML&text="+encodeURIComponent(text),
  }); 
 };