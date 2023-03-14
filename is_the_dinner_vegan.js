//Write your code here:
const isTheDinnerVegan = arr => arr.every(el=>isVegan(el))

const isVegan = (food) => {
  if(food.source === 'plant'){
    return true;
  }
  return false
}

//Feel free to comment out the code below to test your function

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
// Should print false
