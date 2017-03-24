/**
 * 通用的缓存代理函数
 * @param {number[]} nums
 */
var proxyfn = function (fn) {
    var cache = {}
    // var f=fn
    return function () {
        var args = Array.prototype.join.call(arguments, ',')
        if (args in cache) {
            return cache[args]

        }
        return cache[args] = fn.apply(this, arguments)
    }


}

// function add(x, y) {
//     return x + y;
// }
var add=function(){
    return 33
}
var padd = proxyfn(add)
console.log(proxyfn(add)(1, 2))