import Navigo from "navigo";

import adminNews from "./page/admin";
import adminAdd from "./page/admin/add";
import adminEdit from "./page/admin/editproducts";
import CartPage from "./page/cart";

import admin from "./page/dashboard";
import deltai from "./page/deltails";
import HomePage from "./page/home";
import DetailProductPage from "./page/product/detail";
import Signin from "./page/signin";
import Signup from "./page/signup";

const router = new Navigo("/", { linksSelector: "a", hash: true });
const print = async (component, id) => {
    document.querySelector("#app").innerHTML = await component.render(id);
    if (component.afterRender) await component.afterRender(id);
};
router.on("/admin/*/", () => {}, {
    before(done) {
        if (localStorage.getItem("user")) {
            const userId = JSON.parse(localStorage.getItem("user")).id;
            if (userId === 2) {
            // render dựa trên router
                done();
            } else {
                document.location.href = "/";
            }
        } else {
            document.location.href = "/signin";
        }
    },
});

router.on({
    "/": () => print(HomePage),

    "/admin": () => print(admin),

    "/admin/products": () => print(adminNews),

    "/signin": () => print(Signin),

    "/signup": () => print(Signup),

    "/add": () => print(adminAdd),

    "/admin/news/:id": ({ data }) => print(adminEdit, data.id),

    "/news/:id": ({ data }) => print(deltai, data.id),
    "/cart": () => print(CartPage),
    "/newss/:id": ({ data }) => print(DetailProductPage, data.id),

});
router.resolve();