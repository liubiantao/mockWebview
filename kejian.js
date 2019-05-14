const pid = document.querySelector('#pageid')
const uid = document.querySelector('#unitid')
const t = document.querySelector('#t')
const f = document.querySelector('#f')

pid.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    sendToHost()
  }
})

uid.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    sendToHost()
  }
})

t.addEventListener('click', e => {
  sendToHost()
})

f.addEventListener('click', e => {
  sendToHost(false)
})

function sendToHost(hasInteractiveQuiz = true) {
  var ipcRenderer = undefined
  if (typeof window['require'] !== 'undefined') {
    var electron = window['require']('electron')
    ipcRenderer = electron.ipcRenderer

    ipcRenderer.sendToHost({
      params: {
        pageId: pid.value,
        hasInteractiveQuiz,
        unitId: uid.value,
        kejianHasInteractiveQuiz: true
      }
    })
  }
}
