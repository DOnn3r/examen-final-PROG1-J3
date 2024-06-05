export function reorganize(input) {
    let array = input.split('');
    if (input == "") {
        return "";
    }

    //first try
    /*return array.sort(function (x, y) {
        return x.toString().localeCompare(y.toString());
    }).join('');*/

    //second try
    return array.sort();
}

console.log(reorganize('abdAbBce'));
console.log(reorganize('adAabaB'));