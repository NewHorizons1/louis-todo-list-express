//Query the HTML document for all elements with the fa-trash class and store the result  in the deleteBtn variable
const deleteBtn = document.querySelectorAll('.fa-trash')

//Query the HTML document for all span elements that are located under an element with the item class. Store the results in the item variable.
const item = document.querySelectorAll('.item span')
//Query the HTML document for all span elements with the completed class that are located under an element. Store the results array in the item variable.
const itemCompleted = document.querySelectorAll('.item span.completed')

//Create an array from the deleteBtn NodeList and iterate over all of its elements.
Array.from(deleteBtn).forEach((element)=>{
    //Add an event listener to the current element that executes the deleteItem function on a click event.
    element.addEventListener('click', deleteItem)
})

Array.from(item).forEach((element)=>{
        //Add an event listener to the current element that executes the deleteItem function on a click event.
    element.addEventListener('click', markComplete)
})
//Create an array from the deleteBtn NodeList and iterate over all of its elements.
Array.from(itemCompleted).forEach((element)=>{
    element.addEventListener('click', markUnComplete)
})
//Declare a deleteItem function that takes no arguments and does not return anything .
async function deleteItem(){
    //Get the parent node from the element that was clicked. Then, find its second child node and retrieve its innerText. Store the results in the itemText variable.
    const itemText = this.parentNode.childNodes[1].innerText

    //Try to execute the following code block. If a promise is rejected, the catch block will be executed. 
    try{
        //Send an HTTP DELETE request to the deleteItem route relatie to the page we are currently on. Having a /deleteItem will nest it in the root. It's best practice to use when calling apis. 
        const response = await fetch('/deleteItem', {
            //The HTTP method is DELETE.
            method: 'DELETE',
            //Add a Content-Type request header with the value applicaiton/json.
            headers: {'Content-Type': 'application/json'},
            //Convert the object to JSON and send it in the request body.
            body: JSON.stringify({
              'itemFromJS': itemText
            })
          })
          //Resolve the response promise from the server and fetch the response as JSON.
        const data = await response.json()
        //Log the server response. 
        console.log(data)
        //Reload the current page.
        location.reload()
    //If any proise in the try block was rejected, execute this catch. 
    }catch(err) {
        //Log the error.
        console.log(err)
    }
}
//Declare a markComplete function that takes no arguments and does not return anything.  The funciton is async because it contains awaits.
async function markComplete(){
    //Get the parent node from the element that was clicked. Then, find its second child node and retrieve its innerText. Store the results in the itemText variable.
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        //Send an HTTP PUT request to the /markComplete route.
        const response = await fetch('markComplete', {
            //The HTTP method is PUT.
            method: 'put',
            //Add a Content-Type request header with the value applicaiton/json.
            headers: {'Content-Type': 'application/json'},
            //Convert the object to JSON and send it in the request body.
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
          //Resolve the response promise from the server and fetch the response as JSON.
        const data = await response.json()
        //Log the server response. 
        console.log(data)
        //Reload the current page.
        location.reload()

    }catch(err){
        //Log the error.
        console.log(err)
    }
}
//Declare a markComplete function that takes no arguments and does not return anything.  The funciton is async because it contains awaits.
async function markUnComplete(){
    //Get the parent node from the element that was clicked. Then, find its second child node and retrieve its innerText. Store the results in the itemText variable.
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        //Send an HTTP PUT request to the /markComplete route.
        const response = await fetch('markUnComplete', {
            //The HTTP method is PUT.
            method: 'put',
            //Add a Content-Type request header with the value applicaiton/json.
            headers: {'Content-Type': 'application/json'},
            //Convert the object to JSON and send it in the request body.
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
          //Resolve the response promise from the server and fetch the response as JSON.
        const data = await response.json()
        //Log the server response. 
        console.log(data)
        //Reload the current page.
        location.reload()

    }catch(err){
        //Log the error.
        console.log(err)
    }
}