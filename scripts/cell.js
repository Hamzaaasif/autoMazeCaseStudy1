class cell
{
    constructor()
    {
        console.log("ass");
        this.leftwall=true;
        this.rightwall=true;
        this.upwall=true;
        this.downwall=true;
        this.visited=false;   
    }
    generatecell(xaxis,yaxis)
    {
      //  console.log("Inside Generate Cell Method")
        var cvs = document.getElementById('mycanvas');
        var ctx = cvs.getContext('2d');
        if(this.leftwall)
        {
            ctx.moveTo(xaxis,yaxis);
            ctx.lineTo(xaxis, yaxis+45);
        }
        if(this.upwall)
        {
            ctx.moveTo(xaxis,yaxis);
            ctx.lineTo(xaxis+45, yaxis);
        }
        if(this.rightwall)
        {
            ctx.moveTo(xaxis+45,yaxis);
            ctx.lineTo(xaxis+45, yaxis+45);
        }
        if(this.downwall)
        {
            ctx.moveTo(xaxis,yaxis+45);
            ctx.lineTo(xaxis+45, yaxis+45);
        }
        ctx.stroke();
    }
}
function retcell()
{
    return new cell
}