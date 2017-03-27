/**
 * 一些需要迭代的函数
 */
var getActiveUploadObj = function () {
  try {
    return new ActiveXObject('TXFTNActiveX.FTNUpload')
  } catch(e) {
    return false
  }
}
var getFlashUploadObj = function () {
  if (supportFlash()) { // 需要提供这个函数
    var str = '<object type="application/x-shockwave-flash"></object>'
    return $(str).appendTo($('body'))
  }
  return false
}
var getFormUploadObj = function () {
  str = '<input type="file"/>'
  return $(str).appendTo($('body'))
}
//迭代器部分
var iteratorUploadObj=function(){
    for(var i=0,fn;fn=arguments[i++];){
        var uploadObj=fn()
        if(uploadObj!==false){
            return uploadObj
        }
    }
}
//实现部分
var uploadObj=iteratorUploadObj(getActiveUploadObj,getFlashUploadObj,getFormUploadObj)