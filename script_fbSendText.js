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
    "1":  '6868app.com',
    "2":  '44app.top',
    "3":  '76app.top',
    "4":  '45app.top',
    "5":  '54app.top',
    "6":  '42app.top',
    "7":  '33app.top',
    "8":  '18app.top',
    "9":  '90app.top',
    "10": '11app.top',
    "11": '39app.top',
    "12": '15app.top',
    "13": '20app.top',
    "14": '38app.top',
    "15": '47app.top',
    "16": '25app.top',
    "17": '72app.top',
    "18": '67app.top',
    "19": '75app.top',
    "20": '50app.top',
    "21": '86app.top',
    "22": '92app.top',
    "23": '70app.top',
    "24": '60app.top',
    "25": '22app.top',
    "26": '46app.top',
    "27": '29app.top',
    "28": '12app.top',
    "29": '52app.top',
    "30": '74app.top',
    "31": '17app.top',
    "32": '24app.top',
    "33": '69app.top',
    "34": '41app.top',
    "35": '34app.top',
    "36": '31app.top',
    "37": '49app.top',
    "38": '35app.top',
    "39": '64app.top',
    "40": '57app.top',
    "41": '13app.top',
    "42": '48app.top',
    "43": '77app.top',
    "44": '79app.top',
    "45": '68app.top',
    "46": '23app.top',
    "47": '53app.top',
    "48": '27app.top',
    "49": '81app.top',
    "50": '71app.top',
    "0":  '37app.top',
}

var numFirst = 1

function textWeb(numFirst) {
    if (numFirst %51 === 1) {
        return numWeb["1"]
    } else if (numFirst %51 === 2) {
        return numWeb["2"]
    } else if (numFirst %51 === 3) {
        return numWeb["3"]
    } else if (numFirst %51 === 4) {
        return numWeb["4"]
    } else if (numFirst %51 === 4) {
        return numWeb["5"]
    } else if (numFirst %51 === 4) {
        return numWeb["6"]
    } else if (numFirst %51 === 4) {
        return numWeb["7"]
    } else if (numFirst %51 === 4) {
        return numWeb["8"]
    } else if (numFirst %51 === 4) {
        return numWeb["9"]
    } else if (numFirst %51 === 4) {
        return numWeb["10"]
    } else if (numFirst %51 === 4) {
        return numWeb["11"]
    } else if (numFirst %51 === 4) {
        return numWeb["12"]
    } else if (numFirst %51 === 4) {
        return numWeb["13"]
    } else if (numFirst %51 === 4) {
        return numWeb["14"]
    } else if (numFirst %51 === 4) {
        return numWeb["15"]
    } else if (numFirst %51 === 4) {
        return numWeb["16"]
    } else if (numFirst %51 === 4) {
        return numWeb["17"]
    } else if (numFirst %51 === 4) {
        return numWeb["18"]
    } else if (numFirst %51 === 4) {
        return numWeb["19"]
    } else if (numFirst %51 === 4) {
        return numWeb["20"]
    } else if (numFirst %51 === 4) {
        return numWeb["21"]
    } else if (numFirst %51 === 4) {
        return numWeb["22"]
    } else if (numFirst %51 === 4) {
        return numWeb["23"]
    } else if (numFirst %51 === 4) {
        return numWeb["24"]
    } else if (numFirst %51 === 4) {
        return numWeb["25"]
    } else if (numFirst %51 === 4) {
        return numWeb["26"]
    } else if (numFirst %51 === 4) {
        return numWeb["27"]
    } else if (numFirst %51 === 4) {
        return numWeb["28"]
    } else if (numFirst %51 === 4) {
        return numWeb["29"]
    } else if (numFirst %51 === 4) {
        return numWeb["30"]
    } else if (numFirst %51 === 4) {
        return numWeb["31"]
    } else if (numFirst %51 === 4) {
        return numWeb["32"]
    } else if (numFirst %51 === 4) {
        return numWeb["33"]
    } else if (numFirst %51 === 4) {
        return numWeb["34"]
    } else if (numFirst %51 === 4) {
        return numWeb["35"]
    } else if (numFirst %51 === 4) {
        return numWeb["36"]
    } else if (numFirst %51 === 4) {
        return numWeb["37"]
    } else if (numFirst %51 === 4) {
        return numWeb["38"]
    } else if (numFirst %51 === 4) {
        return numWeb["39"]
    } else if (numFirst %51 === 4) {
        return numWeb["40"]
    } else if (numFirst %51 === 4) {
        return numWeb["41"]
    } else if (numFirst %51 === 4) {
        return numWeb["42"]
    } else if (numFirst %51 === 4) {
        return numWeb["43"]
    } else if (numFirst %51 === 4) {
        return numWeb["44"]
    } else if (numFirst %51 === 4) {
        return numWeb["45"]
    } else if (numFirst %51 === 4) {
        return numWeb["46"]
    } else if (numFirst %51 === 4) {
        return numWeb["47"]
    } else if (numFirst %51 === 4) {
        return numWeb["48"]
    } else if (numFirst %51 === 4) {
        return numWeb["49"]
    } else if (numFirst %51 === 4) {
        return numWeb["50"]
    } else if (numFirst %51 === 0) {
        return numWeb["0"]
    }
     console.log(textWeb(numFirst))
}

function textContent() {
    let numAdd = Math.ceil(numFirst / 5) + 1001
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
