import axios from "axios";
import doashboard from "../../components/quantri";
import { add } from "../../api/products";
import { reRender } from "../../utils";
import adminNews from ".";

const adminAdd = {
    render() {
        return /* html */ `
        <div class="min-h-full">
            ${doashboard.render()}
            <header class="bg-white shadow">
            <div class="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="lg:flex lg:items-center lg:justify-between">
                    <div class="flex-1 min-w-0">
                        <h2
                        class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                        >
                        Thêm mới sản phẩm
                        </h2>
                    </div>
                    <div class="mt-5 flex lg:mt-0 lg:ml-4">
                        <a href="/admin/news/add" class="sm:ml-3">
                            <button
                                type="button"
                                class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Quay lại
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            </header>
            <main>
            <div class="max-w-5xl mx-auto sm:px-6 lg:px-8">
                <!-- Replace with your content -->
                <div class="px-4 py-6 sm:px-0">
                <form class="form" action="" id="form-add-post">
    
                <div class="ten">
                <label for="">Tên sản phẩm</label>
                <input class="a" type="text" id="title-post" placeholder="Tên sản phẩm">
               </div>
               <div class="anh">
                <label for="">Ảnh sản phẩm</label>
                <input type="file" id="img-post">
                <div><img width="200" src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg" id="img-preview"/></div>
               </div>
               <div class="price">
                <label for="">Giá sản phẩm</label>
                <input class="a" type="text" id="desc-post" placeholder="Gia san pham">
               </div>
               
               <button class="add">Thêm mới</button>
              </form>
                </div>
                <!-- /End replace -->
            </div>
            </main>
        </div>
        `;
    },
    afterRender() {
        const formAdd = document.querySelector("#form-add-post");

        const imgPost = document.querySelector("#img-post");
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dm6frgae8/image/upload";
        const CLOUDINARY_PRESET = "wcaejvib";
        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            const file = imgPost.files[0];

            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            // call api cloudinary
            const { data } = await axios.post(CLOUDINARY_API_URL, formData, {

            });
            // call api thêm bài viết
            add({
                title: document.querySelector("#title-post").value,
                img: data.url,
                desc: document.querySelector("#desc-post").value,

            });
            window.location.href = "/#/admin/products";
            reRender(adminNews, "#app");
        });
    },
};
export default adminAdd;