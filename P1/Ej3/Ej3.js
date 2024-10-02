{
    var name="pedro";
    var surname="jose";
    var salari=1501;
    var age=40;
    
    /*
    var name=promt();
    var surname=promt();
    var salari=promt();
    var age=promt();
    */

    if(salari>=1000 && salari<=2000){
        if(edad > 45){
            salari=Number(salari)*1.03;
        }else{
            salari=Number(salari)*1.1;
        }
    }
    if(salari<1000){
        if(edad > 45){
            salari=Number(salari)*1.15;
        }
        if(edad >=30 && edad <=45){
            salari=Number(salari)*1.03;
        }
        if(edad <30){
            salari=1100;
        }
    }

    console.log(`El usuario: ${name}, ${surname} con edad de ${age}: Salario= ${salari}€`);
}