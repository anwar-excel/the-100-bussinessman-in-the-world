import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Man from '../Man/Man';
import './Businessman.css';

const Businessman = () => {
    const [businessmans, setBusinessmans] = useState([]);
    const [man, setMan] = useState([]);

    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setBusinessmans(data))
    }, [])

    // const handleAddToMan = (business) => {
    //     console.log(business.name);
    // }

    return (
        <div>
            {
                businessmans.map(businessman => console.log(businessman))
            }
            <div className="d-flex">
                <div className="businessman-container col-md-8 center ">
                    {
                        businessmans.map(business => <Man man={business}
                            image={business.image}
                        // handleAddToMan={handleAddToMan}
                        ></Man>)
                    }
                </div>
                <div className=" col-md-4 right-side  ">
                    <h2>length{ }</h2>
                    <Card />
                </div>
            </div>
        </div >
    );
};

export default Businessman;