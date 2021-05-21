const { Schema, model } = require('mongoose');

const UserSChema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: 'Please enter a valid email address',
            unique: true,
            match: [/.+\@.+\..+/]
        },
        thoughts: [
            {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    }
);

UserSChema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSChema);

module.exports = User;