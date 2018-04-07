/**
 * Created by Lenovo on 2018/4/6.
 */
$(function () {

    //表单校验

    //校验要求: (1) 用户名不能为空
    //             (2) 密码不能为空, 且必须是 6-12 位

    $("#form").bootstrapValidator({
        // 配置图标
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        //3. 指定校验字段
        fields: {
            //校验用户名，对应name表单的name属性
            username: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    //长度校验
                    stringLength: {
                        min: 2,
                        max: 6,
                        message: '用户名长度必须在2到6位之间'
                    },
                    callback:{
                        message:'用户名错误'
                    }

                }
            },
            password:{
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    //长度校验
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: '用户名长度必须在6到12位之间'
                    },
                    callback:{
                        message: '密码错误'
                    }

                }
            }
        }
    })

    //进行登陆请求
    $("#form").on("success.form.bv",function (e) {
        e.preventDefault();
        $.ajax({
            url:"/employee/employeeLogin",
            type:"post",
            data:$("#form").serialize(),
            dataType:"json",
            success:function (info) {
                console.log(info);
                if(info.success){
                    location.href="index.html";
                }
                if(info.error===1000){
                    $("#form").data("bootstrapValidator").updateStatus("username","INVALID","callback");
                }
                if(info.error===1001){
                    $("#form").data("bootstrapValidator").updateStatus("password","INVALID","callback");
                }
            }
        })
    })

    //表单重置
    $("[type='reset']").click(function () {
        $("#form").data("bootstrapValidator").resetForm();
    })


})