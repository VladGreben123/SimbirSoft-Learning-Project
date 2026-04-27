import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookingProvider } from './context/BookingContext'
import routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <BookingProvider>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BookingProvider>
    </BrowserRouter>
  );
}

export default App;
