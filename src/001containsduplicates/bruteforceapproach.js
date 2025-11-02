//  Brute Force Approach 
// Time Complexity: O(n^2)
// Space Complexity : O(1)

function containsDuplicatesBruteForce(arr){
    for (let i = 0; i < arr.length; i++){
        for(let j= i+1; j<arr.length; j++){
            if(arr[i] === arr[j]){
                return true
            }
        }
    }
    return false;
}
