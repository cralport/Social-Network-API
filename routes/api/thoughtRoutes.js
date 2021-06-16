const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtsById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughts-controller');

router  
    .route('/')
    .post(createThought)
    .get(getAllThoughts)

router  
    .route('/:id')
    .get(getThoughtsById)
    .put(updateThought)
    .delete(deleteThought)

router  
    .route('/:thoughtId/reactions')
    .post(addReaction)

router
    .route('/:thoughtId/:reactionId')
    .delete(removeReaction)

module.exports = router;