import { HashRouter, Navigate, Route, Routes } from "react-router";
import AppLayout from "./pages/AppLayout";
import Countries from "./pages/Countries";
import Country from "./pages/Country";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/countries" replace />} />

        <Route element={<AppLayout />}>
          <Route path="/countries" element={<Countries />} />
          <Route path="/country/:name" element={<Country />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
