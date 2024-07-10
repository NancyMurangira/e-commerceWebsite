import Header from "./Navbar";
import Action from "./CallToAction";
// import AllProducts from "./AllProducts";
import Products from "./Products/product";
import Footer from "./Footer";
function App(){
  return(
    <div>
      <Header/>
      <Action/>
      <Products/>
      <Footer/>
      {/* <AllProducts/> */}

    </div>
  );
};

export default App;