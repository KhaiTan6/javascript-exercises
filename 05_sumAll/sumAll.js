const sumAll = function(start, end) {
    let sum = 0;
    // check if start or end is negative
    if (start < 0 || end < 0) {
        return 'ERROR';
    }
    // check if start and end are numbers
    if (typeof start !== 'number' || typeof end !== 'number') {
        return 'ERROR';
    }
    // swap start and end if start is larger than end
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }
    // sum all numbers from start to end
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
