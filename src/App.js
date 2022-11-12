import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HomeScreen } from './pages/home-page';
import { PostPage } from './pages/post-page';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/post/:postId' element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
