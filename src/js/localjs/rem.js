(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth
            if (!clientWidth) return
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px'
        }

    if (!doc.addEventListener) return
    win.addEventListener(resizeEvt, recalc, true)
    // doc.addEventListener('DOMContentLoaded', recalc, true);
    recalc()
})(document, window)