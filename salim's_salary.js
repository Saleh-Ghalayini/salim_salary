const salary = parseFloat(prompt("Please enter your salary"))
const month = prompt("Kindly enter the name of the month")
const electricity = parseFloat(prompt("Enter the following monthly percentages: Electricity"))
const rent = parseFloat(prompt("Rent"))
const savings = parseFloat(prompt("savings"))

const allocated_savings = salary * (savings / 100)
console.log("Savings: " + allocated_savings)

const allocated_rent = salary * (rent / 100)
console.log("Rent: " + allocated_rent)

const allocated_electricity = salary * (electricity / 100)
console.log("Electricity: " + allocated_electricity)

const total_spending = allocated_electricity + allocated_rent + allocated_savings
console.log("The amount spent on savings, rent and electricity combined: " + total_spending)

const remainder = salary - total_spending
console.log("The remainder of Salim's salary is: " + remainder)

console.log("Yearly amount spent on rent: " + allocated_rent * 12)
console.log("Yearly amount spent on electricity: " + allocated_electricity * 12)

console.log("Salim's salary powered by 2 is: " + Math.pow(salary, 2))

const additional_savings = 50
const savings_remainder = additional_savings % allocated_savings
console.log("The amount left (aka remainder) after dividing the amount of additional savings by the allocated savings: " + savings_remainder)