---
layout: post
title: HTB CWES Exam Review — My Raw Experience, the Mistakes, and What I Actually Learned
description: A raw, honest HTB CWES exam review covering the mistakes, mindset shifts, methodology, and lessons that actually mattered while working through the challenge.
date: 2026-09-04 12:00:00 +0530
categories:
  - Cybersecurity
  - Writeups
  - HackTheBox
  - Web Security
  - Exams
  - Reviews
tags:
  - htb
  - cwes
  - web-security
  - exam-review
  - penetration-testing
  - api-security
  - walkthrough
  - bug-bounty
  - methodology
image: /assets/img/Pasted-image-20260905010313.png
sitemap:
  priority: 0.8
  changefreq: monthly
---
At this point I have also realized that CWES is not about knowing the vulnerabilities but it's about exploiting them and utilizing them and chaining them to increase the impact. The major thing is also the way you think you'll have to think out of the BOX.

I remember I started in the afternoon and not in the morning so that I get a buffer time on the last day for polishing anything.

On the first day I got only 1 flag! That was also very very very frustrating as I tried everything I knew that I would find here, but the flag was something that I assumed won't be here. So I really think you should have a proper proper checklist, like for example you get a CMS from the modules and you purely start focusing on what techniques we are taught specially for that CMS which is wrong, very very wrong, you should make a complete list of what is possible after mapping the application properly apart from the techniques taught for the specific tech.

Also on the second day I tried everything to get the second flag, literally everything in spite of knowing if you get stuck for more than a hour you should move on, I just couldn't, I knew it's somewhere in front of eyes and I'm missing it, I wasted my second day being stubborn to get this flag. Slept late completely frustrated

## The Diary That Turned My Exam Around

On the third day I said fuck it, I'm being too lazy and trying random stuff I think would work. So changed the procedure a lil bit. Took a diary,

1. wrote down everything I knew through enumeration.
2. Then I wrote down possible ways I have in front of me to get the second flag, even tho I had tested them yesterday I still thought of doing it, `stubbornness` is the word.
3. Then started testing the possibilities one by one, but more systematically and not with excitement but with the discipline to test things completely so we can rule it out and say it's not there, and not be unsure like, `it might be there but lets see`.
4. And I found the second flag, it was such a such a silly mistake and laziness from my side, I had touched it yesterday but not completely. And today I tested it completely cuz I had to rule out things, and I found it, it was right in front!! I also got the third flag on day 3, cuz I started actually writing down things and eliminating one by one. And yet again the 4th flag here we go!!

So I would strongly suggest using a diary and using elimination, that really really helped me!

On the fourth day got the 5th flag, the 6th flag, that writing down really really helped, and as I didn't give the whole day that's why I think I got 2 or ig I could have got more

On the 5th day got the 7th flag, the 8th flag I tried everything I wrote didn't work so thought of moving on as I did not have much of the time left, and got the 9th and the 10th flag on day 5

I did try to write the report every day, at the end of the day, which made it very easy for me at the last.

On the 6th and 7th day I decided to get the reporting part done and then push for the 8th flag, completed the report I mean I put all the findings and everything properly. Then I started the grind for the 8th flag tried each and everything I still don't know what I missed still got no luck.

The 7th day I polished the report even more cross-checked each and everything, made sure there are no mistakes in the report. And as I had no possibility to check I then submitted the report.

![CWES passing email result](/assets/img/cwes-passing-email.gif)

To my surprise I got the result a day later that was so so shocking, earlier when I submitted the CJCA report it took few days or week I don't really remember but surely not so so quick

I didn't solve many labs, to be honest, but I tried to solve as much as possible, and tbh I needed a walkthrough for almost all of them. It was very very frustrating, tbh. But I just thought if my mind is not in practice to think in such ways, I would never ever think then, I'll need to know the way to think, which I'm still developing, in spite of being happy for the cert that one flag still has a place in my mind, I wanna know what I missed so next time in similar situations I'll know what I can do. That's why referring a walkthrough for me has been positive. I don't randomly open the walkthrough and follow the steps I just check the exact step I'm stuck on. And then try to think in that way!

And specially in the last few days remaining for exam I didn't really have much time to practice and revise so just to give my mind new ways to think I would randomly ask Gemini to give walkthroughs of any suggested machine, just so that I get familiar thinking in such a way.

## Keep Your Blade Sharp: On Consistency

