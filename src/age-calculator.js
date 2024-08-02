export { ageCalculator }

const ageCalculator = (function AgeCalculator() {

    let calculatedAges = [];
    
        const getYear = function(people, year) {
            people.forEach((person) => {
                let age;
                let name;
                let newPerson;
                age = parseInt(year) - parseInt(person.year);
                name = person.name;
                newPerson = personManager.newPerson(name, age);
                calculatedAges.push(newPerson)
            })
            console.log(calculatedAges);
            return calculatedAges;
        }
    
        return { getYear, calculatedAges };
    
    })();