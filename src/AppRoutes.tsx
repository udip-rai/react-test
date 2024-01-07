import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalLayout } from "views/layouts";
import * as Pages from "views/pages";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route index element={<Pages.Home />} />
          <Route path="home-page" element={<Pages.Home />} />

          {/* Questions routes */}
          <Route path="q-1" element={<Pages.Question1 />} />
          <Route path="q-2" element={<Pages.Question2 />} />
          <Route path="q-3" element={<Pages.Question3 />} />
          <Route path="q-4" element={<Pages.Question4 />} />
          <Route path="q-5" element={<Pages.Question5 />} />

          {/* Error page for 404 */}
          <Route path="*" element={<>Error 404! Page not found.</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
