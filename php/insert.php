<?php
require_once 'db.php';
$names=$_POST["names"];
$sex=$_POST["sex"];
$age=$_POST["age"];
$major=$_POST["major"];

$sql="insert into student (names,sex,age,major) values ('$names','$sex','$age','$major')";
//echo $sql;


//第二种获得多种数据的方法！
//$keys=array_keys($_POST);
//$sql="insert into student (";
//        for($i=0;$i<count($keys);$i++){
//            $sql .=$keys[$i].",";
//            }
//        $sql=substr($sql,0,-1).") values (";
//        foreach($_POST as $keys=>$values){
//            $sql .="'$values',";
//        }
//        $sql=substr($sql,0,-1).")";
//
//        echo  $sql;
//



$mysql->query("set names utf8");
$mysql->query($sql);

//echo $id;
$result=$mysql->affected_rows;
//echo $result;
if ($result>0){
    $id=$mysql->insert_id;
   echo json_encode(["code"=>1,"id"=>$id,"names"=>$names,"sex"=>$sex,"age"=>$age,"major"=>$major]) ;
}else{
    echo json_encode(["code"=>0,"id"=>"","names"=>"","sex"=>"","age"=>"","major"=>""]);
}