var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
blockImgObject="";
function new_image()
{
    fabric.Image.fromURL("BirthdayImage.jpg", function(Img){
    blockImgObject=Img;
    blockImgObject.scaleToWidth(300);
    blockImgObject.scaleToHeight(510);
    blockImgObject.set({
        top:0,
        left:0
    })
    canvas.add(blockImgObject);
});
}

function playAudio(){
    x.play();
    console.log("play")
}
