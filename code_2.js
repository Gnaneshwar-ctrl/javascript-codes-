// various ways of creating array 

const numbers = [1,2,3,4,5];

console.log(numbers);

const newArray = new Array();

console.log(newArray);

const newArray1 = new Array("Hi","Welcome!!");

console.log(newArray1[1]);

const newArray2 = new Array(5);

console.log(newArray2);

const newArray3 = Array.of(1,2,3);

const newArray4 = Array.of(6);

console.log(newArray3);

console.log(newArray4);

const pseudoArray = Array.from("Hi!!");

console.log(pseudoArray);

const moreData = [[1,2,3,4],[1.2,2.3,3.4,4.5]];

for(const data of moreData){
    for(const dataPoint of data){
        console.log(dataPoint);
    }
}

// methods available

moreData.push([-2.3,-6.5]);
console.log(moreData);

moreData.unshift(["red","blue","green"]);
console.log(moreData);

const vamrable = moreData.pop();
console.log(vamrable);

vamrable.unshift(1);
console.log(vamrable);
vamrable.shift();
console.log(vamrable);

const testArray = [1,2,3.4,-5.6,6,7,99];

const testArray1 = testArray.slice(-3,-1);

console.log(testArray,testArray1);

testArray.concat(testArray1);

console.log(testArray);

const small = testArray.filter((price, index, prices) => {
    return price > 6;
});

console.log(small);

console.log(Math.min(...testArray));