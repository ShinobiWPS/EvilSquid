# EvilSquid
Files and configs for a MITB attack trough Squid Proxy


You need to insert a "rewrite" rule on Squid Proxy .conf file that execute "`regex_replace_js.pl`".
It searches for .js files,and append the `payload.js` content to each file,then it forward them to client using this HTTP proxy.
You are IN the victim's browser :)
With the power of JS you can send and receive data :)
