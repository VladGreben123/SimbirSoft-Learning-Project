import MainPage from "./pages/MainPage/MainPage";
import BookPage from "./pages/BookPage/BookPage";

const routes = [
    { path: "/", element: <MainPage /> },
    { path: "/book/place", element: <BookPage /> }
];

export default routes;
