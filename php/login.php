<?php

$username=$_POST["username"];
$password=md5($_POST["password"]);

//var_dump($password);
////var_dump($username);
//连接数据库
$mysql=new mysqli("localhost","root","","wuif1905");
if ($mysql->connect_errno){
    echo  "数据库连接失败".$mysql->connect_errno();
    exit;
}

//echo "succer";
$mysql->query("set names utf8");
$sql="select * from admin";
$result=$mysql->query($sql)->fetch_all(MYSQLI_ASSOC);

for ($i=0;$i<count($result);$i++){
    $ele=$result[$i];
//    var_dump($result[$i]) ;
    if ($ele["names"]===$username&&$ele["password"]===$password){
        session_start();
        $_SESSION["username"]=$username;
        echo "success";
        exit();
    }

}
echo "密码用户名输入有误";