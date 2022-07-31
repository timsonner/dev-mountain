const decoder  = (string) => {
    const array = string.split(``)
    let strDecoded = ``
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(`element: ${element}`)

   // parseInt() and Number() both return nan with 0 as argument, so check for 0
    if (parseInt(element) || Number(element) === 0) {
        // console.log(`yep: ${array[index + Number(element) + 1]}`)
        strDecoded += array[index + Number(element) + 1] // jump index ahead based on value of element
    }
}
console.log(strDecoded)
}

decoder('0h2xce5ngbrdy')
decoder('3vdfn')
decoder('0r')
decoder('2bna0p1mp2osl0e')
decoder('0y4akjfe0s')