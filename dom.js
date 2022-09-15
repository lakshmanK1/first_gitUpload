// console.dir(document);

console.log(document);
console.log(document.baseURI);
console.log(document.title);
console.log(document.domain);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
document.title="New_Item_Listener";
console.log(document.all);
console.log(document.all[13]);
console.log(document.forms);
console.log(document.links);

//getElementByID
console.log(document.getElementById('header-main'));

var header2 = document.getElementById('h2-main');
console.log(header2);
//textcontent will read all text, no limits.Ex: here, style="display:none"  textcontent not consider about it, and reads all text.
header2.textContent='New add List';
//innerText will read text, with limits. Ex: here, style="display:none". where innerText will consider about it, and it not reads restricted text.
header2.innerText = 'add_list';
 var headertitle = document.getElementById('header-title');
 headertitle.innerHTML='<h3>Item Listener</h3>';
 headertitle.style.fontFamily='"Lucida Console", "Courier New", monospace';
 headertitle.style.border="solid 4px black";
 header2.style.fontWeight='bold';
 header2.style.color='green';


 //getElementById
 var getclass = document.getElementsByClassName('list-group-item');
 console.log(getclass);
 console.log(getclass[1]);
 getclass[1].textContent='Newly arrived item 2';
//  getclass[1].style.color='red';
 getclass[1].style.fontWeight='bold';

 for(var i=0; i < getclass.length; i++){
    getclass[i].style.backgroundColor='#f4f4f4';
 }
// getclass[3].style.backgroundColor='green';
// for(var i=0; i<getclass.length; i++){
//     getclass[i].style.color='red';
//     getclass[i].style.fontWeight='bold';
// }

//getelementByTagName
var li = document.getElementsByTagName('li');
console.log(li[5]);
li[5].style.color='green';
li[5].style.textAlign='center';
li[5].style.fontStyle='italic';

var newlist = document.getElementsByClassName('lastitem');
newlist[0].style.fontWeight='bold';
newlist[0].style.backgroundColor='orange';

//querySelector
// var seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.backgroundColor='green';

// var thirditem = document.querySelector('li:nth-child(3)');
// thirditem.style.display='none';

//querySelectorAll
// var secondele = document.querySelectorAll('li');
// secondele[2].style.color='green';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor='green';
// }


//traversing
// //parentNode
// var itemlist = document.querySelector('li');
// console.log(itemlist.parentNode);
// console.log(itemlist.parentNode.parentNode);
// console.log(itemlist.parentNode.parentNode.parentNode);
// itemlist.parentNode.parentNode.parentNode.style.backgroundColor='grey';

//parentElement(Same actions perform as parentNode)
var itemlist = document.querySelector('li');
console.log(itemlist.parentElement);
console.log(itemlist.parentElement.parentElement);
console.log(itemlist.parentElement.parentElement.parentElement);
itemlist.parentElement.parentElement.parentElement.style.backgroundColor='grey';

//childNode
var ulist= document.querySelector('ul');
console.log(ulist.childNodes);

//childern
console.log(ulist.children);

//firstChild
console.log(ulist.firstChild);

//firstChildElement
console.log(ulist.firstElementChild);
ulist.firstElementChild.textContent='item 1';

//lastChild
console.log(itemlist.lastChild);

//lastElementChild
console.log(ulist.lastElementChild);
ulist.lastElementChild.textContent='Hi!';

//nextSibling
console.log(ulist.nextSibling);
//nextElementSibling
console.log(itemlist.nextElementSibling);
itemlist.nextElementSibling.textContent='item 2.0';
console.log(ulist.nextElementSibling);
ulist.nextElementSibling.textContent='Hey Buddy!, items list ended.';

//previousSibling
console.log(ulist.previousSibling);
//previousElementSibling
console.log(ulist.previousElementSibling);
ulist.previousElementSibling.textContent='list_of_items';


//createElement
//creating div element
var divElement = document.createElement('div'); //creating div
divElement.className='new-div-class'; //creating class for div
divElement.id='new-div-id'; //creating id for div
divElement.setAttribute('style','color:red'); //creating attribute for div
var divtext = document.createTextNode('Hello World!'); //creating textnode
divElement.append(divtext); //added divtext to divElement
//to make affect in web page
var container = document.querySelector('header .container');
let h1=document.querySelector('header h1');
container.insertBefore(divElement, h1);

//creating h1 beform li
var newh1 = document.createElement('h1');
newh1.className='new-h1-class';
newh1.id='new-h1-id';
newh1.setAttribute('style','color:orange');
var h1_text = document.createTextNode('Hello World');
newh1.append(h1_text);

var beforeul = document.querySelector('div  #main');
var ul = document.querySelector('div  ul');
beforeul.insertBefore(newh1, ul);


