$(function () {

    $(document).ajaxStart(function () {

        $(".progress").css({display:"block"});
        // $(".progress-bar").animate({"width":"100%"},function () {
        //     console.log($(this).width() );
        // })
        $(".progress-bar").css({"width":"30%",display:"block"})

    })
    $(document).ajaxSuccess(function () {


        // $(".progress-bar").animate({"opacity":"100%"})
        $(".progress-bar").css({"width":"100%"})
    });
    $(".progress-bar").on("webkitTransitionEnd",function () {

        $(this).css({"width":"0",display: "none"});
        $(".progress").css({display:"none"});
    })

    $.ajax({
        url:"query.php",
        type:"get",
        async:true,
        data:"",
        dataType:"json",
        success:function (res) {
            let {code,data}=res;
            if (code==1){
                let html=``;
                data.forEach(elem=>{
                    // console.log(elem.id)
                    html +=`<tr id="${elem.id}">
                        <td><input type="text" value="${elem.names}" name="names"></td>
                        <td><input type="text" value="${elem.sex}" name="sex"></td>
                        <td><input type="text" value="${elem.age}" name="age"></td>
                        <td><input type="text" value="${elem.major}" name="major"></td>
                        <td><button class="btn btn-info btn-primary">删除</button></td>
                    </tr>`;
                })
                html =$("tbody").html()+html;
                $("tbody").html(html);
            }else{
                alert("获取数据库失败");
            }
        }
    })
    // 删除操作

    $("table").on("click","button",function () {


        let id=$(this).closest("tr").attr("id");

        $.ajax({
            url: "delete.php",
            type: "post",
            data: {id},
            success:function (res) {
                if (res>0){
                    $("#"+id).remove();
                }

            }
        })

    })
    //进行修改

    let value;
    $("table").on("click","input",function () {

         value=this.value;
    });
    $("table").on("blur","input",function () {
        let value1=this.value;
        let type=this.name;
        if (value==value1){
            return;
        }else{
            let id=$(this).closest("tr").attr("id");
            $.ajax({
                url: "update.php",
                type: "post",
                data: {id,type,value1},
                //注意 dataType:"json"  如果不写的话 返回值不能用对象获取；
                success:function (res) {
                    console.log(res);
                    if (res>0){
                        // alert("更新成功")
                    }else{
                        alert("更新失败")
                    }


                }
            })
        }

    });

    // 增加数据
    $("button.add").on("click",function () {
        $(".tianjia").toggle();

    })
    // console.log($("form[class=tianjia]"));
    $("form[class=tianjia]").on("click","button",function (e) {
        e.preventDefault();
        if ($("form>input[name=names]").val()==""){
            alert("用户名不能为空");
            return;
        }

        if ($("form>input[name=sex]").val()!="男"&&$("input[name=sex]").val()!="女"){
            alert("请输入性别：男或女");
            return;
        }
        if ($("form>input[name=age]").val()==""){
            alert("请输入正确的年龄");
            return;
        }
        if ($("form>input[name=major]").val()==""){
            alert("请输入正确的专业，专业不能为空");
            return;
        }
        let result=$("form[class=tianjia]").serialize();
        result= decodeURIComponent(result,true);
        $.ajax({
            url:"insert.php",
            type:"post",
            data:result,
            dataType: "json",
            success:function (res) {
                // console.log(res);
                let {code,id,names,sex,age,major}=res;
                if (code>0){
                    let html=``;
                    html+=`<tr id="${id}">
                        <td><input type="text" value="${names}" name="names"></td>
                        <td><input type="text" value="${sex}" name="sex"></td>
                        <td><input type="text" value="${age}" name="age"></td>
                        <td><input type="text" value="${major}" name="major"></td>
                        <td><button class="btn btn-info btn-primary">删除</button></td>
                    </tr>`;
                    html =$("tbody").html()+html;
                    $("tbody").html(html);
                    // console.log($(".tianjia")[0]);
                    $(".tianjia")[0].reset();
                    $(".tianjia").css({"display":"none"});
                }

            }
        })



    })
})