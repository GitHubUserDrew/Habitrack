import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { fetchEvents, selectEvent } from '../features/calendarSlice';

const Calendar = () => {
  const dispatch = useDispatch();
  const events = useSelector(selectEvent);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const monthStart = startOfMonth(new Date());
  const monthEnd = endOfMonth(monthStart);
  const daysOfMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const weeksOfMonth = [];
  for (let i = 0; i < daysOfMonth.length; i += 7) {
    weeksOfMonth.push(daysOfMonth.slice(i, i + 7));
  }

  return (
    <div className="calendar">
      <table>
        <thead>
          <tr>
            <th colSpan="7">{format(monthStart, 'MMMM yyyy')}</th>
          </tr>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {weeksOfMonth.map((week, i) => (
            <tr key={i}>
              {week.map(day => (
                <td key={day.getTime()} className="calendar-day">
                  <div className="day-number">{day.getDate()}</div>
                  <div className="day-events">
                    {events
                      .filter(event => event.date === format(day, 'yyyy-MM-dd'))
                      .map(event => (
                        <div key={event.id} className="event">
                          {event.title}
                        </div>
                      ))}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
