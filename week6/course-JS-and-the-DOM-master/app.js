const nanodegreeCard = document.querySelector('.card');
console.dir(nanodegreeCard);

let newSpan = document.createElement('span');
newSpan.textContent = '牛逼哄哄1';
let h1 = document.querySelector('h1');
newSpan2 = document.createElement('span');
newSpan2.textContent = '牛逼哄哄2';
// h1.appendChild(newSpan);
h1.append(newSpan, newSpan2, 'SB');


async function demo() {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    await sleep(1500);
    // 法1
    // let hero_module = document.querySelector('.hero__module');
    // let firstCard = hero_module.firstElementChild;
    // hero_module.removeChild(firstCard);

    // 法2
    // let firstCard = document.querySelector('.hero__module--container');
    // firstCard.parentElement.removeChild(firstCard);

    // 法3
    let firstCard = document.querySelector('.hero__module--container');
    firstCard.remove();
    let header = document.querySelector('h6.text-center');
    header.style.fontSize = '2em';
    header.style.color = 'orange';
    header.style.width = '50%';
    header.style.cssText = 'color: blue; background-color: orange; font-size: 3.5em';
}
demo();