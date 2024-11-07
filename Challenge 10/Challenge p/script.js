//Only change below JS, not the HTML


const order_1 = document.querySelector('[data-key="order1"]'); //Get the Order name from the DOM
const biscuits_1 = order_1.getAttribute('data-biscuits'); //Get the biscuit data from the DOM under  Order 1
const donuts_1 = order_1.getAttribute('data-donuts'); //Get the donuts data from the DOM under Order 1
const pancakes_1= order_1.getAttribute('data-pancakes'); // Get the Pancakes data from the DOM under Order 1
const status_1 = order_1.getAttribute('data-delivered'); // Get the status of the Order 1 data


const order_2 = document.querySelector('[data-key="order1"]'); //Get the Order name from the DOM
const biscuits_2 = order_2.getAttribute('data-biscuits'); //Get the biscuit data from the DOM under  Order 2
const donuts_2 = order_2.getAttribute('data-donuts'); //Get the donuts data from the DOM under Order 2
const pancakes_2= order_2.getAttribute('data-pancakes'); // Get the Pancakes data from the DOM under Order 2
const status_2 = order_2.getAttribute('data-delivered'); // Get the status of the Order 2 data

const order_3 = document.querySelector('[data-key="order1"]'); //Get the Order name from the DOM
const biscuits_3 = order_3.getAttribute('data-biscuits'); //Get the biscuit data from the DOM under  Order 3
const donuts_3 = order_3.getAttribute('data-donuts'); //Get the donuts data from the DOM under Order 3
const pancakes_3= order_3.getAttribute('data-pancakes'); // Get the Pancakes data from the DOM under Order 3
const status = order_3.getAttribute('data-delivered'); // Get the status of the Order 3 data

1-biscuits= 1-root.biscuits,
1-donuts = 1-root.donuts,
1-pancakes = 1-root.pancakes,
1-status = 1-root.status ? Delivered : Pending

2-biscuits= 2-root.biscuits,
2-donuts = 2-root.donuts,
2-pancakes = 2-root.pancakes,
2-status = 2-root.status ? Delivered : Pending

3-biscuits= 3-root.biscuits,
3-donuts = 3-root.donuts,
3-pancakes = 3-root.pancakes,
3-status = 3-root.status ? Delivered : Pending
