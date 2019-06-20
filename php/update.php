<?php
$id=$_POST["id"];
$name=$_POST["type"];
$value=$_POST["value1"];
//echo $id,$name,$value;

$mysql=new mysqli("localhost","root","","wuif1905","3306");
if ($mysql->connect_errno){
    echo "连接数据库失败";
    exit;

}
//echo "success";
$mysql->query("set names utf8");
$sql="update student set $name='$value'  where id=$id";
$mysql->query($sql);
$result= $mysql->affected_rows;
echo $result;
//
//if ($result>0){
//    echo json_encode(['code'=>1,"msg"=>"更新成功"]);
//    exit;
//}else{
//    echo json_encode(['code'=>0,"msg"=>"更新失败"]);
//    exit;
//}
