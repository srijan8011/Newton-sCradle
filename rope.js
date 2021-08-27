class rope{
	constructor(body1, body2, pointA, pointB)
	{
		this.pointA = pointA;
		this.pointB = pointB;

		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA, y:this.pointB}
		}

	//create rope constraint here
	ropeCon = Matter.Constraint.create(options);
	World.add(world, ropeCon);

	}


    //create display() here 
	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		line(ropeCon.pointA.x, ropeCon.pointA.y, bob1.x, bob1.y);
		line(ropeCon.pointA.x, ropeCon.pointA.y, bob2.x, bob2.y);
		line(ropeCon.pointA.x, ropeCon.pointA.y, bob3.x, bob3.y);
		line(ropeCon.pointA.x, ropeCon.pointA.y, bob4.x, bob4.y);
		line(ropeCon.pointA.x, ropeCon.pointA.y, bob5.x, bob5.y);
		// line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
	}

}
