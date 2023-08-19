<?php
error_reporting(0);
include("dbconfig.php");
$lgid = $_POST['lgid'];
$query = "SELECT party_abbreviation,party_score,pollname.polling_unit_name
FROM announced_pu_results 
left join(select * from polling_unit) pollname on pollname.uniqueid=announced_pu_results.polling_unit_uniqueid where lga_id ='$lgid'
 ";
$result = mysqli_query($connect,$query);
$data = array();
while( $row = mysqli_fetch_assoc($result)){
$data[] = $row;
}
echo json_encode($data);


?>