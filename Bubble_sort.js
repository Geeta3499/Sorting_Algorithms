/** Bubble Sort Algorithm 
step-01: Compare the first two elements.
step-02: If the first is greater than the second, swap them.
step-03: Move to the next pair and repeat.
step-04: After one full pass, the largest element moves to the end.
step-05: Repeat the process for the remaining elements until the list is sorted.

bubblesort(A,n){
    where A = input array, n = length of input array, temp = tempoaray vairble

    for i = 0 to n
        for j = 0 to n-i-1
            if a[j] > a[j+1]
                temp = a[j]
                a[j] = a[j+1]
                a[j+1] = temp
}

Time and Space Complexity
Best case: O(n) → when the array is already sorted
Average case: O(n²)
Worst case: O(n²)
Space complexity: O(1) (in-place sorting)
**/

let inputArray = [5,3,4,5,2];
let temp = 0;

for(let i=0; i<inputArray.length; i++){
    for(let j=0; j<inputArray.length-i-1; j++){
        if(inputArray[j] > inputArray[j+1]){
            temp = inputArray[j];
            inputArray[j] = inputArray[j+1];
            inputArray[j+1] = temp;
        }
    }
}
console.log(inputArray);