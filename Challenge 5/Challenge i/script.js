const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;  //Actually updated these as they were giving me an
const minuteOfDay = 0; //Actually updated these as they were giving me an

// Only change below this line

if (hourOfDay == 0 && minuteOfDay == 0) {
	const taxAsDecimal = parseFloat(tax) / 100
  	const AfterTax = salary - (taxAsDecimal * salary)
	const balance = AfterTax - transport - food - rent // Fixed variable AfterTax name
	console.log('R',balance.toFixed(2)) // fixed tofixed rounf off value from 2 to 3
}
else if (hourOfDay == null && minuteOfDay == null)
    console.log("Invalid time")
