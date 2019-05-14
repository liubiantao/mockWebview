var ipcRenderer = undefined
if (typeof window['require'] !== 'undefined') {
  var electron = window['require']('electron')
  ipcRenderer = electron.ipcRenderer
}

ipcRenderer.on('ping', (event, message) => {
  console.log(message) // Prints 'whoooooooh!'
})

function sendToHost(a = true) {
  a
    ? ipcRenderer.sendToHost('getStudentsList', {
        callBack: 'getStudentsList'
      })
    : ipcRenderer.sendToHost('endGroup')

  let groupMap = {
    '1': [students[0].id],
    '2': [students[1].id]
  }
  ipcRenderer.sendToHost('beginGroup', { groupMap })
}
