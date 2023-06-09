const {Schema, Types, model} = require('mongoose')

// Схема пользака (+ name)
const schema = new Schema({
    from: {type: String, required: true},
    to: {type: String, required: true},
    code: {type: String, required: true, unique: true},
    date: {type: Date, default: Date.now},
    cliks: {type: Number, default: 0},
    owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Link', schema)
