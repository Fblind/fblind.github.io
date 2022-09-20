(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{269:function(e,t){const o={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"frontmatter-markdown"},[o("h1",[e._v("What is a VPN ?")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Virtual_private_network"}},[e._v("VPN")]),e._v(" stands for virtual private network and the main benefit is that the resources within the private network can be accessed remotely since the VPN creates a public tunnel that can be accessed thru public networks. That's the main benefit but you also can use the public network as if you were in the private network, using the IP of your VPN.\nKnowing that here are some few use cases")]),e._v(" "),o("ul",[o("li",[e._v("Access some application, resource, etc of your work that you only want that certain people have access while being somewhere else.")]),e._v(" "),o("li",[e._v("For security, if you are in some public place and don't trust the network but you may trust your ISP (Internet service provider).")]),e._v(" "),o("li",[e._v("Connect to some website or app like you were in a different country, eg you want to see your netflix shows but you are on vacations at the caribean.\nBut the common thing here is that you may want to connect to a VPN to pretend to be something different than you're at that moment.")])]),e._v(" "),o("h1",[e._v("Why I need one ?")]),e._v(" "),o("p",[e._v("Because I want to connect to my local and internal services to be only visible inside my home network, and I want to have a home server with all my personal stuff like photos, files, videos, etc.")]),e._v(" "),o("h1",[e._v("Why create one from scratch ?")]),e._v(" "),o("p",[e._v("Because I have two raspi in my home and I think is a fun project to do and learn.")]),e._v(" "),o("h1",[e._v("Project explained")]),e._v(" "),o("p",[e._v("Basically I follow this "),o("a",{attrs:{href:"https://notthebe.ee/blog/set-up-your-own-vpn-on-raspberry-pi/"}},[e._v("guide")]),e._v(" which for me was the approach that suit me the best. Since I don't own a modem and a router but instead I only have one modem-router-wifi that my ISP company provide me, the configuration of the router to foward the port was a bit tricky. I was able to do it following this "),o("a",{attrs:{href:"https://configurar-router.com/blog/configurar-router-fibertel/"}},[e._v("guide")]),e._v(" and using the video at the end.")]),e._v(" "),o("h2",[e._v("Step 0 - Tools")]),e._v(" "),o("ul",[o("li",[e._v("Raspberry Pi Model B+ (811-1284) - 512 RAM - 8GB sd card")]),e._v(" "),o("li",[e._v("Modem/Router Sagemcom (Fibertel) Fast 3686")])]),e._v(" "),o("h2",[e._v("Step 1 - Find the user & pass of the router")]),e._v(" "),o("p",[e._v("I have access to my modem/router to port forwarding to my raspberry pi.\nAt the bottom of the router you will see the model information, ip and credentials. You can try those, but didn't work for me. So after a little investigation I found that the credentials that fibertel add for those router depends on the model. For Sagemcom routers the user is admin and the password is the name of the router in lowercase but changing the "),o("em",[e._v("a")]),e._v(" for a "),o("em",[e._v("4")]),e._v(", eg if you have a model fast 3684 f4st3684. And one way to access the admin panel of your router you have to browse the first ip address of your local machine, http://192.168.0.1/.")]),e._v(" "),o("h3",[e._v("Helpful links")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://howchoo.com/pi/find-your-raspberry-pis-ip-address"}},[e._v("How to find your raspberry pi id address")])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.youtube.com/watch?v=rtUl7BfCNMY"}},[e._v("Wolfgang's video on how to set own vpn at home")])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://notthebe.ee/blog/set-up-your-own-vpn-on-raspberry-pi/"}},[e._v("Wolfgang's guide on how to set own vpn at home")])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://configurar-router.com/blog/configurar-router-fibertel/"}},[e._v("How to configure the Fibertel's wifi router")])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://freedns.afraid.org/"}},[e._v("Free DNS Hosting, Dynamic DNS Hosting")])])]),e._v(" "),o("h4",[e._v("TODO")]),e._v(" "),o("ul",[o("li",[e._v("COMPLETE THE GUIDE, BECAUSE LINKS OF OTHER PAGES COULD BE BROKEN SOMETIME IN THE FUTURE")]),e._v(" "),o("li",[e._v("qrencode -t ansiutf8 < root/fack.conf -> you may need to use sudo su or give privelegies to your user")])])])}]};e.exports={attributes:{title:"Setting up a vpn",url:"setting-up-a-vpn",keywords:["raspberry","vpn"],status:"draft",visibility:"show"},meta:{resourcePath:"/home/fack/Documentos/Proyectos/personal-website/garden/setting-up-a-vpn.md"},vue:{component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=o.render,this.$options.staticRenderFns=o.staticRenderFns}}}}}}]);