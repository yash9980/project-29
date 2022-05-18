class Link {
  constructor(bodyA, bodyB) {
    var lastlink = bodyA.body.bodies.length - 2;
    this.link = Constraint.create({
      bodyA: bodyA.body.bodies[lastlink],
      pointA: { x: 0, y: 0 },
      bodyB: bodyB.bodyB,
     // pointB: {x:790,y:339},
      pointB:{x:790,y:300},
      length: -20,
      stiffness: 0.3
    });

    World.add(world, this.link);
  }
}
