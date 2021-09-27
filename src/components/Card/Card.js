import React from 'react';

const Card = (props) => {
    const { name, salary } = props.data;
    // console.log(data);
    return (
        <div className="card shadow p-3 mb-5 bg-body rounded pt-3">


            <p>Salary: </p>
            <div>
                <h2>{name}</h2>
                <h4>{salary}</h4>
            </div>
        </div>
    );
};

export default Card;