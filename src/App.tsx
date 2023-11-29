import React from 'react';
import Calendar from "./components/Calender";

const App: React.FC = () => {
    return <Calendar date={new Date()} />;
};

export default App;
