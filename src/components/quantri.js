const doashboard = {
    render() {
        return /* html */ `
        <!DOCTYPE html>
        <!-- Created By CodingNepal -->
        <html lang="en" dir="ltr">
           <head>
              <meta charset="utf-8">
              <title>Sidebar Menu with sub-menu | CodingNepal</title>
             
              <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
           </head>
          
           <body>
              <div class="btn">
                 <span class="fas fa-bars"></span>
              </div>
              <nav class="sidebar">
                 <div class="text">
                    Side Menu
                 </div>
                 <ul>
                    <li class="active"><a href="/admin">Dashboard</a></li>
                    <li>
                       <a href="" class="">Danh mục
                      
                       </a>
                      
                    </li>
                    <li>
                       <a href="/admin/products" class="serv-btn">Sản phẩm
                      
                       </a>
                      
                    </li>
                    <li><a href="">Username</a></li>
                    <li><a href="">Comment</a></li>
                    <li><a href="#">log out</a></li>
                    
                 </ul>
              </nav>
              <div class="contentad">
                 <div class="header">
                    
                 </div>
                 <script>
                 $('.btn').click(function(){
                   $(this).toggleClass("click");
                   $('.sidebar').toggleClass("show");
                 });
                   $('.feat-btn').click(function(){
                     $('nav ul .feat-show').toggleClass("show");
                     $('nav ul .first').toggleClass("rotate");
                   });
                   $('.serv-btn').click(function(){
                     $('nav ul .serv-show').toggleClass("show1");
                     $('nav ul .second').toggleClass("rotate");
                   });
                   $('nav ul li').click(function(){
                     $(this).addClass("active").siblings().removeClass("active");
                   });
              </script>
              </div>
             
        `;
    },
};
export default doashboard;