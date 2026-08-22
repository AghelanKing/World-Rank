import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AppLayout from "./pages/AppLayout";
import Countries from "./pages/Countries";
import Country from "./pages/Country";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/countries" replace />} />
        <Route element={<AppLayout />}>
          <Route path="/countries" element={<Countries />} />
          <Route path="/country/:name" element={<Country />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
