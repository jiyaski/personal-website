

function DateParser({ dateObject }) {

  // could add functionality to support different date formats & better input validation, but for now not needed 

  let year = parseInt(dateObject.year); 
  let month = parseInt(dateObject.month); 
  let day = parseInt(dateObject.day); 

  if (!isNaN(day) && day !== 0) {
    // e.g. "Dec 31, 2012" 
    return <span>{ `${parseMonth(month)} ${dateObject.day}, ${dateObject.year}` }</span>

  } else if (!isNaN(month) && month !== 0) {
    // e.g. "Dec 2012" 
    return <span>{ `${parseMonth(month)} ${dateObject.year}` }</span>
  
  } else { 
    // e.g. "2012" 
    return <span>{ `${dateObject.year}` }</span>
  }
}
export default DateParser; 


function parseMonth(monthNumber) {

  switch (monthNumber) {
    case 1: return "Jan"; break; 
    case 2: return "Feb"; break; 
    case 3: return "Mar"; break; 
    case 4: return "Apr"; break; 
    case 5: return "May"; break; 
    case 6: return "June"; break; 
    case 7: return "July"; break; 
    case 8: return "Aug"; break; 
    case 9: return "Sept"; break; 
    case 10: return "Oct"; break; 
    case 11: return "Nov"; break; 
    case 12: return "Dec"; break; 
    default: throw new RangeError("Input does not correspond to a valid month"); 
  }
}