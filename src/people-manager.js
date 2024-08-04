export { peopleManager }

const peopleManager = (function PeopleManager() {
    
    let people = [
        {name: 'Renee', year: 1994},
        {name: 'Leya', year: 1995},
        {name: 'Logan', year: 2018},
        {name: 'Tina', year: 2019},
    ];

    const renderPeople = () => console.log(people);

    const clearPeople = () => {
        people = [];
    }

    return { people, renderPeople, clearPeople };

})();