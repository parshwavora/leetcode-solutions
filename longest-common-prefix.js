var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    let res = "";
    for (let i = 0; i < strs[0].length; i++) {
        for (let s of strs) {
            if (i === s.length || s[i] !== strs[0][i]) {
                console.log(res)
                return res;
            }
        }
        res += strs[0][i];
    }
    console.log(res)
    return res;
};

longestCommonPrefix(['flower','flow','fluid'])