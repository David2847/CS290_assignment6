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

// returns JSON array of all orders
function getAllOrders() {
    return orders;
}

// returns JSON array of orders from a particular company
function getOrdersByCompany(company) {
    const companyOrders = [];
    for (let i=0; i<orders.length; i++) {
        if (orders[i]["company"] === company) {
            companyOrders.push(orders[i]);
        }
    }
    return companyOrders;
}

function getOrderByID(id) {
    for (let i=0; i<orders.length; i++) {
        if (orders[i]["id"] === id) {
            return orders[i];
        }
    }
}

function replaceOrderByID(id, order) {
    for (let i=0; i<orders.length; i++) {
        if (orders[i]["id"] === id) {
            // replace order
            orders[i] = order;
            return true;
        }
    }
    return false;
}

function deleteOrderByID(id, order) {
    for (let i=0; i<orders.length; i++) {
        if (orders[i]["id"] === id) {
            orders.splice(i, 1);
            return true;
        }
    }
    return false;
}

export {createOrder,
        getOrdersByCompany,
        getAllOrders,
        getOrderByID,
        replaceOrderByID,
        deleteOrderByID};