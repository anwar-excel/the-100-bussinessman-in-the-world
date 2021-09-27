import React from 'react';


const Card = (props) => {
    // console.log(props.cart)
    const { cart } = props;
    let total = 0;
    for (const data of cart) {
        total = total + data.salary;
    }
    return (
        <div className="card shadow p-3 mb-5 bg-body rounded pt-3">

            <p>salary: {total}</p>
            <h3>name{props.name}</h3>

            <p>Salary:{props.cart.length} </p>
            <div>
                {
                    cart.map(man => <h5>Name:{man.name}</h5>)
                }
            </div>
        </div>
    );
};

export default Card;