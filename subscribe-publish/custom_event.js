var salesOffices={}
salesOffices.clientList=[]
salesOffices.listen=function(fn){
    this.clientList.push(fn)
}
//发布
salesOffices.trigger=function(){
    for(var i=0,fn;fn=this.clientList[i++];){
        fn.apply(this,arguments)
    }
}
//订阅
salesOffices.listen(function(price,squareMeter){
    console.log('价格=',price)
    console.log('面积=',squareMeter)
})
salesOffices.listen(function(price,squareMeter){
    console.log('价格=',price)
    console.log('面积=',squareMeter)
})
salesOffices.trigger(2000,100)
salesOffices.trigger(3000,150)
