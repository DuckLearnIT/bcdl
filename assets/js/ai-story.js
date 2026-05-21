(function(){
  var content    = document.getElementById('zoom-content');
  var header     = document.getElementById('siteHeader');
  var charLayer  = document.getElementById('char-overlay');
  var blackOver  = document.getElementById('black-overlay');
  var bar        = document.getElementById('progress-bar');
  var triggered  = false;
  var finished   = false;
  var THRESHOLD  = 300;
  var MAX_WORDS  = 400; // Giới hạn tối đa số từ để tránh crash trên mobile

  window.addEventListener('scroll', function(){
    if(triggered || finished) return;
    var y = window.scrollY;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    if(h > 0) bar.style.width = Math.min(y/h*100,100)+'%';
    if(y >= THRESHOLD){ triggered = true; extractAndAnimate(); }
  }, {passive:true});

  // ── Trích xuất TỪNG TỪ (thay vì từng ký tự) để tối ưu DOM ──
  function extractVisibleWords(){
    var words = [];
    var vh = window.innerHeight;
    var walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT, null);
    var node;

    while(node = walker.nextNode()){
      if(words.length >= MAX_WORDS) break; // Giới hạn số từ

      var parent = node.parentElement;
      if(!parent) continue;
      var cs = getComputedStyle(parent);
      if(cs.display==='none'||cs.visibility==='hidden'||cs.opacity==='0') continue;

      var text = node.textContent;
      var re = /\S+/g;
      var match;
      while(match = re.exec(text)){
        if(words.length >= MAX_WORDS) break;

        var start = match.index;
        var end   = start + match[0].length;
        var range, rect;

        try {
          range = document.createRange();
          range.setStart(node, start);
          range.setEnd(node, end);
          rect = range.getBoundingClientRect();
        } catch(e) {
          continue;
        }

        if(rect.width < 1 || rect.height < 1) continue;
        if(rect.bottom < -20 || rect.top > vh + 20) continue;

        words.push({
          text: match[0],
          x: rect.left,
          y: rect.top,
          cx: rect.left + rect.width/2,
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
    try {
      document.body.style.overflow = 'hidden';

      var words = extractVisibleWords();
      var vh = window.innerHeight;
      var vw = window.innerWidth;
      var centerX = vw / 2;
      var centerY = vh / 2;

      if(!charLayer) {
        finished = true;
        return;
      }

      // Cleanup spans cũ nếu có
      while(charLayer.firstChild){
        charLayer.removeChild(charLayer.firstChild);
      }

      charLayer.style.display = 'block';
      var frag = document.createDocumentFragment();

      var SPREAD = 5;
      var FONT_MULT = 25;

      words.forEach(function(w){
        var span = document.createElement('span');
        span.textContent = w.text;

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
          'transform:translate(0,0);' +
          'transition:font-size 1.5s cubic-bezier(.25,.1,.25,1),' +
                     'transform 1.5s cubic-bezier(.25,.1,.25,1),' +
                     'letter-spacing 1.5s cubic-bezier(.25,.1,.25,1),' +
                     'line-height 1.5s cubic-bezier(.25,.1,.25,1),' +
                     'font-weight .3s ease,' +
                     'opacity .8s ease;';

        span.dataset.dx = dx;
        span.dataset.dy = dy;
        span.dataset.origSize = w.fontSize;

        frag.appendChild(span);
      });

      charLayer.appendChild(frag);

      content.style.visibility = 'hidden';
      header.style.visibility = 'hidden';

      var spans = charLayer.children;

      requestAnimationFrame(function(){
        requestAnimationFrame(function(){

          for(var i = 0; i < spans.length; i++){
            var s = spans[i];
            var origSize = parseFloat(s.dataset.origSize);
            s.style.fontSize = (origSize * FONT_MULT) + 'px';
            s.style.fontWeight = '900';
            s.style.letterSpacing = '-0.3em';
            s.style.lineHeight = '0.5';
            s.style.transform = 'translate(' + s.dataset.dx + 'px,' + s.dataset.dy + 'px)';
          }

          setTimeout(function(){
            for(var i = 0; i < spans.length; i++){
              var s = spans[i];
              s.style.transition = 'transform 1s cubic-bezier(.25,.1,.25,1)';
              var dx2 = parseFloat(s.dataset.dx) * 0.4;
              var dy2 = parseFloat(s.dataset.dy) * 0.1;
              s.style.transform = 'translate(' + dx2 + 'px,' + dy2 + 'px)';
            }

            setTimeout(function(){
              blackOver.style.opacity = '1';
              blackOver.style.pointerEvents = 'all';
              setTimeout(function(){
                finished = true;
                window.location.href = 'chapter-2.html';
              }, 800);
            }, 1000 + 2000);
          }, 1500);
        });
      });
    } catch(err) {
      console.error('Animation error:', err);
      finished = true;
      // Fallback: redirect ngay nếu animation lỗi
      window.location.href = 'chapter-2.html';
    }
  }
})();
