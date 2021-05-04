class Unicorn {
  constructor(name, color='white') {
    this.name = name;
    this.color = color;
  }

  isWhite()
  {
    return this.name === 'white';
  }

  says(words)
  {
    return '**;* ' + words + ' *;**'
  }
}

module.exports = Unicorn;
