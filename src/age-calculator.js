export { ageCalculator }

const ageCalculator = (function AgeCalculator() {

    let calculatedAges = [];

        const getYear = function(people, year) {
            clearCalculatedAges();
            people.forEach((person) => {
                let age;
                let name;
                let newPerson;
                age = parseInt(year) - parseInt(person.year);
                name = person.name;
                newPerson = ageCalculatedPerson(name, age);
                calculatedAges.push(newPerson)
            })
            peopleAgeOutput(calculatedAges);
            return calculatedAges;
        }

        const ageCalculatedPerson = (name, age) => {
            let person = {
                'name': name,
                'age' : age,
            }
            return person;
        }

        const clearCalculatedAges = () => {
            calculatedAges = [];
        }

        const clearPeopleAgeOutput = () => {
            const container = document.querySelector('.age-library');
            container.innerHTML = '';
        }

        const peopleAgeOutput = (people) => {
            clearPeopleAgeOutput();
            people.forEach((person) => {
                const container = document.querySelector('.age-library');
                const paragraph = document.createElement('p');
                paragraph.innerHTML = `Name: ${person.name}, Age: ${person.age}`;
                container.appendChild(paragraph);
            })
        }
    
        return { getYear, calculatedAges, clearCalculatedAges };
    
    })();