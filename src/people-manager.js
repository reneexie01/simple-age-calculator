export { peopleManager }

const peopleManager = (function PeopleManager() {
    
    let people = [];

    const generateUniqueId = () => {
        return '_' + Math.random().toString(36).substr(2,9);
    }

    const renderPeople = () => console.log(people);

    const clearPeople = () => {
        people = [];
    }

    return { people, renderPeople, clearPeople, generateUniqueId };

})();