<?php

$mysql=new mysqli("localhost","root","","wuif1905","3306");
if ($mysql->connect_errno){
    echo "连接数据库失败";
    exit;

}
//echo "连接数据库成功";
