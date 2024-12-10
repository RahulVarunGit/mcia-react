import React, { useState } from 'react';
import './SearchBar.css';
import 'bootstrap/dist/css/bootstrap.css';


function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.steamUsers.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        //if (searchWord === "") {
        if (searchWord.length < 3) {
            setFilteredData([]);
        }
        else {
            setFilteredData(newFilter);
        }
    };

    return (
        <div className="search">
            <div className="searchInputs ">

                <input className="border border-dark" type="text" placeholder={placeholder} onChange={handleFilter} />

            </div>
            {filteredData.length != 0 && (
                <div className="dataResult">
                    {filteredData.slice(0, 5).map((value, key) => {
                        return <a className="dataItem" href={value.link} > <p>{value.name}</p></a>
                    })}
                </div>
            )}
        </div >
    );

}

export default SearchBar;