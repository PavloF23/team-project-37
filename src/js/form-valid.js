document.querySelector('.vali').onclick = myClick;

function myClick() {
    
    let form = document.querySelectorAll('.form__input').value;
   const x = document.getElementById("span");
    
    if (form == 0) {
        x.style.display = "block";
        document.querySelector('.span').innerHTML = 'All fields are required'
         }  else {x.style.display = "none"; 
    }
}
