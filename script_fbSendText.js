var UtilsPath = files.path('/sdcard/xxsq/gz/utils.js')
var Common = require(UtilsPath)

function clickDomText(param) {
    let dom = text(param).findOne(3000)
    click(dom.bounds().centerX(), dom.bounds().centerY())
}

function clickDomid(param) {
    let dom = id(param).findOne(3000)
    click(dom.bounds().centerX(), dom.bounds().centerY())
}

function clickDommText(param) {
    let dom = text(param).findOne(3000)
    if (dom) {
        dom.click()
    }
}

function clickDommid(param) {
    let dom = id(param).findOne(3000)
    if (dom) {
        dom.click()
    }
}

function clickDomDesc(param) {
    let dom = desc(param).findOne(3000)
    if (dom) {
        dom.click()
    }
}

function clickFriendLabel() {
    click(540, 1836)
    console.log('点击好友底部栏')
}

function clickFriendAlbum() {
    clickDomDesc('所有联系人')
}

function clickremarks1() {
    clickDomDesc('联系方式')       // 点击查看详情
}

function clickremarks2() {
    clickDomDesc('查看详情')      // 点击查看详情
}


function btnText() {
    clickDommText('发消息')     // 点击发消息
}

function clickBlankContent() {
    clickDommText('Aa')     // 点击发送框
}


function btnSend() {
    clickDomDesc('Send')      // 点击发送按钮
}

function photo(params) {
    clickDomDesc('Choose photo')
}

function photoSend(params) {
    clickDomDesc('发送')
}

function btnRoomBack() {
    clickDomDesc('返回')     // 点击返回按钮
}

function btnPageBack(_params) {
    clickDomDesc('关闭内容信息')       // 点击关闭内容信息
}

function clickMessageUnblock(_params) {
    clickDomDesc('Messenger,未加锁')
}

function clickRefuse(_params) {
    let btnRefuse = text('拒绝').findOne(3000)
    if (btnRefuse) {
        btnRefuse.click()
    } else {
        return
    }
}

// function getWebsites(callback) {
//     http.get("http://121.199.13.44:7002/api/domain/getValidDoamin?limit=1", {
//         headers: {
//             'Accept-Language': 'zh-cn,zh;q=0.5',
//             'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
//         }
//     }, function (res, err) {
//         if (err) {
//             callback(err)
//             return
//         }
//         const bodyRes = res.body.string()
//         log("body = " + bodyRes)
//         const myRes = JSON.parse(bodyRes)
//         callback(null, myRes.data)
//     })
// }

// function getRandomStr(len) {
//     var text = "";
//     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     for (var i = 0; i < len; i++)
//         text += possible.charAt(Math.floor(Math.random() * possible.length))
//     return text;
// }

// function getSendText(website) {
//     const text = 'عزيزي : ماذا تنتظر قم بالتنزيل مباشرة ؟' + '.'
//     return text + getRandomStr(4) + '.' + website
// }

// function getNum(len) {
//     return Math.floor(Math.random() * len)
// }

function helloText(params) {
    let text = [
        'السلام عليكم',
        'هلا وغلا',
        'هلا بقلبي',
        'مرحباً',
        'كيف الحال',
        'شو اخبارك',
        'وينك',
        'وش مسوي الحين',
    ]
    let index = Math.floor((Math.random()*text.length))
    let hello = text[index]
    setText(0, hello)
}

