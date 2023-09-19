$(document).ready(function(){
    fnNavi();
    fnBell();
    ftBT();
    m_hd_bell();
    m_update();
});

function fnNavi() {
    // 왼쪽 nav 
    var NavLi = $("nav > ul > li")
    NavLi.click(function(){
        var NavLiThis = $(this);
        var NavLiThis_i = $(this).find(".nav_arrow_i");
        var NavLithis_maru = $(this).find(".nav_circle_icon");
        // li 태그에 active 클레스 추가
        NavLiThis.siblings("nav > ul > li").removeClass("active");
        NavLiThis.addClass("active");
        // 흰원 없애기  
        NavLithis_maru.removeClass("white_circle_icon");
    });
}

function fnBell(){
    // 알림버튼 클릭시 흰원 없애기
    var Bell_ICON = $(".bt_type_3 > .icon_bell");
    Bell_ICON.click(function(){
        $(".bt_type_3 > .white_circle_icon").removeClass("white_circle_icon");
        $(".m_hd_bt > .m_icon_bell > .purple_circle_icon").addClass("close");
    });
    // 알림 버튼 클릭시 modal_2 실행
    Bell_ICON.click(function(){
        $(".modal_notice").removeClass("close");
        $(".modal_notice").addClass('open');
        $('body').css("overflow-y", "hidden");
    });
    // x버튼 클릭시 modal_2 닫힘
    $(".modal_notice_cancel_bt").click(function(){
        $(".modal_notice").removeClass("open");
        $(".modal_notice").addClass('close');
        $('body').css("overflow-y", "scroll");
    });
}

function ftBT(){
    // footer 버튼 클릭시 흰색 아이콘으로 변경
    var FooterBT = $(".footer > button");

    FooterBT.click(function(){
        var FooterBT_THIS = $(this);
        // active 효과 주고 없애기
        FooterBT_THIS.siblings(".footer > button").removeClass("active");
        FooterBT_THIS.addClass("active");
    });
}

function m_hd_bell(){
    // 모바일 알림 버튼 클릭시 흰원 없애기
    var m_bell = $(".m_hd_bt > .m_icon_bell");
    var m_bell_cc = $(".m_hd_bt > .m_icon_bell > .purple_circle_icon")
    m_bell.click(function(){
        m_bell_cc.addClass("close");
        $(".hd_login_div > .bt_type_3 > .white_circle_icon").addClass("close");
    });

    // 알림버튼 클릭시 modal_2 실행
    m_bell.click(function(){
        $(".modal_notice").removeClass("close");
        $(".modal_notice").addClass('open');
        $('body').css("overflow-y", "hidden");
    });
}

function m_update(){
    var update = $(".fixed_icon_div > button")

    update.click(function(){
        $(".modal_signup").removeClass("close");
        $(".modal_signup").addClass('open');
        $('body').css("overflow-y", "hidden");
    });
}
