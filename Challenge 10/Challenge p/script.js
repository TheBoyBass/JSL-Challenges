//Only change below JS, not the HTML


const order_1 = document.querySelector('[data-key="order1"]'); //Get the Order name from the DOM
const biscuits_1 = order_1.getAttribute('data-biscuits'); //Get the biscuit data from the DOM under  Order 1
const donuts_1 = order_1.getAttribute('data-donuts'); //Get the donuts data from the DOM under Order 1
const pancakes_1= order_1.getAttribute('data-pancakes'); // Get the Pancakes data from the DOM under Order 1
const status_1 = order_1.getAttribute('data-delivered'); // Get the status of the Order 1 data


const order_2 = document.querySelector('[data-key="order2"]'); //Get the Order name from the DOM
const biscuits_2 = order_2.getAttribute('data-biscuits'); //Get the biscuit data from the DOM under  Order 2
const donuts_2 = order_2.getAttribute('data-donuts'); //Get the donuts data from the DOM under Order 2
const pancakes_2= order_2.getAttribute('data-pancakes'); // Get the Pancakes data from the DOM under Order 2
const status_2 = order_2.getAttribute('data-delivered'); // Get the status of the Order 2 data

const order_3 = document.querySelector('[data-key="order3"]'); //Get the Order name from the DOM
const biscuits_3 = order_3.getAttribute('data-biscuits'); //Get the biscuit data from the DOM under  Order 3
const donuts_3 = order_3.getAttribute('data-donuts'); //Get the donuts data from the DOM under Order 3
const pancakes_3= order_3.getAttribute('data-pancakes'); // Get the Pancakes data from the DOM under Order 3
const status_3 = order_3.getAttribute('data-delivered'); // Get the status of the Order 3 data

order_1.getElementsByClassName('count')[0].textContent = biscuits_1
order_1.getElementsByClassName('count')[1].textContent = donuts_1
order_1.getElementsByClassName('count')[2].textContent = pancakes_1
let Status1 = status_1 === 'true' ? 'Delivered' : 'Pending'
order_1.querySelector('.status dd').textContent = Status1

order_2.getElementsByClassName('count')[0].textContent = biscuits_2
order_2.getElementsByClassName('count')[1].textContent = donuts_2
order_2.getElementsByClassName('count')[2].textContent = pancakes_2
let Status2 = status_2 === 'true' ? 'Delivered' : 'Pending'
order_2.querySelector('.status dd').textContent = Status2

order_3.getElementsByClassName('count')[0].textContent = biscuits_3
order_3.getElementsByClassName('count')[1].textContent = donuts_3
order_3.getElementsByClassName('count')[2].textContent = pancakes_3
let Status3 = status_3 === 'true' ? 'Delivered' : 'Pending'
order_3.querySelector('.status dd').textContent = Status3
