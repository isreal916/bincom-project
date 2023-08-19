<?php
error_reporting(0);
include("dbconfig.php");

$query = "SELECT partyname
FROM party
";
$result = mysqli_query($connect,$query);
$data = array();
while( $row = mysqli_fetch_assoc($result)){
$data[] = $row;
}
echo json_encode($data);

?>