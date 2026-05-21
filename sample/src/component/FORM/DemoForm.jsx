import React, { useState } from 'react'
function StudentReg() {
    const [data, setData] = useState({ name: "", tel: "", email: "" })
    const handleChange = (e) => {
        setData({ ...data, [e.target.value]: [e.target.name] })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.name == "" || data.tel == "" || data.email == "") {
            alert("fill all data");
        }
        else {
            alert('data dubmited sucessfully by &(data.name)!');
        }
        setData({ name: "", tel: "", email: "" });
    }

    return (
        <div>
            <h1>Student Registration</h1>
            <form>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" required value={data.name} />
                <label htmlFor="name">Mobile: </label>
                <input type="tel" id="tel" name="name" required value={data.tel} />
                <label htmlFor="">Email: </label>
                <input type="email" id="email" name="email" required value={data.email} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}
export default StudentReg;