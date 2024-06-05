export function getMaxVenue(n,input) {
    let allTimes = []
    let newTimes =[]
    let frequence = 0;
    input.forEach(element => {
        allTimes.push(element.split(" "))
    });
    allTimes.join(",").split(",").forEach(element => {
        newTimes.push(Number(element))
    });

    for (let i = 0; i < (n*2); i++) {
        if ((newTimes[i] - newTimes[i+1]) > 0) {
            frequence++
        }
    }
    for (let index = 0; index < input.length; index++) {
        if (input[index] == "") {
            return "There are an empty interval"
        }
        if (input[index + 1] == input[index]) {
            return "Interval must be different";
        }
    }
    return frequence;
}