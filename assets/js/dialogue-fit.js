(function (global) {
    "use strict";

    function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    }

    function measureFits(node, containerHeight, fontPx, lineHeight) {
        node.style.fontSize = fontPx + "px";
        node.style.lineHeight = String(lineHeight);
        return node.scrollHeight <= containerHeight + 0.5;
    }

    function createMeasureNode(target, fullText) {
        var style = global.getComputedStyle(target);
        var node = document.createElement("div");
        node.textContent = fullText;
        node.style.position = "fixed";
        node.style.left = "-99999px";
        node.style.top = "0";
        node.style.visibility = "hidden";
        node.style.pointerEvents = "none";
        node.style.zIndex = "-1";
        node.style.boxSizing = style.boxSizing;
        node.style.width = target.clientWidth + "px";
        node.style.padding = style.padding;
        node.style.margin = "0";
        node.style.border = "0";
        node.style.whiteSpace = "normal";
        node.style.overflowWrap = style.overflowWrap;
        node.style.wordBreak = style.wordBreak;
        node.style.fontFamily = style.fontFamily;
        node.style.fontWeight = style.fontWeight;
        node.style.fontStyle = style.fontStyle;
        node.style.fontVariant = style.fontVariant;
        node.style.letterSpacing = style.letterSpacing;
        node.style.wordSpacing = style.wordSpacing;
        node.style.textTransform = style.textTransform;
        node.style.textIndent = style.textIndent;
        node.style.textRendering = style.textRendering;
        document.body.appendChild(node);
        return node;
    }

    function fitDialogueText(textEl, fullText, options) {
        if (!textEl || !textEl.isConnected) {
            return null;
        }

        var cfg = Object.assign(
            {
                minFontPx: 10,
                maxFontPx: 24,
                minLineHeight: 1.18,
                maxLineHeight: 1.45
            },
            options || {}
        );

        var containerHeight = textEl.clientHeight;
        var containerWidth = textEl.clientWidth;
        var textValue = typeof fullText === "string" ? fullText : textEl.textContent || "";
        if (!containerHeight || !containerWidth || !textValue.trim()) {
            return null;
        }

        var minFont = Math.round(clamp(cfg.minFontPx, 8, 96));
        var maxFont = Math.round(clamp(cfg.maxFontPx, minFont, 96));
        var minLh = clamp(cfg.minLineHeight, 1.0, 2.4);
        var maxLh = clamp(cfg.maxLineHeight, minLh, 2.4);

        var measureNode = createMeasureNode(textEl, textValue);
        var bestFont = minFont;
        var low = minFont;
        var high = maxFont;

        while (low <= high) {
            var mid = (low + high) >> 1;
            if (measureFits(measureNode, containerHeight, mid, minLh)) {
                bestFont = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        var loLh = Math.round(minLh * 100);
        var hiLh = Math.round(maxLh * 100);
        var bestLh = loLh;

        while (loLh <= hiLh) {
            var midLh = (loLh + hiLh) >> 1;
            var lineHeight = midLh / 100;
            if (measureFits(measureNode, containerHeight, bestFont, lineHeight)) {
                bestLh = midLh;
                loLh = midLh + 1;
            } else {
                hiLh = midLh - 1;
            }
        }

        measureNode.remove();
        textEl.style.fontSize = bestFont + "px";
        textEl.style.lineHeight = String(bestLh / 100);
        return { fontPx: bestFont, lineHeight: bestLh / 100 };
    }

    function debounce(fn, wait) {
        var delay = typeof wait === "number" ? wait : 120;
        var timer = null;
        return function () {
            var args = arguments;
            if (timer) {
                global.clearTimeout(timer);
            }
            timer = global.setTimeout(function () {
                fn.apply(null, args);
            }, delay);
        };
    }

    global.fitDialogueText = fitDialogueText;
    global.debounce = global.debounce || debounce;
})(window);
