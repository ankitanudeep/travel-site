function Person(Personname, favcolor) {
    this.name = Personname;
    this.color = favcolor;
    this.greet = function() {
        console.log("Hello, my name is "+this.name+" and my favorite color is "+this.color);
    }
}

module.exports = Person;