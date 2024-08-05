export { personManager };

import { peopleManager } from './people-manager';

const personManager = (function PersonManager() {

    let person = {};

    const renderPerson = () => console.log(person);

    const newPerson = (name, year) => {
        person = {
            'id': peopleManager.generateUniqueId(),
            'name': name,
            'year' : year,
        }
        return person;
    }

    const clearPerson = () => {
        person = {};
    }

    const addPerson = (people) => {
        people.push(person)
    }

    const removePerson = (id, people) => {
        const index = people.findIndex(person => person.id === id);
        if (index > -1) {
            people.splice(index, 1);
        }
    }

    return { renderPerson, newPerson, clearPerson, addPerson, removePerson };

})();