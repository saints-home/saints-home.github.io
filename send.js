var chatid = "AoLFvMEflv-oMgnfRxg";
var token = "001.1125707302.2110502077:751305137";
var text = "Текст для <b>нашего</b> бота";
//Отправляем текст в наш телеграм канал
//otpravka(token,text,chatid);
 
function otpravka(token,text,chatid){
  var z=$.ajax({
  type: "GET",  
  url: "https://api.icq.net/bot/v1/messages/sendText?token="+token+"&chatId="+chatid,
  data: "parse_mode=HTML&text="+encodeURIComponent(text),
  }); 
 };