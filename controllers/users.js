let users = require('../data/index')
let newUser = require('../data/sampleUser')

//some parseInt filter/find

const listUsers = (req, res) => {
    res.json(users);
}

const showUser = (req, res) => {
    let isValidUser = users.some(users => users.id === parseInt(req.params.id));
    if (isValidUser === true) {
        res.json(users.filter(users => users.id === parseInt(req.params.id)));
    } else {
        res.status(404).json({msg: 'User ${req.params.id} does not exist'})
    }
}

const createUser = (req, res) => {
    users.push(newUser);
    res.json(newUser);
}

const updateUser = (req, res) => {
    let isValidUser = users.some(users => users.id === parseInt(req.params.id));
    if (isValidUser === true) {
        let user = users.find(i => i.id == req.params.id);
        user.id = 1000000;
        res.json(user);
    } else {
        res.status(404).json({msg: 'User ${req.params.id} does not exist'})
    }
}

const removeUser = (req, res) => {
    let isValidUser = users.some(users => users.id === parseInt(req.params.id));
    if (isValidUser === true) {
        let user = users.find(i => i.id == req.params.id);
        user.isActive = false;
        res.send('deleted');
    } else {
        res.status(404).json({msg: 'User ${req.params.id} does not exist.'})
    }
}

module.exports = {listUsers, showUser, createUser, updateUser, removeUser}