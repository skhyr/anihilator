window.addEventListener('load', function getDuckInPage(event) {
    try{
        blurSpy.stop();
        window.postMessage({action: 'GOT_DUCK', payload: true}, '*');
    }catch(error){
        window.postMessage({action: 'GOT_DUCK', payload: false}, '*');
    }
 }, false);