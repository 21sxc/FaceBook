var UtilsPath = files.path('/sdcard/xxsq/gz/utils.js')
var Common = require(UtilsPath)

function clickDommText(param) {
    let dom = text(param).findOne(3000)
    if (dom) {
        dom.click()
        sleep(2000)
    }
}

function clickDommid(param) {
    let dom = id(param).findOne(3000)
    if (dom) {
        dom.click()
        sleep(2000)
    }
}

function clickDommDesc(param) {
    let dom = desc(param).findOne(3000)
    if (dom) {
        dom.click()
        sleep(2000)
    }
}

function clickDomText(param) {
    let dom = text(param).findOne(3000)
    if(dom) {
        click(dom.bounds().centerX(), dom.bounds().centerY())
        sleep(2000)
    }
}

function clickDomid(param) {
    let dom = id(param).findOne(3000)
    if(dom) {
        click(dom.bounds().centerX(), dom.bounds().centerY())
        sleep(2000)
    }

}

function clickDomDesc(param) {
    let dom = desc(param).findOne(3000)
    if (dom) {
        click(dom.bounds().centerX(), dom.bounds().centerY())
        sleep(2000)
    }
}

function startVpn(params) {
    launchApp('com.jrzheng.supervpnfree')
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

var userList = [ '79068315105', '79619041214', '79619167647', '79671292873', '79214071867','m2546783852@gomen-da.com', 'm2546782899@gomen-da.com', 'm3060890275@gomen-da.com', 79218478561, 79039637207, 79258574853, 79259219019, 79258442195, 79652893487, 79200379586, 79037624157, 79652310749]
var passList = [ 'BktLI4cyN2', '9yQNfFtjXd', '4c6f0CvTPi', '14mm6z9FJN', '12ZxVdCS2n', 'Y029SJgGmk','ReBJRqqlQy', '2Y8DKDzRof', '9r8gJUf9En','Zttkc5PXfs','12ZxVdCS2n','KzLHQ1Ei','DPS59KUv', '17Sv0Oo3', 'ZixLdhwzPB', 'Su7gFZgpQz', 'BASDxUimr5', 'iTUmcw5qjq', 'aRAtRo9Yvf', '51eI4NDA6W', 'jmeUAruKGW', 'rNkzknVntR','KY1Z1W7C7S']

function fbLogin(params) {
    launchApp('com.facebook.katana')
    setText(0, userList[0])
    console.log('输入用户名')
    setText(1, passList[0])
    console.log('输入密码')
}

function btnLogin(params) {
    clickDommDesc('登录')
}

function btnNext(params) {
    clickDommText('下一步')
}

function settingAndPrivate(params) {
    clickDommDesc('设置与隐私，标头。版块标题：已收起。双击可展开版块。')
}

function setting(params) {
    clickDomText('设置')
}

function nameSetting(params) {
    clickDomText('个人信息')
    sleep(2000)
}

function fixName(params) {
    clickDomText('姓名')
    sleep(2000)
}

function contentName(params) {
    let nameList = ['وردة', 'ياسمين', 'عديلة', 'هدى', 'جميلة', 'صفية', 'ضحى', 'آئشة', 'أمينة', 'أميرة', 'بهيرة', 'غزيزة', 
'بسمة', 'هدية', 'حميدة', 'فاطمة', 'بهية', 'فريدة', 'فريحة', 'عناية', 'لؤلؤة', 'كميلة', 'كريمة', 'خديجة', 'مريم', 'مشيرة',
'نبيلة', 'ندى', 'نفيسة', 'نعيمة', 'نور', 'روضة', 'رقية', 'وداد', 'ذكية', 'زهرى', 'زينب', 'أماني', 'علية']
    let indexFirst = Math.floor((Math.random()*nameList.length))
    let indexLast = Math.floor((Math.random()*nameList.length))
    let nameFirst = nameList[indexFirst]
    let nameLast = nameList[indexLast]
    setText(0, nameFirst)
    setText(2, nameLast)
}   

function previewEdit(params) {
    clickDommText('预览修改')
    sleep(2000)
}

function btnSave(params) {
    clickDommText('保存更改')
    sleep(2000)
}

function clear(params) {
    clickDommid('clearAnimView')
    sleep(2000)
}

function saveCommit (params) {
    setText(0, passList[0])
    sleep(1000)
    btnSave()
    sleep(3000)
}

function  itemFb(params) {
    clickDommDesc('Facebook,未加锁')
}

itemFb()

function switchFacebook(params) {
    home()
    sleep(1000)
    recents()
    sleep(1000)
    itemFb()
}

function btnBackMainpage(params) {
    clickDommDesc('返回')
    sleep(1000)
    clickDommDesc('返回')
    sleep(1000)
    clickDommDesc('返回')
    sleep(1000)
    clickDommDesc('返回')
}

function endOpr(params) {
    home()
    sleep(1000)
    recents()
    clear()
}

function changeNickName(params) {
    // switchFacebook()
    sleep(10000)
    click(972, 300)
    console.log('点击资料栏')
    sleep(2000)
    swipe(540, 1800, 540, 200, 500)
    sleep(2000)
    settingAndPrivate()
    sleep(2000)
    setting()
    sleep(2000)
    nameSetting()
    sleep(2000)
    fixName()
    sleep(5000)
    contentName()
    sleep(5000)
    previewEdit()
    sleep(2000)
    saveCommit()
}

changeNickName()