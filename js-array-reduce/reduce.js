function extractValue(arr, key) {
    return arr.reduce(function(acc,next){
        acc.push(next[key]);
        return acc;
    },[]);
}


function vowelCount(str) {
    const vowels = `aeiou`;
    return str.split(``).reduce(function(acc,next){
        let lowerCased = next.toLowerCase()
        if (vowels.indexOf(lowerCased) !== -1) {
            if(acc[lowerCased]) {
                acc[loweCased]++;
            } else {
                acc[lowerCased] =1;
            }
        }
        return acc;
    }, {});
}



function partition(arr, callback) {
    return arr.reduce(function(acc,next){
        if(callback(next)){
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }[[],[]]);
}

function addKeyAndValue(arr, key, val) {
    return arr.reduce(function(acc,next,i){
        acc[i][key] = val;
        return acc;
    }, arr);
    }

