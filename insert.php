<?php

include("dbconnection.php");

$data = stripslashes(file_get_contents("php://input"));

$mydata =json_decode($data, true);
$id = $mydata[ 'id'];
$name = $mydata[ 'name'];
$email = $mydata[ 'email'];
$password = $mydata[ 'password'];

// insert Data
// 
// if(!empty($name) &&  !empty($email) && !empty($password) ){
    // $sql =" INSERT INTO information (name, email, password) VALUES ( '$name','$email', '$password' )";
// 
    // if($conn->query($sql) == TRUE){
        // echo " saved succesfully";
    // }else{
        // echo " Not saved succefully";
    // }
// }
// 
// else{
    // echo " Fill all feilds";
// }
// 

/// insert Data and update data

if(!empty($name) &&  !empty($email) && !empty($password) ){
    $sql =" INSERT INTO information (id , name , email , password) VALUES ('$id', '$name','$email', '$password' ) ON DUPLICATE  KEY  UPDATE  name  = '$name' , email ='$email' , password = '$password' ";

    if($conn->query($sql) == TRUE){
        echo " saved succesfully";
    }else{
        echo " Not saved succefully";
    }
}

else{
    echo " Fill all feilds";
}









?>