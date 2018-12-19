const { Schema, model } = require('mongoose');

const transactionSchema = new Schema({
    amount: Number,
    description: String,
    date: Date,
    user: {
        _id: String
    },
    wallet: Schema.ObjectId,
    category: {
        name: String,
        type: String
    }
});

transactionSchema.index({name: 1, unique: true});

module.exports = model('transaction', transactionSchema, 'transactions');