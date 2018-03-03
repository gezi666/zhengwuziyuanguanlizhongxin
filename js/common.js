$(function(){
    $(".menu-box .menu-item").click(function(){
        $(".menu-box .child-box").hide(200);
        $(this).siblings("ul").slideToggle(200);
        $(".menu-box .menu-item").removeClass("active");
        $(this).addClass("active");
    });
    $(".left-menu .child-item").click(function(){
        $(".child-box li").removeClass("active");
        $(this).parent().addClass("active");

        var menuStr = $(this).parent().parent().siblings("a.menu-item").find("span").text();
        var childStr = $(this).find("span").text();

        window.location.href = locationHref(menuStr,childStr);
    });


    var crumbArr = [];
    $(".crumb-box span").each(function(i,v){
        var str = v.innerHTML.split("－")[0];
        crumbArr.push(str);
    });

    $(".left-menu .menu-item span").each(function(i,v){
        if(v.innerText == crumbArr[0] || (v.innerText == "目录编制／报送" && crumbArr[0]=="目录编制与报送")){
            $(this).parent().addClass("active");
            $(this).parent().siblings("ul").slideToggle(200);

            $(this).parent().siblings("ul").find("span").each(function(i,v){
                if(v.innerText == crumbArr[1]){
                    $(this).parent().parent().addClass("active");
                }
            });
        }
    });

});

function locationHref(menuStr,childStr){
    if(menuStr == "目录编制／报送" && childStr == "目录维护"){
        return "catalog-maintain.html";
    }else if(menuStr == "目录编制／报送" && childStr == "目录授权"){
        return "catalog-authorize.html";
    }else if(menuStr == "目录编制／报送" && childStr == "信息资源维护"){
        return "add-Information.html";
    }else if(menuStr == "目录编制／报送" && childStr == "信息资源审核与报送"){
        return "examine-submitted.html";
    }else if(menuStr == "目录编制／报送" && childStr == "信息资源数据对接"){
        return "javascript:;";
    }else if(menuStr == "目录编制／报送" && childStr == "信息资源校核"){
        return "cesource-checking.html";
    }else if(menuStr == "数据资源管理" && childStr == "数据资源维护"){
        return "javascript:;";
    }else if(menuStr == "目录与信息管理" && childStr == "目录维护"){
        return "javascript:;";
    }else if(menuStr == "目录与信息管理" && childStr == "目录授权"){
        return "javascript:;";
    }else if(menuStr == "目录与信息管理" && childStr == "信息资源维护"){
        return "javascript:;";
    }else if(menuStr == "目录与信息管理" && childStr == "信息资源发布"){
        return "javascript:;";
    }else if(menuStr == "目录与信息管理" && childStr == "信息资源统计"){
        return "info-resource.html";
    }else if(menuStr == "目录与信息管理" && childStr == "官网访问统计"){
        return "website-visit.html";
    }else if(menuStr == "系统管理" && childStr == "部门管理"){
        return "javascript:;";
    }else if(menuStr == "系统管理" && childStr == "角色管理"){
        return "javascript:;";
    }else if(menuStr == "系统管理" && childStr == "用户管理"){
        return "javascript:;";
    }else if(menuStr == "系统管理" && childStr == "菜单管理"){
        return "javascript:;";
    }else if(menuStr == "系统管理" && childStr == "系统日志"){
        return "javascript:;";
    }else if(menuStr == "系统管理" && childStr == "官网日志"){
        return "javascript:;";
    }
}