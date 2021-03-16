export default class PersonService {

    async fetchAllPersons() {
        let response = await fetch('persons.json');
        let persons = await response.json();
        return persons;
    }
}