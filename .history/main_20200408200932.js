// let who='';
let URL='https://nepalcorona.info/api/v1/data/world'
fetch(URL)
.then(function(response){
   return response.json()
}).then(function(covid){
//    console.log(covid);
       if(covid.length>0)
       {
           var coviddata='';
           covid.forEach(function(data){
            // coviddata +="<tr>";
            coviddata +="<tr><td>"+data.country[i]+"</td>";
            coviddata +="<td>"+data.totalCases+"</td>";
            coviddata +="<td>"+data.newCases+"</td>";
            coviddata +="<td>"+data.totalDeaths+"</td>";
            coviddata +="<td>"+data.newDeaths+"</td>";
            coviddata +="<td>"+data.activeCases+"</td>";
            coviddata +="<td>"+data.totalRecovered+"</td>";
            coviddata +="<td>"+data.criticalCases+"</td></tr>";
            console.log(coviddata);
            document.getElementById('coranavirus').innerHTML=coviddata;
           })
       }
   })

