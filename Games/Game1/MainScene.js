class MainScene {

    constructor() {
        //soccer??
        // are these global
    }
    gameSetup() {
        // are these global or is there scope limited?
        this.playerX = -200
        this.playerY = -200
        this.playerSpeed = 200

        this.circleX = 100
        this.circleY = 200

        this.circle2X = 100
        this.circle2Y = 250

        this.frames = 0
        this.elapsedTime = 0

        this.myscreenX = canvas.width
        this.myscreenY = canvas.height

        // this.ball1 = new ball(this.myscreenX / 2, this.myscreenY / 2, 200, this.myscreenX, this.myscreenY)
        // this.ball1.setup()

        // let ballArray = []
        // let ball
        // why dosent this work? Cannot referance ball or ballArray in setup, must use this.ball?

        this.ball
        this.ballArray = []
        this.count = 2000

        for (let i = 0; i < this.count; i++) {

            this.ball = new ball(this.myscreenX / 2, this.myscreenY / 2, 200, this.myscreenX, this.myscreenY)
            this.ballArray.push(this.ball)
        }
        for (let i = 0; i < this.count; i++) {

            this.ballArray[i].setup(50)
        }

        


    }

    update() {
        this.frames++
        if (Input.keysdown.includes("ArrowUp")) {
            this.playerY -= this.playerSpeed * Time.deltaTime
        }
        if (Input.keysdown.includes("ArrowDown")) {
            this.playerY += this.playerSpeed * Time.deltaTime
        }
        if (Input.keysdown.includes("ArrowLeft")) {
            this.playerX -= this.playerSpeed * Time.deltaTime
        }
        if (Input.keysdown.includes("ArrowRight")) {
            this.playerX += this.playerSpeed * Time.deltaTime
        }


        //this.ball1.glideAndBounce(Time.deltaTime)

        for (let i = 0; i < this.count; i++) {

            this.ballArray[i].VectorGlideAndBounce(Time.deltaTime)
        }





        // if (Collisions.inCollision(this.ballX, this.ballY, 50, this.playerX, this.playerY, 50)) {
        //     console.log('im a-collidin\'')
        //     if(this.ballX <= this.playerX){
        //         this.direction = 'backward'
        //     }
        //     if(this.ballX > this.playerX){

        //         this.direction = 'forward'
        //     }

        // }

    }
    draw() {
        let y
        let linx

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        ctx.clearRect(0, 0, canvas.width, canvas.height)


        ctx.beginPath()
        ctx.fillStyle = "green"
        ctx.strokeStyle = "yellow"
        ctx.lineWidth = 5
        ctx.arc(this.playerX, this.playerY, 50, 0, Math.PI * 2)

        ctx.fill()
        ctx.stroke()

        ctx.beginPath()
        ctx.strokeStyle = 'darkgreen'
        ctx.moveTo(this.originx, this.originy)

        if (this.direction == 'forward') { linx = 600 }
        if (this.direction == 'backward') { linx = -600 }

        y = this.slope * (linx + (-1 * this.originx)) + this.originy
        ctx.lineTo(linx, y)
        ctx.stroke()

        ctx.beginPath();
        ctx.strokeStyle = "lightgreen"
        ctx.rect(0, 0, this.myscreenX, this.myscreenY);
        ctx.stroke();

        //this.ball1.draw()

        for (let i = 0; i < this.count; i++) {

            this.ballArray[i].draw()
        }




    }

    

}