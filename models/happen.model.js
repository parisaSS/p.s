var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var happenSchema = new Schema({

    id: [{type: Schema.Types.ObjectId, ref: 'Course'}],
    description: {
        type: String,
    },
    duedate: {
        type: Date,
        required: true
    },

});

module.exports = mongoose.model('happen', happenSchema);