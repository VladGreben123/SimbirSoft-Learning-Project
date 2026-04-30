import MainPage from "./pages/MainPage/MainPage";
import BookPointPage from "./pages/BookPointPage/BookPointPage";
import BookModelPage from "./pages/BookModelPage/BookModelPage";
import BookAdditionalPage from "./pages/BookAdditionalPage/BookAdditionalPage";

const routes = [
  { path: "/", element: <MainPage /> },
  { path: "/book/point", element: <BookPointPage /> },
  { path: "/book/model", element: <BookModelPage /> },
  {
    path: "book/additional",
    element: <BookAdditionalPage />,
  },
];

export default routes;
