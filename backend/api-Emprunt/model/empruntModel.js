
import mongoose from 'mongoose';

const loanSchema = new mongoose.Schema({
  bookId: {
    type: String, 
    required: true
 },
  userId: { 
    type: String, 
    required: true
 },
 empruntDate: {
     type: Date, 
     required: true 
    },
  returnDate: { type: Date },
});

const Emprunt = mongoose.model('emprun', loanSchema);

export default  Emprunt
