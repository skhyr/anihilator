var manifest = chrome.runtime.getManifest();

const setup = () =>{
    chrome.storage.local.get('state', function({state}){
        document.querySelector('#in').checked = state;
    });

    chrome.storage.local.get('time', function({time}){
        document.querySelector('#time').checked = time;
    });

    fetch('https://raw.githubusercontent.com/skhyr/anihilator/chrome/manifest.json')
    .then(response => response.json())
    .then(data => {
        if(data.version === manifest.version) document.querySelector('#update').innerText = '' 
        else document.querySelector('#update').innerText = 'update available'; 
    });

};
setup();
  
document.querySelector('#in').onclick = () =>{
    const off = document.querySelector('#in').checked;
    chrome.storage.local.set({state: off});
};

document.querySelector('#time').onclick = () =>{
    const time = document.querySelector('#time').checked;
    chrome.storage.local.set({time});
};
