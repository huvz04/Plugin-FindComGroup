// Electron 主进程 与 渲染进程 交互的桥梁
const { contextBridge } = require("electron");

// 在window对象下导出只读对象
contextBridge.exposeInMainWorld("plugin_find_com_group", {
  updateStyle: (callback) =>
    ipcRenderer.on(
      "LiteLoaderQQNT.plugin_find_com_group.updateStyle",
      callback
    ),
  rendererReady: () =>
    ipcRenderer.send("LiteLoaderQQNT.plugin_find_com_group.rendererReady"),
});
