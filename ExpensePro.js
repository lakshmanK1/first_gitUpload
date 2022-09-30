//Function to take the details using POST Request
function saveToLocalStorage(event){
    event.preventDefault();
    const s1=event.target.chooseexpenseamount.value;
    const s2=event.target.choosedescription.value;
    const s3=event.target.chooseacategory.value;
    //creating object 
    const obj={
        s1,
        s2,
        s3
    }
    //axios Post Request
    axios.post("https://crudcrud.com/api/6c4239a69ac84f0e9bc778287835e876/expensedata",obj)
    .then((response)=>{
        showUserOnScreen(response.data);
        console.log(response);
        for(var i=0;i<response.data.length;i++)
        {
            showUserOnScreen(response.data[i])
        }
    }).catch((err)=>{
        console.log(err);
    });
    }
    

//To get the data using GET Request, when it is loaded
    window.addEventListener("DOMContentLoaded",()=>{  
    axios.get("https://crudcrud.com/api/6c4239a69ac84f0e9bc778287835e876/expensedata")
    .then((response)=>{
        showUserOnScreen(response.data);
        console.log(response);
    for(var i=0;i<response.data.length;i++)
    {
    showUserOnScreen(response.data[i])
    }
    }).catch((err)=>{
        console.log(err);
    });

    })

//Function to display submited data
 function showUserOnScreen(user){
    document.getElementById('amount').value='';
    document.getElementById('description').value='';
    document.getElementById('category').value='';
    const parentNode=document.getElementById('listOfUsers')
    const childHTML=`<li id=${user._id}> - ${user.s1} - ${user.s2} -${user.s3} 
        <button onclick=deleteExpense('${user._id}')>Delete</button>
        <button onclick=editExpense('${user.s1}','${user.s2}','${user.s3}','${user._id}')>Edit</button>
        </li>`
    parentNode.innerHTML=parentNode.innerHTML+childHTML;
    document.getElementById('undefined').style.display="none";

}
//Function to Edit Data
function editExpense(s1,s2,s3,userId){
    document.getElementById('amount').value=s1;
    document.getElementById('description').value=s2;
    document.getElementById('category').value=s3;

    deleteExpense(userId)
}
//Function to Delete Data
function deleteExpense(userId){
    axios.delete(`https://crudcrud.com/api/6c4239a69ac84f0e9bc778287835e876/expensedata/${userId}`)
    .then((res)=>{
      removeUserFromScreen(userId)
    })
    .catch((err)=>{
      console.log(err);
    })
    }
//Function to remove the deleted data from screen
function removeUserFromScreen(userId){
    const parentNode=document.getElementById('listOfUsers')
    const childToBeDelete=document.getElementById(userId)

    parentNode.removeChild(childToBeDelete)
}