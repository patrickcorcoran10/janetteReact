// const test = (idea) => {
//     console.log(`pc is the ${idea}.`)
// }
// test("man")
// test("worst")
// test("medium-est. ya know?")

const items = [
    { item: 'banana', price: 1 },
    { item: 'pear', price: 2 },
    { item: 'apple', price: 3 },
    { item: 'ice cream', price: 5 },
    { item: 'bread', price: 2 },
    { item: 'cheddar cheese', price: 4 },
    { item: 'hot dogs', price: 8 },
    { item: 'lettuce', price: 2 },
    { item: 'snack cake', price: 4 },
    { item: 'wine', price: 10 },
  ]
  
  const sum = items.reduce((sum, curr) => {
    return sum += curr.price
  },0)
  
  const sumLessThanFive = items.reduce((sum, curr) => {
    if (curr.price <= 5 ){
      sum += curr.price
    }
    return sum
  },0)
  
  let count = 0
  const average = items.reduce((sum, curr) => {
    if (curr.price <= 5 ){
      count++
      sum += curr.price
  
    }
      console.log('sum', sum)
      console.log('count', count)
    return sum/count
  },0)
  // console.log(sum)
  // console.log(sumLessThanFive)
  console.log(average)