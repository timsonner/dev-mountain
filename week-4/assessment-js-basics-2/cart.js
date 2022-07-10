///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.price
}, 0) // must provide initial 0 or this will NOT work (0 + 9.99, 9.99 + 8.99, etc...)

console.log(`summedPrice: ${summedPrice}`)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    return cartTotal * (1 + tax) - couponValue
}

console.log(`calcFinalPrice: ${calcFinalPrice(10, 2, .05)}`) // should be 8.5

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
The customer object should have:
    -name: for identification purposes
    -phone: for delivery driver, or to let customer know takeout is ready, or to confirm reservations
    -deliveryAddress: for delivery driver
    -mailingAddress: for credit card validation and mailing list
    -emailAddress: for mailing list, promotions, newsletters, and login 
    -foodAllergies: for ensuring customer satisfaction and safety
    -creditCard: for billing purposes

    name: string, because names are characters
    phone: phone number type, because its not exactly a number, or a string
    deliveryAddress: string, because addresses are words and numbers
    mailingAddress: string, because addresses are words and numbers
    emailAddress: string, because email addresses are words and numbers
    foodAllergies: string, because allergies are words
    creditCard: credit card class, because its not an int, maybe a string, but can definately be broken down as its own data type a collection of ints. 
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
class PhoneNumber {
    constructor(country, area, prefix, line) {
        this.country = country
        this.area = area
        this.prefix = prefix
        this.line = line
    }
}

class CreditCard {
    constructor(first, second, third, fourth, verificationNumber) {
        this.first = first
        this.second = second
        this.third = third
        this.fourth = fourth
        this.verificationNumber = verificationNumber
    }
}

class Customer {
    constructor(name, phone, deliveryAddress, mailingAddress, emailAddress, foodAllergies, creditCard) {
this.name = name
this.phone = phone
this.deliveryAddress = deliveryAddress
this.mailingAddress = mailingAddress
this.emailAddress = emailAddress
this.foodAllergies = foodAllergies
this.creditCard = creditCard
    }
}

const customer = new Customer(`Gordon Freeman`, new PhoneNumber(1,425,889,9642), `Black Mesa Research Facility, Undisclosed Location, NM 55555`, `PO BOX 1688 Bellevue, WA 98009`, `gordonf@valvesoftware.com`, `head crabs`, new CreditCard(1111, 2222, 3333, 4444, 555))
console.log(customer)