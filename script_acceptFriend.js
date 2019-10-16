var UtilsPath = files.path('/sdcard/xxsq/gz/utils.js')
var Common = require(UtilsPath)

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

function clickDommDesc(param) {
    let dom = desc(param).findOne(30000)
    if (dom) {
        dom.click()
        sleep(2000)
    }
}

function clickDomText(param) {
    let dom = text(param).findOne(30000)
    if(dom) {
        click(dom.bounds().centerX(), dom.bounds().centerY())
        sleep(2000)
    }
}

function clickDomid(param) {
    let dom = id(param).findOne(30000)
    if(dom) {
        click(dom.bounds().centerX(), dom.bounds().centerY())
        sleep(2000)
    }

}

function clickDomDesc(param) {
    let dom = desc(param).findOne(30000)
    if (dom) {
        click(dom.bounds().centerX(), dom.bounds().centerY())
        sleep(2000)
    }
}

function btnConfirm(params) {
    let confirmList = desc('确认').find()
    confirmList.length && confirmList.forEach(item => {
        if (confirmList) {
            click(item.bounds().centerX(), item.bounds().centerY())
        } else {
            return
        }
       swipe(540, 1500, 540, 300)
    });
}

function btnAcceptFriend(params) {
    let addedFriends = desc('加为好友').find()
    addedFriends.length && addedFriends.forEach(item => {
    const y = item.bounds().centerY()
        if (y > 500 && y < 1500) {
            item.parent().click()
            sleep(20000)
        }
    });
    swipe(540, 1500, 540, 300, 500)
}

function limitAccept(params) {
    for (let i = 0; i < 4; i++) {
        btnAcceptFriend()
    }
}

function main(params) {
    click(324, 300)
    sleep(2000)
    btnConfirm()
    sleep(1000)
    limitAccept()
}

