/**
 * Created by Lenovo on 2018/4/6.
 */


//清除小圆点
NProgress.configure({ showSpinner: false });


//所有ajax开始时调用进度条
$(document).ajaxStart(function () {
    NProgress.start();
});

//所有ajax结束时的进度条以及模拟延迟
$(document).ajaxStop(function () {
   setInterval(function () {
     NProgress.done();
   },500);
})