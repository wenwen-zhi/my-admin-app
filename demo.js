
function gj(f1) {
    const type = typeof f1;
    if (type === "string") {
        console.log("ERROR");
        return 0;
    } else if (type === "function") {
        const result = f1(1, 2, 3, 4);
        console.log("result: " + result);
        return 1;
    }
}

const f = (a, b, c, d) => a * b * c * d;

const res = gj(f);
console.log("gj返回值: " + res);
