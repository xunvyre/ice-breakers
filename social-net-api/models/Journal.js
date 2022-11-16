const {Schema, model, Types} = require('mongoose');
const moment = require('moment');

const CommentSchema = new Schema
(
    {
        commentId:
        {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        commentBody:
        {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        username:
        {
            type: String,
            required: true
        },
        createdAt:
        {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => moment(createdAtVal).format('MMM Do, YYYY [at] hh:mm a')
        }
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

const JournalSchema = new Schema
(
    {
        journalTitle:
        {
            type: String,
            required: true,
            minlength: 3
        },
        journalText:
        {
            type: String
        },
        createdAt:
        {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => moment(createdAtVal).format('MMM Do, YYYY [at] hh:mm a')
        },
        username:
        {
            type: String,
            required: true
        },
        comments: [CommentSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
)

ThoughtSchema.virtual('commentCount').get(function()
{
    return this.comments.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;