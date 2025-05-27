import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel.js'; // Add .js if you're using ES Modules

const Contact = mongoose.model('Contact', ContactSchema);

// Add a new contact
export const addNewContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getContacts = async (req,res) => {
    try{ 
        const contacts = await Contact.find({}); 
        res.status(200).json(contacts);
    } catch (err) { 
        res.status(500).json({message: err.message}); 
    }
}

export const getContactWithID = async (req,res) => { 
    try { 
        const contact = await Contact.findById(req.params.contactId);
        if (!contact){
            res.status(404).json({message: 'contact not found'});
        }
        res.status(200).json(contact); 
    } catch (err) { 
        res.status(500).json({message: err.message});
    }
}

export const updateContact = async (req, res) => {
    try{
        const updatedContact = await Contact.findByIdAndUpdate(req.params.contactId, req.body, {new: true});
        if (!updatedContact){
            res.status(404).json({message: 'contact not found'});
        }
        res.status(200).json(updatedContact); 
    }catch (err){ 
        res.status(500).json({message: err.message});
    }
}
export const deleteContact = async (req, res) => {
    try{
        const deleteContact = await Contact.findByIdAndDelete(req.params.contactId);
        if(!deleteContact){
            res.status(404).json({message: 'contact not found'});
        }
        res.status(200).json({message: "deleted successfully"});
    }catch (err){
        res.status(500).json({message: err.message});
    }
}