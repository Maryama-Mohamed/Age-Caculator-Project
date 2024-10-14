
const birthDayInput = document.getElementById("birthYear");

const calculateBtn = document.getElementById("calculate");

const resetBtn = document.getElementById("reset");

const ageDisplay = document.getElementById("ageDisplay");

const weekDisplay = document.getElementById("weekDisplay");

const dayDisplay = document.getElementById("dayDisplay");

function calculateAge(){

    const brithDate = new Date(birthDayInput.value);

    const today = new Date();

    if(isNaN(brithDate)|| brithDate > today){
        // alert("Invalid Date . please enter a valid date of birth.");
        swal.fire({
            title: "Error",
            text: "Invalid Date. please enter a valid date of birth.",
            icon: "error",
            confirmButtonText: "OK",
        })
        return;
    }

    let years = today.getFullYear()- brithDate.getFullYear();

    let mounths = today.getMonth() - brithDate.getMonth();

    let days = today.getDate() - brithDate.getDate();

    if(days < 0){
        mounths--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if(mounths < 0){
        years--;
        mounths +=12;
    }

    const totalDays = Math.floor((today - brithDate) / (1000 *60 *60 * 24));

    const totalWeeks = Math.floor(totalDays / 7)

    ageDisplay.textContent = `You are ${years} years, ${mounths} mounths and ${days} days old`;

    weekDisplay.textContent = `That's approximately  ${totalWeeks} weeks.`;

    dayDisplay.textContent = `or About ${totalDays} days.`;
}

calculateBtn.addEventListener ('click', calculateAge);

function resetFields (){

    birthDayInput.value = '';

    ageDisplay.textContent = '';

    weekDisplay.textContent = '';

    dayDisplay.textContent= '';

}
resetBtn.addEventListener('click', resetFields);