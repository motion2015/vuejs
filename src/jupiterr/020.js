// ES6  => Functional
// JS + Class => TypeScript == OOP

// Class = 붕어빵 틀, Instance  = 붕어빵
class Car {
    constructor(arg) {
        this.carProperty1 = arg
    }
    // method => 주어 동사를 구성한다.
    // instance method = 주어가 인스턴스
    // class method = 주어가 클래스
    drive() {
        console.log('I am a car method')
    }
}

const aCarInstance = new Car('This is a car instance')

console.log(aCarInstance)

class Sedan extends Car {
    constructor(anArg) {
        super(anArg.carArg);
        this.sedanProperty1 = anArg.type;
    }
}

const anArg = { carArg : 'This is a car instance2', type: 'Sedan'}

const aSedan1 = new Sedan(anArg);

console.log(aSedan1)