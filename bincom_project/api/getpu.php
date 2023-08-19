<?php
error_reporting(0);
include("dbconfig.php");

$query = "SELECT *
FROM polling_unit where lga_id= '".$_POST['lga_id']."'
";
$result = mysqli_query($connect,$query);
$data = array();
while( $row = mysqli_fetch_assoc($result)){
$data[] = $row;
}
echo json_encode($data);

?>