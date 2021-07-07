const tmi = require('tmi.js');
require('dotenv').config();
const axios = require('axios');

let currentToken = '';

// async function getAccessToken() {
//    let result = await axios({
//         method: 'POST',
//         url: 'https://id.twitch.tv/oauth2/token',
//         params: {
//             client_id: process.env.CLIENT_ID,
//             client_secret: process.env.CLIENT_SECRET,
//             grant_type: 'refresh_token',
//             refresh_token: process.env.CLIENT_REFRESH_TOKEN,
//         }
//     });
//     return await result.data.access_token;
// }
//
// async function getChannelId(channelName) {
//     let result = await axios({
//          method: 'GET',
//          url: 'https://api.twitch.tv/kraken/users/',
//          params: {
//              api_version: '5',
//              client_id: process.env.CLIENT_ID,
//              login: channelName,
//          }
//      });
//
//     return await result.data.users[0]['_id'];
// }
//
//
// async function makeClip(channel) {
//     let token, channelId;
//     await getAccessToken().then((res)=>{token = res});
//     await getChannelId(channel).then((res)=>{channelId = res});
//
//     let result = await axios({
//         method: 'POST',
//         url: 'https://api.twitch.tv/helix/clips',
//         params: {
//             broadcaster_id: channelId,
//         },
//         headers: {
//             'Authorization': `Bearer ${token}`,
//             'Client-Id' : `${process.env.CLIENT_ID}`
//         }
//     });
//
//     return await result.data.data[0].edit_url;
// }
const client = new tmi.Client({
    options: { debug: false },
    identity: {
        username: 'artmar_bot',
        password: 'oauth:e8b6ww8c0n9qcmdp7v8ezyihwhixx7',
    },
    channels: ['djedybream']
});

client.connect();

client.on('message', (channel, tags, message, self) => {

    if (tags['custom-reward-id'] === '0739fba4-8785-4555-b3a1-ea4c640216d8') {
        client.deletemessage(channel, tags.id).catch((err) => {
            console.log(err);
        });
    } else return false;

    // if(self || !message.startsWith('!')) {
    //     return;
    // }
    //
    // const args = message.slice(1).split(' ');
    // const command = args.shift().toLowerCase();
    //
    // if(command === 'clip') {
    //     makeClip(channel.slice(1)).then((result)=>{
    //         client.say(channel, `Я сделяль клип: ${result}`);
    //     });
    // } else if(command === 'hello') {
    //     client.say(channel, `@${tags.username}, Yo what's up`);
    // } else if(command === 'см') {
    //     const result = Math.floor(Math.random() * 30) + 1;
    //     client.say(channel, `@${tags.username}, твой бибон ${result} см.`);
    // }
});


