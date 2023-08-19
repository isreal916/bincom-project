<?php
error_reporting(0);
include('dbconfig.php');
$query = "SELECT * from announced_pu_results WHERE polling_unit_uniqueid = 13";
$result =mysqli_query($connect,$query);
$data = array();
# getting anounced result from individual polling unit
while ($row = mysqli_fetch_assoc($result)) {
  $data[] = $row;
}
echo json_encode($data);



?>