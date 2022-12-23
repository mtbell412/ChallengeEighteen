const dayjs = require('dayjs');
const {Schema, model} = require('mongoose');

const thoughtSchema = new Schema(
    {
    thoughtText:{
        type: String,
        required: true,
        max_length: 280,
        min_length: 1
    },
    createdAt:{
        type: Date,
        default: Date.now(),
        get: (time) => {
            var x = dayjs(time).format('mm/dd/yyyy')
            return x;
        }
    },
    username:{
        type: String,
        required: true,
    },
    reactions: [reactionSchema]
    
},
{
    toJSON:{
        virtuals: true,
        getters: true
    },
    id: false,
}

)

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length
})

const Thought = model('thought',thoughtSchema);

module.exports = Thought;