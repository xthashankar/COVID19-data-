let covid='';
fetch("https://nepalcorona.info/api/v1/news")
.then(function(response){return response.json()})
.then(function(news){
    // console.log(news)
    covid=news.data;
    covid.forEach(function(user){
        // let id=document.createElement('div');
        // id.innerHTML=user.lang;

      
        
        let title=document.createElement('h3');
        title.innerHTML=user.source;
        title.style.fontSize = '14px'
        
        let image=document.createElement('img');
        image.src=user.image_url;
        image.style.width='300px';
        image.style.height='300px';


        
        let summary=document.createElement('a');
        summary.innerHTML=user.summary;
        summary.href=user.url;

        let date=document.createElement('h1');
        date.innerHTML=user.created_at;
        
        let display =document.createElement('div');
        display.appendChild(id);
        display.appendChild(date);
        display.appendChild(title);
        display.appendChild(image);
        display.appendChild(summary);
        document.body.appendChild(display);
        console.log('asad',user);

        
    })
})