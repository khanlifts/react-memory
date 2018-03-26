// arguments object - no longer bound with arrow functions

const add = (a, b) =>  {
  //console.log(arguments);
  return a + b;
};

// this keyword - no longer bound

const user = {
  name: 'Cyril',
  cities: ['Luzern', 'Schwerzenbach', 'Berlin'],
  printPlacedLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
}

console.log(user.printPlacedLived());

const multiplier = {
  numbers: [2, 3, 5, 7],
  multiplyBy: 5,
  multiply(){
    return this.numbers.map((num) => 'The result is: ' + this.multiplyBy * num);
  }
}
console.log(multiplier.multiply());
