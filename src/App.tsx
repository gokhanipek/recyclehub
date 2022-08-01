import React, { useEffect, useState } from 'react';

import { fetchHubsThunk } from './thunks/fetchHubs';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store/store';
import HubsContainer from './containers/HubsContainer';


const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [isFetched, setIsFetched] = useState<boolean>(false);

  useEffect(() => {
    if (isFetched) {
      dispatch(fetchHubsThunk());
    }
    setIsFetched(true);
  }, [isFetched])

  return (
    <>
      <div className="container">
        <HubsContainer />
      </div>
    </>
  );
}

export default App;
