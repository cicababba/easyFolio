import {useEffect, useState} from "react";

const ProgressBar = () => {
    const [value, setValue] = useState(0)
    useEffect(() => {
        const id = setInterval(() => setValue(value + 1), 12)
        return () => clearInterval(id)
    })
    return <progress className="progress progress-primary w-56" value={value} max="100"/>
}

export default ProgressBar
