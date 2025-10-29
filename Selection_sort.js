/** Selection Sort Algorithm
step-01:Assume the first element is the smallest
step-02:Compare it with all other elements
step-03:If you find a smaller one → mark it as the new minimum
step-04:After checking the whole list → swap the smallest with the first element
step-05:Then move to the next index and repeat
step-06:Continue until the entire array is sorted
 
selectionsort(A,n){
    where A = input array, n = length of input array, minElement = Minimum elemnet in input array, 
    temp = tempoaray vairble

    for i = 0 to n{
        minElement = i
        for j=i+1  to n{
            if A[j] < A[minElement]{
                minElement = j
            }
        }
        temp = A[i]
        A[i] = A[minElement]
        A[minElement] = temp
    }
}

Time and Space Complexity
Best case: O(n²) → Always scans the full list to find minimum
Average case: O(n²) → Nested loops always run the same number of times
Worst case: O(n²) → Still compares every element with every other
Space complexity: O(1) (in-place sorting) → Only uses a few temporary variables

**/

inputArray = [5, 2, 9, 1, 5, 6];

for(let i=0; i<inputArray.length; i++){
    let minElement = i;

    for(let j=i+1; j<inputArray.length; j++){
        if(inputArray[j] < inputArray[minElement]){
            minElement = j;
        }
    }

    // Swap the found minimum element with the first unsorted element
    if (minElement !== i) { // Only swap if a smaller element was found
        let temp = inputArray[i];
        inputArray[i] = inputArray[minElement];
        inputArray[minElement] = temp;
    }
}
console.log("Sorted Array")
console.log(inputArray);