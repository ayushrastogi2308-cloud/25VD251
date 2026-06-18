import { useState } from 'react';
import students from './studentData';
import './App.css';

function App() {
    const [highlightedRows, setHighlightedRows] = useState(new Set());

    const handleClick = (studentId) => {
        setHighlightedRows((prev) => {
            const next = new Set(prev);
            if (next.has(studentId)) {
                next.delete(studentId);
            } else {
                next.add(studentId);
            }
            return next;
        });
    };

    return (
        <div className="app-container">
            <header>
                <h1>Student Management system</h1>
                <p>Hard-coded student JSON data rendered in a React app.</p>
            </header>
            <div id="student-list">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Grade</th>
                            <th>Major</th>
                            <th>Email</th>
                            <th>District</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((st) => {
                            const isHighlighted = highlightedRows.has(st.id);
                            return (
                                <tr
                                    key={st.id}
                                    className={`student-row ${isHighlighted ? 'highlighted' : ''}`}>
                                    <td>{st.id}</td>
                                    <td>{st.name}</td>
                                    <td>{st.age}</td>
                                    <td>{st.grade}</td>
                                    <td>{st.major}</td>
                                    <td>{st.email}</td>
                                    <td>{st.address.district}</td>
                                    <td>{st.address.city}</td>
                                    <td>{st.address.state}</td>
                                    <td>
                                        <button onClick={() => handleClick(st.id)}>
                                            {isHighlighted ? 'Unset color' : 'Change color'}
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;
