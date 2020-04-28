    console.log('bang');
    try{
        blurSpy.stop();
        window.postMessage({action: 'GOT_DUCK', payload: true}, '*');
    }catch(error){
        window.postMessage({action: 'GOT_DUCK', payload: false}, '*');
    }

 