<?php

include("dbconnection.php");
$data = stripslashes(file_get_contents("php://input"));
$mydata= json_decode($data,true);

$id =$mydata[ 'sid' ];

//// deleting row

if(!empty($id)){
    $sql = "DELETE FROM information where id = {$id}";
    if($conn->query($sql) == TRUE){
        echo " Student Deleted succesfully";
    }else {
        echo " unable to delete the student";
    }
}else{
    echo " Fill all the feilds";
}



?>