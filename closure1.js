//Simple example
const outerFunction = () =>{
    let outerVariable = 'i am outer variable';

    const innerFunction = () =>{
        console.log(outerVariable);
    }
    return innerFunction;
}

const closureFunction = outerFunction();
closureFunction();

// Example with parameter
const makeCounter = () =>{
    let count = 0;

    return () =>{
        count++;
        return count;
    }
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());


//Example with Private Variables
const createPerson = (name, age) =>{
    let _name = name;
    let _age = age;

    return {
        getName: () => _name,
        getAge: () => _age,
        setName: (newName) => { _name = newName; },
        setAge: (newAge) => { _age = newAge; }
    }
}

const person = createPerson('Hamza Ali Abbasi', 30);
console.log(person.getName());
console.log(person.getAge());


person.setName('Muhammad Ali Jinnag');
person.setAge(22);


console.log(person.getName());
console.log(person.getAge());


//Closures in loops 
const createCounters = () =>{
     let counters = [];

     for (let i = 0; i <= 3; i++) {
        counters.push(() => i);
     }
    return counters;
}


const myCounters = createCounters();

console.log(myCounters[0]());
console.log(myCounters[1]());
console.log(myCounters[2]());