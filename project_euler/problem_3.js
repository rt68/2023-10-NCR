let numArr = [];
const maxNum = 600851475143;
for (let i = 1; i < maxNum; i++) {
    if((Math.ceil(maxNum/2)) % i === 0) {
        console.log(i);
    }
}