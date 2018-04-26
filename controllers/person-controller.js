const personlist = [];
const Person = require('../domain/Person');
module.exports = {
    getAllPersons(req, res, next) {
        console.log('get was called');

        res.status(200).json(personlist).end()
    },
    getPersonByID(req, res, next) {
        console.log('get was called');
        const id = req.params.id;

        if (id >= 0 && id < personlist.length) {
            // als id geldig is in de personlist: stuur person terug
            res.status(200).json(personlist[id]).end()
        } else {
            // als id niet geldig is: error
            const error = {
                error: 'ID does not exist (index out of bounds)'
            };
            next(error)
        }
    },
    createPerson(req, res, next) {
        console.log('post was called');
        console.log(req.body);

        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const person = new Person(firstname, lastname);
        personlist.push(person);

        res.status(200).json(person).end()
    }
};