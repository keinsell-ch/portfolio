import { useState, useEffect } from 'react'

interface ClockProps {
    onlyTime?: boolean;
    onlyDay?: boolean;
}

export default function Clock({ onlyTime, onlyDay }: ClockProps) {
    const month_list = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day_list = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const [current_time, setCurrent_time] = useState(new Date());
    const [hour_12] = useState(true);

    useEffect(() => {
        const update_time = setInterval(() => {
            setCurrent_time(new Date());
        }, 10 * 1000);

        return () => clearInterval(update_time);
    }, []);

    const day = day_list[current_time.getDay()];
    let hour = current_time.getHours();
    let minute = current_time.getMinutes();
    const month = month_list[current_time.getMonth()];
    const date = current_time.getDate().toLocaleString();
    const meridiem = (hour < 12 ? "AM" : "PM");

    if (minute.toLocaleString().length === 1) {
        minute = Number("0" + minute)
    }

    if (hour_12 && hour > 12) hour -= 12;

    let display_time;
    if (onlyTime) {
        display_time = hour + ":" + minute + " " + meridiem;
    }
    else if (onlyDay) {
        display_time = day + " " + month + " " + date;
    }
    else display_time = day + " " + month + " " + date + " " + hour + ":" + minute + " " + meridiem;
    
    return <span>{display_time}</span>;
}
