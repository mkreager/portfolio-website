# Portfolio Website
Mobile-first photography portfolio web design project. 

## Optimized for Speed
1. [WebPagetest](https://www.webpagetest.org/result/171209_F0_b8e42065b4431ed72e0860be06746090/)

## Strategies
1. [Inline CSS](https://developers.google.com/speed/docs/insights/InlineCSS)
2. [Inline, deferred and asynchronous JavaScript](https://developers.google.com/speed/docs/insights/BlockingJS)
3. [Web Font Loader](https://github.com/typekit/webfontloader) to load Google Fonts
4. [Responsive images](https://developers.google.com/web/fundamentals/design-and-ux/responsive/images) using the ```picture``` and ```source``` elements to specify different image files 
5. [Static site hosting on AWS](http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html) with S3, CloudFront and Route 53

## To Do
1. Remove jQuery dependency (currently used only for animation of the menu)
2. Use static site generator tools to eliminate code redundancy ([Gatsby](https://www.gatsbyjs.org/), [Middleman](https://middlemanapp.com/), [Jekyll](https://jekyllrb.com/))
