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
  
  function findAllFromId (domId, oneDomId) {
    let eachDom = findFromId(oneDomId, 3000)
    if (eachDom) {
      let doms = id(domId).find()
      // console.log('是否找到 ' + domId + ': ' + id(domId).exists())
      if (id(domId).exists()) {
        return doms
      } else {
        return false
      }
    } else {
      return false
    }
  }
  
  function findFromClassName (cn, t) {
    let dom = className(cn).findOne(t)
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
  }

  function changeImg() {
      clickDomDesc('添加封面照片')
      sleep(3000)
      clickDomDesc('上传照片')
      sleep(3000)
      click(540, 395) //点击相册第一张照片
      sleep(3000)
      click(990, 150) //点击保存按钮
      sleep(2000)
  }

  function changeAvatar(params) {
      clickDommDesc('头像')
      sleep(3000)
      clickDomDesc('选择头像')
      sleep(3000)
      click(905, 395) //点击相册第二张照片
      sleep(3000)
      click(990, 150) //点击保存按钮
      sleep(2000)
  }

  