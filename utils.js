console.log('I am in utils')

const runner = function (a) { 
    let l =0;
    while (l < a) { 
        console.log(l);
        l = l+ 1
    }
    return true;
}

module.exports = runner;
