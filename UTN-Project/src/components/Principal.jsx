import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import products from "/root/UTN-Project/UTN-Project/data/products.json";

function Principal() {

    return (
        <>
            <Navbar/>
            <Main products={products.products} />
            <Footer/>
        </>
    )
};

export default Principal;