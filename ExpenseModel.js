const mongoose = require('mongoose');
const expenseSchema = new mongoose.Schema({
    selectedDate: String,
    selectedType: String,
    amount: Number,
});

module.exports = mongoose.model('Expense', expenseSchema);
