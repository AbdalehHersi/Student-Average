import { useState } from 'react';
// import { studentAverageLetter, studentAverageNum } from '../utils/findAverage';

export default function Form() {
    const [formType, setFormType] = useState("Numeric");
    const [studentName, setStudentName] = useState("");
    const [studentScore1, setStudentScore1] = useState();
    const [studentScore2, setStudentScore2] = useState();
    const [studentScore3, setStudentScore3] = useState();
    const classroom = [];
    const inputField = document.querySelectorAll(".inputField");
    const Student1 = {
        name: "Azin Nordin",
        scores: [55, 65, 90]
    };
    const Student2 = {
        name: "Ali",
        grades: ["A", "C", "C+"]
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const Student = {
            name: studentName,
            scores: [studentScore1, studentScore2, studentScore3],
        };
        classroom.push(Student)
        inputField.forEach(field => field.value = "");
    }
    return (
        <div>
            <label><input type="radio" name="radio" value="Numeric" onClick={() => {
                setFormType("Numeric");
            }} defaultChecked /> Numeric</label>
            <label><input type="radio" name="radio" value="Letter" onClick={() => {
                setFormType("Letter");
            }} /> Letter</label>


            <form id="studentForm" onSubmit={(e) => handleSubmit(e)}>
                <fieldset>
                    <legend>Input Grade</legend>
                    {formType === "Numeric"
                        ? <>
                            <div className="formInput">
                                <label htmlFor="name">Student Name:</label>
                                <input className="inputField" type="text" name="name" required onChange={(e) => setStudentName(e.target.value)} />
                            </div><div className="formInput">
                                <label htmlFor="test1">Test 1:</label>
                                <input className="inputField" type="number" name="test1" required onChange={(e) => setStudentScore1(e.target.value)} />
                            </div><div className="formInput">
                                <label htmlFor="test2">Test 2:</label>
                                <input className="inputField" type="number" name="test2" required onChange={(e) => setStudentScore2(e.target.value)} />
                            </div><div className="formInput">
                                <label htmlFor="test3">Test 3:</label>
                                <input className="inputField" type="number" name="test3" required onChange={(e) => setStudentScore3(e.target.value)} />
                            </div>
                        </>
                        : <>
                            <div className="formInput">
                                <label htmlFor="name">Student Name:</label>
                                <input className="inputField" type="text" name="name" required onChange={(e) => setStudentName(e.target.value)} />
                            </div><div className="formInput">
                                <label htmlFor="grade1">Grade 1:</label>
                                <input className="inputField" type="text" name="grade1" required onChange={(e) => setStudentScore1(e.target.value)} />
                            </div><div className="formInput">
                                <label htmlFor="grade2">Grade 2:</label>
                                <input className="inputField" type="text" name="grade2" required onChange={(e) => setStudentScore2(e.target.value)} />
                            </div><div className="formInput">
                                <label htmlFor="grade3">Grade 3:</label>
                                <input className="inputField" type="text" name="grade3" required onChange={(e) => setStudentScore3(e.target.value)} />
                            </div>
                        </>
                    }
                </fieldset>
                <button type="submit" form="studentForm">Submit</button>
            </form>
            
        </div>
    )
}