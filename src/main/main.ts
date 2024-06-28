// 运行在 Electron 主进程 下的插件入口
import { BrowserWindow, dialog, ipcMain } from 'electron'
/**
 * 是否已经初始化
 */
let init = false;
function onLoad() {
  console.log('llonebot main onLoad')

}
/**
 * 处理当浏览器窗口被创建的事件。
 *
 * @param {BrowserWindow} window - 浏览器窗口对象。
 * @return {void} 此函数不返回任何内容。
 */
// 创建窗口时触发
function onBrowserWindowCreated(window: BrowserWindow) {
  console.log('window create', window.webContents.getURL().toString())
}
try {
  onLoad()
} catch (e: any) {
  console.log(e.toString())
}
export { onBrowserWindowCreated }
