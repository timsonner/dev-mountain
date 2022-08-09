// Write your solution below:
const makeUnique = (str) => {
    let unique = ''
    for (let index = 0; index < str.length; index++) {
        if (!unique.includes(str[index])) {
            unique += str[index]
        }
    }
    console.log(`makeUnique: ${unique}`)
    return unique
}

makeUnique('helloworld') // helowrd
makeUnique('iwanttoclimbamountain') // iwantoclmbu

const makeUnique2 = (str) => {
str = str.split('')
str = new Set(str)
str = [...str].join('')
console.log(`makeUnique2: ${str}`)
return str
}
makeUnique2('helloworld') // helowrd
makeUnique2('iwanttoclimbamountain') // iwantoclmbu

const makeUnique3 = (str) => {
return [...str].reduce((prev, curr) => {
return prev.includes(curr) ? prev : prev + curr
}, "")
}
console.log(`makeUnique3: ${makeUnique3('helloworld')}`) // helowrd
console.log(`makeUnique3: ${makeUnique3('iwanttoclimbamountain') // iwantoclmbu
}`)

const makeUnique4 = (str) => {
    let unique = ''
    for (let index = 0; index < str.length; index++) {
if (unique.indexOf(str.charAt(index))) {
    unique += str.charAt(index)
}        
    }
    return unique
}
console.log(`makeUnique4: ${makeUnique4('helloworld')}`) // helowrd
console.log(`makeUnique4: ${makeUnique4('iwanttoclimbamountain')}`) // iwantoclmbu