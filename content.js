window.addEventListener('message', function receiveDuck(event) {
   if(event.data.action === 'GOT_DUCK') {
      const div = document.createElement('div');
      document.body.appendChild(div);
      
      if(event.data.payload){
         div.innerText = "zanihilowano szpiega";
         div.style.backgroundColor = "#6ade2c";
      }
      else{
         div.innerText = "szpieg niezanihilowany";
         div.style.backgroundColor = "#de2c2c";
      }
      
      div.style.position = "fixed";
      div.style.bottom = "10%";
      div.style.left = "50%";
      div.style.transform = "translate(-50%)";
      div.style.color = "white";
      div.style.height = "2em";
      div.style.width = "15em";
      div.style.borderRadius = ".3em";
      div.style.fontSize = "2em";
      div.style.display = "flex";
      div.style.alignItems = "center";
      div.style.justifyContent = "center";
      div.style.opacity = "0";
      div.style.transition = "opacity .5s ease-in-out";
      div.style.fontFamily = "Arial";
      
      
      
      setTimeout(() => {
         div.style.opacity = "1";
      }, 200);
      setTimeout(() => {
         div.style.opacity = "0";
      }, 1500);
   }
}, false);


chrome.storage.local.get('state', function({state}){
   console.log(state);
   if(state){
      var s = document.createElement('script');
      s.src = chrome.extension.getURL('pageScript.js');
      (document.head || document.documentElement).appendChild(s);
   } 
});