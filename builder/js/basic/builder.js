class Person {
    constructor(name, lastname, age, country, city, hobbies) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.country = country;
        this.city = city;
        this.hobbies = hobbies;
    }

    getFullName() {
        return this.name + ' ' + this.lastname;
    }
}

class PersonBuilder {
    constructor() {
        this.reset();
    }

    reset() {
        this.name = "";
        this.lastname = "";
        this.age = 0;
        this.country = "";
        this.city = "";
        this.hobbies = [];
    }

    setName(name) {
        this.name = name;
        return this;
    }

    setLastname(lastname) {
        this.lastname = lastname;
        return this;
    }

    setAge(age) {
        this.age = age;
        return this;
    }

    setCountry(country) {
        this.country = country;
        return this;
    }

    setCity(city) {
        this.city = city;
        return this;
    }

    addHobby(hobbie) {
        this.hobbies.push(hobbie);
        return this;
    }

    build() {
        const person = new Person(
            this.name,
            this.lastname,
            this.age,
            this.country,
            this.city,
            this.hobbies
        )
        this.reset();
        return person;
    }
}

const personBuilder = new PersonBuilder();
const leandro = personBuilder.setName('Leandro')
                             .setLastname('Arturi')
                             .setAge(37)
                             .addHobby('Comer')
                             .addHobby('Programar')
                             .build();
console.log(leandro);

const cande = personBuilder.setName('Candelaria')
                             .setLastname('Arturi')
                             .addHobby('Jugar')
                             .addHobby('Hamburguesas')
                             .build();
console.log(cande);