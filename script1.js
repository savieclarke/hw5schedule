let now = moment().format('LLLL');
$("#currentDay").text(now)






$ ("textarea").each(function(index) {
    let timeBlockHour = parseInt(this.id)
    if (timeBlockHour > moment().hour()) {
this.classList.add("future")
    }
    else if (timeBlockHour < moment().hour()) {
        this.classList.add("past")

    
    }



    else {
        this.classList.add("present")

    }

});



/*view reminder*/
for (let i = 9; i < 13; i++) {

const viewPoint = localStorage.getItem(i.toString())
const timeblock = document.getElementById(i.toString());
timeblock.value = viewPoint;

}

// same thing for 1 -> 5
for (let i = 1; i < 6; i++) {
const viewPoint = localStorage.getItem(i.toString())
const timeblock = document.getElementById(i.toString());
timeblock.value = viewPoint;
}
/* saves reminder */
let saveBtns = document.getElementsByClassName('saveBtn')
let description = document.querySelectorAll('.description');
  

console.log(description);
for (let i = 0; i < saveBtns.length; i++) {
saveBtns[i].addEventListener("click", function(event){
    
    let btnId = event.currentTarget.id;
   let textAreaId = btnId.split("-")[1];
  localStorage.setItem(textAreaId, document.getElementById(textAreaId).value)
});
}


