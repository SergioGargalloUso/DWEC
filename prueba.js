{
    let x="Pedro Sanchez 'x'";
    var y='Isabel Diaz Ayuso `y`';
    var z=`Carles Puigdemont "z"`;
    let a=0xAB12;
    let b=0b101;
    let c="Velocidad"*33;

    console.log("Dime el tipo de \"x\"", typeof x, "y de \"a\"", typeof a, "mira este numerin", b);
    console.log("lalala \u{806}" + y);
    console.log(`${x} es amigo de ` + z);
    console.log(`${z} debe al govierno la suma de:\t ${66*3*82}\u{20BF}`);
    console.log("El", c+"o MAGIC Alonso")

    console.log("_________________________________")
    console.log(Boolean("Santiago Abascal es mejor politico que Pablo Iglesias"));
    console.log(Boolean(null));
    console.log(Boolean(NaN));
    console.log(Boolean(undefined));
    console.log(Boolean(Infinity));
    console.log(Boolean(""));

    console.log("_________________________________")
    console.log('2'*3);
    console.log('2'+3);
    console.log(2+'3');
    console.log('hola'*3);
    console.log(null*3);
    console.log(true*3);
    console.log(false*3);
    console.log(undefined*3);

    console.log(Infinity-"texto");
    console.log("texto"-"texto");
    console.log(Nan-"texto");
    console.log(6+7);
    console.log(String(6)+String(7));

}