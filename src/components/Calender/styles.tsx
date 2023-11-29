import styled from "styled-components";

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;
  font-family: sans-serif;
  height: 100vh;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const MonthYearRow = styled.div`
  text-align: center;
  font-size: 24px;
  padding: 15px;
  background-color: #0078d7;
  color: white;
  font-weight: bold;
`;

const WeekDaysRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: #f0f0f0;
  padding: 5px 0;
`;

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: 1fr;
  flex-grow: 1;
`;

const DayCell = styled.div`
  padding: 10px;
  text-align: center;
  border-right: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  &:hover {
    background-color: #f9f9f9;
    cursor: pointer;
  }

  &:nth-child(7n) {
    border-right: none;
  }
`;

const EmptyCell = styled(DayCell)`
  background-color: #fff;
`;

const CurrentDayCell = styled(DayCell)`
  background-color: #add8e6;
  font-weight: bold;
`;

export {
    CalendarWrapper,
    MonthYearRow,
    WeekDaysRow,
    DaysGrid,
    DayCell,
    EmptyCell,
    CurrentDayCell
}