const axios = require('axios');
const HttpsProxyAgent = require('https-proxy-agent');
const fs = require('fs');
let proxies = fs.readFileSync("proxy.txt", 'utf-8').replace(/\r/gi, '').split('\n').filter(Boolean);

console.log(`
╔╗ ╔═╗╔═╗  ╔╗╔╦ ╦╔╦╗╔╗ ╔═╗╦═╗  ╔═╗╔╗╔╔═╗
╠╩╗║  ║    ║║║║ ║║║║╠╩╗║╣ ╠╦╝  ║ ║║║║║╣ 
╚═╝╚═╝╚═╝  ╝╚╝╚═╝╩ ╩╚═╝╚═╝╩╚═  ╚═╝╝╚╝╚═╝
Made with <3 By (SOME ONE IN BCC...)
`);
console.log("Starting Bypass");

async function attack() {
    let proxy = proxies[Math.floor(Math.random() * proxies.length)];
    var agent = new HttpsProxyAgent("http://" + proxy);
    axios({
        "method":"POST",
        "httpsAgent": agent,
        "url":"https://popjapi.deta.dev/clicks?click=450&key=BC",
        "headers":{
            "origin":"https://popjaturamitr.vercel.app",
            "sec-fetch-mode":"cors",
            "referer":"https://popjaturamitr.vercel.app/",
            "content-type":"application/x-protobuffer",
            "user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
            "accept":"*/*"
        },
    }).then((res) => {
        console.log(res.data);
    }).catch((err) => {
        // console.log("ERROR [!]");
    });
}
setInterval(() => {
    attack();
    // console.log("ATTACK [!]");
});