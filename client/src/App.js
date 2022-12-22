import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import CreateAccount from "./components/CreateAccount";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/create" element={<CreateAccount />}></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
