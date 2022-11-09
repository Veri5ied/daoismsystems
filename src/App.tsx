import "./App.css";
import { Routes, Route } from "react-router-dom";
import { TransferPage, ProfilePage, MintPage, HomePage } from "./pages";
import { Transfer, Profile, Mint, Home } from "./routes";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path={Home} element={<HomePage />} />
        <Route element={<Layout />}>
          <Route path={Mint} element={<MintPage />} />
          <Route path={Profile} element={<ProfilePage />} />
          <Route path={Transfer} element={<TransferPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
