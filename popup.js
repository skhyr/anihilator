var manifest = chrome.runtime.getManifest();

const setup = () =>{
    chrome.storage.local.get('state', function({state}){
        document.querySelector('input').checked = state;
    });

    fetch('https://raw.githubusercontent.com/skhyr/anihilator/master/version')
    .then(response => response.json())
    .then(data => {
        if(data === Number(manifest.version)) document.querySelector('#update').innerText = '' 
        else document.querySelector('#update').innerText = 'update available'; 
    });

};
setup();
  
document.querySelector('input').onclick = () =>{
    const off = document.querySelector('input').checked;
    chrome.storage.local.set({state: off});
};