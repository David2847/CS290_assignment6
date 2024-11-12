import express from 'express';
import * as model from './model.mjs';

const app = express();
const PORT = 3000;

app.use(express.json())

// Don't change or add anything above this line

app.post('/orders', (req, res) => {
    const order = req.body;

    // validate data:
    //      company has at least two characters
    //      quantity is integer greater than zero
    if (Number.isInteger(order.quantity) && order.quantity > 0) {
        if (typeof order.company === 'string' && order.company.length >= 2) {
            // create the order in the model
            const orderObject = model.createOrder(order.company, order.quantity);
            // response is JSON Order object -- see canvas
            const responseObject = {
                "company": order.company,
                "quantity": order.quantity,
                "id": orderObject.id,
                "date": orderObject.date
            };
            res.status(201).json(responseObject);
            return;
        }
    }
    // failure response (.json sends it back while also modifying content-type)
    const responseObject = {"Error": "Invalid request"};
    res.status(400).json(responseObject);
});

app.get('/orders', (req, res) => {

});

app.get('/orders/:id', (req, res) => {
    
});

app.put('/orders/:id', (req, res) => {
    
});

app.delete('/orders/:id', (req, res) => {
    
});

// Don't change or add anything below this line
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});