const nanodegreeCard = document.querySelector('.card');
console.dir(nanodegreeCard);

let newSpan = document.createElement('span');
newSpan.textContent = '牛逼哄哄1';
let h1 = document.querySelector('h1');
newSpan2 = document.createElement('span');
newSpan2.textContent = '牛逼哄哄2';
// h1.appendChild(newSpan);
h1.append(newSpan,newSpan2, 'SB');
