import Header from "./Navbar";
import Action from "./CallToAction";
// import AllProducts from "./AllProducts";
import Products from "./Products/product";
function App(){
  return(
    <div>
      <Header/>
      <Action/>
      <Products/>
      {/* <AllProducts/> */}

    </div>
  );
};

export default App;