alert("my first javascript")

function greet() {
    return "Hello World!";
}

console.log(greet());
let arrayHasDuplicates = [1, 2, 3, 3, 4, 5, 5];
removeDuplicates_1(arrayHasDuplicates);
console.log("removeDuplicates_2 ",[...new Set(arrayHasDuplicates)]);
removeDuplicates_3(arrayHasDuplicates);
removeDuplicates_4(arrayHasDuplicates);


//function remove duplicate elemenst from array
function removeDuplicates_1(array) {
    var modifiedArray = [];
    for (var value of array) {
        if (!modifiedArray.includes(value)) {
            modifiedArray.push(value);
        }
    }
    console.log("removeDuplicates_1 ",modifiedArray);
}



function removeDuplicates_3(array){
    let uniqueArray = array.filter((value, index) => array.indexOf(value) === index);
    console.log("removeDuplicates_3 ",uniqueArray);

}

function removeDuplicates_4(array){
    let uniqueArray  = array.reduce((accumulator, currentValue) => {
        if (!accumulator.includes(currentValue)) {
            accumulator.push(currentValue);
        }
        return accumulator;
    }, []);
    console.log("removeDuplicates_4 ",uniqueArray);

}

let arrayHasNegatives = [1, -2, 3, 3, -84, 5, -5];

findNegativeNumbers_1(arrayHasNegatives);

function findNegativeNumbers_1(array){
    var modifiedArray = [];
    for(var value of array){
        if(value<0){
            modifiedArray.push(value);
        }
    }
    console.log("findNegativeNumbers ",modifiedArray);
}

function findNegativeNumbers_2(array){
    var modifiedArray =  array.filter(value => value<0);
}

