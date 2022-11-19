import "./assets/css/style.css";
// import db from "./db";
// import { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  // const [users, setUsers] = useState(db.usersDb);
  // const [products, setProducts] = useState(db.productsDb);

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Outlet/>
        </div>
      </main>
    </>
  );
}

export default App;
