var getUp = function() {
  console.log('起床了！')
}
var breakfast = function() {
  console.log('吃早饭')
}
var school = function() {
  console.log('去学校')
}
var lunch = function() {
  console.log('吃午饭')
}
var Make_command_queue = function() {
  var list = []
  var push=function(fn){
      while(arguments.length>0){
          list.push([].shift.apply(arguments))
      }
    // console.log(arguments.length)
    //   list.push(fn)
  }
  var excute=function(){
      for(var fn of list){
          if(typeof(fn)==='function'){
            fn()
          }
      }
  }
  return {
      push:push,
      excute:excute

  }
}
var queue=Make_command_queue()
// queue.push(getUp)
// queue.push(breakfast)
// queue.push(school)
// queue.push(lunch)
queue.push(lunch,school,breakfast,getUp)

queue.excute()