function talkText(params) {
    let text = [
        'انا الحين اشعربالملل لكن بصراحة في تطبيق اثار اهتمامي وتعرفت على اصدقاء من كل الدول العربية اذا بدك تدردش نزل تطبيق اسمة',
        'انا الحين اشعربالملل لكن بصراحة في تطبيق اثار اهتمامي وتعرفت على اصدقاء من كل الدول  اذا بدك تقضي على الملل نزل تطبيق اسمة',
        ' انا قاعد ما عندي شغلة لكن  العب بتطبيق الجديد مررررة حلو اسمة',
        'ممكن تنزلة من المتجر مباشرة ابل استور  او جوجل بلي كمان موجود',
        'قاعد العب بالتطبيق الجديد الي اسمة',
        'ممكن تنزلة من المتجر مباشرة ابل استور  او جوجل بلي كمان موجود',
        'في العاب وتسلية بالتطبيق الجديد الي لسا نزل على المتجر اسمة',
        'تطبيق جديد نزل على المنتجر لو بدك ندردش نزلو من المتجر',
        'الحين ماعندي شغلة الا العب بالتطبيق الي نزل على المتجر مرررة استخدامة مريح',
        'ماعندي شغلة وانت وش مساوي تعرفت على التطبيق الجديد الي بالمتجر والا لا  اسمة',
        'في تطبيق جديد نزل على المتجر اذا بدك تنزلة ونضيف بعض اسمة',
        'في تطبيق جديد نزل على المتجر اذا بدك تستمتع نزلة  اسمة',
        'ملل وصداع لكن معانا تطبيق جديد نزل قاعدين فية نستمتع مع البنات والاولاد اسمة',
        'وانت وش مسوي نزلت التطبيق الجديد والا لسا في تطبيق احنا والبنات فية نزلة اسمة',
        'انا الحين مو فاضي قاعد بالتطبيق الجديد الي اسمة',
        'في تطبيق جديد نزل في رومات والعاب وواشياء كثير مرة ممتعة ممكن تنزلة من المتجر اسمة',
        'نزلت تطبيق جديد من المتجز جدا روعة افضل من تطبيق يلا شباب اسمة',
        'سمعت بالتطبيق الجديد الي نزل على المتجر والا لا مرة روووعة الكل نزلة الان ومستمتعين اسمة',
        'الصدق انة في معانا والشلة تطبيق جديد عاة جديد ممكن تنزلة اسمة',
        'الحين ما عندنا شغلة الا نستمتع بالتطبيق الجديد الي نزل على المتجر اسمة',
        'كل شباب الخليج يطنخوا بالتطبيق الجديداسمة',
        'في تطبيق جديد نزل الحين كل الشباب والبنات نزلوة  اسمة',
        'كنت نوم ورحت فتحت  التطبيق الجديد اسمة',
        'ما اعرف وش اسوي الا افتح تطبيق جديد وادردش مع العيال والبنات في الخليج اسم التطبيق',
        'في تطبيق جديد نطنخ فية اسمة',
        'الان الصدق انو في ملل لكن في تطبيق جديد نزل على المتجر نلعب ونستمتع فية اسمة',
        'معانا الحين تطبيق افضل من يلا بالف مرة اسمة',
        'في تطبيق الان اكتسح السوق اسمة',
        'في تطبيق الان اكتسح السوق العربية  اسمة',
        'في  جديد الان اكتسح السوق بالخليج اسمة',
        'الان الشاباب والبنات في الخليج كلهم بستخدموا تطبيق جديد اسمة',
        'نزلت تطبيق  في تطبيقات جديدة لشركة خليجية اسمة',
        'انا الان ادردش في التطبيق الجديد الي اسمة',
        'درشة العاب واغاني ورومات ومسابقات في التطبيق الجديد الي  اسمة',
        'في تطبيق نزل بقطر اسمة',
    ]
    let index = Math.floor((Math.random()*text.length))
    let talk = text[index]
    setText(0, talk)
}

function textContent() {
    // getWebsites(function(err, websites) {
    //     if (err) {
    //         log('请求失败了：' + err.message)
    //         return
    //     }
    //     if (websites.length > 0) {
    //         const idx = getNum(websites.length)
    //         const myText = getSendText(websites[idx])
    //         console.log(idx)
    //         setText(0, myText)
    //         log(myText)

    //     } else {
    //         log('没有域名数据!')
    //     }
    // })
    let newText = 'اريد البحث عن اصدقاء  للدردشة في تطبيق الواتس اب رقمي الوتس اب هو' + '86 18582312714+ ';
    setText(0, newText)
    sleep(2000)
    btnSend()
    sleep(2000)
    // helloText()
    // sleep(1500)
    // btnSend()
    // sleep(1500)
    // talkText()
    // sleep(1500)
    // btnSend()
    // sleep(1500)
    // setText(0, 'Voimigo')
    // sleep(1500)
    // btnSend()
    // sleep(1500)
    // setText(0, 'ممكن تنزلة من المتجر مباشرة ابل استور  او جوجل بلي كمان موجود')
    // sleep(1500)
    // btnSend()
    // sleep(1500)
    // pushPhoto()
    // sleep(1500)
    // btnSend()
}

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

let NameList = []
let NameFbList = '/sdcard/FbNewNameText.txt'
if (!files.exists(NameFbList)) {
    files.createWithDirs(NameFbList)
}

