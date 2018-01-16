export default {
    exportText: function (data, fileName) {
        var file = new Blob([JSON.stringify(data)], { type: 'text/plain' });
        if (window.navigator.msSaveOrOpenBlob) { window.navigator.msSaveOrOpenBlob(file, fileName); } else {
            var a = document.createElement('a');
            var url = URL.createObjectURL(file);
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            setTimeout(function () {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        }
    },
    importFile: function (file) {
        return new Promise((resolve, reject) => {
            var reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function (event) {
                var character = JSON.parse(event.target.result);
                // delete character._id;
                resolve(character);
            };
            reader.onerror = function (event) {
                reject(event);
            }
        });
    }
}
