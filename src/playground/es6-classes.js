 class Person {
   constructor(name = 'Anonymous', age = 0) {
     this.name = name;
     this.age = age;
   }

   getGreeting() {
     // return 'Hi. I am ' + this.name;
     return `Hi. I am ${this.name}`;
   }

   getDescription() {
     return `${this.name} is ${this.age} years old.`;
   }
 }

 class Student extends Person {
   constructor(name, age, major = 'Undecided') {
     super(name, age);
     this.major = major;
   }
   hasMajor() {
     return !!this.major;
   }
   getDescription() {
     let description = super.getDescription();

     if (this.hasMajor()) {
       description += ` Their major is ${this.major}`;
     }

     return description;
   }
 }

 class Traveler extends Person {
   constructor(name, age, homelocation = 'homeless') {
     super(name, age);
     this.homelocation = homelocation;
   }

   hasLocation() {
     return !!this.homelocation;
   }

   getHomelocation() {
     let description = super.getDescription();

     if (this.hasLocation()) {
       description += ` Their home is ${this.homelocation}.`
     }

     return description;
   }
 }

const me = new Traveler('Cyril Khan', 30, 'Schwerzenbach');
console.log(me.getHomelocation());

const other = new Traveler();
console.log(other.getHomelocation());
