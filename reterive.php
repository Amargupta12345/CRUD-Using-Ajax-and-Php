<?php

include("dbconnection.php");

$sql = 'SELECT * FROM  information';
$result =  $conn->query($sql);
if ($result -> num_rows  >0) {
    $data = array();
    while ($row= $result->fetch_assoc()){
        $data[] = $row;
    }
 
}

/////////// json data response  php to json value
echo json_encode($data);


?>