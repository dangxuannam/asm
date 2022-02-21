import Header from "../components/header";
import Banner from "../components/banner";
import product from "../components/product";
import footer from "../components/footer";
import productsnew from "../components/productsnew";

const HomePage = {
    async  render() {
        return `
        <header id="header">
                    ${Header.render()}
                </header>
        
        <div class="banner">
                        ${Banner.render()}
                        
                    </div>
                    
                    <div class="product">
                    ${productsnew.render()}
                    ${await product.render()}
                    </div>
                    

                    <footer>
                    
                    ${footer.render()}
                    </footer>
                   
                   
        `;
    },
    afterRender() {
        Header.afterRender();
    },

};
export default HomePage;