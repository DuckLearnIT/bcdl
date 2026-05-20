---
trigger: always_on
---

# 🎨 Bộ Kỹ năng Lập trình Báo chí Tương tác (Data Journalism AI Skills)

Tài liệu này đóng vai trò là "bộ kỹ năng" chuẩn tắc của lập trình viên cấp Senior tại BCDL. Mọi thành phần tương tác đặc thù (Visual Novel, Windows UI chapter 3) phải tuân thủ nghiêm ngặt các mẫu thiết kế và giải thuật mô tả dưới đây.

---

## 🎭 1. Kỹ năng Thiết kế Hệ thống Hội thoại (Visual Novel Dialogue System)

Một hệ thống hội thoại nhập vai chất lượng cao yêu cầu khả năng hiển thị văn bản động (Typing Effect), căn chỉnh hộp thoại tự động (Responsive Typography) và các nút lựa chọn quyết định (Decision Choices).

### Tiêu chuẩn Kỹ thuật:
1. **Cấu trúc kịch bản JSON độc lập**: Không viết cứng (hard-code) văn bản hội thoại vào hàm JS. Bắt buộc tách biệt kịch bản thành một mảng đối tượng JSON có cấu trúc rõ ràng.
2. **Hiệu ứng gõ chữ (Typewriter Effect)**: Gõ từng ký tự một kèm theo âm thanh tích tắc siêu nhỏ ở mỗi ký tự (`assets/audio/keypress.mp3`). Cho phép người dùng nhấp chuột để hoàn thành nhanh dòng chữ hiện tại (Skip/Complete typing).
3. **Dialogue Auto-Fit**: Tự động căn chỉnh cỡ chữ của hộp hội thoại thông qua thư viện hoặc hàm `dialogue-fit.js` để tránh việc văn bản dài tràn ra ngoài khung hoặc gây vỡ giao diện trên di động.

```javascript
// Cấu trúc Script hội thoại chuẩn
const dialogueScript = [
  {
    id: "intro_1",
    speaker: "Amy",
    text: "Chào mừng bạn đến với hành trình Báo chí Dữ liệu. Hôm nay chúng ta sẽ khám phá bí mật đằng sau những con số.",
    avatar: "assets/img/amy/normal.png",
    audio: "assets/audio/amy_intro_1.mp3",
    next: "intro_2"
  },
  {
    id: "intro_2",
    speaker: "Hệ thống",
    text: "Bạn đã sẵn sàng để dấn thân vào vụ án dữ liệu tài chính này chưa?",
    avatar: "",
    choices: [
      { text: "Tôi đã sẵn sàng!", next: "chapter_1_start" },
      { text: "Cho tôi xem hướng dẫn trước", next: "show_tutorial" }
    ]
  }
];

// Hàm Typewriter mượt mà có khả năng Skip nhanh
class DialogueEngine {
  constructor(container, text, speed = 30, onComplete) {
    this.container = container;
    this.text = text;
    this.speed = speed;
    this.onComplete = onComplete;
    this.index = 0;
    this.timer = null;
    this.isFinished = false;
  }

  start() {
    this.container.textContent = "";
    this.tick();
  }

  tick() {
    if (this.index < this.text.length) {
      this.container.textContent += this.text.charAt(this.index);
      this.index++;
      // Phát âm thanh gõ nhẹ nếu được bật
      playTypeSound();
      this.timer = setTimeout(() => this.tick(), this.speed);
    } else {
      this.finish();
    }
  }

  skip() {
    if (this.isFinished) return;
    clearTimeout(this.timer);
    this.container.textContent = this.text;
    this.finish();
  }

  finish() {
    this.isFinished = true;
    if (this.onComplete) this.onComplete();
  }
}
```

---

## 🖥️ 2. Kỹ năng Mô phỏng Giao diện Hệ điều hành (Windows UI Chapter 3)

Chapter 3 mô phỏng một màn hình desktop Windows 7. Kỹ năng này yêu cầu sự hoàn mỹ về UI, các tính năng kéo thả mượt mà của icon và hiển thị widget động.

### A. Kéo thả Icon tuyệt đối (Draggable Desktop Icons)
Để mô phỏng Windows 7 thật nhất, các icon trên desktop phải hỗ trợ kéo thả tự do bằng chuột và màn hình cảm ứng, tự động ghi nhớ vị trí cuối cùng và không bị văng ra khỏi phạm vi màn hình desktop.

