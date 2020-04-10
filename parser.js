// holidays parser for
// https://www.entrerios.gov.ar/dgrrhh/index.php?i=7

const MONTHS = [
    'enero','febrero','marzo','abril','mayo','junio','julio',
    'agosto','setiembre','octubre','noviembre','diciembre'
]

const YEAR = 2020;

module.exports = function($){
let holidays = [];
function pad(n){return n<10 ? '0'+n : n}


$('td[class^="bg"]').each((index,item)=>{
    const day = $(item).text();
    const monthText = $(item).parents("table").prev("h2").text().toLowerCase();
    const finder = function(element) { 
        return element == monthText; 
    }
    const month = MONTHS.findIndex(finder); 
    if(month===-1){
        throw "Something is wrong. Please, check the script or the html";

    }
        
    holidays.push(YEAR + '-' + pad(month+1) + '-' + pad(day) );

    })
    return holidays;
}