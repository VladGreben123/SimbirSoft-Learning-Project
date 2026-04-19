import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import routes from './routes';

function App() {
  return (
    <BrowserRouter basename="/SimbirSoft-Learning-Project">
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
