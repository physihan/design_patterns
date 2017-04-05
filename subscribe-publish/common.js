//提取发布订阅功能
var event={
    clientList:[],
    listen:function(key,fn){
        if(!this.clientList[key]){
            this.clientList[key]=[]
        }
        this.clientList[key].push(fn)
    },
    trigger:function(){
        var key=Array.prototype.shift.call(arguments),
            fns=this.clientList[key]
            if(!fns||fns.length===0)
            return false
        for(var i=0,fn;fn=fns[i++];){
            fn.apply(this,arguments)
        }

    },
    listen1:function(){
        console.log('111')
    },
    listen2:12,
    listen4:{
        x:10,
        y:20
    }

}
//安装函数,这里只是浅复制
var installEvent=function(obj){
    for(var i in event){
        obj[i]=event[i]
    }
}
var obj={}
installEvent(obj)
event.listen1=function(){
    console.log('222')
}
event.listen1.x=13
obj.listen1()
console.log(obj.listen1.toString())
console.log(event.listen1.toString())
