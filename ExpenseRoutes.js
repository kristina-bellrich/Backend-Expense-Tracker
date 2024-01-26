const { Router} =require("express");
const {getExpenses, saveExpenses, editExpense, deletedExpense } = require("./ExpenseController");

const router= Router();

router.get("/", getExpenses);
router.post("/save", saveExpenses);
router.post("/deleted", deletedExpense);
 router.post("/edit", editExpense);

module.exports = router




// const { Router} =require("express");
// const {getExpenses, saveExpenses, editExpense, deletedExpense } = require("./ExpenseController");

// const router= Router();

// router.get("/api/transactions", getExpenses);
// router.post("/api/transaction", saveExpenses);
// router.post("/api/transaction/:id", deletedExpense);
//  router.post("/edit", editExpense);

// // module.exports = router
// const express = require('express');
// const { fetchExpenses, createExpense } = require('./ExpenseController');

// const expensesRouter = express.Router();

// expensesRouter.get('/', fetchExpenses);
// expensesRouter.post('/', createExpense);

// module.exports = expensesRouter;
