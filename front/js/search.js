/**
 * Created by Lenovo on 2018/4/10.
 */


$(function () {

    render();
    //先获取表单内容，渲染页面同时保存到本地

    $(".lt_search button").click(function () {

        //获取表单内容
        var key = $(".lt_search input").val().trim();

        if(key === ""){
            //如果用户输入内容为空，提示用户
            mui.toast( "请输入搜索关键字" );
            return;
        }
        var arr = getHistory();

        //获取到本地存储的内容，查看输入的内容是否存在
        if(arr.indexOf(key)!==-1){
            //如果存在就删除之前的
            var index = arr.indexOf(key);
            arr.splice(index,1);
        }
        //查看存储是否超过十个，超过十个就删除最后一个
        if(arr.length>=10){
            arr.pop();
        }
        //将输入的内容添加到数组最前面
        arr.unshift(key);
        //存储到本地存储中
        localStorage.setItem("search_list",JSON.stringify(arr));

        render();
        $(".lt_search input").val("");


    })
    function getHistory () {
        var history = localStorage.getItem("search_list")||"[]";
        console.log(history);
        var arr = JSON.parse(history);
        return arr;
    }

    //渲染页面之前要从本体读取到数据(需要多次使用，直接封装成函数)



    //渲染页面
    function render(){
        var arr = getHistory();
        $(".lt_history").html(template("searchTpl",{arr:arr}))
    }





})