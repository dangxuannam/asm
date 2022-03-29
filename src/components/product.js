import { getAll } from "../api/products";

const product = {
    async render() {
        const { data } = await getAll();

        return `
        
        
             
             <div class="title">
          <h2>Sản Phẩm Bán Chạy</h2>
        </div>
       
        <div class="product-sale">
        ${data.map((products) => `
          <div class="product">
          
          <a href="/newss/${products.id}"> <img src="${products.img}" alt=""></a>
            <p class="sale">Giảm 20%</p>
            <h3>${products.title}</h3>
            <span>${products.desc}vnd</span>
            <del>30000đ</del>
          </div>
          
           

           `)

        .join("")}
        
        </div>
        <div class="banner-ft">
        <img src="./src/img/bn4.jpg" width="100%" height="300px" alt="">
      </div>
         
        `;
    },
};
export default product;