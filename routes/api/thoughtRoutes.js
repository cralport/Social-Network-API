const router = require('express').Router();

const {
    gettAllThoughts,
    getThoughtsById,
    createThought,
    updateThought,
    deleteThought,
    removeReaction
} = require('../../controllers/thoughts-controller');

router  
    .route('/')
    .get(gettAllThoughts)
    .post(createThought)

router  
    .route(':/id')
    .put(updateThought)
    .delete(deleteThought)

router  
    .route('/:thoughtId/reactions')
    .post(addReaction)

router
    .route('/:thoughtId/:reactionId')
    .delete(removeReaction)

module.exports = router;