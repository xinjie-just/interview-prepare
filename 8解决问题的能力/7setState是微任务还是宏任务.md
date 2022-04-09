# setState 是微任务还是宏任务

setState 是同步，只是被 React 包装成了异步的样子。

setState 在微任务 Promise.then 之前已经被执行了。

既然是同步，就既不是微任务，也不是宏任务。