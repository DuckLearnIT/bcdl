(function(){
  var content    = document.getElementById('zoom-content');
  var header     = document.getElementById('siteHeader');
  var charLayer  = document.getElementById('char-overlay');
  var blackOver  = document.getElementById('black-overlay');
  var bar        = document.getElementById('progress-bar');
  var triggered  = false;
  var THRESHOLD  = 300;

  window.addEventListener('scroll', function(){
    if(triggered) return;
    var y = window.scrollY;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    if(h > 0) bar.style.width = Math.min(y/h*100,100)+'%';
    if(y >= THRESHOLD){ triggered = true; extractAndAnimate(); }
  }, {passive:true});

  // ── Trích xuất TỪNG TỪ (thay vì từng ký tự) để tối ưu DOM ──
  function extractVisibleWords(){
    var words = [];
    var vh = window.innerHeight;
    var vw = window.innerWidth;
    var walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT, null);
    var node;

    while(node = walker.nextNode()){
      var parent = node.parentElement;
      if(!parent) continue;
      var cs = getComputedStyle(parent);
      if(cs.display==='none'||cs.visibility==='hidden'||cs.opacity==='0') continue;

      var text = node.textContent;
      // Regex: tìm từng "word" (bao gồm cả dấu câu dính liền)
      var re = /\S+/g;
      var match;
      while(match = re.exec(text)){
        var start = match.index;
        var end   = start + match[0].length;

        var range = document.createRange();
        range.setStart(node, start);
        range.setEnd(node, end);
        var rect = range.getBoundingClientRect();

        if(rect.width < 1 || rect.height < 1) continue;
        if(rect.bottom < -20 || rect.top > vh + 20) continue;

        words.push({
          text: match[0],
          x: rect.left,
          y: rect.top,
          w: rect.width,
          h: rect.height,
          cx: rect.left + rect.width/2,   // tâm ký tự
          cy: rect.top + rect.height/2,
          fontSize: parseFloat(cs.fontSize),
          fontFamily: cs.fontFamily,
          fontWeight: cs.fontWeight,
          fontStyle: cs.fontStyle,
          color: cs.color
        });
      }
    }
    return words;
  }

  function extractAndAnimate(){
    document.body.style.overflow = 'hidden';

    var words = extractVisibleWords();
    var vh = window.innerHeight;
    var vw = window.innerWidth;
    var centerX = vw / 2;
    var centerY = vh / 2;

    charLayer.style.display = 'block';
    var frag = document.createDocumentFragment();

    // Tính hướng lan tỏa cho mỗi từ (vector từ tâm màn hình ra ngoài)
    var SPREAD = 5;      // hệ số lan tỏa ra ngoài
    var FONT_MULT = 25;   // font phóng to gấp bao nhiêu lần

    words.forEach(function(w){
      var span = document.createElement('span');
      span.textContent = w.text;

      // Tính offset lan tỏa: đẩy từ ra xa từ tâm viewport
      var dx = (w.cx - centerX) * SPREAD;
      var dy = (w.cy - centerY) * SPREAD;

      span.style.cssText =
        'position:fixed;' +
        'left:' + w.x + 'px;' +
        'top:' + w.y + 'px;' +
        'font-size:' + w.fontSize + 'px;' +
        'font-family:' + w.fontFamily + ';' +
        'font-weight:' + w.fontWeight + ';' +
        'font-style:' + w.fontStyle + ';' +
        'color:' + w.color + ';' +
        'line-height:1;' +
        'white-space:pre;' +
        'pointer-events:none;' +
        'letter-spacing:0;' +
        'line-height:1;' +
        'transform:translate(0,0);' +
        'transition:font-size 1.5s cubic-bezier(.25,.1,.25,1),' +
                   'transform 1.5s cubic-bezier(.25,.1,.25,1),' +
                   'letter-spacing 1.5s cubic-bezier(.25,.1,.25,1),' +
                   'line-height 1.5s cubic-bezier(.25,.1,.25,1),' +
                   'font-weight .3s ease,' +
                   'opacity .8s ease;';

      // Lưu offset target vào dataset
      span.dataset.dx = dx;
      span.dataset.dy = dy;
      span.dataset.origSize = w.fontSize;

      frag.appendChild(span);
    });

    charLayer.appendChild(frag);

    // Ẩn gốc + header
    content.style.visibility = 'hidden';
    header.style.visibility = 'hidden';

    var spans = charLayer.children;

    // Trigger animation sau 2 frame (để browser paint trước)
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){

        // ── PHASE 1: phóng to + tỏa ra ngoài (1.5s) ──
        for(var i = 0; i < spans.length; i++){
          var s = spans[i];
          var origSize = parseFloat(s.dataset.origSize);
          s.style.fontSize = (origSize * FONT_MULT) + 'px';
          s.style.fontWeight = '900';
          s.style.letterSpacing = '-0.3em';
          s.style.lineHeight = '0.5';
          s.style.transform = 'translate(' + s.dataset.dx + 'px,' + s.dataset.dy + 'px)';
        }

        // ── PHASE 2: sau 1.5s, dồn chữ từ ngoài VÀO màn hình (hình chữ nhật ngang) ──
        setTimeout(function(){
          for(var i = 0; i < spans.length; i++){
            var s = spans[i];
            s.style.transition = 'transform 1s cubic-bezier(.25,.1,.25,1)';
            // Giữ 40% spread ngang + chỉ 10% spread dọc → hình chữ nhật ngang
            var dx2 = parseFloat(s.dataset.dx) * 0.4;
            var dy2 = parseFloat(s.dataset.dy) * 0.1;
            s.style.transform = 'translate(' + dx2 + 'px,' + dy2 + 'px)';
          }

          // Đợi phase 2 xong (1s) + 2s ngắm → fade đen → redirect
          setTimeout(function(){
            blackOver.style.opacity = '1';
            blackOver.style.pointerEvents = 'all';
            setTimeout(function(){
              window.location.href = 'chapter-2.html';
            }, 800);
          }, 1000 + 2000);
        }, 1500);
      });
    });
  }
})();
