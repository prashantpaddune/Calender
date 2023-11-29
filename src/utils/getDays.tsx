const getDaysArray = (year: number, month: number) => {
    const numDays = new Date(year, month + 1, 0).getDate();
    const daysArray = new Array(numDays).fill(null).map((_, index) => index + 1);
    return daysArray;
};

const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
};

export { getDaysArray, getFirstDayOfMonth };