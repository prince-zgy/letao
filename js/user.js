/**
 * Created by Lenovo on 2018/4/8.
 */

$(function () {

    var currentPage = 1;
    var pageSize = 5;

    render();


    //页面渲染封装函数
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


    //启用禁用功能
    $(".lt_content tbody").on("click",".btn",function () {

        //弹出模态框
        $("#userModal").modal("show");

        //获取用户id
        var id = $(this).parent().data("id");

        var isDelete = $(this).hasClass("btn-success")? 1 : 0;
        //绑定事件之前先把原有的事件解除掉
        $("#submitBtn").off("click").on("click",function () {


            //发送ajax请求
            $.ajax({
                url:"/user/updateUser",
                type:"post",
                data:{
                    id:id,
                    isDelete:isDelete
                },
                dataType:"json",
                success:function (info) {
                    console.log(info);

                    //确认请求是否成功
                    if(info.success){
                        //关闭模态框
                        $("#userModal").modal("hide");
                        //重新渲染
                        render();

                    }

                }
            })
        })

    })



})
