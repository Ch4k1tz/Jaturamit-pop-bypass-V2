const axios = require('axios');
const threadss = 3;
const HttpsProxyAgent = require('https-proxy-agent');
const fs = require('fs');

console.log(`
╔╗ ╔═╗╔═╗  ╔╗╔╦ ╦╔╦╗╔╗ ╔═╗╦═╗  ╔═╗╔╗╔╔═╗
╠╩╗║  ║    ║║║║ ║║║║╠╩╗║╣ ╠╦╝  ║ ║║║║║╣ 
╚═╝╚═╝╚═╝  ╝╚╝╚═╝╩ ╩╚═╝╚═╝╩╚═  ╚═╝╝╚╝╚═╝
Made with <3 By (SOMEONE IN BCC...)
`);
console.log("Starting Bypass");
setTimeout(() => {
    console.clear();
    for (let i = 0; i < threadss; i++){
        console.log("Threads: [" + i + "] Started")
        flood();
    }
},3000);

process.on('uncaughtException', function (err) {
    // console.log(err);
});
process.on('unhandledRejection', function (err) {
    // console.log(err);
});

const proxies0 = fs.readFileSync('proxy.txt', 'utf-8').replace(/\r/gi, '').split('\n').filter(Boolean);
async function attack() {
    const proxy = proxies0[Math.floor(Math.random() * proxies0.length)];
    const proxyAgent = new HttpsProxyAgent('http://' + proxy);
    // https://api.pophq.net/clicks?click=100&key=AC&token=ef8f5927-2a07-4bfb-9fe9-5a7740428e6e
    axios({
        "method":"POST",
        "httpsAgent": proxyAgent,
        "url":"https://api.pophq.net/token",
        "headers":{
            "origin":"https://pophq.net",
            "sec-fetch-mode":"cors",
            "referer":"https://pophq.net/",
            "content-type":"application/x-protobuffer",
            "user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
            "accept":"*/*"
        },
    }).then((res) => {
        console.log(`{ token: "${res.data.data}" }`);
        axios({
            "method":"POST",
            "httpsAgent": proxyAgent,
            "url":"https://api.pophq.net/clicks?click=450&key=AC&token=" + res.data.data,
            "headers":{
                "origin":"https://pophq.net",
                "sec-fetch-mode":"cors",
                "referer":"https://pophq.net/",
                "content-type":"application/x-protobuffer",
                "user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
                "accept":"*/*"
            },
        }).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log("[!] Can't set pop");
        });
    }).catch((err) => {
        // console.log("[!] Proxy Down");
    });
}

function flood() {
    console.log("Thread Running...");
    setInterval(() => {
        attack();
    });
}
