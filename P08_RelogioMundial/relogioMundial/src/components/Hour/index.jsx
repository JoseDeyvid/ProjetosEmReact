import React, { useState, useEffect } from 'react'

const Hour = ({ timeZone }) => {
    const [hour, setHour] = useState("")
    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            const options = {
                timeZone,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            };
            const timeString = date.toLocaleTimeString("en-US", options)
            setHour(timeString)
        }, 1000)
        return () => clearInterval(intervalId);
    }, [])

    return (
        <h3>{hour}</h3>
    )
}

export default Hour