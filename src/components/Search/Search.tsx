import React from 'react'
import styles from './Search.module.scss';


const Search = ({name, handleSearchChange}) => {
    return (
        <div className={styles.search}>
            <label>Search Hubs: </label>
            <input id="name" type="text" placeholder='Search Hub Name'  value={name} onChange={handleSearchChange} />
        </div>
    )
}

export default Search;