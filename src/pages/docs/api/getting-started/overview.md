---
title: 'Overview'
redirect_from:
  - /docs/api/
--- 

Welcome to **Microlink API**

You can use our API for getting structured data from any website.

<MultiCodeEditor languages={{
  Shell: `microlink-api curl https://instagram.com/p/BeV6tOhFUor --no-headers`,
  'Node.js': `const mql = require('@microlink/mql')
 
module.exports = async () => {
 const { status, data, response } = await mql(
   'https://www.instagram.com/p/BvDTdWdnzkj/'
  )
 
 console.log(status, data)
}
  `
  }} 
/>

Just you need to provide an URL as input, outputing the structured data back.

```json
{
  "data": {
    "lang": "en",
    "author": null,
    "title": "Tesla on Instagram: “Introducing Model Y Order at tesla.com/y”",
    "publisher": "Instagram",
    "image": {
      "url": "https://scontent-iad3-1.cdninstagram.com/vp/2282e7a0ba5ecd54364f5289104e5105/5CB67DF2/t51.2885-15/e15/52643291_128871201513344_8032404419029138690_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com",
      "width": 720,
      "height": 720,
      "type": "jpg",
      "size": 57720,
      "size_pretty": "57.7 kB"
    },
    "description": "216.8k Likes, 1,914 Comments - Tesla (@teslamotors) on Instagram: “Introducing Model Y Order at tesla.com/y”",
    "date": null,
    "logo": {
      "url": "https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png",
      "width": 192,
      "height": 192,
      "type": "png",
      "size": 34715,
      "size_pretty": "34.7 kB"
    },
    "url": "https://www.instagram.com/p/BvDTdWdnzkj/"
  },
  "status": "success"
}
```

The following documentation is going to teach you how to do things like:

- Get structured data from any link.
- Take a [screenshot](#screenshot) of the website (partial or full page).
- Get a predominant color [palette](#palette) per each image detected.
- Make easy [embed](#embed) content directly in your HTML markup.
- [prerender](#prerender) mode, useful for getting more information from websites that use client-side frameworks.
