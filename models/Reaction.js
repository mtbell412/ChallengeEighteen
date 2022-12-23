const { Schema, model, Types } = require('mongoose');
const dayjs = require('dayjs');



const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: (time) => {
                var x = dayjs(time).format('mm/dd/yyyy')
                return x;
            }
        }
    },
    {
        toJSON: {
            // virtuals: true, getters only like in assignments
            getters: true
        },
        id: false,
    }
)

module.exports = reactionSchema;