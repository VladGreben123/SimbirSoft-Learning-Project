import MainPage from "./pages/MainPage/MainPage";
import BookPointPage from "./pages/BookPointPage/BookPointPage";
import BookModelPage from "./pages/BookModelPage/BookModelPage";
import BookAdditionalPage from "./pages/BookAdditionalPage/BookAdditionalPage";
import BookTotalPage from "./pages/BookTotalPage/BookTotalPage";
import AdminAuthPage from "./pages/AdminAuthPage/AdminAuthPage";
import AdminRegPage from "./pages/AdminRegPage/AdminRegPage";
import AdminOrderPage from "./pages/AdminOrderPage/AdminOrderPage";

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
  { path: "/admin/registration", element: <AdminRegPage /> },
  { path: "/admin/panel/orders", element: <AdminOrderPage /> },
];

export default routes;
