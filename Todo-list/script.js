function myFunction() {

    const console = document.getElementById("task") //too connect input 

    const listItem = document.getElementById("list"); //to connect ul 

    const value = console.value.trim();  // to avoid unused spaces  1)eg: ____midla_k  //ans: midlaj k  // 2) eg:muhammed_midaj //ans:muhammed midlaj


    if (value) {   // to value came 

        const item = document.createElement("li")   //to create a list element 
        const span = document.createElement("span")
        span.innerHTML = value;   //  it is used to insert the [list] value to innerhtml

        item.className = "first"  // to style

        console.value = ``;

        //edit button 

        const editButton = document.createElement("button")

        editButton.innerHTML = '<i class="fas fa-edit"></i>';
 
        editButton.className = "third"

        editButton.onclick = function () {

            const inputField = document.createElement("input");  //create an input element 

            inputField.type = `text`;
            inputField.value = span.textContent;
            item.replaceChild(inputField, span); // Replace span with input field 

            // Change edit button to save button

            editButton.innerHTML = '<i class="fas fa-save"></i>'; // Change icon to save
            editButton.onclick = function (){

                if(inputField.value.trim){

                    span.textContent = inputField.value.trim(); // Save the edited text

                    item.replaceChild(span ,inputField);  // Replace input with span

                    editButton.innerHTML = `<i class="fas fa-edit"></i>`;   //restore edit icon

                    
                    
                
                }
                else{

                    alert('Task cannot be empty !');
                }
            }
            


        }


        // to delete button add in ul list 

        const deleteButton = document.createElement("button") // creat a button 

        deleteButton.innerHTML = `<i class="fas fa-trash"></i>`; // icon 


        deleteButton.className = "second" // to style

        deleteButton.onclick = function () {

            listItem.removeChild(item); // remove the list 

        };


        item.appendChild(span);

        item.appendChild(editButton); // Add the edit button to the <li>


        item.appendChild(deleteButton); // Add the delete button to the <li>

        listItem.appendChild(item);  // Add the <li> to the <ul>

        console.value = ``;      // Clear input text

    }
    else {

        alert("Enter something !")
    }

}