let car='';
fetch("https://nepalcorona.info/api/v1/news")
.then(function(response){return response.json()})
.then(function(news){
    // console.log(news)
    car=news.data;
    car.forEach(function(user){
        let id=document.createElement('card');
        id.innerHTML=user.source;
        id.style.color='red';
        document.body.appendChild(id);
        console.log('asad',user);

        le

    })
})