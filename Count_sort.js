/**Counting sort algorithm
step-01: find the maximum element of an input array.
step-02: initializing an array "countArray" for counting the element of the input array and how many times an element is there.
step-03: Accumulate counts means modify the countArray so the each position stores the sum of previous counts.
step-4:place each element at it's corrected positin using countArray. place these elements in inoutarray or in new array. 

countsort(A,n){
    where A = inputarray, C = countarray, B = sortedarray, k = maximum element in array, n = length of inputarray
   
    k = maximum(A)
    let C[0...n] = {0}

    for j to n
        C[A[j]] = C[A[j]] + 1

    for i=1 to k
        c[i] = c[i] + c[i-1]

    let B[1...n]
    for j=n down to 1
        B[C[A[j]]] = A[j]
        C[A[j]] = C[A[j]] -1
    return B
}

Time and Space complexity
Best case: O(n + k)
Average case: O(n + k)
Worst case: O(n + k)
(where n = number of elements, k = range of input values)
Space complexity: O(n + k) (needs extra arrays)
**/

// Code implementation in javascript
let inputArray = [2,5,3,1,4,2,3,1]; //given array
console.log('input Array');
console.log(inputArray);

let arrayLength = inputArray.length; // length of an array

let max = 0;//for storing maximum element of inputArray

for(let i=1; i<arrayLength; i++){ // for finding the maximum element of inputArray
    if(inputArray[i] > max){
        max = inputArray[i];
    } 
}

let countArray = new Array(max+1).fill(0);// countarray 

for(let j=0; j<arrayLength; j++){ //for incrementing the elements in countarray
    countArray[inputArray[j]]++;
}
console.log('\nCount Array');
console.log(countArray);


for(let k=1; k<=max; k++){//for Accumulate counts
    countArray[k] = countArray[k] + countArray[k-1];
}
console.log('\nAccumulate counts');
console.log(countArray);

let sortedArray = [];
for(let h=arrayLength-1; h>=0; h--){//placing the elements in correct position in sortedArray
    sortedArray[countArray[inputArray[h]]-1] = inputArray[h];
     countArray[inputArray[h]]--;
}
console.log('\nsorted Array');
console.log(sortedArray);

