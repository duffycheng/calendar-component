import React, { useState } from "react";
import {
  CalendarTable,
  CalendarCaption,
  MonthSwitch,
} from "@/components/calendar/styled";
function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendar = () => {
    const prevMonth = currentMonth - 1 < 0 ? 11 : currentMonth - 1;
    const prevMonthYear = currentMonth - 1 < 0 ? currentYear - 1 : currentYear;

    const daysInCurrentMonth = getDaysInMonth(currentMonth, currentYear);
    const daysInPrevMonth = getDaysInMonth(prevMonth, prevMonthYear);
    const startDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const today = new Date();

    let calendar = [];
    let day = 1;
    let prevMonthDay = daysInPrevMonth - startDayOfMonth + 1;
    let nextMonthDay = 1;
    for (let i = 0; i < 6; i++) {
      let week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startDayOfMonth) {
          week.push({
            day: prevMonthDay++,
            isToday: false,
            isCurrentMonth: false,
          });
        } else if (day > daysInCurrentMonth) {
          week.push({
            day: nextMonthDay++,
            isToday: false,
            isCurrentMonth: false,
          });
        } else {
          const isToday =
            currentYear === today.getFullYear() &&
            currentMonth === today.getMonth() &&
            day === today.getDate();
          week.push({ day, isToday, isCurrentMonth: true });
          day++;
        }
      }
      calendar.push(week);
    }
    return calendar;
  };

  const calendar = generateCalendar();

  const getDayClassName = (dayObj) => {
    if (dayObj.isToday) {
      return "today";
    } else if (!dayObj.isCurrentMonth) {
      return "not-current-month";
    } else if (dayObj.isActived) {
      return "active";
    }
    return "";
  };

  return (
    <div>
      <CalendarTable>
        <CalendarCaption>
          <MonthSwitch className="left" onClick={goToPreviousMonth}>
            {"<"}
          </MonthSwitch>
          <span>
            {new Date(currentYear, currentMonth).toLocaleDateString("zh-tw", {
              month: "long",
              year: "numeric",
            })}
          </span>
          <MonthSwitch className="right" onClick={goToNextMonth}>
            {">"}
          </MonthSwitch>
        </CalendarCaption>
        <thead>
          <tr>
            {["日", "一", "二", "三", "四", "五", "六"].map((d) => (
              <th key={d}>{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendar.map((week, i) => (
            <tr key={`week-${i}`}>
              {week.map((dayObj, j) => (
                <td key={`day-${i}-${j}`} className={getDayClassName(dayObj)}>
                  {dayObj ? `${dayObj.day}日` : ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </CalendarTable>
    </div>
  );
}

export default Calendar;
