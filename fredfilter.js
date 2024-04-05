function fredFilter(arr, callback) {
  let filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    const testResult = callback(currentElement, i, arr);

    if (testResult) {
      // Instead of push, manually add to the end of filteredArr
      filteredArr[filteredArr.length] = currentElement;
    }
  }
  return filteredArr;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 30, 73, 120];

    function isEven(num) {

      return num % 2 === 0;

      };
      
    const evenNumbers = fredFilter(numbers, isEven);
    console.log(evenNumbers); 

    const names = ["Fredrick", "Erick","Joshua", "Ian", "Chelsea", "Terry"];

    function longName(name) {
      return name.length > 5;
    }

    const longNameList = fredFilter(names, longName);
    console.log(longNameList); 