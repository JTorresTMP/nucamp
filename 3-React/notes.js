
// Object is the only non primitive data type in JS

const dragon1 = {
    color: 'red',
    maxHP: 1000
}

dragon1.element = 'fire';

dragon1.attack = function() {
    console.log(`The ${this.color} dragon attacks ferociously`)
}



//You can't add methods directly to an array, but you can to the prototype
Array.prototype.sayHello = () => console.log('Hello world');

let arr = [1,2,3];

// arr.sayHello()


const cart = {
    contents: [],
    addItem(item) {
        this.contents = this.contents.concat(item)
    }
};

cart.addItem('phone')
cart.addItem('laptop')
cart.addItem('glasses')
// console.log(cart)

const computer = {
    os: 'Windows',
    specs: {
      cpu: 'Intel i7',
      gpu: '2080 TI',
      ram: '16 GBs',
      storage: '1TB SSD'
    },
    boot() {
      console.log(`${this.os} is starting. Welcome to ${this.os}.`)
    },
    listSpec(spec) {
      spec = spec.toLowerCase();
      return this.specs.hasOwnProperty(spec) ? this.specs[spec] 
      : 'Spec could not be found'
    }
}
  
computer.boot();
console.log(computer.listSpec('sToRaGe'))