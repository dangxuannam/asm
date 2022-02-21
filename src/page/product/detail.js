import toastr from "toastr";
import { get } from "../../api/products";
import { addTocart } from "../../utils/cart";
import "toastr/build/toastr.min.css";
import Header from "../../components/header";

const DetailProductPage = {
    async render(id) {
        const { data } = await get(id);
        return `
        ${Header.render()}
        <div class="contentct">
        
             <div class="home">
                 <a href="/"><i class="fas fa-home"></i>Trang chủ</a>
             </div>
             <div class="content-img-title">
                 <div class="img">
                     <img src="${data.img}" alt="" width="600px">
                 </div>
             <div class="mota">
                 <h2>${data.title}</h2>
                 <del>500.000đ</del>
                 <span>${data.desc}</span>
                 <ul>
                     <li>Trạng thái: còn hàng</li>
                     <li>Tình trạng: hàng mới 100%</li>
                     <li>Hình thức: Giao hàng toàn quốc & Thanh toán khi nhận hàng</li>
                 </ul>
                 <div>
                 <input type="number" id="inputValue" class="border border-gray-500" width="30px" />
             </div>
                <div class="button">
                    <button id="btnAddToCart">THÊM VÀO GIỎ HÀNG</button>
                     <button id="btnAddToCart">MUA NGAY</button>
                </div>
                </div>
            </div>
            
               
            </div> 
            
        `;
    },
    afterRender(id) {
        const btnAddToCart = document.querySelector("#btnAddToCart");
        const inputValue = document.querySelector("#inputValue");
        btnAddToCart.addEventListener("click", async () => {
            const { data } = await get(id);
            addTocart({ ...data, quantity: inputValue.value ? +inputValue.value : 1 }, () => {
                toastr.success("Đã thêm");
            });
        });
    },
};
export default DetailProductPage;