var ipcRenderer = undefined
if (typeof window['require'] !== 'undefined') {
  var electron = window['require']('electron')
  ipcRenderer = electron.ipcRenderer

  var sendToHost = ipcRenderer.sendToHost

  sendToHost('getStudentsList', { callBack: 'getStudentsListCallBack' })

  ipcRenderer.on('getStudentsListCallBack', (event, message) => {
    console.log('getStudentsListCallBack', message)

    updateStudents(JSON.parse(message))
  })

  ipcRenderer.on('openPage', (event, message) => {
    console.log('openPage', message)

    sendToHost('reportShow')
  })

  ipcRenderer.on('closePage', (event, message) => {
    console.log('closePage', message)

    sendToHost('reportHide')
  })
}

function updateStudents(students = []) {
  students.forEach((s, i) => {
    document.querySelector('.students').children[i].innerText = JSON.stringify(
      s
    )
  })
}

function beginGroup() {
  let group1 = [...document.getElementById('group1').children].map(
    n => n.innerText
  )
  let group2 = [...document.getElementById('group2').children].map(
    n => n.innerText
  )
  let group3 = [...document.getElementById('group3').children].map(
    n => n.innerText
  )

  const getId = list => list.map(item => JSON.parse(item).id)

  let groupMap = {
    '1': getId(group1),
    '2': getId(group2),
    '3': getId(group3)
  }
  console.log(groupMap)

  sendToHost('beginGroup', { groupMap })
}

function endGroup() {
  sendToHost('endGroup')
}

function mute() {
  sendToHost('muteMicrophone', { mute: true })
}

function unmute() {
  sendToHost('muteMicrophone', { mute: false })
}

document.querySelector('#begin').addEventListener('click', beginGroup)
document.querySelector('#end').addEventListener('click', endGroup)
document.querySelector('#mute').addEventListener('click', mute)
document.querySelector('#unmute').addEventListener('click', unmute)
