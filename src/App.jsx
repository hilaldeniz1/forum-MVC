import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/style.scss";
import ListPostsController from "./pages/ListPosts/ListPostsController";
import HeaderView from "./components/HeaderView";
import AddPostController from "./pages/AddPost/AddPostController";

function App() {
  return (
    <BrowserRouter>
      <HeaderView />
      <Routes>
        <Route path="/" element={<ListPostsController />} />
        <Route path="/add-post" element={<AddPostController />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
