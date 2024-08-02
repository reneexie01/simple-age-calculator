export { peopleManager }

const peopleManager = (function PeopleManager() {
    
    let people = [
        {name: 'Renee', year: '1970'},
        {name: 'Leya', year: '1966'},
        {name: 'Logan', year: '2000'},
        {name: 'Tina', year: '1915'},
    ];

    const renderPeople = () => console.log(people);

    const clearPeople = () => {
        people = [];
    }

    return { people, renderPeople, clearPeople };

})();