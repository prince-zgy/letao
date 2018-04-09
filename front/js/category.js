/**
 * Created by Lenovo on 2018/4/9.
 */


$(function () {

    //左侧页面ajax渲染
    $.ajax({
        url:"/category/queryTopCategory",
        type:"get",
        success:function (info) {
            console.log(info);
            $(".category_left ul").html(template("tmp",info));
            renderById(info.rows[0].id);
        }
    })

    //注册点击事件
    $(".category_left ul").on("click","a",function(){

        var id = $(this).data("id");
        renderById(id);
        $(this).addClass("current").parent().siblings().find("a").removeClass("current");

    })

    //渲染二级菜单
    function renderById(id) {

        $.ajax({
            url:"/category/querySecondCategory",
            type:"get",
            data:{id:id},
            success:function (info) {
                console.log(info);
                $(".category_right ul").html(template("tnp",info))
            }
        })

    }

})