import React from 'react';
import { CalendarWrapper, DayCell, DaysGrid, CurrentDayCell, EmptyCell, WeekDaysRow, MonthYearRow  } from './styles';
import weekdays from "../../constants/weekdays";
import { getDaysArray, getFirstDayOfMonth } from "../../utils/getDays";

const Calendar = ({ date }) => {
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysArray = getDaysArray(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    return (
        <CalendarWrapper>
            <MonthYearRow>{`${year}-${month + 1}`}</MonthYearRow>
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
            </DaysGrid>
        </CalendarWrapper>
    );
};

export default Calendar;
