class Input{
  // Keyboard input management (engine code)
  static keysdown = []

  static keydn(event) {
    
    if (!Input.keysdown.includes(event.code))
      
      Input.keysdown.push(event.code)


  }

  static keyup(event) {
    console.log(event.code)

    let index = Input.keysdown.indexOf(event.code)
    Input.keysdown.splice(index, 1)
    
  }
}
