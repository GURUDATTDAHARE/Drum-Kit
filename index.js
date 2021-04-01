var items=document.getElementsByTagName("button").length;
for(var i=0;i<items;i++){
    document.getElementsByTagName("button")[i].addEventListener("click",function(){
        var Button=this.innerHTML;
        switch (Button) {
            case "w":
                var audio=new Audio("audio/audio0.mp3");
                audio.play();
                break;
            case "a":
                var audio=new Audio("audio/audio1.mp3");
                audio.play();
                break;
            case "s":
                var audio=new Audio("audio/audio2.mp3");
                audio.play();
                break;
            case "d":
                var audio=new Audio("audio/audio3.mp3");
                audio.play();
                break;
            case "j":
                var audio=new Audio("audio/audio4.mp3");
                audio.play();
                break;

            case "k":
                var audio=new Audio("audio/audio5.mp3");
                audio.play();
                break;
            case "l":
                var audio=new Audio("audio/audio6.mp3");
                audio.play();
                break;
                   
            default:
                break;
        }
    })
}


