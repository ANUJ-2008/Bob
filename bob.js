class Bob
{
  constructor(x, y,r) 
  {
    var options = 
    {
        isStatic:false,
      'restitution':0.5,
        'friction':1.0,
        'density':1.5
    }
    this.body = Bodies.circle(this.x,this.y,this.r/2,options);
    this.x = x;
    this.y = y;
    this.r=  r;

    
    World.add(world, this.body);
  }
  display()
  {
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipse()
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill("pink");
    ellipse(0, 0, this.r, this.r);
    pop();
  }
};