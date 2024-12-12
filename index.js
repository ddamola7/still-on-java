
// variable initialization
var fullName =  "adediran oyindamola"
var married = "false"
var numberofChildren = 2
var disability = null
var accountNumber = undefined

// console.log
console.log("fullName");
console.log('numberofChildren');
console.log('20+20');
console.log("hello world");

// string operators
var sentence = 'i am going to be a very skilled software developer'
console.log(sentence.length);
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());

// concatenation
var favoriteTeam = 'chelsea'
var favoritePlayer = 'felix'
var ability = 'excellent'
var sentence2 = 'my favorite Player is ' + favoritePlayer + 'he plays for' + favoriteTeam + 'and he is' + ability
console.log(sentence2);

//  arithmetic operators
var x = 5
var y = 3
var z = 7
console.log(z-x);
console.log(x+y);
console.log(z*y);
console.log(z%x);
console.log(x**y);
console.log(z/y); 

// math operators
console.log(Math.sqrt(144));
console.log(Math.pow(16,8));
console.log(Math.round(4.6));
console.log(Math.round(4.4));
console.log(Math.floor(4.6));
console.log(Math.ceil(4.4));

// assignment operators
var num1 = 25
var num2 = 35
var num3 = 15

num1 += num3 
console.log(num1);

num2 -= num3
num3 -= num2
console.log(num3);

//  comparison operators
console.log(5==5);
console.log(5==6);
console.log(5=='5');

console.log(7==='7'); 

console.log(5!=6);
console.log(5!='5');
console.log(100>17);
console.log(18>=18); 

// var x = 'hello '
// var y = 'world'
// console.log(x + y);

// javascript object
var staff ={
    fullName: 'EHI OLUWAGBENGA',
    job: 'Tech support',
    age: undefined,
    disability: null,
    wagePerDay: 20000,
    marriedStatus: true,
    phoneNumber: 9034433227,
    hobbies: ['coding', 'cooking', 'traveling',],
    address: {
        number: 17,
        street: 'alagomeji',
        city: 'yaba',
        state: 'lagos',
        country: 'Nigeria',
    }
}

var staff2 ={
    fullName: 'Adediran Oyindamola',
    job: 'software dev',
    age: undefined,
    disability: null,
    wagePerDay: 12500,
    numberOfDaysPresent: 4,
    salary: function(){
        return this.wagePerDay*this.numberOfDaysPresent
    },
    maritalStatus: false,
    phoneNumber: 7089653673,
    hobbies: ['football', 'coding', 'sleeping','movies'],
    address: {
        number: 19,
        street: 'harmony court estate',
        city: 'surulere',
        state: 'lagos state',
        country: 'Nigeria'
    }
}
staff2.maritalStatus = true
console.log(staff2);

console.log(staff2.address.city);
staff2.address.city = 'ikeja'
console.log(staff2);

staff2.hobbies[1] = 'clubbing'
console.log(staff2);

console.log(staff2.salary());



































