function leapYear(year) {
    // let year = prompt('Input Year');
    if (year%4 ===0 && year % 100 ===0){
            return 'Hi!!! ' +year+' is a leap year';
    }
    else{
        return 'Hi! ' +year+' is not a leap year';
    }
};
let checkedYear = leapYear(2000)
console.log(checkedYear);