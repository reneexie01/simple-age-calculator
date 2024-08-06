export { peopleManager }

const peopleManager = (function PeopleManager() {
    
    const generateUniqueId = () => {
        return '_' + Math.random().toString(36).substr(2,9);
    }

    let people = [
        /*
        {id: generateUniqueId(), name: 'Renee', year: 1994},
        {id: generateUniqueId(), name: 'Leya', year: 1995},
        {id: generateUniqueId(), name: 'Logan', year: 2018},
        {id: generateUniqueId(), name: 'Tina', year: 2019},
        */
    ];

    const renderPeople = () => console.log(people);

    const clearPeople = () => {
        people.length = 0;
    }

    return { people, renderPeople, clearPeople, generateUniqueId };

})();