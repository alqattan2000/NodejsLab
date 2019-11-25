//alert('File is attached !!')

// document.title = 'Qattan';
// console.log(document.getElementById('pid'));
// console.log(document.getElementById('pid').textContent);

// console.log(document.getElementsByClassName('pclass')[0]);
// console.log(document.getElementsByClassName('pclass')[0].textContent);


/// Most used one

const myElement = document.querySelectorAll('p');

myElement.forEach((val)=>{
    console.log(val.textContent);
    
});
myElement.forEach((val)=>{
   //val.remove();
    val.textContent = 'Change from JS';
});

const myNewp = document.createElement('p');
myNewp.textContent = 'Help Me To Add Form JS';
document.querySelector('body').appendChild(myNewp);

document.querySelector('button').addEventListener('click', (event)=>{
    console.log(event);
    event.target.textContent= "I was Clicked";
});

