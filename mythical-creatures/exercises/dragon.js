class Dragon {
  constructor(name, rider)
  {
    this.name = name
    this.rider = rider
    this.hungry = true
    this.foodEaten = 0
  }

  greet()
  {
    return 'Hi, ' + this.rider + '!'
  }

  eat()
  {
    this.foodEaten += 1
    this.hungry = this.foodEaten < 3
  }
}


module.exports = Dragon
