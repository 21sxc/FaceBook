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

function clickItemPage(params) {
    click(990, 282)
}

function checkItemPage(params) {
    clickDomDesc('查看个人主页')
}

function editItemPage(params) {
    clickDomDesc('编辑个人主页')
}

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

function editUniversity(params) {
    let universityList = ['الجامعة الأميركية في بيروت', 'جامعة الملك فهد للبترول والمعادن', 'جامعة الملك سعود', 'جامعة الملك عبد العزيز',
    'جامعة الإمارات العربية المتحدة', 'الجامعة الأميركية بالقاهرة', 'جامعة قطر', 'الجامعة الأميركية في الشارقة', 
    'الجامعة الأردنية', 'جامعة السلطان قابوس']
    let universityText = universityList[Math.floor(Math.random()*(universityList.length))] 
    clickDomText('大学名称（必填）')
    console.log('点击')
    sleep(5000)
    setText(0, universityText)
    sleep(2000)
    click(1026, 1885)
    sleep(1000)
    click(606, 444)
    sleep(2000)
    clickDomText('保存')
    sleep(5000)
    clickDommDesc('关闭')
}

function editCity(params) {
    let cityList = ['ابها ','أبوظبي','أرمناز', 'ازرع','ازويرات','ادلب', 'الإسكندرية','الإسماعيلية','الأبيض','الأتارب','الأزرق','الأغواط','الأقصر',
    'الباب','الباحة','البتراء','البديع','البريمي', 'البصرة','البغدادي','البليدة','البيرة','البيضاء','التاجي','التل','الثورة',
    'الجبيل','الجديدة','الجزائر','الجش','الجفر','الجلفة','الجنينة','الجوف','الجوف','الجيزة','الحديدة','الحريق','الحسكة','الحسيمة','الحلة']
    let cityText = cityList[Math.floor(Math.random()*(cityList.length))] 
    click(540, 1419)
    clickDomText('添加所在地（必填）')
    console.log('点击')
    sleep(5000)
    setText(0, cityText)
    sleep(2000)
    click(1026, 1885)
    sleep(1000)
    click(606, 444)
    sleep(2000)
    clickDomText('保存')
    sleep(5000)
    clickDommDesc('关闭')
}

function main(params) {
    let btnAdd = text('添加').find()
    sleep(10000)
    clickDomDesc('编辑个人主页')
    sleep(3000)
    swipe(540, 1700, 540, 500, 500)
    sleep(1000)
    if(btnAdd) {
        click(btnAdd[1].bounds().centerX(), btnAdd[1].bounds().centerY())
    }
    editUniversity()
    sleep(5000)
    // editCity()
}
main()