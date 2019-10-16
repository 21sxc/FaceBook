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

function btnSearch(params) {
    clickDommDesc('搜索 Facebook')
    sleep(1000)
}

function btnCheckAll(params) {
    clickDomDesc('查看全部')
}

function btnBackPage(params) {
    clickDommDesc('返回')
}

function btnGood(params) {
    let clickGood = text('赞').findOne(3000)
    if (clickGood) {
        clickGood.click()
    } else {
        return
    }
    sleep(2000)
}

function searchFirstName(params) {
    let searchName = ['عباس' , 'عبود', 'ادم', 'عدنان', 'اشرف', 'عبد الله', 'عادله', 'عفيف', 'احمد', 'اكرم', 'علاء', 'علاء الدين',
'امين', 'امير', 'امجد', 'امير', 'عمار', 'عمرو', 'انس', 'عاطف', 'عوض', 'ايوب', 'ايمن', 'اوس', 'الازهر', 'عزام', 'أبو بكر الشاطري',
'بهاء', 'بحر', 'باششار', 'اسيل', 'بسام', 'باسم', 'بشر', 'برهان', 'داود', 'فادي', 'فاضل', 'قوهات', 'فيصل', 'فخر', 'فخري',
'فريد', 'فارس', 'فاروق', 'فاتن', 'فواز', 'فداء', 'فراس', 'غالب', 'غسان', 'غازي']
    let index = Math.floor(Math.random()*(searchName.length))
    let nameIndex = searchName[index]
        setText(0, nameIndex)
        console.log(nameIndex)
        sleep(2000)
        click(1026, 1885)
        sleep(5000)
        btnCheckAll()
        sleep(3000)
}

function swipeView(params) {
    sleep(1000)
    swipe(540, 1800, 540, 900, 500)
    sleep(10000)
    for (let i = 0; i < 8; i++) {
        swipe(540, 1700, 540, 230, 500)
        sleep(1000)
        btnGood()
        console.log(i)
    }
    btnBackPage()
}

function addFriends(params) {
    let btnAddList = desc('加好友请求按钮').find()
    btnAddList.length && btnAddList.forEach(item => {
        const y = item.bounds().centerY()
        if (y > 300 && y < 1790) {
            item.parent().click()
            sleep(3000)
            swipeView()
            click(item.bounds().centerX(), item.bounds().centerY())
            sleep(30000)
        }
    })
    swipe(540, 1700, 540, 300, 1000)
    swipe(540, 1700, 540, 300, 1000)
}

function twiceAdd(params) {
    for (let j = 0; j < 2; j++) {
        addFriends()        
    }
}

function main(params) {
    home()
    sleep(10000)
    btnSearch()
    searchFirstName()
    twiceAdd()
}

main()



