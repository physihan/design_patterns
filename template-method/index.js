/**
 * 不需要继承的模板方法模式
 */
var Beverage = function (param) {
  var boilWater = function () {
    console.log('把水煮沸')
  }
  var brew = param.brew || function () {
    throw new Error('必须传递brew方法')
  }
  var pourInCup = param.pourInCup || function () {
    throw new Error('必须传递pourInCup方法')
  }
  var addCondiments = param.addCondiments || function () {
    throw new Error('必须传递addCondiments方法')
  }
  var F = function () {
    this.need = true; // 钩子标志，确定是否调用钩子
  }
  F.prototype.init = function () {
    boilWater()
    brew()
    pourInCup()
    if (this.need) {
      addCondiments()
    }
  }
  return F
}
var Coffee = Beverage({
  brew: function () {
    console.log('用沸水冲泡咖啡')
  },
  pourInCup: function () {
    console.log('把咖啡倒进杯子')
  },
  addCondiments: function () {
    console.log('加糖和咖啡')
  }
})
var Tea = Beverage({
  brew: function () {
    console.log('用沸水浸泡茶叶')
  },
  pourInCup: function () {
    console.log('把茶倒进杯子')
  },
  addCondiments: function () {
    console.log('加柠檬')
  }
})
var coffee=new Coffee()
coffee.need=false;
coffee.init()
var tea=new Tea()
tea.init()