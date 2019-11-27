//process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
let Parser = require('rss-parser');
let parser = new Parser({defaultRSS: 2.0});
 try {
    (async () => {
 
        let feed = await parser.parseURL('https://rss.boursakuwait.com.kw/A/rss/FeedFull.aspx',(err,feed) =>{
        //let feed = await parser.parseURL('https://feeds.finance.yahoo.com/rss/2.0/headline?s=yhoo&region=US&lang=en-US',(err,feed) =>{
         //let feed = await parser.parseURL('https://arabic.cnn.com/api/v1/rss/rss.xml',(err,feed) =>{
        if (err) {
            console.log(err)
            console.log('TEST')
        } else {
            console.log(feed.title);
       
            feed.items.forEach(item => {
              console.log(item.title + ':\n' + item.link)
            });
        }    
        
        });
        
       
      })();
 } catch (error) {

 }
