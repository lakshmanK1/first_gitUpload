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

