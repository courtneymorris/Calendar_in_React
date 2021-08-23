import React from 'react';
import DayOfWeek from './day-of-week';
import CalendarBox from './calendar-box'

export default function calendarWrapper(props) {
    return (
        <div className="calendar-wrapper">
            <DayOfWeek day="Sunday"/>
            <DayOfWeek day="Monday"/>
            <DayOfWeek day="Tuesday"/>
            <DayOfWeek day="Wednesdady"/>
            <DayOfWeek day="Thursday"/>
            <DayOfWeek day="Friday"/>
            <DayOfWeek day="Saturday"/>
            <CalendarBox />
        </div>
    )
}