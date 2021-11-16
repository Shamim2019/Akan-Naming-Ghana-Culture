
 let maleNames=
  ['Kwasi','Kwado','Kwabena','Kwaku','Yaw','Kofi','Kwame']

  let femaleNames=
 ['Akosou','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']

  let weekDays=
  ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

    

function akanName(event) {
     event.preventDefault()
     let gender = document.querySelector('#gender').value;
    let date = document.querySelector('#date').value;
    // let name=document.getElementById('name').value
     let dayNumber = new Date(date).getDay(); 

     if (gender == ''|| date == '') {
        alert('Error! You have to provide both your gender and date of birth')
     }

    else if(gender=='male'){ 
         alert(`born on${weekDays[dayNumber]}
         and your akanname is ${maleNames[dayNumber]}`)
    }
    else  { 
        alert(`born on${weekDays[dayNumber]}
       and your akanname is ${femaleNames[dayNumber]}`)
    }
}
