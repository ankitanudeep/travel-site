var $ = require('jquery');
import Person from './modules/Person';

class Adult extends Person {
    payTaxes() {
        console.log(this.name+" owes $$$ in taxes");
    }
}

alert("Alert Message");

var john = new Person("John", "blue");
john.greet();

var jane = new Person("Jane", "Yellow");
jane.greet();

var adult = new Adult("Adult Person", "Orange");
adult.greet();
adult.payTaxes();


//$("h1").remove();
