/*禁止检查*/
// 一、屏蔽F12 审查元素
//如果用户在工具栏调起开发者工具，那么判断浏览器的可视高度和可视宽度是否有改变，如有改变则关闭本页面
var h = window.innerHeight, w = window.innerWidth;
window.onresize = function () {
    if (h != window.innerHeight || w != window.innerWidth) {
        window.close();
        window.location = "about:blank";
    }
}

/*好吧，你的开发者工具是单独的窗口显示，不会改变原来网页的高度和宽度， 但是你只要修改页面元素我就重新加载一次数据,让你无法修改页面元素（不支持IE9以下浏览器）*/
/*
if (window.addEventListener) {
    window.addEventListener("DOMCharacterDataModified", function () {
        window.location.reload();
    }, true);
    window.addEventListener("DOMAttributeNameChanged", function () {
        window.location.reload();
    }, true);
    window.addEventListener("DOMCharacterDataModified", function () {
        window.location.reload();
    }, true);
    window.addEventListener("DOMElementNameChanged", function () {
        window.location.reload();
    }, true);
    window.addEventListener("DOMNodeInserted", function () {
        window.location.reload();
    }, true);
    window.addEventListener("DOMNodeInsertedIntoDocument", function () {
        window.location.reload();
    }, true);
    window.addEventListener("DOMNodeRemoved", function () {
        window.location.reload();
    }, true);
    window.addEventListener("DOMNodeRemovedFromDocument", function () {
        window.location.reload();
    }, true);
    window.addEventListener("DOMSubtreeModified", function () {
        window.location.reload();
    }, true);
}
*/

/*屏蔽快捷键*/
document.onkeydown = function () {
    /*屏蔽功能键*/
    if (window.event && event.shiftKey) {
        // alert("禁止按Shift键!"); //可以换成ALT　CTRL
        event.keyCode = 0;
        event.returnValue = false;
    }
    if (window.event && event.ctrlKey) {
        // alert("禁止按alt键!"); //可以换成ALT　CTRL
        event.keyCode = 0;
        event.returnValue = false;
    }
    if (window.event && event.altKey) {
        // alert("禁止按ctrl键!"); //可以换成ALT　CTRL
        event.keyCode = 0;
        event.returnValue = false;
    }
    if (window.event && window.event.keyCode == 123) {
        alert("F12被禁用");
        event.keyCode = 0;
        event.returnValue = false;
    }
    if (window.event && window.event.keyCode == 13) {
        window.event.keyCode = 505;
    }
    if (window.event && window.event.keyCode == 8) {
        alert(str + "\n请使用Del键进行字符的删除操作！");
        window.event.returnValue = false;
    }
    /*屏蔽 ctrl U*/
    if (window.event && window.event.keyCode == 85 && window.event.ctrlKey) {
        alert("u被禁用");
        event.keyCode = 0;
        event.returnValue = false;
    }
    /*屏蔽ctrl shift  + C */
    if (window.event && window.event.shiftKey && window.event.ctrlKey && window.event.keyCode == 67) {
        alert("ctrl shift  + C被禁用");
        event.keyCode = 0;
        event.returnValue = false;
    }
    /*屏蔽ctrl shift  + I */
    if (window.event && window.event.shiftKey && window.event.ctrlKey && window.event.keyCode == 73) {
        alert("ctrl shift  + I被禁用");
        event.keyCode = 0;
        event.returnValue = false;
    }   /*屏蔽ctrl S */
    if (window.event && window.event.ctrlKey && window.event.keyCode == 83) {
        alert("ctrl s 被禁用");
        event.keyCode = 0;
        event.returnValue = false;
    }
}

// 二、屏蔽右键菜单
document.oncontextmenu = function (event) {
    if (window.event) {
        event = window.event;
    }
    try {
        var the = event.srcElement;
        if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
            return false;
        }
        return true;
    } catch (e) {
        return false;
    }
}

// 三、屏蔽粘贴
document.onpaste = function (event) {
    if (window.event) {
        event = window.event;
    }
    try {
        var the = event.srcElement;
        if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
            return false;
        }
        return true;
    } catch (e) {
        return false;
    }
}

// 四、屏蔽复制
document.oncopy = function (event) {
    if (window.event) {
        event = window.event;
    }
    try {
        var the = event.srcElement;
        if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
            return false;
        }
        return true;
    } catch (e) {
        return false;
    }
}

// 五、屏蔽剪切
document.oncut = function (event) {
    if (window.event) {
        event = window.event;
    }
    try {
        var the = event.srcElement;
        if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
            return false;
        }
        return true;
    } catch (e) {
        return false;
    }
}


// 六、屏蔽选中
/*document.onselectstart = function (event) {
    if (window.event) {
        event = window.event;
    }
    try {
        var the = event.srcElement;
        if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
            return false;
        }
        return true;
    } catch (e) {
        return false;
    }
}*/
