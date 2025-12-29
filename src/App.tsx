import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookCall from "./pages/BookCall";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-call" element={<BookCall />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
