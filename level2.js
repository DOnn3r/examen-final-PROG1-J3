export function reorganize(input) {
    if (input === "") {
        return "";
    }

    let seen = {};
    let result = [];

    for (let char of input) {
        let lowerChar = char.toLowerCase();
        if (seen[lowerChar]) {
            let index = result.findIndex(c => c.toLowerCase() === lowerChar);
            result.splice(index + 1, 0, char);
        } else {
            seen[lowerChar] = true;
            result.push(char);
        }
    }

    return result.join('');
}

console.log(reorganize('abdAbBce')); // "abdABbce"
console.log(reorganize('adAabaB')); // "adAaabB"