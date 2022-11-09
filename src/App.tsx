import "./App.css";
import { Routes, Route } from "react-router-dom";
import { TransferPage, ProfilePage, MintPage, HomePage } from "./pages";
import { Transfer, Profile, Mint, Home } from "./routes";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path={Home} element={<HomePage />} />
        <Route path={Mint} element={<MintPage />} />
        <Route path={Profile} element={<ProfilePage />} />
        <Route path={Transfer} element={<TransferPage />} />
      </Routes>
    </div>
  );
}

export default App;
