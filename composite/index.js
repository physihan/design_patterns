/**
 * 组合模式适用于对象的部分-整体层次，客户希望统一对待树中的所有对象，上下级对象有相同的接口
 */
var Folder = function (name) {
  this.name = name
  this.parent = null
  this.files = []
}
Folder.prototype.add = function (file) {
  file.parent = this
  this.files.push(file)
}
Folder.prototype.remove = function () {
  var files = this.parent.files
  for (var i = 0, file; file = files[i++];) {
    if (this === file) {
      files.splice(i, 1)
    }
  }
}
Folder.prototype.scan = function () {
  console.log('现在扫描' + this.name)
  for (var i = 0, file, files = this.files; file = files[i++];) {
    file.scan()
  }
}
/**
 * file类与folder的接口保持一致，具体实现细节不同
 */
var File = function (name) {
  this.name = name
  this.parent = null
}
File.prototype.add = function () {
  throw new Error('不能在文件下添加文件')
}
File.prototype.scan = function () {
  console.log('>>开始扫描文件' + this.name)
}
File.prototype.remove = function () {
  var files = this.parent.files
  for (var i = 0, file; file = files[i++];) {
    if (this === file) {
      console.log(this.name, i - 1)
      files.splice(i - 1, 1)
    }
  }
}

//测试
var folder = new Folder('我的电脑')
var f_c = new Folder('c盘')
var f_d = new Folder('d盘')
var f_e = new Folder('e盘')
var file1 = new File('音乐1')
var file2 = new File('音乐2')
var file3 = new File('音乐3')
var file4 = new File('视频4')
var file5 = new File('视频5')
var file6 = new File('视频6')
folder.add(f_c)
folder.add(f_d)
folder.add(f_e)
f_c.add(file1)
f_c.add(file2)
f_c.add(file3)
f_d.add(file4)
f_d.add(file5)
f_d.add(file6)
file5.remove()
folder.scan()