---
title: Setting up a vpn
url: "setting-up-a-vpn"
keywords: ["raspberry", "vpn"]
status: "draft"
visibility: "show"
---

# What is a VPN ?
[VPN](https://en.wikipedia.org/wiki/Virtual_private_network) stands for virtual private network and the main benefit is that the resources within the private network can be accessed remotely since the VPN creates a public tunnel that can be accessed thru public networks. That's the main benefit but you also can use the public network as if you were in the private network, using the IP of your VPN.
Knowing that here are some few use cases 
  * Access some application, resource, etc of your work that you only want that certain people have access while being somewhere else.
  * For security, if you are in some public place and don't trust the network but you may trust your ISP (Internet service provider).
  * Connect to some website or app like you were in a different country, eg you want to see your netflix shows but you are on vacations at the caribean.
But the common thing here is that you may want to connect to a VPN to pretend to be something different than you're at that moment.

# Why I need one ?
Because I want to connect to my local and internal services to be only visible inside my home network, and I want to have a home server with all my personal stuff like photos, files, videos, etc.

# Why create one from scratch ?
Because I have two raspi in my home and I think is a fun project to do and learn.

# Project explained

Basically I follow this [guide](https://notthebe.ee/blog/set-up-your-own-vpn-on-raspberry-pi/) which for me was the approach that suit me the best. Since I don't own a modem and a router but instead I only have one modem-router-wifi that my ISP company provide me, the configuration of the router to foward the port was a bit tricky. I was able to do it following this [guide](https://configurar-router.com/blog/configurar-router-fibertel/) and using the video at the end.

## Step 0 - Tools
* Raspberry Pi Model B+ (811-1284) - 512 RAM - 8GB sd card
* Modem/Router Sagemcom (Fibertel) Fast 3686

## Step 1 - Find the user & pass of the router
I have access to my modem/router to port forwarding to my raspberry pi.
At the bottom of the router you will see the model information, ip and credentials. You can try those, but didn't work for me. So after a little investigation I found that the credentials that fibertel add for those router depends on the model. For Sagemcom routers the user is admin and the password is the name of the router in lowercase but changing the *a* for a *4*, eg if you have a model fast 3684 f4st3684. And one way to access the admin panel of your router you have to browse the first ip address of your local machine, http://192.168.0.1/.


### Helpful links
* [How to find your raspberry pi id address](https://howchoo.com/pi/find-your-raspberry-pis-ip-address)
* [Wolfgang's video on how to set own vpn at home](https://www.youtube.com/watch?v=rtUl7BfCNMY)
* [Wolfgang's guide on how to set own vpn at home](https://notthebe.ee/blog/set-up-your-own-vpn-on-raspberry-pi/)
* [How to configure the Fibertel's wifi router](https://configurar-router.com/blog/configurar-router-fibertel/)
* [Free DNS Hosting, Dynamic DNS Hosting](https://freedns.afraid.org/)

#### TODO
* COMPLETE THE GUIDE, BECAUSE LINKS OF OTHER PAGES COULD BE BROKEN SOMETIME IN THE FUTURE
*  qrencode -t ansiutf8 < root/fack.conf -> you may need to use sudo su or give privelegies to your user

