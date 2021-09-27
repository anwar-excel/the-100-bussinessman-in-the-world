import React from 'react';


const Card = (props) => {
    // console.log(props.cart)
    const { cart } = props;
    let total = 0;
    // let dollor = '$';
    for (const data of cart) {
        total = total + data.salary;
    }
    return (
        <div className="card shadow p-3 mb-5 bg-body rounded pt-3">

            <p>Length:{props.cart.length} </p>

            <p>salary: {total}</p>

            <div>
                {
                    cart.map(man => <h5>Name:{man.name}</h5>)
                }
            </div>
        </div>
    );
};

export default Card;