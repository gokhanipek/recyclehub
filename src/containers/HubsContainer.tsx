import React from 'react'
import { useSelector } from 'react-redux'
import Hub from '../components/Hub';
import { getHubs, getIsLoading } from '../selectors/selectors';
import { HubsResponse, HubsState } from '../types/types';

function HubsContainer() {
    const hubs: HubsResponse[] = useSelector(getHubs);
    return (
        <>
            {
                !!hubs && hubs.map(hub =>
                    <div>
                        <p>name: {hub.name}</p>
                        <p>state: {hub.stage}</p>
                        <p>state: {hub.state}</p>
                        <p>thankyou: {hub.thankYouNote}</p>
                        <p>totalrecovery: {hub.totalRecoveredQuantity}</p>
                        <p>unassignedquantity: {hub.unassignedQuantityTotal}</p>
                        <p>type: {hub.type}</p>
                        <p>category: {hub.category}</p>
                        <p>display name: {hub.displayName}</p>
                        <p>cardDescription: {hub.cardDescription}</p>
                        <p>card image: {hub.cardImage?.fileName}</p>
                        <p>external id: {hub.externalId}</p>
                        <p>formattedRecoveredQuantity: {hub.formattedRecoveredQuantity}</p>
                        <p>location: {hub.location}</p>
                        <p>logo: {hub.logo?.fileName}</p>
                        <p>unassignedQuantityTotal: {hub.unassignedQuantityTotal}</p>

                        
                    </div>
                )
            }
        </>
    )
}

export default HubsContainer