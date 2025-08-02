---
layout: post
title: "Tryhackme Pickle-Rick Writeup"
description: "Tryhackme pickle rick step by step writeup"
date: 2022-07-23 10:00:00 +0000
categories: [Cybersecurity, Writeups, Tryhackme]
tags: [cybersecurity, tryhackme, thm, picklerick,  gobuster, dirb, ssh, nc, nmap, kali-linux, ctf]
image: https://i.imgur.com/o9pyhyU.jpg
author: "buGGy (buggymaytricks)"
sitemap:
  priority: 0.8
  changefreq: monthly
---

## Tryhackme pickle rick step by step writeup
Link to the room : https://tryhackme.com/room/picklerick


This is the http page for the machine! :-
 
 ![Screenshot 2022-07-22 182409](https://user-images.githubusercontent.com/90099173/180499936-2372d5fc-ef6a-46de-ac80-d20534d0e817.png)
 

 Lets run a nmap scan to know more!
 
 ![Screenshot 2022-07-22 183931](https://user-images.githubusercontent.com/90099173/180499956-49eeb725-6694-4ac5-aa6c-ddb5ce21410b.png)



 As only 2 ports are open lets try to find more directories!
 
 ![Screenshot 2022-07-22 193213](https://user-images.githubusercontent.com/90099173/180499961-ef167237-365d-4d7d-bc15-49a37ff90a01.png)
 
 robots.txt seems interesting, Lets check it out!


 Let me check the source code of the page first, to see if i get anything potential!
 ![Screenshot 2022-07-22 193625](https://user-images.githubusercontent.com/90099173/180499966-3775da4b-15db-4c66-a209-4ba505daf9a0.png)
 
 I got the username!

 Now lets check the robots.txt.
 ![Screenshot 2022-07-22 193755](https://user-images.githubusercontent.com/90099173/180499970-cec67544-0974-48ea-8860-f683bec49f45.png)
 
 Seems interesting


 Lets try to ssh using the username and the string we got in the robots.txt
 ![Screenshot 2022-07-22 195510](https://user-images.githubusercontent.com/90099173/180499975-317d980a-d1e0-4874-8b46-3ca188b22d51.png)
 
 ok



 Why not find login panels in the web?, Lets do it.
 
 ![Screenshot 2022-07-22 202929](https://user-images.githubusercontent.com/90099173/180499980-c0419c5e-9a7a-45f8-9961-2fed28e5e9de.png)
 
 Great so we got an login panel
 
 ![Screenshot 2022-07-22 231432](https://user-images.githubusercontent.com/90099173/180499987-0d1fdcc2-2fe4-458f-a546-403e5947a5d2.png)

 Lets use the credentials we got earlier!
 ![Screenshot 2022-07-22 231525](https://user-images.githubusercontent.com/90099173/180499990-a66c2b86-21a5-4733-b4a9-af18142e4420.png)
 
 Great so now we have command line interface lol.
 ![Screenshot 2022-07-22 231602](https://user-images.githubusercontent.com/90099173/180499992-fcbed99f-cbeb-49a3-8361-d592674f1582.png)
 
 Lets ls quickly!
![Screenshot 2022-07-22 231906](https://user-images.githubusercontent.com/90099173/180499995-b94f9a8b-99af-4d52-aa1b-f0c9ca7a023b.png)
 Woah!, lets try to access it via browser as its in the same directory!
 
 ![Screenshot 2022-07-22 232114](https://user-images.githubusercontent.com/90099173/180500001-f39ba826-ef86-4225-8446-bac36c824ba3.png)
 ![Screenshot 2022-07-22 232204](https://user-images.githubusercontent.com/90099173/180500005-fc34560f-b6af-4b77-bde3-0a23b7ab16e8.png)
 Great!
 
 Lets check clue.txt now.

 ![Screenshot 2022-07-22 232349](https://user-images.githubusercontent.com/90099173/180500011-973f0cf7-88e4-4fb6-a2dc-8f353ed27b0a.png)
 
 Ok so basically we'll need a shell in order to navigate through filesystem effeciently!
 
 We have a good resource for shells : gtfobins.github.io
 
 ![Screenshot 2022-07-22 233105](https://user-images.githubusercontent.com/90099173/180500016-777f3b7e-55fa-4c5d-b37f-dfca22c1b7f8.png)


 I just modified it little bit, to make it short and easy!
 First run the netcat listener to start listening for the reverse shell in the attacker machine! 
 
 ![Screenshot 2022-07-22 233347](https://user-images.githubusercontent.com/90099173/180500025-20b5296a-eb39-4dfe-9251-5e179c17ea00.png)


 Now run the payload in the command pannel.
 
 ![Screenshot 2022-07-22 233527](https://user-images.githubusercontent.com/90099173/180500029-0fd0293c-d576-4857-a21d-17f4c0212a07.png)
 

 Great, so now we have a reverse shell!
 
 ![Screenshot 2022-07-22 233558](https://user-images.githubusercontent.com/90099173/180500031-a0a56e58-2cb3-40c9-ba12-5dd20d8a41e8.png)


 Lets check for users in the home directory!
 ![Screenshot 2022-07-22 233811](https://user-images.githubusercontent.com/90099173/180500034-e8184b6a-71e7-492c-bd1f-061c9986a271.png)
 
 Greaat we got our second ingredient!

 Lets try to sudo su to see if we get root acces?
 ![Screenshot 2022-07-22 234021](https://user-images.githubusercontent.com/90099173/180500036-97215b6a-210d-4ad2-a4f2-e90f89d66a8b.png)
 
 Great we got the root acces and also the third ingredient! 