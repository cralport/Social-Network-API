const { Thought, User } = require('../models/index');
const thoughtController = {

    //get all
    getAllThoughts(req, res) {
        Thought.find({})
            .populate({
                path: 'user',
                select: '-__v'
            })
            .select('-__V')
            .sort({ _id: -1})
    }

}
    




module.exports = thoughtController;