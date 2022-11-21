let p_details = document.getElementsByClassName('detail_art');
let btn_details = document.getElementsByClassName('btn_detail');

console.log(p_details)
console.log(btn_details)

for (let i =0; i<p_details.length;i++){

btn_details[i].addEventListener('click', function(){

if (p_details[i].style.height= '150px')p_details[i].style.height='300px'
else p_details[i].style.height='150px';
})
}