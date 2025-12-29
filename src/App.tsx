import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookCall from "./pages/BookCall";
import Preview from "./pages/Preview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-call" element={<BookCall />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
