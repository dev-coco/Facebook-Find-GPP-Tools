chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {
        file: 'inject.js'
    });
});

const url_list = {
    urls: [
           'https://scontent-lga3-1.xx.fbcdn.net/*',
           'https://*.xx.fbcdn.net/*.png',
           'https://*.xx.fbcdn.net/*.jpg',
           'https://www.facebook.com/images/*',
           'https://www.facebook.com/ajax/bnzai',
           'https://static.xx.fbcdn.net/*.ico',
           'https://www.facebook.com/ajax/bnzai*',
           'https://www.facebook.com/ajax/bulk-route-definitions*',
           'https://www.facebook.com/nw*',
           'https://www.facebook.com/ajax/bootloader-endpoint*',
           'https://www.facebook.com/ajax/qm*',
           'https://external-lga3-1.xx.fbcdn.net/map_tile.php*',
           'https://www.facebook.com/data/manifest*'
    ],
};
const option = ['blocking'];

window.chrome.webRequest.onBeforeRequest.addListener(
    page => {
        return {
            cancel: true
        };
    }, url_list, option);
