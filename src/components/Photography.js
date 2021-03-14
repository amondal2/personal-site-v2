import React from 'react';

const Photography = () => {
    return (
        <div className="photoWrapper">
            <h2 id="photo">Photography</h2>
            <p>Some of the photos I've taken over the years. Click each tile for a full album.</p>
            <div className="tileContainer">
                <button className="nyc">NYC</button>
                <button className="dc">DC</button>
                <button className="bos">Boston</button>
                <button className="japan">Japan</button>
                <button className="india">India</button>
                <button className="china">China</button>
                <button className="hk">Hong Kong</button>
                <button className="taiwan">Taiwan</button>
                <button className="france">France</button>
            </div>
        </div>
    );
}

export default Photography;