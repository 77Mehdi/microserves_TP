import Emprunt from "../model/empruntModel.js";


export const Allemprunt = async (req, res) => {
    try {
        const loans = await Emprunt.find();
        res.json(loans);
  
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


export const Oneemprunt = async (req, res) => {
    try {
        const loan = await Emprunt.findById(req.params.id);
        if (loan == null) {
            return res.status(404).json({ message: 'Loan not found' });
        }
        res.json(loan);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


export const createmprunt = async (req, res) => {
    const loan = new Emprunt({
        bookId: req.body.bookId,
        userId: req.body.userId,
        empruntDate: req.body.empruntDate,
        returnDate: req.body.returnDate,
    });

    try {
        const newLoan = await loan.save();
        res.status(201).json(newLoan);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}



export const updatemprunt = async (req, res) => {
    try {
        const loan = await Emprunt.findById(req.params.id);
        if (loan == null) {
            return res.status(404).json({ message: 'Loan not found' });
        }

        if (req.body.bookId != null) {
            loan.bookId = req.body.bookId;
        }
        if (req.body.userId != null) {
            loan.userId = req.body.userId;
        }
        if (req.body.loanDate != null) {
            loan.empruntDate = req.body.empruntDate;
        }
        if (req.body.returnDate != null) {
            loan.returnDate = req.body.returnDate;
        }

        const updatedLoan = await loan.save();
        res.json(updatedLoan);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}


export const deletemprunt = async (req, res) => {
    try {
        const loan = await Emprunt.findByIdAndDelete(req.params.id);

        if (loan == null) {
            return res.status(404).json({ message: 'Loan not found' });
        }

        res.json({ message: 'Loan deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}