---
title: "Framer Motion Animation Library"
subtitle: "React animations made easy"
date: "24-04-2024"
image: "/imgs/framer-motion.png"
categories: "react, animation, programming"
fontColor: "text-black"
---

# Framer Motion Animation Library
~Starting my animation journey using basic Javascript, HTML and CSS, I was having trouble integrating this knowledge into React. But through research I found this great animation library which solved all my troubles.

- How To Install
- Motion Component

## How To Install
First install the package:
```
-
npm install framer-motion
```

Then to incorporate into any page, import the motion component:
```
-
import { motion } from "framer-motion"
```

## Motion Component


## 
I was trying to get the cards to animate, thus having my function deal() I had to make it async so I created a dealAsync() which prevented the next deal from being called for one second. [source](https://stackoverflow.com/questions/55746925/return-a-value-from-settimeout).
```
-
const dealAsync = async () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(deal())
        }, 1000);
    })
}

```