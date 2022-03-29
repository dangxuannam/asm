const Banner = {
    render() {
        return `
        <div class="banner-dm">
        <div class="category">
          <h2>Danh mục sản phẩm</h2>
          <div class="danhmuc">
            <ul>
              <li><a href="">Máy tính Apple</a></li>
              <li><a href="">Máy tính Dell</a></li>
              <li><a href="">Máy tính Apple</a></li>
              <li><a href="">Máy tính Apple</a></li>
              <li><a href="">Máy tính Apple</a></li>
              <li><a href="">Máy tính Acer</a></li>
            </ul>
          </div>
        </div>  
                <div class="banner">
                  <img src="./src/img/banner.png"  alt="">
                </div>
                <div class="banner1">
                  <img class="bn1" src="./src/img/bn2.png" width="195px"  alt="">
                  <img src="./src/img/bn2.png" width="195px"  alt="">
                </div>
              </div>
        `;
    },
};
export default Banner;