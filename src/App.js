import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use Routes instead of Switch
import { Container } from '@mui/material';
import NavBar from './components/NavBar';  // Assuming you already have this component
import APOD from './pages/APOD';  // APOD page component
import EPIC from './pages/EPIC';  // EPIC page component
import MediaLibrary from './pages/MediaLibrary';  // MediaLibrary page component

function App() {
  return (
    <Router>
      <NavBar />
      <Container sx={{ paddingTop: 3 }}>
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/apod" element={<APOD />} />  {/* Use element prop instead of component */}
          <Route path="/epic" element={<EPIC />} />  {/* Use element prop instead of component */}
          <Route path="/media-library" element={<MediaLibrary />} />  {/* Use element prop instead of component */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
