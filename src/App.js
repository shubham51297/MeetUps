import { Routes,Route, Link } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";
function App() {
  // localhost:3000/
  return (

    <Layout>
      <Routes>
      <Route path="/" element={<AllMeetupsPage/>} />
      <Route path="/new-meetup" element={<NewMeetupPage/>} />
      <Route path="/Favorites" element={<FavoritesPage/>} />
      </Routes>
    </Layout>
      
      
  );
}

export default App;
