//1
//a
class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
var movie =new movie("casino rayale","eon production","PG-13");
console.log(movie.title,movie.studio,movie.rating);

//b
class movie{
    constructor(title,studio,rating="PG"){
        this.title =title;
        this.studio=studio;
        this.rating=rating;
    }
}

const movie1=new movie("casino rayale","eon production","PG-13");
const movie2 =new movie("harry naruto","chigistha mangistha");


//c
class movie {
    constructor(title,studio,rating="PG"){
        this.title =title;
        this.studio=studio;
        this.rating=rating;
    }
}
function getPG(movieArray){
    return movieArray.filter(movie=>movie.rating==="Pg");
    }
const movie3=new movie("casino rayale","eon production","PG-13");
const movie4 =new movie("harry naruto","chigistha mangistha","PG-16");
const movies =[movie3,movie4];
const PgMovies=getPG(movies);
console.log(PgMovies)



//3
class Person {
    constructor(Name,age, email, phoneNumber) {
        this.Name = Name;
        this.age = age;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}

const Person1 = new Person("jhon","65","thisishisemail@gmail.com","9876543210");

console.log(Person1.Name);
console.log(Person1.age);
console.log(Person1.email);
console.log(Person1.phonenumber);

//4
class UberPriceCalculator {
    constructor(baseFare, costPerKilometer, costPerMinute, additionalFees) {
        this.baseFare = baseFare;
        this.costPerKilometer = costPerKilometer;
        this.costPerMinute = costPerMinute;
        this.additionalFees = additionalFees;
    }

    calculatePrice(distanceInKilometers, timeInMinutes) {
        const fareForDistance = distanceInKilometers * this.costPerKilometer;
        const fareForTime = timeInMinutes * this.costPerMinute;
        const totalFare = this.baseFare + fareForDistance + fareForTime + this.additionalFees;
        return totalFare;
    }
}