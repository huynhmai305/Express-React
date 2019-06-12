const express = require('express')
 
const app = express()
 
app.get('/', (req, res) => {
   res.send('hello from server!')
})
app.get('/api/customers', (req,res) => {
   // res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Origin','http://localhost:3000');
   res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTION,PUT,PATCH,DELETE');
   res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
   res.setHeader('Access-Control-Allow-Credentials',true);

    const customers = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Brad', lastName: 'Traversy'},
        {id: 3, firstName: 'Mary', lastName: 'Swanson'},
      ];
      res.send(customers);
})
 
app.listen(8000, () => {
   console.log('App listening on port 8000')
})