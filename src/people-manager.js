export { peopleManager }

const peopleManager = (function PeopleManager() {
    
    let people = [];

    const renderPeople = () => console.log(people);

    const clearPeople = () => {
        people = [];
    }

    return { people, renderPeople, clearPeople };

})();