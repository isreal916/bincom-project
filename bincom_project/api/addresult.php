<?php
error_reporting(0);
include("dbconfig.php");
mysqli_query($connect,"INSERT INTO announced_pu_results (polling_unit_uniqueid,party_abbreviation,party_score,entered_by_user,user_ip_address) VALUES ('".$_POST['pu_id']."','".$_POST['party_name']."','".$_POST['party_score']."','Isreal dehinbo','".$_SERVER['REMOTE_ADDR']."')");





?>