let swipeNumFbList = '/sdcard/FbSwipeNumList.txt'

function readList() {
    let _doneNameFbList = open(NameFbList, 'r')  // 打开并读取已发送txt
    NameList = _doneNameFbList.readlines()       // console.log(NameList)
    _doneNameFbList.close()                      // console.log('关闭文件夹')
}

function writeList(text) {
    let _writeDittoFiles = open(NameFbList, 'a')
    _writeDittoFiles.writeline(text)             
    _writeDittoFiles.flush()
    _writeDittoFiles.close()
}

function readSwipeNumList() {
    let _doneSwipeNumList = open(swipeNumFbList, 'r')  // 打开并读取已发送txt
    swipeNumList = _doneSwipeNumList.readlines() 
    console.log(swipeNumList)      
    _doneSwipeNumList.close()                      // console.log('关闭文件夹')
}

function writeSwipeList(num) {
    let _wirteSwipeNumDittoFiles = open(swipeNumFbList, 'w')
    _wirteSwipeNumDittoFiles.writeline(num)            // console.log('打开已发送txt，并写入新id')
    _wirteSwipeNumDittoFiles.flush()
    _wirteSwipeNumDittoFiles.close()
}

readSwipeNumList()
let swipeNum = swipeNumList[0]
function localPostion(params) {
    console.log(swipeNum)
    for (let i = 0; i < swipeNum; i++) {
        if (swipeNum == 0) {
            return;
        } else {
            swipe(540, 1730, 540, 60, 1000)
            sleep(1000)
        }
    }
    sleep(1000)
}

function setFbMessage() {
    let btnDetails = desc('查看详情').findOne(3000)
    let btnConnect = desc('联系方式').findOne(3000)
    let allDetails = desc('查看详情').find()
    let allConnect = desc('联系方式').find()
    clickRefuse()
    if (btnDetails) {
        allDetails.length && allDetails.forEach((item1) => {
            const y = item1.bounds().centerY()
            if (y > 240 && y < 1790) {
                clickRefuse()
                click(item1.bounds().centerX(), item1.bounds().centerY())
                readList()
                clickRefuse()
                nameText()
            }
        })
    } else if (btnConnect) {
        allConnect.length && allConnect.forEach((item2) => {
            const y = item2.bounds().centerY()
            if (y > 240 && y < 1790) {
                clickRefuse()
                click(item2.bounds().centerX(), item2.bounds().centerY())
                readList()
                clickRefuse()
                nameText()
            }
        })
    }
    clickRefuse()
    swipe(540, 1730, 540, 60, 1000)
    swipeNum++
    writeSwipeList(swipeNum)
    setFbMessage()
}

function nameText() {
    let userID = id('(name removed)').find()
    let userName = userID[8]
    let userText = userName.text()
    if (NameList.indexOf(userText) == -1) {
        userText.concat(NameList)
        writeList(userText)
        clickRefuse()
        btnText()
        clickRefuse()
        judgeBlock()
    } else {
        clickRefuse()
        btnPageBack()
    }                
}

function webBlocked(params) {
    let textFail = text('发送失败').findOne(3000)
    let textSure = text('确定').findOne(3000)
    if (textFail) {
        clickRefuse()
        textSure.click()
    }
}

function judgeBlock(params) {
    let AaContent = text('Aa').findOne(3000)
    if (AaContent) {
        TextSend()
    } else {
        clickRefuse()
        btnRoomBack()
    }
}

function pushPhoto(params) {
    photo()
    sleep(1000)
    click(179, 1357)
    sleep(1000)
    photoSend()
    sleep(2000)
}

function TextSend(params) {
    clickRefuse()
    clickBlankContent()
    clickRefuse()
    textContent()
    clickRefuse()
    webBlocked()
    clickRefuse()
    btnRoomBack()
    // clickRefuse()
    // btnRoomBack()
}

function totalPley(params) {
    home()
    sleep(1000)
    createFile()
    sleep(1000)
    // recents()
    // sleep(1000)
    // clickMessageUnblock()
    intoList()
    sleep(1000)
    localPostion()
    setFbMessage()
}

// totalPley()

function intoList(params) {
    launchApp('Message')
    sleep(5000)
    clickFriendLabel()
    sleep(2000)
    clickFriendAlbum()
    sleep(1000)
}

threads.start(function(){
    //在新线程执行的代码
    while(true){
        clickRefuse()
    }
});
while(true){
    totalPley()
}