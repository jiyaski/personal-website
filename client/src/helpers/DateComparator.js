

// assumes the inputs are Objects with `startDate` and `endDate` properties, each of which 
// is an Object with `day`, `month`, and `year` properties 
export function compareStartEndDates(obj1, obj2) {

    const endDateComparison = compareDates(obj1.endDate, obj2.endDate); 
    if (endDateComparison !== 0) {
        return endDateComparison; 
    } else {
        return compareDates(obj1.startDate, obj2.startDate); 
    }
}


// assumes the inputs are Objects with `day`, `month`, and `year` properties 
export function compareDates(obj1, obj2) {

    if (isPresent(obj1) && isPresent(obj2)) {
        return 0; 
    } else if (isPresent(obj1)) {
        return 1; 
    } else if (isPresent(obj2)) { 
        return -1; 
    }

    if (obj1.year !== obj2.year) {
        return obj1.year - obj2.year; 
    } else if (obj1.month !== obj2.month) {
        return obj1.month - obj2.month; 
    } else if (obj1.day !== obj2.day) {
        return obj1.day - obj2.day; 
    } else {
        return 0; 
    }
}


function isPresent(date) {
    return (date.year === 0 && date.month === 0 && date.day === 0); 
}