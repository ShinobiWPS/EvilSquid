# EvilSquid
*NOTE: original creator Chema Alonso - [PDF-slides](https://media.blackhat.com/bh-us-12/Briefings/Alonso/BH_US_12_Alonso_Owning_Bad_Guys_Slides.pdf) - [Video Talk at DEFCON 20](https://www.youtube.com/watch?v=0QT4YJn7oVI)*

Files and configs for a MITB attack trough Squid Proxy


You need to insert a "rewrite" rule on Squid Proxy .conf file that execute "`regex_replace_js.pl`".
It searches for .js files,and append the `payload.js` content to each file,then it forward them to client using this HTTP proxy.
You are IN the victim's browser :)
With the power of JS you can send and receive data :)
