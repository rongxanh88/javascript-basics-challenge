let rectangle = function Rectangle(width, height) {
  this.width = width
  this.height = height

  this.area = function() {
    return this.width * this.height
  }

  this.perimeter = function() {
    return (this.width * 2) + (this.height * 2)
  }

  this.diagonal = function() {
    return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2))
  }

  this.isSquare = function() {
    if (this.width === this.height) {
      return true
    } else {
      return false
    }
  }
}


module.exports = rectangle