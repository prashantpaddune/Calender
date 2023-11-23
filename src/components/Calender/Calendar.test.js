import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calendar from '.';

describe('Calendar Component Tests', () => {

    it('renders the correct month and year', () => {
        const testDate = new Date('2023-05-15');
        render(<Calendar date={testDate} />);
        expect(screen.getByText('2023-5')).toBeInTheDocument();
    });

    it('renders the correct number of days for the month', () => {
        const testDate = new Date('2023-05-15');
        render(<Calendar date={testDate} />);
        const days = screen.getAllByText(/^\d+$/);
        expect(days.length).toBe(31);
    });

    it('highlights the correct date', () => {
        const testDate = new Date('2023-05-15');
        render(<Calendar date={testDate} />);
        const highlightedDay = screen.getByText('15');
        expect(highlightedDay).toHaveStyle('background-color: #add8e6');
    });
});
