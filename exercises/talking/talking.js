// A says
let messagesA= ["How are you doing?", "Sorry to hear that", "what color would you like it to be?"];

let counterA=0

//B says
letmessagesB= ["Terrible", "Color of the background sucks", "Not this one", ];

let counterB=0

//When A is clicked

$("#character-a").click(function(){

        $("#chat").append("<p>Jake: "+messagesA[0]+"</p>");

    counterA=counterA+1;
        
});
//When B is clicked

$("#character-b").click(function(){

        $("#chat").append("<p>Finn: "+messagesB[0]+"</p>");

    counterA=counterB+1;
        
});