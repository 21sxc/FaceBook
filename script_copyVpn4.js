var UtilsPath = files.path('/sdcard/xxsq/gz/utils.js')
var Common = require(UtilsPath)

function vpnText(params) {
    let potText = [
        'ssr://aGsyNC5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFlbW1tZWE0cnpJMExlV0ZxT2U5a2VTOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2',
        'ssr://aGsyNS5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFlbW1tZWE0cnpJMUxlV0ZxT2U5a2VTOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2',
        'ssr://dXMwMS5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVF1ZS1qdVdidlRBeExlV0ZxT2U5a2VTOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2',
        'ssr://dXMwMi5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVF1ZS1qdVdidlRBeUxlV0ZxT2U5a2VTOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2',
        'ssr://dXMwMy5vbGR2cG4uY29tOjMxNTAwOmF1dGhfYWVzMTI4X21kNTpjaGFjaGEyMC1pZXRmOmh0dHBfc2ltcGxlOlZuTjZTVlJaLz9vYmZzcGFyYW09TnpSa09UVTBOVFl4TG0xcFkzSnZjMjltZEM1amIyMCZwcm90b3BhcmFtPU5EVTJNVHBCZFROaE1EYyZyZW1hcmtzPVF1ZS1qdVdidlRBekxlV0ZxT2U5a2VTOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2',
        'ssr://dXMwNC5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVF1ZS1qdVdidlRBMExlV0ZxT2U5a2VTOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2',
        'ssr://dXMwNS5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVF1ZS1qdVdidlRBMUxlV0ZxT2U5a2VTOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2',
        'ssr://dXMwNi5vbGR2cG4uY29tOjE0MjcxOm9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpRWFV6WVRBMy8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVF1ZS1qdVdidlRBMkxlV0ZxT2U5a2VTOG1PV01sZyZncm91cD01YkNQNmJpaDVZYWM1Wnk2'
        ]
    let index = Math.floor((Math.random()*potText.length))
    let clipText = potText[index]
    setClip(clipText)
}

vpnText()
exit()