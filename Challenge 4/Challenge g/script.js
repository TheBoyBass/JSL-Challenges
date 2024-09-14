const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'


let location = 'RSA'
let customers = '1'
let currency = null
let shipping = null

if (location === 'RSA') { 
	shipping === 400
	currency === 'R' }

if (location === 'NAM') {
	shipping = 600
	currency = '$' }

if 	(location === 'NK'){
	 console.log(BANNED_WARNIN)

}else{ 
	currency = '$'
	shipping = 800
}

// Shopping List
let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * 2
let batteries = 35 * 2
let pens = 5 * 20 

//Calculating Users Cost Without Shipping

let total = shoes + toys + shirts + batteries + pens
console.log('price', currency, total + shipping)


// if (total > 1000 || total < 0){ {
// 	if (location = 'NAM' || 'RSA' < 2) {
// 			if (location = RSA)
// 		    shipping = 0 || calcShipping
// 		}
// 	}
// }

// if (shipping = 0) && (customers !=== 1) { console.log(WARNING) }

// 	location = 'NK' ? console.log(WARNING) : 

