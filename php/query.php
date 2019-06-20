<?php

$mysql=new mysqli("localhost","root","","wuif1905","3306");
if ($mysql->connect_errno){
    echo "连接数据库失败";
    exit;

}
//echo "success";
$mysql->query("set names utf8");
$sql="select * from student";
$result= $mysql->query($sql)->fetch_all(MYSQLI_ASSOC);
//var_dump($result) ;
if (count($result)){
    echo json_encode(['code'=>1,'data'=>$result]);
    exit;
}else{
    echo json_encode(['code'=>0]);
}
