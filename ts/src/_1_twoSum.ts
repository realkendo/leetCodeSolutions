//the full description of the problem is in the javascript equivalent fo the silution in the other js folder


export const twoSumFunction = (inputArray : number[], inputTarget: number) : number[] =>{
  for(let i : number = 0; i < inputArray.length; i++ ){
    for(let j : number = i + 1; j < inputArray.length; j++){
      if(inputArray[i] + inputArray[j] === inputTarget){
        return [i, j];
      }
    }
  }
  return [];
}

console.log(twoSumFunction([3,4,5],8));