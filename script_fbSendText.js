var UtilsPath = files.path('/sdcard/xxsq/gz/utils.js')
var Common = require(UtilsPath)

function clickDomText(param) {
    let dom = text(param).findOne(30000)
    click(dom.bounds().centerX(), dom.bounds().centerY())
    sleep(2000)
}

function clickDomid(param) {
    let dom = id(param).findOne(30000)
    click(dom.bounds().centerX(), dom.bounds().centerY())
    sleep(2000)
}

function clickDommText(param) {
    let dom = text(param).findOne(30000)
    if (dom) {
        dom.click()
        sleep(2000)
    }
}

function clickDommid(param) {
    let dom = id(param).findOne(30000)
    if (dom) {
        dom.click()
        sleep(2000)
    }
}

function clickDomDesc(param) {
    let dom = desc(param).findOne(30000)
    if (dom) {
        dom.click()
        sleep(2000)
    }
}

function clickFriendLabel() {
    click(540, 1836)
    console.log('点击好友底部栏')
    sleep(3000)
}

function clickFriendAlbum() {
    clickDomDesc('所有联系人')
}

function clickFriendList() {
    clickDomDesc('查看详情')
    console.log('点击查看详情')
}

function btnText() {
    clickRefuse()
    clickDommText('发消息')
    console.log('点击发消息')
    sleep(2000)
}

function clickBlankContent() {
    clickDommText('Aa')
    console.log('点击发送框')
    sleep(2000)
}


function btnSend() {
    clickDomDesc('Send')
    console.log('点击发送按钮')
    sleep(2000)
}

function btnRoomBack() {
    clickDomDesc('返回')
    console.log('点击返回按钮')
    sleep(2000)
}

function btnPageBack(_params) {
    clickDomDesc('关闭内容信息')
    console.log('点击关闭内容信息')
    sleep(2000)
}

function clickMessageUnblock(_params) {
    clickDomDesc('Messenger,未加锁')
    sleep(2000)
}

function clickRefuse(_params) {
    let btnRefuse = text('拒绝').findOne(3000)
    if (btnRefuse) {
        btnRefuse.click()
        sleep(2000)
    } else {
        return
    }
}

// Array.prototype.remove = function(from, to) {
//     var rest = this.slice((to || from) + 1 || this.length);
//     this.length = from < 0 ? this.length + from : from;
//     return this.push.apply(this, rest);
//   }

// function textContent() {
//     console.log(greetingText.length-1)
//     var greetingIndex = Math.round(Math.random()*(greetingText.length-1))
//     var greeting = greetingText[greetingIndex]
//     setText(0, greeting)
//     greetingText.remove(greetingIndex)
//     console.log(greetingIndex)
//     console.log(greeting)
//     console.log(greetingText.length-1)
//     sleep(3000)
// }

// function aaa(params) {
//     while (true) {
//         textContent()
//     }
// }
// aaa()

// let nowNameList = []
// let newNameList = []
// let nowNameFbList = '/sdcard/FbNowText.txt'
// let newNameFbList = '/sdcard/FbNewText.txt'
// if (!files.exists(nowNameFbList)) {
//   files.createWithDirs(nowNameFbList)
// }

// if (!files.exists(newNameFbList)) {
//     files.createWithDirs(newNameFbList)
// }

// function readNowList () {
//     let _donenowNameFbList = open(nowNameFbList, 'r')
//     console.log('打开并读取已发送txt')
//     nowNameList = _donenowNameFbList.readlines()
//     console.log(nowNameList)
//     _donenowNameFbList.close()
//     console.log('关闭文件夹')
// }

// function readNewList () {
//     let _donenewNameFbList = open(nowNameFbList, 'r')
//     console.log('打开并读取已发送txt')
//     newNameList = _donenewNameFbList.readlines()
//     console.log(newNameList)
//     _donenewNameFbList.close()
//     console.log('关闭文件夹')
// }

// function writeNowList (text) {
//     let _writeFile = open(nowNameFbList, 'a')
//     console.log(nowNameFbList)
//     _writeFile.writeline(text)
//     console.log('打开已发送txt，并写入新id')
//     _writeFile.flush()
//     _writeFile.close()
// }

// function writeNewList (text) {
//     let _writeDittoFiles = open(newNameFbList, 'a')
//     console.log(newNameFbList)
//     _writeDittoFiles.writeline(text)
//     console.log('打开已发送txt，并写入新id')
//     _writeDittoFiles.flush()
//     _writeDittoFiles.close()
// }

// function setFbNowName(params) {
//     const allDetails = desc('查看详情').find()
//     console.log(allDetails.length)
//     allDetails.length && allDetails.forEach((item, index) => {
//         const y = item.bounds().centerY()
//         console.log(y)
//         if (y > 240 && y < 1790) {
//             click(item.bounds().centerX(), item.bounds().centerY())
//             readNowList()
//             sleep(3000)
//             nameNowWrite()
//         }
//     })
//     // equar(nowNameList, newNameList)
// }

