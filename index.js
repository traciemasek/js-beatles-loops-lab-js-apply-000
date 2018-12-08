const theBeatlesPlay = (musicians, instruments) => {
  let arr = [];
  for (let i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
<<<<<<< HEAD
    }
    return arr;
  }

const johnLennonFacts = (facts) => {
  let excitedFacts = [];
  let j = 0;
  while (j < facts.length) {
    excitedFacts.push(`${facts[j]}!!!`);
    j++;
  }
  return excitedFacts;
}

const iLoveTheBeatles = (n) => {
  let newArr = [];
  do {
    newArr.push('I love the Beatles!');
    n++;
  } while (n < 15);
  return newArr;
=======
  }
>>>>>>> 29909d7f90b70db778e5cd68f020d2943fe4bab3
}
