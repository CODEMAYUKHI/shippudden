var canvas = new fabric.Canvas('myCanvas');
function new_image(get_image)
{
fabric.Image.fromURL(get_image,function(Img)
{
    block_image_object= Img;
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(block_image_object);
});
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    
   
    keyPressed=e.keyCode;
    console.log(keyPressed);
    
              

            if(keyPressed=='38')
            {
                up();
                console.log("up");
            }
            if(keyPressed=='40')
                 {
            down();
            console.log("down");
                 }
            if(keyPressed=='37')
                 {
             left();
             console.log("left");
                }
            if(keyPressed=='39')
                {
             right();
             console.log("right");
                 }
            if(keyPressed=='87')
                 {
            new_image('kakashi.png');
             console.log("k");
                 }
            if(keyPressed=='71')
                 {
             new_image('gaara.png');
            console.log("g");
                 }
             if(keyPressed=='76')
                 {
             new_image('Hinata.png');
             console.log("h");
                 }
             if(keyPressed=='84')
                 {
             new_image('naruto.jpg');
            console.log("n");
                 }
            if(keyPressed=='82')
                 {
              new_image('naruto name.jpg');
             console.log("l");
                 }
            if(keyPressed=='89')
                 {
             new_image('rock lee.png');
             console.log("r");
                }
             if(keyPressed=='68')
               {
           new_image('shika.png');
          console.log("i");
                }
            if(keyPressed=='85')
                {
           new_image('Sakura.png');
           console.log("u");
                 }
            if(keyPressed=='67')
                {
              new_image('Sasuke.jpg');
             console.log("s");
                }               
      
            }
        
