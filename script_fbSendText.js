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

function clickremarks1() {
    clickDomDesc('联系方式')       // 点击查看详情
    sleep(2000)
}

function clickremarks2() {
    clickDomDesc('查看详情')      // 点击查看详情
    sleep(2000)
}


function btnText() {
    clickDommText('发消息')     // 点击发消息
    sleep(2000)
}

function clickBlankContent() {
    clickDommText('Aa')     // 点击发送框
    sleep(2000)
}


function btnSend() {
    clickDomDesc('Send')      // 点击发送按钮
    sleep(3000)
}

function btnRoomBack() {
    clickDomDesc('返回')     // 点击返回按钮
    sleep(2000)
}

function btnPageBack(_params) {
    clickDomDesc('关闭内容信息')       // 点击关闭内容信息
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
function getWebsites(callback) {
    http.get("http://121.199.13.44:7002/api/domain/getValidDoamin?limit=1", {
        headers: {
            'Accept-Language': 'zh-cn,zh;q=0.5',
            'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
        }
    }, function(res, err) {
        if(err) {
            callback(err)
            return
        }
        const bodyRes = res.body.string()
        log("body = " + bodyRes)
        const myRes = JSON.parse(bodyRes)
        callback(null, myRes.data)
    })
}

function getRandomStr(len) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i = 0; i < len; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function getSendText(website) {
    const text = 'عزيزي : ماذا تنتظر قم بالتنزيل مباشرة ؟' + '.'
    return text + getRandomStr(4) + '.' + website
}

function getNum(len) {
    return Math.floor(Math.random() * len)
}

function textContent() {
    getWebsites(function(err, websites) {
        if (err) {
            log('请求失败了：' + err.message)
            return
        }
        if (websites.length > 0) {
            const idx = getNum(websites.length)
            const myText = getSendText(websites[idx])
            console.log(idx)
            setText(0, myText)
            log(myText)
            sleep(2000)
        } else {
            log('没有域名数据!')
        }
    })
}

let NameList = []
let NameFbList = '/sdcard/FbText.txt'
if (!files.exists(NameFbList)) {
  files.createWithDirs(NameFbList)
}

function readList () {
    let _doneNameFbList = open(NameFbList, 'r')  // 打开并读取已发送txt
    NameList = _doneNameFbList.readlines()       // console.log(NameList)
    _doneNameFbList.close()                      // console.log('关闭文件夹')
}

function writeList (text) {
    let _writeDittoFiles = open(NameFbList, 'a')
    console.log(NameFbList)
    _writeDittoFiles.writeline(text)             // console.log('打开已发送txt，并写入新id')
    _writeDittoFiles.flush()
    _writeDittoFiles.close()
}

function setFbMessage() {
    const allDetails = desc('查看详情').find()
    const allConnect = desc('联系方式').find()
    if (allDetails) {
        allDetails.length && allDetails.forEach((item, _index) => {
            const y = item.bounds().centerY()
            if (y > 240 && y < 1790) {
                click(item.bounds().centerX(), item.bounds().centerY())
                readList()
                sleep(5000)
                nameText()
            }
        }) 
    } else if (allConnect) {
        allConnect.length && allConnect.forEach((item, _index) => {
            const y = item.bounds().centerY()
            if (y > 240 && y < 1790) {
                click(item.bounds().centerX(), item.bounds().centerY())
                readList()
                sleep(5000)
                nameText()
            }
        }) 
    }
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
        sleep(5000)
        judgeBlock()
        sleep(2000)
    } else {
        btnPageBack()
    }
}

function webBlocked(params) {
    let textFail = text('发送失败').findOne(3000)
    let textSure = text('确定').findOne(3000)
    if (textFail) {
        textSure.click()
        sleep(2000)
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
    webBlocked()
    btnRoomBack()
    sleep(5000)
}

function totalPley(params) {
    home()
    recents()
    sleep(1000)
    clickMessageUnblock()
    sleep(1000)
    setFbMessage()
}

totalPley()