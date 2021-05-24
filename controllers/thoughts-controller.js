const { Thought, User } =require('../models');

const thoughtController = {
    //get all
    getAllThoughts (req, res) {
        Thought.find({})
            .populate({
                path: 'user',
                select: '-__v'
            })
            .select('-_v')
            .sort({ id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch( err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    //get user by id
    getUserById
}