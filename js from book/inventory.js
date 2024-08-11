function printinventory(cows, chikens){
    let cowstring=String(cows);
    while (cowstring.length<3){
        cowstring="0"+cowstring
    }
    console.log(cowstring);
    let chickensstring=String(chikens);
    while (chickensstring<3){
        chickensstring="0"+chickensstring
    }
    console.log(chickensstring);
}

printinventory(5,6)
