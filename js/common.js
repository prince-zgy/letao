/**
 * Created by Lenovo on 2018/4/6.
 */


//清除小圆点
NProgress.configure({showSpinner: false});


//所有ajax开始时调用进度条
$(document).ajaxStart(function () {
    NProgress.start();
});

//所有ajax结束时的进度条以及模拟延迟
$(document).ajaxStop(function () {
    setInterval(function () {
        NProgress.done();
    }, 500);
})


//二级菜单下拉
$(".category").click(function () {
    $(".child").stop().slideToggle();
})

//顶部菜单栏滑动功能
$(".icon_menu").click(function () {
    $(".lt_aside").toggleClass("hidemenu");
    $(".lt_topbar").toggleClass("hidemenu");
    $(".lt_main").toggleClass("hidemenu");
})

//退出按钮功能及模态框功能
$(".icon_logout").click(function () {
//点击退出按钮，模态框显示
    $("#logoutModal").modal("show");

})

$("#logoutBtn").click(function () {
  //退出按钮点击发送ajax请求 退出功能实现
  //  console.log("heheh");
    $.ajax({
        url:"/employee/employeeLogout",
        type:"get",
        dataType:"json",
        success:function(info){
            //console.log(info);
            if(info.success){
                $("#logoutModal").modal("hide");
                location.href = "login.html";
            }
        }
    })

})