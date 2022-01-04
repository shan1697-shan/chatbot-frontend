function checkInternetConnection(){
		//console.log("Hello from checkInternetConnection");
        var status = navigator.onLine;
        if (status) {
          //  console.log('Internet Available !!');
			
        } else {
            //console.log('No internet Available !!');
			//alert('Internet disconnectd');
			 $.notify("Internet gets Disconnected!", {color: "#fff", background: "#D44950"});

        }  
        setTimeout(function() {
            checkInternetConnection();
        }, 1000);
      }

 
checkInternetConnection();