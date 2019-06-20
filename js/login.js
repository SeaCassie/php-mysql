$(function () {

    // $(":submit").on("click",function () {
    //     let name=$("input[type=text]").val();
    //     let password=$(":password").val();
    //     let xml=new XMLHttpRequest();
    //     xml.open("get","./php/login.php?name="+name+"&password="+password);
    //     xml.send();
    //     xml.onloadend=function () {
    //         console.log(xml.response);
    //     }
    //
    //
    //
    // })

    $(":submit").on("click",function (e) {
        e.preventDefault();
        // console.log($(from));
        let ps=$("form").serialize() ;
         // console.log(ps);
        let xml=new XMLHttpRequest();
        xml.open("POST","./php/login.php?name=");
        xml.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xml.send(ps);
        xml.onloadend=function () {
            console.log(xml.response);
            if (xml.response=="success"){
                location.href="php/student.php";
            } else{
                alert("用户名或密码输入有误！！")
            }
        }
    })


})