(function($) {
    "use strict"; // 开始使用严格模式ES5

    // 使用 jQuery 平滑缓慢滚动
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 70)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // 单击滚动触发器链接时 关闭响应菜单
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // 激活Scroll 发现将活动类添加到Scroll上的导航栏项
    $('body').scrollspy({
        target: '#mainNav',
        offset: 100
    });

    // 折叠导航栏
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // 如果页面不在顶部，则立即折叠
    navbarCollapse();
    // 滚动页面时折叠导航栏
    $(window).scroll(navbarCollapse);

})(jQuery); // 结束使用严格模式