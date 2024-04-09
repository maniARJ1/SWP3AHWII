class Person {
    /* Gewicht in kg, Größe in m */
    name;
    #gewicht;
    #groesse;
    constructor(name, gewichtParameter, groesseParameter) {
        this.name = name;
        this.gewicht = gewichtParameter;
        this.groesse = groesseParameter;
    }
    get bmi() {}
    set gewicht(gewichtParameter) {
        // gewicht in kg
        if (gewichtParameter < 1 || gewichtParameter > 500) {
            throw new Error('ungültiges Gewicht');
        }
        this.#gewicht = gewichtParameter;
    }
    get gewicht() {
        return this.#gewicht;
    }
    get bmi() {}
    set groesse(groesseParameter) {
        // groesse in m
        if (groesseParameter < 0.5 || groesseParameter > 3) {
            throw new Error('ungültige Groesse');
        }
        this.#groesse = groesseParameter;
    }
    get groesse() {
        return this.#groesse;
    }

}
p = new Person('Hans', 80, 1.8);
console.log(p.gewicht);

a = [
    ['Fabian', 80, 1.7],
    ['Mani', 95, 1.9],
    ['Edvin', 105, 2.0],

]

b = a.map((arr) => new Person(...arr));
b.forEach((p) => console.log(p.toString()));