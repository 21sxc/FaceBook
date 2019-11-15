var UtilsPath = files.path('/sdcard/xxsq/gz/utils.js')
var Common = require(UtilsPath)

function createFile(params) {
    let swipeNumFbList = '/sdcard/FbSwipeNumList.txt'
    if (!files.exists(swipeNumFbList)) {
        files.createWithDirs(swipeNumFbList)
        sleep(1000)
        var text = "0";
        files.write(swipeNumFbList, text);
    } else {
        return
    }
}

function dlPic(params) {
    app.openUrl("https://wap-file.longyouquwa.cn/chenxingcheng/2019/lADPDgQ9rNrJGYbNAfTNAfQ_500_500.jpg")
    sleep(1000)
    exit()
}

function main(params) {
    createFile()
    sleep(1000)
    dlPic()
}

main()
