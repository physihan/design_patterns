/**
 * 动态创建命名空间的函数
 */
var mySpace = {}
mySpace.namespace = function (name) {
  var parts = name.split('.')
  var current = mySpace
  for (var i in parts) {
    if (!current[parts[i]]) {
      current[parts[i]] = {}
    }
    current = current[parts[i]]
  }
}
/**
 * 测试用例
 */
// mySpace.namespace('a.b.c')
// mySpace.namespace('a.d')
// console.dir(mySpace)
// console.log(mySpace)

/**
 * 通用的单例模式函数，要求传入的函数fn返回创建的元素，result用于存储这个值
 * 创建实例对象的职责和管理单例的职责分开，降低耦合性
 */
var getSingle = function (fn) {
  var result
  return function () {
    return result || fn.apply(this, arguments)
  }
}
var createLoginLayer = function () {
  var div = document.createElement('div')
  div.innerHTML = '我是登陆弹窗'
  div.style.display = 'none'
  document.body.appendChild(div)
  return div
}
var createSingleLoginLayer = getSingle(createLoginLayer)
document.getElementById('loginButton').onclick = function () {
  var loginLayer = createSingleLoginLayer()
  loginLayer.style.display = 'block'
}
