import React from 'react';
import './Man.css'

const Man = (props) => {
    const { name, age, salary, nationality, gender, profession, image } = props.man;

    return (
        <div className="box  card shadow p-3 mb-5 bg-body rounded pt-3">
            <div><img className="rounded rounded-circle" style={{ height: "200px", width: "200px" }} src={image} alt="" /></div>
            <div className="center">
                <h4>Name: {name}</h4>
                <h6>Salary: ${salary}</h6>
                <h6>Age: {age} years</h6>
                <h6>Nationality: {nationality}</h6>
                <h6>Profession: {profession}</h6>
                <h6>Gender: {gender}</h6>

                <button onClick={() => props.handleAddToMan(props.man)} className="btn-man">Add Man</button>
            </div>




        </div>
    );
};

export default Man;