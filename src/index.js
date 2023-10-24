module.exports = function check(str, bracketsConfig) {
    let sArray = [];
    let sp = str.split("");
    let br = [];
    for(let i = 0; i < bracketsConfig.length; i += 1){
        br.push(bracketsConfig[i].join(""))
    }

    for(let i = 0; i < sp.length; i += 1) {

        if(br.includes(sArray[sArray.length-1] + sp[i])) {
            sArray.pop()
        } else {
            sArray.push(sp[i]);
        }
    }
    return !sArray.length
}
