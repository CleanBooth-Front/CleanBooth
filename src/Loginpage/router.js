import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./loading";
import Login from "./login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Loading" element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
