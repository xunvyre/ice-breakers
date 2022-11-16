const {Schema, model} = require('mongoose');

const UserSchema = new Schema
(
    {
        username:
        {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        email:
        {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/]
        },
        password:
        {
            type: String,
            required: true,
            minlength: 8
        },
        journals: [{type: Schema.Types.ObjectId, ref: 'Journal'}],
        
    },
    {
        toJSON:
        {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

const User = model('User', UserSchema);

module.exports = User;