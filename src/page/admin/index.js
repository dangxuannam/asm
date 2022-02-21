import { getAll, remove } from "../../api/products";
import doashboard from "../../components/quantri";
import { reRender } from "../../utils";

const adminNews = {
    async render() {
        const { data } = await getAll();
        return /* html */`
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
                  Quản Lý Bài Viết
                    </h2>
                </div>
                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                    <a href="/add" class="sm:ml-3">
                        <button
                            type="button"
                            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                           Thêm mới bài viết
                        </button>
                    </a>
                </div>
            </div>
        </div>
        </header>
        <main>
            <div class="max-w-7xl mx-auto ml-56 ">
                <!-- Replace with your content -->
                <div class="px-2 py-6 sm:px-0">
                <div class="flex flex-col">
                <div class="">
                  <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <table class="min-w-full w-auto divide-y divide-gray-00">
                        <thead class="bg-gray-50">
                          <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                             STT
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Title
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            img
                          </th>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                         Price
                        </th>
                        
                          
                           
                            <th scope="col" class="relative px-6 py-3">
                              <span class="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                        ${data.map((products, index) => `
                          <tr>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="flex items-center">
                                <div class="flex-shrink-0 h-10 w-10">
                                  <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="">
                                </div>
                                <div class="ml-4">
                                  <div class="text-sm font-medium text-gray-900">
                                    ${index + 1}
                                  </div>
                                 
                                </div>
                              </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">${products.title}</div>
                              
                            </td>
                            <td><img src="${products.img}" width="50"/></td>
                           
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">${products.desc}</div>
                              
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            
                              <a href="/admin/news/${products.id}" class="text-indigo-600 hover:text-indigo-900">Sửa</a>
                              <button data-id="${products.id}" class="b bg-indigo-500 hover:bg-indigo-800 text-white text-sm py-2 px-4 rounded"> Xóa </button>
                            </td>
                            
                          </tr>
                          `).join("")}
                          <!-- More people... -->
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
                </div>
                <!-- /End replace -->
            </div>
        </main>
    </div>
        `;
    },
    afterRender() {
        const buttons = document.querySelectorAll(".b");

        buttons.forEach((b) => {
            const { id } = b.dataset;
            b.addEventListener("click", () => {
                const confirm = window.confirm("ban co chac chan muon xoa k");
                if (confirm) {
                    remove(id).then(() => {
                        console.log("da xoa ok");
                        reRender(adminNews, "#app");
                    });
                }
            });
        });
    },
};
export default adminNews;