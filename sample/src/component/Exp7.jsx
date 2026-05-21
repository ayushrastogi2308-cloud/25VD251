import React from 'react'
function props({students}){
    const studentList =[];
    for(let x in students){
        studentList.push(
        <div>
        <h2>{students[x].name}</h2>
        <h3>{students[x].rollno}</h3>
        <h4>{students[x].course}</h4>
        </div>
        );
    }
}
return(
    <div>{studentList}
    </div>
);