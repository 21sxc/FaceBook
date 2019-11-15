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

function clickFacebookUnblock(params) {
    clickDommDesc('Facebook,未加锁')
}

function extraBox(params) {
    let fullText = text('这位用户的好友数量已达到上限5000人，无法添加更多好友。').findOne(3000)
    let alreadyText = text('你和这位用户已成为好友。').findOne(3000)
    let alreadyText2 = text('已经是朋友了').findOne(3000)
    let fullText2 = text('无法加为好友').findOne(3000)
    if (fullText2.exists()) {
        clickDommText('确认')
        sleep(1000)
    } else if (alreadyText2.exists()) {
        clickDommText('确认')
        sleep(1000)
    } else {
        return
    }
}



function btnConfirm(params) {
    let confirmList = desc('确认').find()
    if (text('确认').exists()) {
        let btnSure = confirmList[0]
        const y = btnSure.bounds().centerY()
        console.log(y)
        if (y > 216 && y < 1800) {
            btnSure.parent().click()
            sleep(1000)
            extraBox()
        }
    } else {
        btnAcceptFriend()
    }
    swipe(540, 300, 540, 1800, 1000)
    sleep(3000)
    btnConfirm()
}

function btnAcceptFriend(params) {
    let addedFriends = desc('加为好友').find()
    if (addedFriends) {
        let btnAdded = addedFriends[0]
        const y = btnAdded.bounds().centerY()
        if (y > 216 && y < 1800) {
            btnAdded.parent().click()
            sleep(1000)
            extraBox()
        }
    } else {
        return false
    }
    swipe(540, 450, 540, 1800, 1000)
    sleep(3000)
}

function main(params) {
    home()
    recents()
    sleep(1000)
    clickFacebookUnblock()
    sleep(1000)
    btnConfirm()
}

main()