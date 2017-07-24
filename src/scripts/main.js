$(function () {

    //BEGIN TOOTLIP
    $("[data-toggle='tooltip'], [data-hover='tooltip']").tooltip();
    //END TOOLTIP

    //BEGIN POPOVER
    $("[data-toggle='popover'], [data-hover='popover']").popover();
    //END POPOVER

    //BEGIN MENU SIDEBAR
    $('#sidebar').css('min-height', '100%');
    //END MENU SIDEBAR

    $(window).bind("load resize", function () {
        if ($(this).width() < 768) {
            $('div.sidebar-collapse').addClass('collapse');
        } else {
            $('div.sidebar-collapse').removeClass('collapse');
            $('div.sidebar-collapse').css('height', 'auto');
        }
        if ($('body').hasClass('sidebar-icons')) {
            $('#menu-toggle').hide();
        } else {
            $('#menu-toggle').show();
        }
    });
    //END MENU SIDEBAR

    //BEGIN BACK TO TOP
    $(window).scroll(function () {
        if ($(this).scrollTop() < 200) {
            $('#totop').fadeOut();
        } else {
            $('#totop').fadeIn();
        }
    });
    $('#totop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 'fast');
        return false;
    });
    //END BACK TO TOP

    $('.option-demo').hover(function () {
        $(this).append("<div class='demo-layout animated fadeInUp'><i class='fa fa-magic mrs'></i>Demo</div>");
    }, function () {
        $('.demo-layout').remove();
    });
    $('#header-topbar-page .demo-layout').live('click', function () {
        var HtmlOption = $(this).parent().detach();
        $('#header-topbar-option-demo').html(HtmlOption).addClass('animated flash').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('animated flash');
        });
        $('#header-topbar-option-demo').find('.demo-layout').remove();
        return false;
    });
    $('#title-breadcrumb-page .demo-layout').live('click', function () {
        var HtmlOption = $(this).parent().html();
        $('#title-breadcrumb-option-demo').html(HtmlOption).addClass('animated flash').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('animated flash');
        });
        $('#title-breadcrumb-option-demo').find('.demo-layout').remove();
        return false;
    });


});



