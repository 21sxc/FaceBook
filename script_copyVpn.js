var UtilsPath = files.path('/sdcard/xxsq/gz/utils.js')
var Common = require(UtilsPath)

function vpnText(params) {
    let potText = [
        'ssr://bWMwMS5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFlYS1zLW1YcURBeExlYTFpLWl2bGVlNnYtaTNyeTNtdFlIcGg0X2xnSTNuam9jd0xqSHBtb19rdnJfbmxLZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2',
        'ssr://aGswMS5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFlbW1tZWE0cnpBeExlZW51LVdLcU9TOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2',
        'ssr://aGswMi5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFlbW1tZWE0cnpBeUxlZW51LVdLcU9TOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2',
        'ssr://aGswMy5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFlbW1tZWE0cnpBekxlZW51LVdLcU9TOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2',
        'ssr://aGswNC5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFlbW1tZWE0cnpBMExlZW51LVdLcU9TOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2',
        'ssr://aGswNS5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFlbW1tZWE0cnpBMUxlZW51LVdLcU9TOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2',
        'ssr://aGswNi5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFlbW1tZWE0cnpBMkxlV0ZxT2U5a2VTOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2',
        'ssr://aGswNy5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFlbW1tZWE0cnpBM0xlV0ZxT2U5a2VTOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2'
        ]
    let index = Math.floor((Math.random()*potText.length))
    let clipText = potText[index]
    setClip(clipText)
}

vpnText()
exit()