```javascript
function makeElementDraggable(element) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
  element.onmousedown = dragMouseDown;
  element.ontouchstart = dragMouseDown; // Hỗ trợ mobile touch

  function dragMouseDown(e) {
    e = e || window.event;
    // Bỏ qua nếu người dùng bấm vào các nút hoặc thẻ con không phải vùng drag chính
    if (e.target.closest('.no-drag')) return;
    e.preventDefault();
    
    // Lấy tọa độ chuột/touch ban đầu
    pos3 = e.clientX || (e.touches && e.touches[0].clientX);
    pos4 = e.clientY || (e.touches && e.touches[0].clientY);
    
    document.onmouseup = closeDragElement;
    document.ontouchend = closeDragElement;
    
    document.onmousemove = elementDrag;
    document.ontouchmove = elementDrag;
    
    element.classList.add("dragging");
  }

  function elementDrag(e) {
    e = e || window.event;
    
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    
    // Tính toán khoảng dịch chuyển
    pos1 = pos3 - clientX;
    pos2 = pos4 - clientY;
    pos3 = clientX;
    pos4 = clientY;
    
    // Thiết lập vị trí mới
    let newTop = element.offsetTop - pos2;
    let newLeft = element.offsetLeft - pos1;
    
    // Ràng buộc giới hạn (Boundaries Constraint) - Không cho icon trượt khỏi màn hình
    const desktop = document.getElementById("desktop");
    const maxLeft = desktop.clientWidth - element.clientWidth;
    const maxTop = desktop.clientHeight - element.clientHeight - 40; // Trừ thanh Taskbar
    
    newLeft = Math.max(0, Math.min(newLeft, maxLeft));
    newTop = Math.max(0, Math.min(newTop, maxTop));
    
    element.style.top = newTop + "px";
    element.style.left = newLeft + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    document.ontouchend = null;
    document.ontouchmove = null;
    element.classList.remove("dragging");
  }
}
```

### B. Widget Đồng hồ và Địa điểm (Taskbar Clock Widget)
- **Đồng hồ**: Sử dụng phông chữ kích thước 19px, cập nhật thời gian liên tục từng giây (định dạng `HH:mm:ss` hoặc `HH:mm` tùy thiết kế).
- **Vị trí (Location)**: Tự động cập nhật dựa trên Geolocation API (qua `ipinfo.io`) và có fallback cục bộ.

---

## 📦 3. Kỹ năng Đóng gói & Cách ly Mã nguồn (CSS/JS Isolation)

Vì mỗi chương truyện tương tác (Chapter 1, 2, 3, 4, Visual Novel) có những phong cách thiết kế và cơ chế điều khiển hoàn toàn khác nhau (độ cuộn, hiệu ứng, âm thanh), việc viết mã bừa bãi sẽ dẫn đến tình trạng ghi đè CSS hoặc xung đột biến toàn cục trong JS.

### Nguyên tắc bắt buộc:
1. **Namespace cho CSS**: Mọi trang HTML bắt buộc phải bọc toàn bộ nội dung trong một phần tử gốc có ID duy nhất (ví dụ: `<main id="chapter-3-viewport">`). Toàn bộ CSS viết cho trang đó phải bắt đầu bằng selector ID này để cô lập tầm vực.
   *Ví dụ:* `#chapter-3-viewport .window-header { ... }` thay vì viết chung chung `.window-header { ... }`.
2. **Cách ly Javascript (IIFE / ES Modules)**: Toàn bộ code JS cho mỗi trang phải được bao bọc trong một khối Scope an toàn (Immediately Invoked Function Expression) hoặc sử dụng ES Module để tránh làm ô nhiễm môi trường biến toàn cục (`window`).

```javascript
// Đóng gói logic Chapter 3 cô lập hoàn toàn
(() => {
  const chapterState = {
    isAppOpen: false,
    activeWindow: null
  };

  function initChapter3() {
    console.log("Chapter 3 Windows simulation initialized safely.");
    // Logic chỉ chạy nội bộ
  }

  document.addEventListener("DOMContentLoaded", initChapter3);
})();
```
