$(function () {
   $("input[type=submit]").on("click",function (e) {
       e.preventDefault();
      // let username= $("input[name=username]").val();
       let password=$("input[name=password]").val();
       let repassword=$("input[name=repassword]").val();
       console.log(password, repassword);
       if (password!=repassword){
           alert("两次密码不一致");
            return;
       }
           let zc=$("form").serialize();
           console.log(zc)
            let xml=new XMLHttpRequest();
           xml.open("POST","./php/zuce.php");
           xml.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
           xml.send(zc+"&type=zc");
           xml.onloadend=function () {
               console.log(xml.response);
               if (xml.response=="success"){
                   alert("注册成功");
                   location.href="./login.html";
               } else{
                   alert("用户名或密码输入有误！！")
               }
           }



   })






})