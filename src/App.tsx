import React, { useEffect, useState } from 'react';
import './App.css';
import Hubs from './pages/Hubs';
import { fetchHubsThunk } from './thunks/fetchHubs';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store/store';

const App = () => {
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
      <Hubs />
    </>
  );
}

export default App;
