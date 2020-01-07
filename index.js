let animal = ""

function myAnimal() {
  animal = 'dog'
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  // if (animal != 'cat'){
  //   animal = 'cat'
  // }
  animal = 'cat'
  return animal
}

function add2(n) {
  let two = 2
  return n + two  
}