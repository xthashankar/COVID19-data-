let qa='';
fetch('https://nepalcorona.info/api/v1/faqs')
.then(response=>response.json())
.then(faq=>{
    console.log(faq);
    qa=faq.data;
    qa.forEach(function(userdata){
        // console.log(userdata);
        let question=document.createElement('h1');
        question.innerHTML=userdata.question;
        question.style.paddingRight="8px";
        question.style.fontSize="24px";
        question.style.textAlign='justify' ;
       

        let answer=document.createElement('h3');
        answer.innerHTML=userdata.answer;
        answer.style.fontSize="22px";

        let category=document.createElement('h5');
        category.innerHTML= 'Category:'+userdata.category;
        category.style.fontSize="20px";

        let display =document.createElement('div');
        display.style.background="whitesmoke";
        display.style.width="50%";
        display.style.borderRadius="15px";
        display.style.alignItems='center';
        display.style.margin='5px auto';
        display.style.padding='10px';
        display.appendChild(question);
        display.appendChild(answer);
        display.appendChild(category); 
        document.body.appendChild(display);
    })

})