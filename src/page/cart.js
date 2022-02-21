import toastr from "toastr";
import { reRender } from "../utils";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../utils/cart";
import "toastr/build/toastr.min.css";

const CartPage = {
    render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return `
        <div class="row3">
            <div class="row1">
                <H2>DANH SÁCH SẢN PHẨM</H2>
            </div> 
        <table class="table table-bordered">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
            <thead>
            <tr>
                <th>Tên sản phẩm</th>
                <th>Giá sản phẩm</th>
                <th>Số lượng</th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            ${cart.map((item) => `
                <tr>
                    <td>${item.title}</td>
                    <td>${item.desc}</td>
                    <td><input type="number" value="${item.quantity}" /></td>
                    <td>
                        <button data-id="${item.id}" class="btn btn-increase">Tăng</button>
                        <button data-id="${item.id}" class="btn btn-decrease">Giảm</button>
                    </td>
                    <td>
                        <button data-id="${item.id}" class="btn btn-remove">Xóa</button>
                    </td>
                </tr>
            `).join("")}
            </tbody>
        </table>
        </div> 
        `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                if (btn.classList.contains("btn-increase")) {
                    increaseQuantity(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Tăng số lượng thành công");
                    });
                } else if (btn.classList.contains("btn-decrease")) {
                    decreaseQuantity(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Giảm số lượng thành công");
                    });
                } else {
                    removeItemInCart(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Xóa sản phẩm thành công");
                    });
                }
            });
        });
    },
};
export default CartPage;