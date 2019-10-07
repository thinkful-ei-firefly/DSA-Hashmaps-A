const HashMap = require('./hashmap.js');


function main() {
  const newHashMap = new HashMap();

  newHashMap.MAX_LOAD_RATIO = 0.5;
  newHashMap.SIZE_RATIO = 3;

  newHashMap.set('Hobbit', 'Bilbo');
  newHashMap.set('Hobbit', 'Frodo');
  newHashMap.set('Wizard', 'Gandalf');
  newHashMap.set('Human', 'Aragon');
  newHashMap.set('Elf', 'Legolas');
  newHashMap.set('Maiar', 'The Necromancer');
  newHashMap.set('Maiar', 'Sauron');
  newHashMap.set('RingBearer', 'Gollum');
  newHashMap.set('LadyOfLight', 'Galadriel');
  newHashMap.set('HalfElven', 'Arwen');
  newHashMap.set('Ent', 'Treebeard');

//   console.log(newHashMap._hashTable);

  // Exercise 1

  // The set() function is looking for the key.
  // Because both Bilbo and Frodo have the same key,
  // as well as Necromancer and Sauron,
  // the values are being overwritten

  // It's checking if the key is in the box, not the value

  // Exercise 2
  const WhatDoesThisDo = function() {
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1, 10);
    map1.set(str2, 20);
    // map1 might just have one key but with the value of 20
    // since it was overwritten
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3, 20);
    map2.set(str4, 10);
    // This will also just have one key, and the value would be 10
    // since it was also overwritten

    console.log(map1.get(str1));
    // This returns "20"
    console.log(map2.get(str3));
    // This returns "10"

    // Exercise 3
    // 1: [22, 88, undefined, undefined, 4, 15, 28, 17, 59, 31, 10]
    // 2: [undefined, 28 -> 19 -> 10, 20, 12, undefined, 5, 15 -> 33, undefined, 17]
  };

  function removeDuplicates(string) {
    let hashMap = new Map();
    let result ='';

    for(let i =0; i < string.length; i++) {
      const char = string[i];
      if(!hashMap.has(char)){
        result += char;
        hashMap.set(char, '');
      }
    }
    return result;
  }

//   console.log(removeDuplicates('google'));
//   console.log(removeDuplicates('google all that you think can think of'));

  

  function palindrome(string){
    let numOdd = 0;
    let hashMap = new Map();
    for(let i =0; i < string.length; i++){
      const char = string[i];
      if(!hashMap.has(char)) {
        hashMap.set(char, 1);
        numOdd++;
      } else {
        let number = hashMap.get(char);
        const newNum = number + 1;
        hashMap.set(char, newNum);
        if(newNum % 2 === 0) {
          numOdd--;
        }
        else if(newNum % 2 !== 0){
          numOdd++;
        }
      }
    }
    if (numOdd > 1) return false;
    else return true;
  }

//   console.log(palindrome('acecarr'));
//   console.log(palindrome('north'));

  

  function anagramGroup(array) {

    let highestIndex = 0;
    let resultArray = [];
   
    let hashMap = new Map();

    for(let word in array) {

      const sortedWord = array[word].split('').sort().join('');

      if(!hashMap.has(sortedWord)) {

        hashMap.set(sortedWord, highestIndex);
        resultArray.push([array[word]]);
        highestIndex++;

      }

      else {
        const index = hashMap.get(sortedWord);
        resultArray[index].push(array[word]);
      }
    }
    return(resultArray);
  }

//   console.log(anagramGroup(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));

}

main();
