// routes/loans.js
import express from 'express';
import * as controllerr from '../controller/EmpruntController.js'


const loanRoutes = express.Router();

// Get all loans
loanRoutes.get('/', controllerr.Allemprunt );

// Get a single loan
loanRoutes.get('/:id', controllerr.Oneemprunt);

// Create a new loan
loanRoutes.post('/', controllerr.createmprunt);

// Update a loan
loanRoutes.put('/:id', controllerr.updatemprunt);

// Delete a loan
loanRoutes.delete('/:id', controllerr.deletemprunt);

export default loanRoutes;
