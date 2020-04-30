
# JavaScript对象
  host Object：宿主环境提供的对象
  Built-in Objects：JavaScript语言提供的对象
    Intrinsic Objects：随运行时创建而创建的对象实例
    Native Objects：   用户通过Array、RegExp等内置构造器或者特殊语法创建的对象
    Ordinary Objects： 由{}语法、Object构造器或者class关键字定义类创建的对象，能够被原型继承

> 我们无法实现出来的
 
# 原生对象
  基本类型：Boolean，String，Number，Symbol，Object
  基础功能数据结构：Array，Date，RegExp，Promise，Proxy，Map，WeakMap，Set，WeakSet，Function
  错误类型：Error，EvalError，RangeError，ReferenceError，SyntaxError，TypeError，URIError
  二级制操作：ArrayBuffer，SharedArrayBuffer，DataView
  类型数组：Float32Array，Float64Array，Int8Array，Int16Array，Int32Array，UInt8Array，UInt16Array，UInt32Array，UInt8ClampedArray
  
  特性：构造器能力特殊，无法用纯JavaScript代码实现，无法用class/extend语法继承，多数使用私有字段，是为了特定能力或者性能，而设计出来的“特权对象”。
  
# 函数对象 构造器对象
  函数对象：实现了`[[call]]`的对象
  构造器对象：实现了`[[construct]]`的对象
