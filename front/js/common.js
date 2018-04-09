/**
 * Created by Lenovo on 2018/4/9.
 */
$(function () {

    //初始化滚动
    mui('.mui-scroll-wrapper').scroll({
        indicators: false, //是否显示滚动条
    });

    //自动轮播
    var gallery = mui('.mui-slider');
    gallery.slider({
        interval:1000//自动轮播周期，若为0则不自动播放，默认为0；
    });


})