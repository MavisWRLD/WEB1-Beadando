// Alap osztály: Animal
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    speak() {
      console.log(`${this.name} is making a sound.`);
    }
  
    // DOM elem létrehozása és hozzáadása
    display() {
      const div = document.createElement('div');
      div.classList.add('animal');
      div.innerHTML = `<strong>${this.name}</strong> (${this.age} years old)`;
      document.getElementById('animals-list').appendChild(div);
    }
  }
  
  // A Dog osztály örökli az Animal osztályt
  class Dog extends Animal {
    constructor(name, age, breed) {
      super(name, age); // Az alap osztály konstruktorának hívása
      this.breed = breed;
    }
  
    // A kutyák ugatnak
    bark() {
      console.log(`${this.name} is barking!`);
    }
  
