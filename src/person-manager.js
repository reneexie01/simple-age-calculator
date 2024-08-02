export { personManager };

const personManager = (function PersonManager() {

    let person = {};

    const renderPerson = () => console.log(person);

    const newPerson = (name, year) => {
        person = {
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

    const removePerson = (index, people) => {
        people.splice(index, 1);
    }

    return { renderPerson, newPerson, clearPerson, addPerson, removePerson };

})();
