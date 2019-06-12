const express = require('express')
 
const app = express()
 
app.get('/', (req, res) => {
   res.send('hello from server!')
})
app.get('/api/customers', (req,res) => {
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Brad', lastName: 'Traversy'},
        {id: 3, firstName: 'Mary', lastName: 'Swanson'},
      ];
    
      res.json(customers);
})
 
app.listen(8000, () => {
   console.log('App listening on port 8000')
})