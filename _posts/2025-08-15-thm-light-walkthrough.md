---
layout: post
title: "TryHackMe Light Walkthrough - SQL Injection Challenge"
description: "Complete step-by-step walkthrough for TryHackMe's Light room featuring SQLite injection techniques, database enumeration, and admin credential extraction. Perfect for beginners learning SQL injection fundamentals."
date: 2025-08-15 10:00:00 +0000
categories: [Cybersecurity, Writeups, Tryhackme]
tags: [tryhackme, thm, sql-injection, sqlite, database, enumeration, ctf, easy]
image: https://tryhackme-images.s3.amazonaws.com/room-icons/618b3fa52f0acc0061fb0172-1737140605838
sitemap:
  priority: 0.8
  changefreq: monthly
---


# TryHackMe Light Walkthrough
Link to the Room : https://tryhackme.com/room/lightroom

```
I am working on a database application called Light! Would you like to try it out?  
If so, the application is running on **port 1337**. You can connect to it using `nc MACHINE-IP 1337`  
You can use the username `smokey` in order to get started.
```
Lets start the machine and wait for 2-3 minutes, let the machine get fully functional.

`Q1 What is the admin username?`

As usual running a full port scan for identifying potential entry points.
`nmap -p- -T4 MACHINE-IP -vv`

![Nmap scan results](/assets/img/Pasted image 20250816001828.png)

Meanwhile lets try connecting to the port 1337
`nc MACHINE-IP 1337`
Lets try the username provided `smokey`

![Testing with username smokey](/assets/img/Pasted image 20250816002133.png)

Alright!

So, I guess we can try brute-forcing a wordlist of usernames, but we cannot use ffuf...
So,
I took this script from ChatGPT, and modified it little to make it work.
```python
import socket

target_ip = "10.201.15.128"  # change this
target_port = 1337
wordlist = "SecLists/Usernames/cirt-default-usernames.txt"  # your username list

with open(wordlist, "r") as f:
    usernames = [u.strip() for u in f if u.strip()]

for user in usernames:
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.connect((target_ip, target_port))

    # Receive initial banner / prompt
    banner = s.recv(1024).decode()
    print(banner.strip())

    u = s.recv(1024).decode()
    print(u.strip())

    # Send username
    s.send((user + "\n").encode())

    # Receive response
    response = s.recv(1024).decode()
    print(f"[{user}] -> {response.strip()}")

    s.close()

```

I tried few wordlists but didn't find anything.

Got back to the nmap scan and LOL!, its gonna take forever so its not the way in for sure!

![Nmap scan taking too long](/assets/img/Pasted image 20250816003201.png)

What else can we do? Found no `http` pages, where can we even use the credentials we've got earlier?
Lets try to change the approach.

Lets try putting in some random input, my mind is getting a little idea of where it is going _maybe_.

![Testing random input](/assets/img/Pasted image 20250816003925.png)

Its more of an Injection vulnerability I see
Its been a long I have not dealt with a SQLi, now quickly digging through my notes for revising required methods.

From the responses below

![SQL injection response](/assets/img/Pasted image 20250816004841.png)

I can imagine of a SQL query
`select pass from users where user='<input>' limit 30`

Now we'll try creating some SQL payloads based on the payloads I already have in my notes.
`'union select 1'`

![Union select blocked](/assets/img/Pasted image 20250816005530.png)

Okhayy!
They might be blocking some keywords most probably as an easy way out. 
Here might be a logic error lets try `'UnIOn sElecT 1'`

![Bypassing keyword filter](/assets/img/Pasted image 20250816005739.png)

as a developer I would also blacklist these keywords as its an easy fix(not a fix really). Laziness is a problem frr.
I love these kinda logic based errors!

Lets start enumerating.
`'Union Select @@version'`
Didn't work maybe some other database!

Refer this https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/SQL%20Injection/SQLite%20Injection.md#sqlite-enumeration

This one worked
`'Union Select sqlite_version()'`
Its sqlite database version: 3.31.1

![SQLite version](/assets/img/Pasted image 20250816010644.png)

Using the [PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/SQL%20Injection/SQLite%20Injection.md#sqlite-enumeration) Repository for reference!

`'Union Select sql from sqlite_master'`

![Database schema](/assets/img/Pasted image 20250816010906.png)

Now we know the table name, column names.
Enough to craft useful payloads.

> You can use [PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/SQL%20Injection/SQLite%20Injection.md#sqlite-enumeration) and suitable LLM for crafting payloads

`'Union Select username from admintable where id='1`

![Admin username](/assets/img/Pasted image 20250816011619.png)

If needed we could've dumped all but in this case we don't need the whole database.

![Question 1 answer](/assets/img/Pasted image 20250816011809.png)

`Q2 What is the password to the username mentioned in question 1?`
`'Union Select password from admintable where username='<admin-user>`

![Admin password](/assets/img/Pasted image 20250816012001.png)

![Question 2 answer](/assets/img/Pasted image 20250816012439.png)

`Q3 What is the flag?`
Till now you could've figured it out, we have already got the id for the user flag, so most probably its password will be the final flag.
Little modifications to the previous payload will get you the flag.

![Question 3 flag](/assets/img/Pasted image 20250816012516.png)




