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
    let searchName = ['عباس' , 'عبود', 'ادم', 'عدنان', 'اشرف', 'عبد الله', 'عفيف', 'احمد', 'اكرم', 'علاء', 'علاء الدين',
'امين', 'امير', 'امجد', 'امير', 'عمار', 'عمرو', 'انس', 'عاطف', 'عوض', 'ايوب', 'ايمن', 'اوس', 'الازهر', 'عزام', 'أبو بكر الشاطري',
'بهاء', 'باششار', 'بسام', 'باسم', 'بشر', 'برهان', 'داود', 'فادي', 'فاضل', 'قوهات', 'فيصل', 'فخر', 'فخري',
'فريد', 'فارس', 'فاروق','فواز', 'فراس', 'غالب', 'غسان', 'غازي']
    let serachName_ = ['Mohammed', 'Omar', 'Yousuf', 'Khalid', 'Fares', 'Yasseen', 'Adam', 'Abdulrahman', 'Abdullah', 'Ahmad',
'Nawaf', 'Najib', 'Abu Bakr', 'Adnan', 'jamal', 'kamal', 'Osamah', 'qusay', 'saeed', 'sadi', 'Raid', 'Mekram', 'Thabit', 'Hamzah',
'Sami', 'Sameer', 'Mustafa', 'Haitham', 'Basheer', 'bashar', 'Alla', 'Fahd', 'Sultan']
    let index = Math.floor(Math.random()*(serachName_.length))
    let nameIndex = serachName_[index]
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
}

function tripleAdd(params) {
    for (let j = 0; j < 3; j++) {
        addFriends()        
    }
}

function randomSwipe(params) {
    let num = [1, 2, 3, 4, 5, 6]
    let index = Math.floor(Math.random()*(num.length))
    let numIndex = num[index]
    for (let index = 1; index < numIndex; index++) {
        swipe(540, 1700, 540, 300, 1000)
        sleep(1500)
    }
}

function main(params) {
    home()
    sleep(1000)
    recents()
    sleep(1000)
    clickMessageUnblock()
    sleep(10000)
    btnSearch()
    searchFirstName()
    tripleAdd()
}

// main()

function clickRefuse(_params) {
    let btnRefuse = text('拒绝').findOne(3000)
    if (btnRefuse) {
        btnRefuse.click()
    } else {
        return
    }
}

threads.start(function(){
    //在新线程执行的代码
    while(true){
        clickRefuse()
    }
});
while(true){
    main()
}