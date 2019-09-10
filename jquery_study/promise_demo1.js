let p = new Promise((resolve, reject)=>{
    let p = new Promise((resolve, reject)=>{
    console.log('first');
    let a = 1 + 2;
    if (a === 2) {
        resolve('Success');
        resolve('Success');
        console.log('==2');

    } else {
        reject('Failure');
        reject('Failure');
        console.log('!==2');

    }
});
console.log('bhb');

p.then((message)=>{
    console.log('this is the then ' + message)
}).catch((message) => {
    console.log('this is the catch ' + message);
});

console.log('aha');
