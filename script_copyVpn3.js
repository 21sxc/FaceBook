var UtilsPath = files.path('/sdcard/xxsq/gz/utils.js')
var Common = require(UtilsPath)

function vpnText(params) {
    let potText = [
        'ssr://aGsxNi5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFlbW1tZWE0cnpFMkxlV0ZxT2U5a2VTOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2',
        'ssr://aGsxNy5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFlbW1tZWE0cnpFM0xlV0ZxT2U5a2VTOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2',
        'ssr://aGsxOC5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFlbW1tZWE0cnpFNExlV0ZxT2U5a2VTOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2',
        'ssr://aGsxOS5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFlbW1tZWE0cnpFNUxlV0ZxT2U5a2VTOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2',
        'ssr://aGsyMC5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFlbW1tZWE0cnpJd0xlV0ZxT2U5a2VTOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2',
        'ssr://aGsyMS5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFlbW1tZWE0cnpJeExlV0ZxT2U5a2VTOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2',
        'ssr://aGsyMi5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFlbW1tZWE0cnpJeUxlV0ZxT2U5a2VTOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2',
        'ssr://aGsyMy5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFlbW1tZWE0cnpJekxlV0ZxT2U5a2VTOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2'
        ]
    let index = Math.floor((Math.random()*potText.length))
    let clipText = potText[index]
    setClip(clipText)
}

vpnText()
exit()