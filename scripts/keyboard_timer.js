var bgImage = new Image();
var fgImage = new Image();
var timer;
var ball =
    {
        xx: 64,
        yy: 48,
        w: fgImage.width,
        h:fgImage.height
    }
    var pos;

window.onload = myInit();

function myInit()
{
    bgImage.src = 'images/basket.jpg';
    fgImage.src = 'images/basketball.jpg'

    myDisplay();
}

function myDisplay()
{
    //alert("Inside my display in Keybaord timer");

    var cvs = document.getElementById('mycanvas');
    var ctx = cvs.getContext('2d');
    bgImage.onload = function()
    {
        ctx.drawImage(fgImage, 99,0,80, 80);
    }
    

    cvs.onclick = function(e)
    {
        var x = e.clientX-24;
        var y = e.clientY-12;

        ctx.drawImage(fgImage, x, y, 64, 48);
    }
    document.body.addEventListener('keydown',function(e)
    {
        e = event || window.event;
        alert(String.fromCharCode(e.keyCode) + "-->" + e.keyCode);
        console.log("You Press some key");

        var keycode = e.charCode || e.keyCode;
        if(keycode===13)
        {
            console.log("You invoke call back function");
            //moveBall();
            pos = 150;
            timer = setInterval(moveBall, 1);
        }
    })

    function moveBall()
    {
        console.log("you are inside move ball fn");
        ctx.drawImage(bgImage, 240, 250);
        ctx.drawImage(fgImage,pos,pos,80,80);
        if(pos == 350)
        {
            console.log(" move ball fn");
            clearInterval(timer);
        }
        pos++;
    }
}
