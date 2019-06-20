<?php

    $username=$_POST["username"];
    $password=md5($_POST["password"]);
//    var_dump( $username,$password);

        $mysql=new mysqli("localhost","root","","wuif1905");
        if ($mysql->connect_errno){
            echo  "数据库连接失败".$mysql->connect_errno();
            exit;
        }

        //echo "succer";
        $mysql->query("set names utf8");
        $sql="insert into admin (names ,password)values ('$username','$password')";
        $result=$mysql->query($sql)->fetch_all();

        if ($result){
            echo "success";
            exit;
        }
        echo "error";