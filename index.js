
let maleNames=['Kwasi','Kwado','Kwabena','Kwaku','Yaw','Kofi','Kwame']

let femaleNames=['Akosou','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']

let days_of_week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

function akanNaming(event){
    event.preventDefault()
let date=document.getElementById('date').value
let gender=document.getElementById('gender').value
 let dayNumber=new Date(date).getDay();

 if(gender='' || date == '' ){
     alert('Error! You have to provide both gender' )
 }

 else if(gender=='female'){
    console.log('Born on $ {days_of_week[dayNumber]}
    'and my Akanname is $ { femaleAkanNames[dayNumber]})

  else {
// else (gender=='male'){
    console.log('Born on ${days_of_week[dayNumber]}
    and my Akanname is ${maleAkanNames[dayNumber]}')
}

