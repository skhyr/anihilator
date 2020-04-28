
const setup = () =>{
    chrome.storage.local.get('state', function({state}){
        document.querySelector('input').checked = state;
    });
};
setup();
  
document.querySelector('input').onclick = () =>{
    const off = document.querySelector('input').checked;
    chrome.storage.local.set({state: off});
};