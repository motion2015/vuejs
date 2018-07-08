function balancedParens(string) {
    return !string.split("").reduce(function(acc, char){
        if(acc < 0){ return acc }
        if(char === "(") { return ++acc }
        if(char === ")") { return --acc }
        return acc;
    }, 0)
};

balancedParens("()))");
// balancedParens("((ddfdfdf()aq)ssdsd)")
