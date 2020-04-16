let covid='';
fetch("https://nepalcorona.info/api/v1/news")
.then(function(response){return response.json()})
.then(function(news){
    // console.log(news)
        covid=news.data;
         covid.forEach(function(user){
        let id=document.createElement('h4');
        id.innerHTML=user.title;    
        id.style.margin='10px'; 
        
        
        let image=document.createElement('img');
        image.src=user.image_url;
        image.style.width='230px';
        image.style.height='200px';
        image.style.marginRight='10px';

        let summary=document.createElement('a');
        summary.innerHTML=user.summary;
        summary.href=user.url;
        summary.style.fontSize='18px'
        summary.style.textDecoration='none';
        summary.style.textAlign='justify';
        summary.style.color='black';

        let title=document.createElement('h3');
        title.innerHTML='source: '+'"'+user.source;
        title.style.lineHeight="180px";
        title.style.fontSize = '14px';
        

        let display =document.createElement('div');
        display.appendChild(id);
        display.appendChild(image);
        display.appendChild(summary);
        display.style.padding='260px';
        display.style.alignItems='center';
        display.style.width='230px';
        display.style.height='585px';
        display.style.float='left';
        display.style.display='inline-block';
        display.style.margin='10px';
        display.style.backgroundColor='yellow'
        document.body.appendChild(display);
        console.log('asad',user);

    })
})
