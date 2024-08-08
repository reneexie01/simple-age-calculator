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

                const masterDiv = document.createElement('div');
                masterDiv.classList.add('people-age-output');
                
                const div1 = document.createElement('div');
                div1.classList.add('name');
                const paragraph1 = document.createElement('p');
                paragraph1.innerHTML = `Name: ${person.name}`
                div1.appendChild(paragraph1);
                masterDiv.appendChild(div1);

                const div2 = document.createElement('div');
                div2.classList.add('age');
                const paragraph2 = document.createElement('p');
                paragraph2.innerHTML = `Age: ${person.age}`;
                div2.appendChild(paragraph2);
                masterDiv.appendChild(div2);

                container.appendChild(masterDiv);
            })
        }
    
        return { getYear, calculatedAges, clearCalculatedAges, clearPeopleAgeOutput };
    
    })();