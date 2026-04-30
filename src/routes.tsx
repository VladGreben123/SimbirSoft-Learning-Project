import MainPage from "./pages/MainPage/MainPage";
import BookPointPage from "./pages/BookPointPage/BookPointPage";
import BookModelPage from "./pages/BookModelPage/BookModelPage";

const routes = [
  { path: "/", element: <MainPage /> },
  { path: "/book/point", element: <BookPointPage /> },
  { path: "/book/model", element: <BookModelPage /> },
];

export default routes;
