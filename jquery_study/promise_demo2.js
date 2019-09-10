function makeRequest(location) {
    return new Promise((resovle, reject) => {
        console.log(`making request to ${location}`);
        if (location.includes('Facebook') || location.includes('Google')) {
            resovle(`${location} say hi`);
        } else {
            reject('We can only talk to Google or Facebook');
        }
    });
}

function processRequest(response) {
    return new Promise((resovle, reject) => {
        if (response.includes('Facebook')) {
            console.log('Processing resposne');
            resovle('Extra Information ' + response);
        } else {
            reject('It\' Google!');
        }
    });
}

// makeRequest('Facebook').then(response => {
//     console.log('Response Received');
//     return processRequest(response);
// }).then(processResponse => {
//     console.log(processResponse);
// }).catch(error => {
//     console.log(error);
// });

async function doWork(location) {
    let response = undefined;
    try {
        response = await makeRequest(location);
        console.log('Response Received');
    } catch (err) {
        return console.log('1--- ' + err);
    }
    try {
        const processResponse = await processRequest(response);
        console.log(processResponse);
    } catch (err) {
        console.log('2--- ' + err);
    }
}

doWork('Google');
doWork('Facebook');
doWork('xx');
console.log('a');