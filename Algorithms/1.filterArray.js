const filterArray = (array) => {
    let letterArray = array.filter((e) => typeof e === "string") || []
    let numberArray = array.filter((e) => typeof e === "number") || []
    let highestNum = Math.max(...numberArray) || null
  return {
    a: letterArray,
    b: numberArray,
    c: highestNum
  }
}

console.log(filterArray(["a", 10, "b", "hola", 122, 15]))
export default filterArray;