// function setFbMessage(params) {
//     const allDetails = desc('查看详情').find()
//     console.log(allDetails.length)
//     allDetails.length && allDetails.forEach((item, index) => {
//         const y = item.bounds().centerY()
//         console.log(y)
//         if (y > 240 && y < 1790) {
//             setFbNowName()
//             click(item.bounds().centerX(), item.bounds().centerY())
//             readNewList()
//             sleep(3000)
//             nameNewText()
//         }
//     })
//     swipe(540, 1730, 540, 60, 2000)
//     sleep(2000)
//     setFbNowName()
// }

// function nameNowWrite(params) {
//     let userID = id('(name removed)').find()
//     let userNowName = userID[8]
//     let userNowText = userNowName.text()
//     userNowText.concat(nowNameList)
//     console.log(userNowText)
//     writeNowList(userNowText)
//     sleep(2000)
//     btnPageBack()
// }

// function nameNewText(params) {
//     let userID = id('(name removed)').find()
//     let userNewName = userID[8]
//     let userNewText = userNewName.text()
//     if (newNameList.indexOf(userNewText) == -1 ) {
//         userNewText.concat(newNameList)
//         console.log(userNewText)
//         writeNewList(userNewText)
//         // btnText()
//         // sleep(3000)
//         // TextSend()
//         // sleep(2000)
//         btnPageBack()
//     } else {
//         reStart()
//     }
// }

// function equar(nowNameList, newNameList) {
//     if (nowNameList.length !== newNameList.length) {
//         return setFbMessage()
//     } else {
//         for (let i = 0; i < nowNameList.length; i++) {
//             if (nowNameList[i] !== newNameList[i]) {
//                 reStart()
//             }
//         }
//         return setFbMessage()
//     }
// } 

function startVpn(params) {
    launch('com.jrzheng.supervpnfree')
    sleep(5000)
    click(284, 1794)
    console.log('点击广告不用了')
    clickDommText('CONTINUE')
    console.log('vpn点击继续')
    clickDommText('CONNECT')
    console.log('vpn点击连接')
    click(284, 1794)
    console.log('点击广告不用了')
    let errText = text('Connection error,please retry').findOne(3000)
    if (errText) {
        clickDommText('CONNECT')
        console.log('vpn点击连接')
        click(284, 1794)
        console.log('点击广告不用了')
    }
    let corrText = text('Connected').findOne(3000)
    if (corrText) {
        home()
    }
}
startVpn()

const numWeb = {
    "1": '6868app.com',
    "2": 'rose001.club',
    "3": 'rose002.club',
    "4": 'rose003.club',
    "0": 'rose004.club',
}

var numFirst = 1

function textWeb(numFirst) {
    if (numFirst %5 === 1) {
        return numWeb["1"]
    } else if (numFirst %5 === 2) {
        return numWeb["2"]
    } else if (numFirst %5 === 3) {
        return numWeb["3"]
    } else if (numFirst %5 === 4) {
        return numWeb["4"]
    } else if (numFirst %5 === 0) {
        return numWeb["0"]
    }
     console.log(textWeb(numFirst))
}

function textContent() {
    let numAdd = Math.ceil(numFirst / 5) + 2000
    let Text = numAdd + '.' + textWeb(numFirst)
    console.log(numAdd)
    setText(0, Text)
    console.log(Text)
    sleep(2000)
}

let NameList = []
let NameFbList = '/sdcard/FbText.txt'
if (!files.exists(NameFbList)) {
  files.createWithDirs(NameFbList)
}

function readList () {
    let _doneNameFbList = open(NameFbList, 'r')
    // console.log('打开并读取已发送txt')
    NameList = _doneNameFbList.readlines()
    // console.log(NameList)
    _doneNameFbList.close()
    // console.log('关闭文件夹')
}

function writeList (text) {
    let _writeDittoFiles = open(NameFbList, 'a')
    console.log(NameFbList)
    _writeDittoFiles.writeline(text)
    // console.log('打开已发送txt，并写入新id')
    _writeDittoFiles.flush()
    _writeDittoFiles.close()
}

function setFbMessage() {
    const allDetails = desc('查看详情').find()
    allDetails.length && allDetails.forEach((item, _index) => {
        const y = item.bounds().centerY()
        if (y > 240 && y < 1790) {
            click(item.bounds().centerX(), item.bounds().centerY())
            readList()
            sleep(3000)
            nameText()
            numFirst ++
            console.log(numFirst)
        }
    })
    swipe(540, 1730, 540, 60, 2000)
    sleep(2000)
    setFbMessage()
}

function nameText() {
    let userID = id('(name removed)').find()
    let userName = userID[8]
    let userText = userName.text()
    if (NameList.indexOf(userText) == -1 ) {
        userText.concat(NameList)
        writeList(userText)
        btnText()
        sleep(2000)
        judgeBlock()
    } else {
        btnPageBack()
    }
}

function judgeBlock(params) {
    sleep(2000)
    let AaContent = text('Aa').findOne(3000)
    if (AaContent) {
        TextSend()
    } else {
        btnRoomBack()
    }
}

function TextSend(params) {
    clickBlankContent()
    textContent()
    btnSend()
    btnRoomBack()
    sleep(180000)
}

function totalPley(params) {
    home()
    recents()
    sleep(1000)
    clickMessageUnblock()
    sleep(1000)
    setFbMessage()
}

// totalPley()
// startVpn()
