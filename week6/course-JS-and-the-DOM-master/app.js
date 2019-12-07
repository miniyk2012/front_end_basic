const nanodegreeCard = document.querySelector('.card');
console.dir(nanodegreeCard);
console.log(nanodegreeCard.textContent);
nanodegreeCard.textContent = "dfa";

let newSpan = document.createElement('span');
newSpan.textContent = '<div>牛逼哄哄1</div>';
let h1 = document.querySelector('h1');
newSpan2 = document.createElement('span');
newSpan2.innerHTML = '<div>牛逼哄哄2</div>';
// h1.appendChild(newSpan);
h1.append(newSpan, newSpan2, '<div>SB</div>');


const innerResults = document.querySelector('#pick-me').innerHTML;
const outerResults = document.querySelector('#pick-me').outerHTML;
console.log(innerResults); // logs the string: "Greetings To <span>All</span>!"
console.log(outerResults);  // los the string "<h1 id="pick-me">Greetings To <span>All</span>!</h1>"

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
    let firstCard = document.querySelector('.hero__module--container:nth-child(3)');
    firstCard.remove();
    let header = document.querySelector('h6.text-center');
    header.style.fontSize = '2em';
    header.style.color = 'orange';
    header.style.width = '50%';
    header.style.cssText = 'color: blue; background-color: orange; font-size: 3.5em';
}
demo();