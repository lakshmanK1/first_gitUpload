function saveToLocalStorage(event)
            {
                event.preventDefault();
                const s1=event.target.chooseexpenseamount.value;
                const s2=event.target.choosedescription.value;
                const s3=event.target.chooseacategory.value;

                const obj={
                    s1,
                    s2,
                    s3
                }
                
                axios.post("https://crudcrud.com/api/7bd20aa5fab14cf09022fd9104cc9321/expensedata",obj)
                .then((response) => {
                    showUserOnScreen(response.data)
                    console.log(response);

                    for(var i=0;i<response.data.length;i++)
                    {
                        showUserOnScreen(response.data[i])
                    }
                }).catch((err) => {
                    console.log(err);
                })
    
            }
                
            window.addEventListener("DOMContentLoaded",()=>
            {
                
                axios.get("https://crudcrud.com/api/7bd20aa5fab14cf09022fd9104cc9321/expensedata")
                .then((response) =>{
                    showUserOnScreen(response.data)
                    console.log(response)

                    for(var i=0;i<response.data.length;i++)
                    {
                        showUserOnScreen(response.data[i])
                    }

                }).catch((err)=>{
                    console.log(err);
                })   
                })
            
             function showUserOnScreen(user)
            {
                document.getElementById('amount').value='';
                document.getElementById('description').value='';
                document.getElementById('category').value='';
                const parentNode=document.getElementById('listOfUsers')
                const childHTML=`<li id=${user._id}> - ${user.s1} - ${user.s2} -${user.s3} 
                    <button onclick="deleteExpense('${user._id}')"> Delete</button>
                    <button onclick="editExpense('${user.s1}','${user.s2}','${user.s3}','${user._id}')"> Edit</button>
                    </li>`
                parentNode.innerHTML=parentNode.innerHTML+childHTML;
                document.getElementById('undefined').style.display="none";
                
            }

            function editExpense(s1,s2,s3,userId)
            {
                document.getElementById('amount').value=s1;
                document.getElementById('description').value=s2;
                document.getElementById('category').value=s3;
                
                deleteExpense(userId);
            }

        
            function deleteExpense(userId)
            {
              axios.delete(`https://crudcrud.com/api/7bd20aa5fab14cf09022fd9104cc9321/expensedata/${userId}`)
              .then((response)=>{
                console.log(response);
                    removeUserFromScreen(userId);
              }).catch((err)=>{
                console.log(err);
              })
        
                }
            

            function removeUserFromScreen(userId)
            {
                const parentNode=document.getElementById('listOfUsers')
                const childToBeDelete=document.getElementById(userId)
            
                parentNode.removeChild(childToBeDelete)
            }
