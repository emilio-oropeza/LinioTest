function getStringToPrint (index) {
    const calc = calculateCase35(index);
    switch(calc) {
        case (0):
            console.log('Linianos');
            break;
        case (5):
            console.log('Linio');
            break;
        case (3):
            console.log('IT');
            break; 
        default:
            console.log(index);
    }
};
function calculateCaseNumber(index, calculator){
    return (index % calculator == 0)?0:calculator;
}

function calculateCase35( index ){
    const calculator3 = calculateCaseNumber(index, 3);
    const calculator5 = calculateCaseNumber(index, 5);
    return calculator3 + calculator5;
}

let arr = Array(100).fill().map((item,index) => 1 + index);
arr.map(item => getStringToPrint(item));