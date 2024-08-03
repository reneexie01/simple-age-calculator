export { ageCalculator }

const ageCalculator = (function AgeCalculator() {

    let calculatedAges = [];

        const getYear = function(people, year) {
            //calculatedAges = [];
            people.forEach((person) => {
                let age;
                let name;
                let newPerson;
                age = parseInt(year) - parseInt(person.year);
                name = person.name;
                newPerson = ageCalculatedPerson(name, age);
                calculatedAges.push(newPerson)
            })
            console.log('Calculated Ages:', calculatedAges); // Add this line
            return calculatedAges;
        }

        const ageCalculatedPerson = (name, age) => {
            let person = {
                'name': name,
                'age' : age,
            }
            return person;
        }
    
        return { getYear, calculatedAges };
    
    })();