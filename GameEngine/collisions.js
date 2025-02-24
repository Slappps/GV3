class Collisions{
    static inCollision(x1, y1, r1, x2, y2, r2) {
        let distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
        return distance < r1 + r2
      }
}


//when to extend class vs make a new instance
//delta time?
//variable scope in classes