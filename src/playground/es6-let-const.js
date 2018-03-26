var nameVar = 'Cyril';
var nameVar = 'Mike';
console.log('nameVar: ', nameVar);

let nameLet = 'Jen';
// let nameLet = 'Cyril';
// can't redefine let
nameLet = 'Me';
console.log('nameLet: ', nameLet);

function getPetName() {
  var petName = 'Hal';
  return petName
}

// console.log(petName); wont work --> out of scope

// Block scoping

var fullName = 'Cyril Khan';

if (fullName) {
  var firstName = fullName.split(' ');
}
