const getDaysArray = (year, month) => {
    const numDays = new Date(year, month + 1, 0).getDate();
    const daysArray = new Array(numDays).fill(null).map((_, index) => index + 1);
    return daysArray;
};

const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
};

export { getDaysArray, getFirstDayOfMonth };