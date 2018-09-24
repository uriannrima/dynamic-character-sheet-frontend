export default {
  exportText: function (data: any, fileName: string) {
    var file = new Blob([JSON.stringify(data)], { type: 'text/plain' })
    if (window.navigator.msSaveOrOpenBlob) { window.navigator.msSaveOrOpenBlob(file, fileName) } else {
      var a = document.createElement('a')
      var url = URL.createObjectURL(file)
      a.href = url
      a.download = fileName
      document.body.appendChild(a)
      a.click()
      setTimeout(function () {
        document.body.removeChild(a)
        window.URL.revokeObjectURL(url)
      }, 0)
    }
  },
  importFile: function (file: any) {
    return new Promise((resolve, reject) => {
      var reader = new FileReader()
      reader.readAsText(file)
      reader.onload = function (event: ProgressEvent) {
        if (typeof reader.result === 'string') {
          var character = JSON.parse(reader.result)
          resolve(character)
        } else {
          reject();
        }
      }
      reader.onerror = function (event) {
        reject(event)
      }
    })
  }
}
