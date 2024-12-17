function greetings(name){
    return console.log('hello ' + name);
}
greetings('damola')

function personalInfo(name,course,job,firm){
    return console.log('my name is '+ name + ' i study '+ course + ' to become a '+ job + ' at '+ firm);
}
personalInfo('oyindamola', 'software dev', 'fullStack WebDeveloper', 'gomycode')

function areaOfTheSun(r){
    var areaOfTheSun = 4*(Math.PI*r**2)
    return console.log(Math.sqrt(areaOfTheSun));
}
areaOfTheSun(695700)

var movies = ['Got','wura', 'houseOfDragon', 'belAir', 'onepunchMAN']
console.log(movies[3]);

movies[1] = 'Osafia in london'
console.log(movies)

movies.push('spartacus')
console.log(movies);

movies.pop()
console.log(movies);

movies.shift()
console.log(movies);

movies.unshift('stranger things')
console.log(movies);

var employee ={
    fullName: 'Oyindamola',
    email: 'ddamola7@gmail.com',
    phone: 702198096,
    married: false,
    age: 10,
    skills :['football', 'reading', 'dancing'],
    address: {
        number: 19,
        street: 'harmony court estate',
        city: 'surulere',
        state:'lagos state',
        country: 'Nigeria',
    },
    salary: 200000,
    mortgage: function(){
        return this.salary*(30/100);
        
    },

    tax: function(){
        return this.salary*(12.5/100);
    },

    tithe: function(){
        return this.salary*(10/100);
    }

}


console.log(employee); 

console.log(employee.email);
console.log(employee.address.city);
console.log(employee.skills);

employee.skills[0]= 'sleeping'
console.log(employee.skills);

console.log(employee.mortgage());

console.log(employee.tax());

console.log(employee.tithe());


















