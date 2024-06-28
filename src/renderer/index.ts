// 运行在 Electron 渲染进程 下的页面脚本
import { SettingItem } from './component/item'
import { SettingList } from './component/list'
import { SettingButton } from './component/button'


export { onSettingWindowCreated }
async function onSettingWindowCreated(view: Element) {
  console.log('setting window created')
  const parser = new DOMParser()
  const doc = parser.parseFromString(
    [
      '<div>',
      `<setting-section id="llonebot-error">
            <setting-panel><pre><code></code></pre></setting-panel>
        </setting-section>`,
      SettingList([
        SettingItem(
          '测试标题',
          '测试子标题',
          '',
          '',
          false
          )
        ]),
  
      SettingList([
        SettingItem('GitHub 仓库', `https://github.com/LLOneBot/LLOneBot`, SettingButton('点个星星', 'open-github')),
      ]),
      '</div>',
    ].join(''),
    'text/html',)
}
 


// doc.querySelector('#open-github').addEventListener('click', () => {
//   window.LiteLoader.api.openExternal('https://github.com/LLOneBot/LLOneBot')
// })