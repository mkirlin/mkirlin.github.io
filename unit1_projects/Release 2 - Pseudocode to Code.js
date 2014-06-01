// Our role in the group is: translate pseudocode into actual code.

// pseudocode

// Define function for sum of elements;
// Set parameters;
// 		Iterate with 'for' all the numbers in an array to get the total sum;
// 		Return sum value;

function sum_of_elements(user_array) {
    var sum_total = 0;
    for (var i = 0; i < user_array.length; i++) {
        sum_total += user_array[i];
    }
    return sum_total;
}

// Define function to get the mean of elements;
// Set parameters;
// 		Call the sum function and divide the total by the number 
//		of elements in the array;
// 		Return mean value;

function mean_of_elements(user_array) {
    return sum_of_elements(user_array) / user_array.length;
}

// Define function to get the median of an array;
// Set parameters;
// Sort array;
// 		Define another var (middle or half) to store the value of sorted array / 2;
//
// 		Set this var equal to the array and index into it applying the Math.floor 
//      method to the array length -1 divided by two;
//
// 		Return half value;

function median_of_elements(user_array) {
    user_array.sort(function(a, b) { return a - b });
    var half = Math.floor(user_array.length / 2);
    if (user_array.length % 2) {
        return user_array[half]
    } else {
        return (user_array[half] + user_array[half - 1] / 2.0)
    }
}

var user_array = [2, 4, 6, 3, 1, 7, 5];
console.log(sum_of_elements(user_array));
console.log(mean_of_elements(user_array));
console.log(median_of_elements(user_array));