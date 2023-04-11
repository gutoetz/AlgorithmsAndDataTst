class BasicMath {
  public add (array: number[]) {
    return array.reduce((acc, cur) => acc + cur)
  }

  public sub (array: number[]) {
    return array.reduce((acc, cur) => acc - cur)
  }
 
  public mul (array: number[]) {
    return array.reduce((acc, cur) => acc * cur)
  }

  public div (a: number, b: number) {
    if (b === 0) return 'Error, 0 is not allowed as dividend'
    return a / b
  }
}

let calculator = new BasicMath();

// example -> console.log(calculator.sub([2,3,4,5]))

export default BasicMath;