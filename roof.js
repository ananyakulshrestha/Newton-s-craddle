class roof
{
    constructor(x,y,width,height)
    {
        var options={
            isStatic:true
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);

    }

    display()
    {
        var groundPos = this.body.position;
        push()
        translate(groundPos.x, groundPos.y);
        rectMode(CENTRE)
        //strokeWeight(4);
        fill(128,128,128);
        rect(0,0,this.width, this.height);
        pop();
    }
}