// var UtilsPath = files.path('/sdcard/xxsq/gz/utils.js')
// var Common = require(UtilsPath)

// Common.clearDouyinToast()

// let _file = files.path('/sdcard/xxsq/gz/lxyFrame.js')
// var lxy = require(_file)

// let normalWaitingTime = 3000

// // const douyinDom = './douyin_dom.json'

var DomsConfigPath = files.path('/sdcard/xxsq/gz/config.js')
var DomsConfig = require(DomsConfigPath);
const { douyinSixTwo, mi } = DomsConfig
const douyinVersion = douyinSixTwo

var UtilsPath = files.path('/sdcard/xxsq/gz/utils.js')
var Common = require(UtilsPath)

function clickDomText(param) {
    let dom = text(param).findOne(30000)
    click(dom.bounds().centerX(), dom.bounds().centerY())
  }

function clickDomid(param) {
    let dom = id(param).findOne(30000)
    click(dom.bounds().centerX(), dom.bounds().centerY())
  }

function clickDommText(param) {
    let dom = text(param).findOne(30000)
    if (dom) {
        dom.click()
    }
}

function clickDommid(param) {
    let dom = id(param).findOne(30000)
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

let config = {
    apps: []
}

// var storage = storages.create("906449734@qq.com:LiveIDListSD")
// let nowSetLiveID = Number(storage.get('LiveIDList'))
// toast('输入的ID是' + nowSetLiveID)

const notStartApp = [
  '乖猪',
  '电话',
  '短信',
  '浏览器',
  '文件管理'
]

function initApp() {
    Common.getAppFromDesktop().forEach(item => {
        if (notStartApp.indexOf(item.text()) === -1) {
            config.apps.push({
            text: item.text(),
            id: item.id(),
            bounds: [item.bounds().centerX(), item.bounds().centerY()]
            })
        }
    })
}

function normalDomClick(dom, callback) {
    let _dom = null
    if (dom.id) {
        while (!Common.findDomFromId(dom.id, 5, false)) {
            Common.clearDouyinToast()
            if (callback) callback()
        }
        _dom = Common.findDomFromId(dom.id, 5, false)
    } else if (dom.text) {
        while (!Common.findDomFromText(dom.text, 5, false)) {
            Common.clearDouyinToast()
            if (callback) callback()
        }
        _dom = Common.findDomFromText(dom.text, 5, false)
    } else if (dom.textContains) {
        while (!Common.findDomFromTextContains(dom.textContains, 5, false)) {
            Common.clearDouyinToast()
            if (callback) callback()
        }
        _dom = Common.findDomFromTextContains(dom.textContains, 5, false)
    } else {
        Common.clearDouyinToast()
        return click(dom.bounds[0], dom.bounds[1])
    }
        return Common.clickBounds(_dom)
}


function arrayDomClick(dom, index) {
    let _doms = null
    _doms = Common.findAllDom(dom)
    while (!_doms) {
        Common.clearDouyinToast()
        _doms = Common.findAllDom(dom)
    }
    if (index > _doms.length - 1) return false
    return Common.clickBounds(_doms[index])
}

function findTag(tags) {
    tags.forEach(item => {
        if (!Common.findDom({ text: item }, 10)) {
        createTag(item)
        }
    })
    return selectTag(tags)
}

function createTag(tag) {
    normalDomClick(douyinVersion.createTagBtn)
    setText(0, tag)
    sleep(1000)
    normalDomClick(douyinVersion.okBtn)
    sleep(2000)
    if (Common.findDom(douyinVersion.cancelBtn, 3)) {
        normalDomClick(douyinVersion.cancelBtn)
    }
}

function selectTag(tags) {
    tags.forEach(item => {
        const targetTag = Common.findDom({ text: item }, 3)
        const baseDom = targetTag.parent()
        Common.clickBounds(baseDom.child(0))
    })
    sleep(2000)
    return
}

function main(item) {
    const { apps } = config

    if (!apps.length) {
        let errMsg = '获取抖音APP失败，请将抖音APP放在手机主页'
        console.log(errMsg)
        app.startActivity('console')
        throw Error(errMsg)
    }
    sleep(2000)
    home()
    Common.openApp(false, apps[item].bounds)
    sleep(5000)
    op_window()
}

function findClearBtnClick() {
    const { clearAnimBtn, clearAnimBtn2 } = mi
    if (Common.findDomFromId(clearAnimBtn.id, 3, false)) {
        Common.findDomFromId(clearAnimBtn.id, 3).click()
    } else if (Common.findDomFromId(clearAnimBtn2.id, 3, false)) {
        Common.findDomFromId(clearAnclearAnimBtn2imBtn.id, 3, false).click()
    } else {
        click(clearAnimBtn.bounds[0], clearAnimBtn.bounds[1])
    }
    sleep(2000)
}

function moveAppToNext(dom) {
    // 拖动app至手机后一页
    home()
    sleep(2000)
    gestures([0, 600, [538, 80], [538, 80]]) // 触发多选桌面图标操作
    sleep(1000)
    let dom_bounds = dom.bounds
    gestures([0, 600, dom_bounds, dom_bounds], [0, 1500, dom_bounds, [960, 1751]]) // 拖动
    sleep(2000)
    home()
    sleep(2000)
}

function clear() {
    launch("com.renxing.guaizhu")
    sleep(2000)
    recents()
    sleep(2000)
    findClearBtnClick()
    sleep(2000)
}

function clickLiveWindow(params) {
    Common.clearDouyinToast()
    clickDommid('aqz')
    sleep(2000)
}

function clickFind(params) {
    Common.clearDouyinToast()
    // clickDomid('qb')
    sleep(1000)
    setId()
    sleep(1000)
    // clickDomid('agn')
    click(1020, 1880)
    sleep(1000)
}

function getId(callback) {
    http.get("http://121.199.13.44:7005/api/id/getLastId", {
        headers: {
            'Accept-Language': 'zh-cn,zh;q=0.5',
            'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
        }
    }, function (res, err) {
        if (err) {
            callback(err)
        }
        // const bodyRes = res.body.string()
        // console.log("body = " + bodyRes)  
        // const myRes = JSON.parse(bodyRes)
        // console.log(JSON.parse(res.body.string()).data.data[0].word)
        // console.log(res.body.data.data[0].word)
        // console.log(myRes.data)
        // console.log(myRes.data.data[0].word)
        callback(null, JSON.parse(res.body.string()).data.data[0].dyId)
    })
};

function setId() {
    getId(function(err, ids) {
        if (err) {
            log('请求失败了：' + err.message)
            return
        }
        if (ids.length > 0) {
            const myId = ids
            console.log(myId)
            setText(0, myId)
            sleep(1000)
        } else {
            log('不能填写空ID!')
        }
    })
}

function getWord(callback) {
    http.get("http://121.199.13.44:7005/api/text/getLastText", {
        headers: {
            'Accept-Language': 'zh-cn,zh;q=0.5',
            'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
        }
    }, function (res, err) {
        if (err) {
            callback(err)
        }
        // const bodyRes = res.body.string()
        // console.log("body = " + bodyRes)  
        // const myRes = JSON.parse(bodyRes)
        // console.log(JSON.parse(res.body.string()).data.data[0].word)
        // console.log(res.body.data.data[0].word)
        // console.log(myRes.data)
        // console.log(myRes.data.data[0].word)
        callback(null, JSON.parse(res.body.string()).data.data[0].word)
    })
};

function setWord() {
    getWord(function(err, texts) {
        if (err) {
            log('请求失败了：' + err.message)
            return
        }
        if (texts.length > 0) {
            const myText = texts
            console.log(myText)
            click(216, 1842)
            sleep(1000)
            setText(0, myText)
            sleep(1000)
            clickDommid('av6')
        } else {
            log('当前不喊话!')
        }
    })
}

function clickLiveAvatar(params) {
    clickDommid('aai')
    sleep(3000)
    while (true) {
        let btnSet = id('av6').findOne(3000)
        if (!btnSet) {
            Common.clearDouyinToast()
            click(800, 700)
            sleep(1000)
            setWord()
        } else {
            Common.clearDouyinToast()
            setWord()
        }
    }
}

function op_window(params) {
    clickLiveWindow()
    sleep(2000)
    clickFind()
    sleep(2000)
    clickLiveAvatar()
}

function allStart(params) {
    initApp()
    config.apps.forEach((item, index) => {
    main(index)
    //   moveAppToNext(item)
})
    console.log('发布结束！')
    app.startActivity("console")
}

allStart()

function test(params) {
    sleep(5000)
    clickLiveAvatar()
}

// test()