import React, { useState } from 'react';
import axios from 'axios';

import classes from './CheckResult.module.css';

const CheckResult = () => {
    const [rollNumbers, setRollNumbers] = useState("");
    const [filteredRollNumbers, setFilteredRollNumbers] = useState();
    const [grades, setGrades] = useState();
    const [showGrades, setShowGrades] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    const storeRollNumbersHandler = (e) => {
        let input = document.querySelector('input');
        input.style.border = 'revert';
        input.setAttribute('placeholder', 'Enter Roll Numbers')
        setRollNumbers(e.target.value);
    }

    const submitHandler = () => {
        if(rollNumbers === ""){
            let input = document.querySelector('input');
            input.style.border = '2px solid #f00';
            input.setAttribute('placeholder', 'Field can not be empty')
        }

        else{
            setShowLoading(true);
            setShowGrades(false);

            var rollno = rollNumbers.split(",");
            rollno = rollno.map(function(a){return a.trim()});
            setFilteredRollNumbers(rollno);

            axios.post('/api/check-result', {'rollNumbers': rollno})
            .then(result => {
                setShowLoading(false);                
                setGrades(result.data.result);
                setShowGrades(true);
            })
            .catch(err => {
                console.log(err);
            })
        }   
    }

    return(
        <React.Fragment>
            <div className={classes.main}>
                <div className={classes.input_div}>
                    <h1 className={classes.heading}>Check Result</h1>
                    <div className={classes.input_box}>
                        <input type="text" id="text" onChange={storeRollNumbersHandler} placeholder="Enter Roll Numbers"/>
                        <button className={classes.submit_button} onClick={submitHandler}>Submit</button>
                    </div>

                    { showLoading && 
                    <div className={classes.loading}>
                        <div id="spinner" className={classes.loader} title="2">
                            <svg className={classes.svg} version="1.1" id="loader-1" x="0px" y="0px"
                                width="40px" height="40px" viewBox="0 0 50 50" style={{"enableBackground":"new 0 0 50 50"}}>
                            <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
                                <animateTransform attributeType="xml"
                                attributeName="transform"
                                type="rotate"
                                from="0 25 25"
                                to="360 25 25"
                                dur="0.6s"
                                repeatCount="indefinite"/>
                                </path>
                            </svg>
                        </div>
                        <h4>Loading Results...</h4>
                    </div> 
                    }                   
                </div>

                { showGrades && <div className={classes.result_div}>
                    <table className={classes.result_table}>
                        <thead>
                            <tr>
                                <th className={classes.row_heading}>Roll Number</th>
                                <th className={classes.row_heading}>Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            { grades.map((key,index) => (
                                <tr>
                                    <td className={classes.data}>{filteredRollNumbers[index]}</td>
                                    <td className={classes.data} style={key === "Pass" ? {'color':'#0f0'} : {'color':'#f00'}}>{key}</td>
                                </tr>
                            ))} 
                        </tbody>
                    </table>
                </div> }
            </div> 
        </React.Fragment>
    )
}

export default CheckResult;