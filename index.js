// Code your solution here!

function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString) {
  if(myString.length > 1) {
    let last = myString[myString.length-1];
    let remaining = myString.substring(0, myString.length-1);
    return last + reverseString(remaining);
  } else {
    return myString;
  }
}

function isPalindrome(string) {
  if(string.length > 1) {
    let first = string[0];
    let last = string[string.length-1];
    let remaining = string.substring(1,string.length-1);
    return first === last && isPalindrome(remaining);
  } else {
    return true
  }
}

function addUpTo(arr, i) {
  if (arr.length > 1) {
    let sum = arr[0];
    return sum + addUpTo(arr.slice(1,i+1),i);
  } else if (arr.length === 1) {
    return arr[0]
  } else {
    return 0
  }
}

function maxOf(arr) {
  if (arr.length > 1) {
    let num1 = arr[0];
    let num2 = maxOf(arr.slice(1));
    return num1 > num2 ? num1 : num2;
  } else {
    return arr.length == 1 ? arr[0] : 0;
  }
}

function includesNumber(arr, n) {
  if (arr.length > 1) {
    if (arr[0] == n) {
      return true
    } else {
      return includesNumber(arr.slice(1), n)
    }
  } else if (arr.length == 1) {
    return arr[0] == n ? true : false
  }
}
