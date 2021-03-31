var request = require('request')
var TelegramBot = require('node-telegram-bot-api')
var apikey = "1346390118:AAHADBtDQpBD3GIem11IxUzd-Gb7_-WsMQc"
var bot = new TelegramBot(apikey, {polling: true});

bot.on('message',function(msg){
var a = 0,b=0,c=0,d=0,e = 0;
var start = "start";
   if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id, "Welcome");
      e = 1;
     }
var Hi = "hello bot";
   if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id, "Hello dear user");
      a = 1;
     }
   var bye = "bye bot";
    if(msg.text.toString().toLowerCase().includes(bye)) {
    b = 1;
    bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
    }  
    var ok = "okay";
    if(msg.text.toString().toLowerCase().includes(ok)) {
    d = 1;
    bot.sendMessage(msg.chat.id, "is there any movie that you want know about");
    }  
   
    var start = "what can you do";
    if(msg.text.toString().toLowerCase().includes(start)) {
    c =1;
    bot.sendMessage(msg.chat.id, "i can help you to get information about movie that you want know");
    }    
     if(a != 1 && b != 1 && c != 1 && d != 1 && e != 1){
 request('http://www.omdbapi.com/?apikey=8c9c937d&t='+msg.text,function(error,response,body){
    if(error){
   
    bot.sendMessage(msg.text.id,"some problem with your server");
    }
    else{

       bot.sendPhoto(msg.chat.id,JSON.parse(body).Poster);
    bot.sendMessage(msg.chat.id,'Actors:'+JSON.parse(body).Actors);
        bot.sendMessage(msg.chat.id,'Released:'+JSON.parse(body).Released);
        bot.sendMessage(msg.chat.id,'imdbRating:'+JSON.parse(body).imdbRating);
        bot.sendMessage(msg.chat.id,'Awards:'+JSON.parse(body).Awards);
         bot.sendMessage(msg.chat.id,'Language:'+JSON.parse(body).Language);
     
    }
 
 });
}

})
