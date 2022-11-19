import "./assets/css/style.css";
// import db from "./db";
// import { useState } from "react";
import Header from "./components/Header";
import FavouritesList from "./components/FavouritesList";
import Account from "./components/Account";

function App() {
  // const [users, setUsers] = useState(db.usersDb);
  // const [products, setProducts] = useState(db.productsDb);

  return <><Header /><main>
  <div className="container"><Account/>
  </div>
  
  </main></>; 
}

export default App;
 