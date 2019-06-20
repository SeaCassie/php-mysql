<?php

$id=$_POST["id"];
$mysql=new mysqli("localhost","root","","wuif1905","3306");
$mysql->query("set names utf8");
$sql="delete from student where id=$id";
$mysql->query($sql);
$result= $mysql->affected_rows;
echo $result;