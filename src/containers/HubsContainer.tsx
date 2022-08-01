import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Hub from '../components/Hub/Hub';
import Search from '../components/Search/Search';
import { getHubs } from '../selectors/selectors';
import { HubsResponse } from '../types/types';



const HubsContainer: React.FC = () => {

    const hubsState: HubsResponse[] = useSelector(getHubs);

    const [name, setName] = useState('');
    const [hubs, setHubs] = useState([]);
    
    useEffect(() => {
        setHubs(hubsState);
    }, [hubsState])


    const handleSearchChange = e => {
        setName(e.target.value);
    }

    const toSearch = name => item => item.name.toLowerCase().includes(name.toLowerCase());
    const filteredHubs = !!hubs && hubs.filter(toSearch(name));

    return (
        <>
            <Search name={name} handleSearchChange={handleSearchChange} />
            {name && filteredHubs.map(hub => <Hub key={hub.uuid} hub={hub} />)}
            {!name && !!hubs && hubs.map(hub => <Hub key={hub.uuid} hub={hub} />)}
        </>
    )
}

export default HubsContainer