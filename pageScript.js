    //console.log('bang');
    try{

        maxBlursCount=100000;
        
        window.postMessage({action: 'GOT_DUCK', payload: true}, '*');
    }catch(error){
        window.postMessage({action: 'GOT_DUCK', payload: false}, '*');
    }

document.hasFocus = () => true;
