/** Insertion Sort Algorithm
step-01:Start with the second element (index 1) because a single element (the first one) is already considered sorted.
step-02:Pick the current element and store it in a temporary variable called key.
        This key is the element you want to place in the correct position among the elements before it.
step-03:Compare the key with each element before it, moving from right to left in the sorted part of the array.
step-04:Shift all elements that are greater than the key one position to the right.
        This creates an empty spot for inserting the key in its correct place.
step-05:Insert the key into that empty spot — the correct position in the sorted section.
step-06:Move to the next element and repeat steps 2–5 until all elements are placed correctly.

insertionsort(A,n){
    where A = input array, n = length of input array, key = tempoaray vairble

    for i = 0 to n{
        key = A[i]
        j = i-1
        while j >= 0 && A[j] > key{
            A[j+1] = A[j]
            j--
        }
        A[j+1] = key
    }
}

Time and Space Complexity
Best case: O(n) → When the array is already sorted — the inner loop runs only once per element.
Average case: O(n²) → When the array is partially sorted — each element is compared with some previous elements. 
Worst case: O(n²) → When the array is sorted in reverse order — every element is compared with all previous ones.
Space complexity: O(1) (in-place sorting)
**/

inputArray = [5, 2, 9, 1, 5, 6]

console.log("Unsorted array")
console.log(inputArray.join(" "));

for(let i=1; i<inputArray.length; i++){
    let key = inputArray[i]
    let j = i-1
    
    while(j>=0 && inputArray[j] > key){
        inputArray[j+1] = inputArray[j]
        j--
    }

    inputArray[j+1] = key
}

console.log("New sorted array")
console.log(inputArray.join(" "));
