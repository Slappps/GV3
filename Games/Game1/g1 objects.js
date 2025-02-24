class ball extends entity {

    //ball1 = new ball(x,y,(speed*delta))
    //my balls move faster on steeper slopes, I need to normalize the lines/angles some how?
    //i want to use radians or vectors instead of slopes because slopes cannot go straight up and down, also i need to normalize them(see desmos graph)?
    //the ball class really needs a constructor that combines ideas from the parent such as x and y with ideas specific to the ball such as radius?
    //
    //g&b vars - does not work, i thought these where global, and instance specific. g&b cannot read these? (error: dirctn undefined)?
    // x = 0
    // y = 0
    // slope = 0
    // dirctn = '+'



    setup() {

        this.radius = 5
        this.slow = 0.1
        this.entitySpeed = Math.floor(Math.random() * 450) + 300;
        this.x = this.entityX
        this.y = this.entityY
        this.slope = Math.random()
        this.dirctn = '+'
        this.color = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")


        if (Math.floor(Math.random() * 2) + 1 == 1) {
            this.dirctn = '+'
        }
        else {
            this.dirctn = '-'
        }

        if (Math.floor(Math.random() * 2) + 1 == 1) {
            this.slope = -1 * this.slope
        }
        //---vgab-----
        this.angle = Math.floor(Math.random() * 360) + 0
        this.dirX = 1
        this.dirY = 1


    }

    glideAndBounce(delta) {

        //if i want to use a function from the super class, but modify it slightly, do i need to re-define it in my child class?
        // gld and bnc needs to keep track of a slope and update it, but not every function call. Should slope be global even though the only function that uses it is glideAndBounce?
        //same with x and y
        //
        // else if (this.dirctn == '-') {
        //     this.entityX -= (this.entitySpeed * delta)
        //     this.entityY = (slope * this.entityX) - ((slope) * x) + y
        // }

        //  glide the entity along a line passing through the entities (x,y) with a defined slope
        //
        //  point slope form:
        //
        //  y - y = m(x - x)
        //
        //  y = mx - x + y
        //  newy = (slope * newx) - (slope * x) + y



        if (this.entityX < 0 + this.radius) {
            this.entityX = 0 + this.radius
            this.slope = (-1 * this.slope) + Math.random()

            this.x = this.entityX
            this.y = this.entityY
            console.log(this.slope)
            this.dirctn = '+'
            this.entitySpeed = this.entitySpeed - (this.entitySpeed * this.slow)
        }

        if (this.entityX > this.boundX - this.radius) {
            this.entityX = this.boundX - this.radius
            this.slope = (-1 * this.slope) + Math.random()

            this.x = this.entityX
            this.y = this.entityY
            console.log(this.slope)
            this.dirctn = '-'
            this.entitySpeed = this.entitySpeed - (this.entitySpeed * this.slow)
        }

        if (this.entityY < 0 + this.radius) {
            this.entityY = 0 + this.radius
            this.slope = (-1 * this.slope) + Math.random()

            this.x = this.entityX
            this.y = this.entityY
            console.log(this.slope)
            this.entitySpeed = this.entitySpeed - (this.entitySpeed * this.slow)
        }

        if (this.entityY > this.boundY - this.radius) {
            this.entityY = this.boundY - this.radius
            this.slope = (-1 * this.slope) + Math.random()

            this.x = this.entityX
            this.y = this.entityY
            console.log(this.slope)
            this.entitySpeed = this.entitySpeed - (this.entitySpeed * this.slow)
        }

        
        if (Collisions.inCollision(currentScene.playerX, currentScene.playerY, 50, this.entityX, this.entityY, this.radius)) {

            console.log('im a-collidin\'')
            if (this.entityX <= currentScene.playerX) {

                this.playerSpeed += 50
                this.x = this.entityX
                this.y = this.entityY
                this.dirctn = '-'
                this.slope = (-1 * this.slope) + Math.random()
            }
            if (this.entityX > currentScene.playerX) {

                this.playerSpeed += 50
                this.x = this.entityX
                this.y = this.entityY
                this.dirctn = '+'
                this.slope = (-1 * this.slope) + Math.random()
            }


        }


        if (this.dirctn == '+') {
            this.entityX += (this.entitySpeed * delta)
            this.entityY = (this.slope * this.entityX) - ((this.slope) * this.x) + this.y
        }
        else if (this.dirctn == '-') {
            this.entityX -= (this.entitySpeed * delta)
            this.entityY = (this.slope * this.entityX) - ((this.slope) * this.x) + this.y
        }


    }

    VectorGlideAndBounce(delta){
        
        let radians = null        


        if (this.entityX < 0 + this.radius) {
            this.entityX = 0 + this.radius
            this.entitySpeed = this.entitySpeed - (this.entitySpeed * this.slow)
            this.angle = this.angle + Math.floor(Math.random() * 10) + 5
            this.dirX = this.dirX * -1
            console.log(this.angle)

            
        }

        if (this.entityX > this.boundX - this.radius) {
            this.entityX = this.boundX - this.radius
            this.entitySpeed = this.entitySpeed - (this.entitySpeed * this.slow)
            this.angle = this.angle + Math.floor(Math.random() * 10) + 5
            this.dirX = this.dirX * -1

            
        }

        if (this.entityY < 0 + this.radius) {
            this.entityY = 0 + this.radius
            this.entitySpeed = this.entitySpeed - (this.entitySpeed * this.slow)
            this.angle = this.angle + Math.floor(Math.random() * 10) + 5
            this.dirY = this.dirY * -1
            
        }

        if (this.entityY > this.boundY - this.radius) {
            this.entityY = this.boundY - this.radius
            this.entitySpeed = this.entitySpeed - (this.entitySpeed * this.slow)
            this.angle = this.angle + Math.floor(Math.random() * 10) + 5
            this.dirY = this.dirY * -1
            

        }

        //degrees to radians is deg * pi/180
        
        radians = this.angle * (Math.PI / 180)


        //calculate (x,y)
        this.vecX = Math.cos(radians) * this.dirX
        this.vecY = Math.sin(radians) * this.dirY

        this.entityX += this.vecX * (this.entitySpeed * delta)
        this.entityY += -1*(this.vecY * (this.entitySpeed * delta))

        

    }

    draw() {
        //ctx defined in start.html
        //why is ctx accessable when this.myscreenX isnt
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.strokeStyle = this.color
        ctx.arc(this.entityX, this.entityY, this.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()

        //line
        ctx.beginPath()
        ctx.strokeStyle = 'darkgreen'
        ctx.moveTo(this.entityX, this.entityY)
        ctx.lineTo(this.vecX+500, this.vecY+500)
        

    }

    

}