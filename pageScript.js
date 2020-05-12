    //console.log('bang');
    try{

        blurSpy.onBlur = ()=>{}
        
        window.postMessage({action: 'GOT_DUCK', payload: true}, '*');
    }catch(error){
        window.postMessage({action: 'GOT_DUCK', payload: false}, '*');
    }

 