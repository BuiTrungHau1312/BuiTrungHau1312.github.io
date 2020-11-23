var s = `
    <input type="checkbox" id="hidden-show-nav" hidden>

    <label class="open-nav" for="hidden-show-nav">
        <i class="icon-sun"></i>
    </label>

    <label class="close-nav" for="hidden-show-nav">
        <i class="icon-exit"></i>
    </label>

    <label for="hidden-show-nav" class="nav-overlay"></label>

    <header class="header box-shadow-on-mobile-tablet">
        <nav class="header-navbars">
            <section class="navbars-title">
                <a href="./index.html" class="navbars-title__link">
                    <h1>Apple Store</h1>
                </a>
            </section>

            <menu class="navbars-menu">
                <ul class="menu-list">
                    <li class="list-item active">
                        <a href="/index.html" class="item-link">HOME</a>
                    </li>

                    <li class="list-item">
                        <a href="/modules/product/product.html" class="item-link">PRODUCTS</a>
                    </li>

                    <li class="list-item">
                        <a href="/modules/about/about.html" class="item-link">ABOUT</a>
                    </li>

                    <li class="list-item">
                        <a href="/modules/service/service.html" class="item-link">SERVICES</a>
                    </li>

                    <li class="list-item">
                        <a href="/modules/blog/blog.html" class="item-link">BLOG</a>
                    </li>

                    <li class="list-item">
                        <a href="/modules/contact/contact.html" 
                            class="item-link">CONTACT</a>
                    </li>
                </ul>
            </menu>

            <footer class="navbars-info">
                <section class="info-brief">
                    <p>
                        &copy; Copyright &copy;
                        <script type="text/javascript">
                            let currentDay = new Date();
                            let currentYear = currentDay.getFullYear();
                            document.write(currentYear);
                        </script>
                        All right reserved | Development by MyTeam.
                    </p>
                </section>

                <menu class="info-social">
                    <ul class="social-list">
                        <li class="social-item">
                            <a href="https://www.facebook.com/DuongBacDong.2000/" 
                                class="social-link" target="_blank">
                                <i class="icon-facebook"></i>
                            </a>
                        </li>

                        <li class="social-item">
                            <a href="https://www.twitter.com/Bacdong/" 
                                class="social-link" target="_blank">
                                <i class="icon-twitter"></i>
                            </a>
                        </li>

                        <li class="social-item">
                            <a href="https://www.instagram.com/" 
                                class="social-link" target="_blank">
                                <i class="icon-instagram"></i>
                            </a>
                        </li>

                        <li class="social-item">
                            <a href="tel:+84915272291" class="social-link" target="_blank">
                                <i class="icon-telegram"></i>
                            </a>
                        </li>
                    </ul>
                </menu>
            </footer>
        </nav>
    </header>
`

var divElement = document.querySelector(".templateStringHeader");
divElement.innerHTML = s;

$(window).bind("resize", function(){
    var widthBrowser = $(document).width();
    var inputTypeCheckboxElement = document.querySelector("#hidden-show-nav");
    
    if(widthBrowser > 739) 
        inputTypeCheckboxElement.checked = false;
});