The preparation part honestly speaking it was very on and off, I had other things to do as well, it took me roughly 4 months to complete the path, few of which modules were already completed long back ago, had to revisit them properly and thoroughly. I would really really suggest, being consistent, your knives should always have blood on them. 
`Only a fool goes into battle with a dull blade, but a bigger fool spends his life sharpening a blade he never uses.` 
That was me tbh honest I didn't really practice for 4 months and at the end tried solving labs that was so dumb, Please don't be dumb after reading this!! You have to keep practicing while learning. I know you won't have the complete knowledge while solving but you'll always have a walkthrough to refer to, after solving an unknown lab you be known to a new type of vuln or chaining that will really really help, I guess this has cost me the 8th flag, idk.

## Boxes I'd Recommend Before You Sit for CWES

I'll attach a list of recommended boxes, go through them while learning, not after learning!!!! and for CWES I would just suggest to get the user flag but if you have enough time go for the root flag as well, it will be no waste at all but only if you have enough time.

This is the list of recommended boxes, and there is an official CWES track on HTB labs as well, go for that as well!!!

| #   | Machine      | OS    | Key Focus                            |
| --- | ------------ | ----- | ------------------------------------ |
| 1   | Bashed       | Linux | Web shell, directory discovery       |
| 2   | BountyHunter | Linux | XXE, Python exploitation             |
| 3   | Friendzone   | Linux | DNS, LFI                             |
| 4   | Cronos       | Linux | DNS zone transfer, command injection |
| 5   | Shibboleth   | Linux | IPMI, Zabbix exploitation            |
| 6   | Alert        | Linux | Web enumeration                      |
| 7   | Cap          | Linux | PCAP analysis, IDOR                  |
| 8   | GoodGames    | Linux | SQLi, SSTI                           |
| 9   | TwoMillion   | Linux | API exploitation                     |
| 10  | Headless     | Linux | XSS, command injection               |
| 11  | Usage        | Linux | SQLi, file upload                    |
| 12  | OpenSource   | Linux | Source code review, Git              |
| 13  | Editorial    | Linux | SSRF, API enumeration                |
| 14  | Nineveh      | Linux | Brute force, LFI                     |
| 15  | Enterprise   | Linux | WordPress, SQLi                      |
| 16  | Forge        | Linux | SSRF                                 |
| 17  | RedCross     | Linux | XSS, SQLi                            |
| 18  | Timing       | Linux | LFI, mass assignment                 |
| 19  | Node         | Linux | API exploitation, deserialization    |

This list is actually stolen from https://nalchhen.com/posts/cwes-review/.

And make sure you utilize the walkthrough and not rely on the walkthrough! After completing the path try to not look into the walkthrough and solve the machines again or maybe the skills assessments.

## Getting Back Into "Just Solve" Mode

I remember a time when I was in 9th/10th/11th where I would just keep solving thm machines, I was so used to it I didn't need a walkthrough after some time, that's the time I'm missing, I am trying to get back in that mode, solving solving and solving, it doesn't mean I'll forget everything else, but I'll rather make solving challenges a part of my weekly goals.

Now ahead I think I'll start bug hunting, or maybe freelancing, not sure but yeah I'll be using my blade continuously no matter what!

## The Methodology I Wish I'd Had From Day One

Also I forgot earlier, the complete methodology and checklist is very very very fkin important, this time I partially relied on the methodology and checklist from others. After this blog I'm gonna segregate my notes more properly and create a good methodology/checklists for myself so I don't miss a thing and work systematically instead of in excitement and pure instincts.

I respect instincts, those are really good and get me the flag but, CWES has tested it, few flags were easy ofc but few did test them. So I'll make a personal methodology and a checklist soon, might drop it here if you guys demand!

## Reviews That Helped Me

I would really like to mention these resources/reviews that helped me

1. A video by [CristiCyberSec](https://www.youtube.com/@cristicybersec) -> https://youtu.be/Tw6BycGF7ZM?si=erLzBXuItPvQ-KsQ
2. A blog by nalchhen -> https://nalchhen.com/posts/cwes-review/

## So, Who Should Actually Take CWES?

Now let's come to the part that who should actually take the exam? 
-> tbh I also really don't know, all I can say is if you ever feel you should test your skills as a junior web pentester go for it or also if you are a beginner and want to start a career in web pentesting yeah this would fit in that as well, btw I don't think it is industry known but I really liked the content and the exam was awesome, TESTED me frr.