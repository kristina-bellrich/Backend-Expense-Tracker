const ExpenseModel = require('./ExpenseModel');

module.exports.getExpenses = async (req, res) => {
    const myApp = await ExpenseModel.find();
    res.send(myApp);
};
module.exports.saveExpenses = async (req, res) => {
    const {selectedDate, selectedType, amount} = req.body;
    ExpenseModel.create({selectedDate, selectedType, amount}).then((data) => {
        console.log(' added');
        res.send(data);
    });
};

module.exports.editExpense = async (req, res) =>{
  const {_id, selectedDate, selectedType, amount } = req.body;
  ExpenseModel.findByIdAndUpdate(_id, { selectedDate, selectedType, amount })
  .then(()=> res.send("Edited"))
}

module.exports.deletedExpense = async (req, res) => {
    const {_id} = req.body;
    ExpenseModel.findByIdAndDelete(_id).then(() => res.send('deleted'));
};
