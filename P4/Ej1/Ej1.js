let a = [2,5,6,7,3,13,14];
function contPar(){
    let cont =0;

    /*Con foreach
    a.forEach(element => {
        
        if(element%2==0){
            cont++;
        }
    })
    for(let y for a){
        if(y%2==0){
            cont++;
        }
    }    
    */


    for(let x = 0 ; x<a.length; x++){
        if(a[x]%2==0){
            cont++;
        }
    }

    console.log("Hay" , cont , "pares en este array" , a);
}
contPar(a);




