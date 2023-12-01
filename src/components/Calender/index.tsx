import React, { useState } from 'react';
import { CalendarWrapper, DayCell, DaysGrid, CurrentDayCell, EmptyCell, WeekDaysRow, MonthYearRow  } from './styles';
import weekdays from "../../constants/weekdays";
import { getDaysArray, getFirstDayOfMonth } from "../../utils/getDays";

type CalendarProps = {
    date: Date;
};

const Calendar: React.FC<CalendarProps> = ({ date }) => {
    const [currentMonth, setCurrentMonth] = useState(date.getMonth());
    const [currentYear, setCurrentYear] = useState(date.getFullYear());

    const handleNextMonth = () => {
        setCurrentMonth((prevMonth) => (prevMonth + 1) % 12);
        setCurrentYear((prevYear) => (currentMonth === 11 ? prevYear + 1 : prevYear));
    };

    const handlePrevMonth = () => {
        setCurrentMonth((prevMonth) => (prevMonth - 1 + 12) % 12);
        setCurrentYear((prevYear) => (currentMonth === 0 ? prevYear - 1 : prevYear));
    };

    const daysArray = getDaysArray(currentYear, currentMonth);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
    const emptyCellsEnd = (7 - (firstDay + daysArray.length) % 7);

    return (
        <CalendarWrapper>
            <MonthYearRow>
                {/*<button onClick={handlePrevMonth}>&lt;</button>*/}
                    {`${currentYear}-${currentMonth + 1}`}
                {/*<button onClick={handleNextMonth}>&gt;</button>*/}
            </MonthYearRow>
            <WeekDaysRow>
                {weekdays.map((day) => (
                    <DayCell key={day}>{day}</DayCell>
                ))}
            </WeekDaysRow>
            <DaysGrid>
                {Array.from({ length: firstDay }, (_, index) => (
                    <EmptyCell key={`empty-${index}`} />
                ))}
                {daysArray.map((day) => (
                    day === date.getDate() ?
                        <CurrentDayCell key={day}>{day}</CurrentDayCell> :
                        <DayCell key={day}>{day}</DayCell>
                ))}
                {Array.from({ length: emptyCellsEnd }, (_, index) => (
                    <EmptyCell key={`empty-end-${index}`} />
                ))}
            </DaysGrid>
        </CalendarWrapper>
    );
};

export default Calendar;
