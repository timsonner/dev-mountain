// Write your solution below:
const tshirtSorter = (pile) => {
  let s = ''
  let m = ''
  let l = ''
  let orderedPile = ''
  const array = pile.split('')

  array.forEach((element) => {
    if (element === 's') {
      s += 's'
    } else if (element === 'm') {
      m += 'm'
    } else if (element === 'l') {
      l += 'l'
    } else {
    }
  })
  orderedPile += s
  orderedPile += m
  orderedPile += l
  console.log(orderedPile)
  return orderedPile
}

tshirtSorter('lms')
// sml

tshirtSorter('smllms')
// ssmmll
