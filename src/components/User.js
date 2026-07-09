import { useState } from "react";
const User = ({name}) => {
    const [count, setCount] = useState(1);
    const [count2] = useState(2);
    return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
        <h3>Name: {name}</h3>
        <h4>Location: Hyderabad</h4>
        <h4>Ph.no: 9642358956</h4>
        <h4>Count: {count}</h4>
        <h4>Count2: {count2}</h4>
    </div>
)}

export default User;