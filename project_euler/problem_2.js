const topNum = 4000000;
let n1 = 0, n2 = 1, nextTerm
let counter = 0;

nextTerm = n1 + n2;

while (nextTerm <= topNum) {
  
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
    if (nextTerm % 2 === 0) {
        counter += nextTerm;
    }
}
console.log(counter);