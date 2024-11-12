import orders from './data/orders.mjs';
import Order from './order.mjs';


/**
 * 
 * @param {string} company 
 * @param {number} quantity 
 * @returns 
 */
function createOrder(company, quantity){
    const order = new Order(company, quantity)
    orders.push(order)
    return order
}

// Don't change anything above this line



export {createOrder};