
///Declaring Variables
let submitbtn = document.getElementById("submit");
let userInput = document.querySelectorAll(".uInput")
let table = document.querySelector(".table")
let form = document.querySelector(".form")
let deleteButton = document.querySelector("tableBtn")
let tbody = document.querySelector("tbody")
let fNameError = document.querySelector(".fName-error")
let lNameError = document.getElementById(".lName-error")
let pincodeError =document.getElementById(".pincode-error")
let address = document.getElementById("address")
let errorMsg = document.querySelector(".alert-msg")
let errorMsgCloseBtn = document.getElementById("err-close-btn")
let container = document.querySelector(".container")

// Function to Create Table
submitbtn.addEventListener("click", (e)=>{
    e.preventDefault()
    let count =0;
    let userInfo = {
        firstName : "",
        lastName : "",
        address : "",
        pincode :"",
        gender : "",
        foodSelected: "",
        state : "",
        country : ""
    }
    userInfo.firstName = document.getElementById("first-name").value
    userInfo.address = document.getElementById("address").value
    userInfo.pincode = document.getElementById("pincode").value
    userInfo.gender = document.querySelector("input[name=gender]:checked").value
    userInfo.foodSelected = document.querySelector("input[name=food]").value
    userInfo.state = document.querySelector("input[name=state]").value
    userInfo.country = document.querySelector("input[name=country]").value
    userInfo.lastName = document.getElementById("last-name").value

//Condition to Check Input Value

    if(userInfo.firstName ==="" || userInfo.lastName === "" || userInfo.pincode === ""){
        errorMsg.style.visibility = "visible"
        container.style.filter = "blur(10px)"
        errorMsg.classList.add("alert-msg-close")
    } else {
        let newRow = tbody.insertRow(tbody.children.length)
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);
        let cell5 = newRow.insertCell(4);
        let cell6 = newRow.insertCell(5);
        let cell7 = newRow.insertCell(6);
        let cell8 = newRow.insertCell(7);
        cell1.innerHTML = userInfo.firstName;
        cell2.innerHTML = userInfo.lastName;
        cell3.innerHTML = userInfo.address;
        cell4.innerHTML = userInfo.pincode;
        cell5.innerHTML = userInfo.gender;
        cell6.innerHTML = userInfo.foodSelected;
        cell7.innerHTML = userInfo.state;
        cell8.innerHTML = userInfo.country;
        userInput.forEach((input)=>{
            input.value = ""
        })
        address.value = ""
    }
});

// Function to Reset Table
function deleteFunc (){
    for(let i= tbody.children.length; i>0; i--){
        tbody.deleteRow(i-1)
    }
}

//Function to Close Popup Error Message 
errorMsgCloseBtn.addEventListener("click", (event)=>{
    event.preventDefault()
    errorMsg.style.visibility= "hidden"
    container.style.filter = "blur(0)"
    errorMsg.classList.remove("alert-msg-close")
})

