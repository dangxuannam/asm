import toastr from "toastr";
import { reRender } from "../utils/index";
import "toastr/build/toastr.min.css";

const Header = {
    render() {
        return /* html */ `
    
      
        <div  class="header-top">
        <div class="header-logo">
<img src="../src/img/logo.png" width="100px" alt="">
        </div>
        <div class="header-search">
          <div class="search">
              <input type="text" name="" placeholder="Nhập từ khoá để tìm kiếm" id="">
          </div>
          <div class="icon-search">
              <button type="submit"><i class="fas fa-search"></i></button>
          </div>
      </div>
      <div class="header-cart">
        <a href="/cart"><i class="fas fa-shopping-cart"></i></a>
    </div>
    <div class="header-signin" >
    
    ${localStorage.getItem("user") ? `<ul class="flex">
      <li><a  id="account-email" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white"></a></li>
      <li><a  id="logout" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white cursor-pointer">Logout</a></li>
  </ul>` : ""}
     
      
    </div>
        </div>

        
        <div class="header-menu">
          <ul class="root">
            <li><a href="/">Trang Chủ</a></li>
            <li><a href="/products">Sản Phẩm</a>
            <ul class="submenu">
              <li><a href="">Điện thoại</a></li>
              <li><a href="">Laptop</a></li>
            </ul>
            </li>
            <li><a href="">Khuyến Mãi</a></li>
            <li><a href="">Liên Hệ</a></li>
            <li><a href="/admin">Dịch Vụ</a></li>
          </ul>
        </div>
    
    `;
    },
    afterRender() {
        const user = JSON.parse(localStorage.getItem("user"));
        const logout = document.querySelector("#logout");

        document.querySelector("#account-email").innerHTML = user.email;
        // logout
        logout.addEventListener("click", () => {
            toastr.success("Logout thành công");
            localStorage.removeItem("user");
            reRender(Header, "#header");
        });
    },
};
export default Header;