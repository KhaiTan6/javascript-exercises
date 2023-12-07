const removeFromArray = function(array, ...elements) {
    let newArray = array;
    for (let i = 0; i < elements.length; i++) {
        if (newArray.includes(elements[i])){
            newArray.splice(newArray.indexOf(elements[i]), 1);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
