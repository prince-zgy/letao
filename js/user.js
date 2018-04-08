/**
 * Created by Lenovo on 2018/4/8.
 */

$(function () {

    var currentPage = 1;
    var pageSize = 5;

    render();

    function render() {
        $.ajax({
            url:"/user/queryUser",
            type:"get",
            data:{
                page:currentPage,
                pageSize:pageSize
            },
            success:function (info) {
                console.log(info);
                $(".lt_content tbody").html(template("tmp",info));

                $("#paginator").bootstrapPaginator({
                //    版本 默认的时2.0的版本 但是要使用3.0的版本
                    bootstrapMajorVersion: 3,
                    //当前页
                    currentPage:info.page,
                    //总页数
                    totalPages:Math.ceil(info.total/info.size),
                    //被点击时触发的事件
                    onPageClicked:function (a,b,c,page) {
                        currentPage = page;
                      render();
                    }
                })
            }

        })
    }



})
