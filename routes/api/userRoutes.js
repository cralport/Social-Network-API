const router = require('express').Router();

const {
    getAllUsesrs,
    getUsersById,
    createUser,
    addFriend,
    updateUser,
    deleteUser,
    removeFriend
} = require('../../controllers/user-controller');

router  
    .route('/')
    .get(getAllUsesrs)
    .post(createUser)

router 
    .route('/:id')
    .get(getUsersById)
    .put(updateUser)
    .delete(deleteUser)

router  
    .route('/:userId/friends/:friendsId')
    .post(addFriend)
    .delete(removeFriend)

module.exports = router;