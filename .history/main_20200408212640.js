// let who='';
var coviddata='';
let URL='https://nepalcorona.info/api/v1/data/world'
fetch(URL)
.then(function(response){
   return response.json()
}).then(function(covid){
//    console.log(covid);
       if(covid.length>0)
       {
           
           covid.forEach(function(data){
            coviddata +="<tr>";
            coviddata +="<tr><td>"+data.country+"</td>";
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

   //function search()
function search(){
let filter=document.getElementById('filter').value.toUpperCase(); 
let box =document.getElementsByClassName('table');
// let tr=box.getElementsByTagName('tr');
for (var i=0;i<coviddata.length;i++){
     let  td=coviddata[i].getElementsByTagName ('td')[0];
     if(td){
         let text=td.textContent||td.innerHTML;
         if(text.toUpperCase().indexof(filter)>-1)
         {
             coviddata[i].style.display="";

         }else{
             coviddata[i].style.display="none";
         }
     }
}
console.log(tr);

    }
