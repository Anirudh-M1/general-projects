import { addNewContact, getContacts, getContactWithID, updateContact, deleteContact} from "../controllers/crmController";
const routes = (app) => {
   
    app.route('/contact')
    //get all contacts
    .get((req, res , next) =>{
        //middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next()
        
    }, getContacts)

    //post a new contact
    .post(addNewContact);


    //update specific contact
    app.route('/contact/:contactId')
    .put(updateContact)


    //get specific contact
    .get(getContactWithID)

    //to delete a contact
    .delete(deleteContact) 
}

export default routes; 