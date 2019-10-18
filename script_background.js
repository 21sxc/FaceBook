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

function findFromId (domId, t) {
    // 以组件id寻找单个组件，t为寻找时间，一般为3000
    let dom = id(domId).findOne(t)
    // console.log('评论dom：' + dom)
    if (dom != null) {
      return dom
    } else {
      return false
    }
  }
  
function findFromTxt (domText, t) {
    let dom = text(domText).findOne(t)
    if (dom != null) {
        return dom
    } else {
        return false
    }
}
  
function findFromDesc (domText, t) {
    let dom = descContains(domText).findOne(t)
    if (dom != null) {
        return dom
    } else {
        return false
    }
}
  //============================

function clickPrivateData () {
    click(540, 300) // 点击修改背景图
    sleep(2000)
    clickDomDesc('编辑个人主页')
    sleep(2000)
}
  
function changeImg() {
    let btnEdit = desc('编辑').find()
    if (btnEdit) {
        click(btnEdit[0].bounds().centerX(), btnEdit[0].bounds().centerY())
    }
    sleep(3000)
    click(540, 395) //点击相册第一张照片
    sleep(3000)
    click(990, 150) //点击保存按钮
    sleep(5000)
    if (btnEdit) {
        click(btnEdit[1].bounds().centerX(), btnEdit[1].bounds().centerY())
    }
    sleep(3000)
    click(905, 395) //点击相册第二张照片
    sleep(3000)
    click(990, 150) //点击保存按钮
    sleep(2000)
    swipe(540, 1700, 540, 500, 500)
}

function local(params) {
    
}

function addCity(params) {
    let 
    let btnAdd = desc('添加').find()
    let cityList = [
    'ابها ','أبوظبي','أرمناز', 'ازرع','ازويرات','ادلب','أكجوجت','الإسكندرية','الإسماعيلية','الأبيض','الأتارب','الأزرق','الأغواط','الأقصر',
    'الباب','الباحة','البتراء','البديع','البريمي', 'البصرة','البغدادي','البليدة','البيرة','البيضاء','التاجي','التل','الثورة',
    'الجبيل','الجديدة','الجزائر','الجش','الجفر','الجلفة','الجنينة','الجوف','الجوف','الجيزة','الحديدة','الحريق','الحسكة','الحسيمة','الحلة']
    let cityText = cityList[Math.floor(Math.random*(cityList.length))] 
}
addCity()