var UtilsPath = files.path('/sdcard/xxsq/gz/utils.js')
var Common = require(UtilsPath)

function vpnText(params) {
    let potText = [
        'ssr://aGswOC5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFlbW1tZWE0cnpBNExlV0ZxT2U5a2VTOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2',
        'ssr://aGswOS5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFlbW1tZWE0cnpBNUxlV0ZxT2U5a2VTOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2',
        'ssr://aGsxMC5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFlbW1tZWE0cnpFd0xlV0ZxT2U5a2VTOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2',
        'ssr://aGsxMS5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFlbW1tZWE0cnpFeExlV0ZxT2U5a2VTOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2',
        'ssr://aGsxMi5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFlbW1tZWE0cnpFeUxlV0ZxT2U5a2VTOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2',
        'ssr://aGsxMy5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFlbW1tZWE0cnpFekxlV0ZxT2U5a2VTOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2',
        'ssr://aGsxNC5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFlbW1tZWE0cnpFMExlV0ZxT2U5a2VTOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2',
        'ssr://aGsxNS5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFlbW1tZWE0cnpFMUxlV0ZxT2U5a2VTOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2'
        ]
    let index = Math.floor((Math.random()*potText.length))
    let clipText = potText[index]
    setClip(clipText)
}

vpnText()
exit()