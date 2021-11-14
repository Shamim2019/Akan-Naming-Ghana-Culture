
 let maleNames=
 ['Kwasi','Kwado','Kwabena','Kwaku','Yaw','Kofi','Kwame']

 let femaleNames=
 ['Akosou','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']

 let days_of_week=
 ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

    
function akanNaming(event){
     event.preventDefault()
    let date=document.getElementById('date').value
     let gender=document.getElementById('gender').value
        let days_of_week=new Date(date).getDay()

  if(gender='' || date == '' ){
           alert('Error! You have to provide both gender' )}

  if(gender=='female'){
     alert(`Born on ${days_of_week[days_of_week]}
     and my Akanname is${femaleNames[days_of_week]}`)


      elseif(gender=='male');{
    alert(`Born on${days_of_week[days_of_week]}
     and my Akanname is${maleNames[days_of_week]}`)
 }}
}
