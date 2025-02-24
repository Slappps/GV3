class entity {
    //var defined at top are global and class specific, dont need (this.)
    //(this.) makes variables global to the respective class instance regardless of function

    constructor(entityX = null, entityY = null, entitySpeed = null, boundX, boundY) {

        this.entityX = entityX
        this.entityY = entityY

        this.entitySpeed = entitySpeed
        this.boundX = boundX
        this.boundY = boundY

    }

    move(vector) {
        //should be recieved as a vector multiplied by player speed
        //vecotr should have direction and magnitude
        // move entity along vector at a given speed
        this.vector = vector
        this.entityX += this.vector.X
        this.entityY += this.vector.Y

    }

    glide(slope, x, y, dir) {
        //  glide the entity along a line passing through the entities (x,y) with a defined slope
        //
        //  point slope form:
        //
        //  y - y = m(x - x)
        //
        //  y = mx - x + y
        //  newy = (slope * newx) - (slope * x) + y

        if (dir == '+') {
            this.entityX += this.entitySpeed
            this.entityY = (slope * this.entityX) - ((slope) * x) + y
        }
        else if (dir == '-') {
            this.entityX -= this.entitySpeed
            this.entityY = (slope * this.entityX) - ((slope) * x) + y
        }
    }


}