  
  let row =1;
  let submit = document.getElementById("submit");
    
  submit.addEventListener("click",displayDetails);

 
 function displayDetails() {
    let ID = document.getElementById("userID").value;
    let Title = document.getElementById("Title").value;
    let Body = document.getElementById("Body").value;

    if(!ID || !Title || !Body){
        alert("please file the boxes");
        return;
    }
    let display = document.getElementById("display");
    let newRow = display.insertRow(row);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);


    cell1.innerHTML+=ID;
    cell2.innerHTML+=Title;
    cell3.innerHTML+=Body;
    
    row++;

}
 
