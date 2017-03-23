var synchronousFile = function (id) {
    console.log('开始同步文件', id)
}

/**
 * 使用代理合并http请求
 */
var proxySynchronousFile = (function () {
    var cache = []
    var timer

    return function (id) {
        cache.push(id)
        if (timer)
            return
        timer = setTimeout(function () {
            synchronousFile(cache.join(','))
            clearTimeout(timer)
            timer = null
            cache.length = 0
        }, 2000)
    }


})()
var checkbox = document.getElementsByTagName('input')
for(var i=0;c=cache[i++];){
    c.onclick=function(){
        if(this.onchecked==true){
            proxySynchronousFile(this.id)
        }
    }
}