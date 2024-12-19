import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import UserProvider from "./contexts/UserContext.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRepos from "./pages/UserRepos.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/repos/:login" element={<UserRepos />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
