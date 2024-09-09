import "./App.css";
import Homepage from "./Homepage";
import { Provider } from "react-redux";
import { Store } from "./Store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartDetail from "./CartDetail";

function App() {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cart" element={<CartDetail />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
