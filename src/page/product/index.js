import { getAll } from "../../api/products";

const ProductsPage = {
    async render() {
        const { data } = await getAll();
        return `
            <h2 class="font-semibold text-blue-900 my-4 uppercase text-2xl">Tin tức học tập</h2>
                <div class="grid grid-cols-3 gap-8">
                    ${data
        .map(
            (post) => `
                            <div class="border p-3">
                                <a href="/#/products/${post.id}"><img src="${post.img}" alt="" /></a>
                                <h3 class="my-3"><a href="/#/products/${post.id}" class="font-semibold text-orange-500 text-lg">${post.name}</a></h3>
                                <p>${post.desc}</p>
                                <p>${post.price}</p>
                            </div>
                            `,
        )
        .join("")}
                </div>
        `;
    },
};
export default ProductsPage;