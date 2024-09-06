

let countValue = new Promise((resolve, reject) => {
    let ticket = false;
    if(ticket){
        resolve();
        console.log("promise resolved succesfully ");
    
    }
    else{
        reject();
        console.log("Promise error");
    }
});


countValue
.then((res) => {                                          // .then((response))                                       
    console.log("promise resolved succesfully ");
    
})
.catch((err) => {                                         // .then((error)
    console.log("Promise error");
    
});

