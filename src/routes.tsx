import MainPage from "./pages/MainPage/MainPage";
import BookPointPage from "./pages/BookPointPage/BookPointPage";
import BookModelPage from "./pages/BookModelPage/BookModelPage";
import BookAdditionalPage from "./pages/BookAdditionalPage/BookAdditionalPage";
import BookTotalPage from "./pages/BookTotalPage/BookTotalPage";
import AdminAuthPage from "./pages/AdminAuthPage/AdminAuthPage";

const routes = [
  { path: "/", element: <MainPage /> },
  { path: "/book/point", element: <BookPointPage /> },
  { path: "/book/model", element: <BookModelPage /> },
  {
    path: "/book/additional",
    element: <BookAdditionalPage />,
  },
  { path: "/book/total", element: <BookTotalPage /> },
  { path: "/admin/login", element: <AdminAuthPage /> },
];

export default routes;
