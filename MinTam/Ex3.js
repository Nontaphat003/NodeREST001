//เรียงตัวอักษรจากคัวใหญ่
// capToFornt("hApPy") -> "APhpy"
// capToFront("moveMENT") -> "MENTmove"
// capToFront("shOrtCAKE") -> "OCAKEshrt"

function capToFron(str) {
    let upper = ""
    let lower = ""
        // console.log(str.length);
    for (let i = 0; i < str.length; i++) {
        // console.log(str[i]);
        if (str[i] == str[i].toUpperCase()) {
            upper += str[i]
        } else {
            0
            lower += str[i]
        }
    }
    return upper + lower
}

console.log(capToFron("hApPy"));
console.log(capToFron("moveMENT"));
console.log(capToFron("shOrtCAKE"));