const form=document.querySelector('.Form');

const Expense=document.querySelector('.expense');

const Destination=document.querySelector('.destination');

const Category = document.querySelector('.category');

const items=document.querySelector('#users');

const error=document.querySelector('#error');

form.addEventListener('submit',add);
function add(e){

  e.preventDefault();

  if (Expense.value==="" || Destination.value==="" || Category.value===""){
    error.innerHTML="* Please provide details";
    setTimeout(()=>error.remove(),3000);

  }
  else{
  const UrExpense=Expense.value;

  const UrDestination=Destination.value;

  const UrCategory = Category.value;

  const obj={

    UrExpense,

    UrDestination,

    UrCategory

  }

  axios

  .post('https://crudcrud.com/api/5daf9bc3c89c45bb844e611e72a68e9b/expenseTracker',obj)

  .then((response)=>

  {showUserOnScreen(response.data);console.log(response)})

  .catch(err=>{alert("something went wrong");console.log(err)});
}

}

function showUserOnScreen(display){

  const li=document.createElement('li');

  li.className='userlist';

  const textNode=document.createTextNode(display.UrExpense +' : '+ display.UrDestination+':'+display.UrCategory);
  li.appendChild(textNode);

  items.appendChild(li);
  const edit_Button=document.createElement('input');

  edit_Button.type='button';

  edit_Button.className='Edit';

  edit_Button.id=`${display._id}`;

  edit_Button.value="Edit"
  li.append(edit_Button);

  const li_Button=document.createElement('input');



  li_Button.className='Delete';

  li_Button.id=`${display._id}`

  li_Button.type='button';

  li_Button.value='Delete';

  li.appendChild(li_Button);
  deleteUser(li_Button);
  }
window.addEventListener('DOMContentLoaded',()=>{

      axios

      .get('https://crudcrud.com/api/5daf9bc3c89c45bb844e611e72a68e9b/expenseTracker')

      .then((response)=>{console.log(response)

      for(let i=0;i<response.data.length;i++){

        showUserOnScreen(response.data[i])

      }

      })

      .catch(err=>{alert("something went wrong");console.log(err)});
})

function deleteUser(buttonId){

  items.addEventListener("click",del);

    function del(e){

      if(e.target.className==='Delete'){

      items.removeChild(e.target.parentNode);

      axios

      .delete(`https://crudcrud.com/api/5daf9bc3c89c45bb844e611e72a68e9b/expenseTracker/${e.target.id}`)

      .then(response=>console.log(response))

      .catch(err=>console.log(err))

      }

    }
}

function updateUser(){

  items.addEventListener("click",del);

    function del(e){

      if(e.target.className==='Edit'){

        items.removeChild(e.target.parentNode);

        axios

        .delete(`https://crudcrud.com/api/5daf9bc3c89c45bb844e611e72a68e9b/expenseTracker/${e.target.id}`)

        .then(response=>console.log(response))

        .catch(err=>console.log(err))

        let N=e.target.parentElement.textContent.split(':');

        Expense.value=N[0];

        Destination.value=N[1];

        Category.value=N[2];

        }

    }

  }

updateUser();
