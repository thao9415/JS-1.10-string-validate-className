
function check(str) {
    regexp=/^[ACP][0-9]{4}[GHIKLM]$/;
    if (regexp.test(str)) {
        return true
    }
    return false
}
let className="C0318G";
console.log(check(className));
className="P0323A";
console.log(check(className));
className="M0318G";
console.log(check(className));