---
description: Hướng dẫn tiêu chuẩn xây dựng câu chuyện scrollytelling tương tác hiệu năng cao (Vanilla HTML/CSS/JS)
---

# 📖 Quy trình Phát triển Scrollytelling Chuyên nghiệp

Quy trình này hướng dẫn cách xây dựng một chương truyện tương tác dạng cuộn (Scrollytelling) mượt mà, đạt hiệu năng 60 FPS trên cả thiết bị di động và máy tính, tuân thủ kiến trúc Vanilla-only của dự án BCDL.

---

## 🛠️ Bước 1: Thiết kế cấu trúc DOM chuẩn tắc (Semantic DOM Layout)

Để việc cuộn không bị giật lag (jank), cấu trúc HTML bắt buộc phải chia làm hai phần chính:
1. **Container chính (`.story-container`)**: Định vị tương đối (`position: relative`), bao bọc toàn bộ cảnh.
2. **Khung nhìn tĩnh (`.sticky-visual`)**: Đóng vai trò làm nền hiển thị các hoạt họa/biểu đồ/hình ảnh. Phải được neo (`position: sticky`, `top: 0`) và chiếm trọn khung hình (`width: 100vw`, `height: 100vh`).
3. **Các phân đoạn chữ (`.step-narrative`)**: Chứa văn bản nội dung kể chuyện, đặt song song hoặc đè lên trên khung nhìn tĩnh. Sử dụng `pointer-events: none` cho các thành phần nền để người dùng có thể cuộn trơn tru qua các thẻ chữ.

```html
<section class="story-container" id="chapter-x-story">
  <!-- Khung nhìn đồ họa cố định khi cuộn -->
  <div class="sticky-visual">
    <div class="visual-layer active" id="layer-scene-1">
      <img src="assets/img/chapter-x/scene_1.jpg" alt="Phân cảnh 1" />
    </div>
    <div class="visual-layer" id="layer-scene-2">
      <img src="assets/img/chapter-x/scene_2.jpg" alt="Phân cảnh 2" />
    </div>
  </div>

  <!-- Các thẻ văn bản kích hoạt sự kiện khi cuộn qua -->
  <div class="narrative-flow">
    <div class="step-narrative" data-step="scene-1">
      <p>Nội dung dẫn dắt phân cảnh 1...</p>
    </div>
    <div class="step-narrative" data-step="scene-2">
      <p>Nội dung chuyển sang phân cảnh 2...</p>
    </div>
  </div>
</section>
```

---

## 🎨 Bước 2: Tối ưu hóa hiệu năng CSS & Tăng tốc phần cứng (GPU Acceleration)

TUYỆT ĐỐI KHÔNG làm thay đổi kích thước vật lý (width, height, top, left, margin) trong quá trình hoạt họa cuộn vì sẽ gây ra hiện tượng **Reflow/Layout** liên tục, làm sụt giảm FPS.

### Quy chuẩn CSS:
- Sử dụng thuộc tính `transform` (translate3d, scale) và `opacity` để tạo chuyển động. Đây là những thuộc tính chạy trực tiếp trên GPU (Composite layer), không kích hoạt Repaint/Reflow.
- Thêm `will-change: transform, opacity` cho các layer động để trình duyệt chuẩn bị sẵn tài nguyên GPU.
- Khai báo `backface-visibility: hidden` và `transform: translate3d(0,0,0)` để triệt tiêu tình trạng flickering (nhấp nháy hình) trên trình duyệt Safari/Chrome mobile.

```css
.sticky-visual {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
}

.visual-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: scale(1.05) translate3d(0, 0, 0);
  transition: opacity 0.8s ease, transform 1.2s cubic-bezier(0.25, 1, 0.5, 1);
  will-change: transform, opacity;
  backface-visibility: hidden;
}

.visual-layer.active {
  opacity: 1;
  transform: scale(1) translate3d(0, 0, 0);
}
```

---

## ⚡ Bước 3: Điều khiển Tương tác bằng JavaScript (IntersectionObserver API)

Tránh sử dụng sự kiện `window.addEventListener('scroll')` một cách trực tiếp mà không có cơ chế throttle/debounce, vì nó sẽ gửi hàng trăm sự kiện liên tiếp làm tắc nghẽn Main Thread.

### Giải pháp khuyến nghị: **IntersectionObserver API**
Phương pháp này cực kỳ tiết kiệm hiệu năng vì trình duyệt sẽ tự động tính toán thời điểm một khối văn bản (`.step-narrative`) bước vào khung nhìn mà không cần tính toán tọa độ thủ công.

```javascript
document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step-narrative");
  const layers = document.querySelectorAll(".visual-layer");

  const observerOptions = {
    root: null, // Sử dụng viewport làm root
    rootMargin: "-33% 0px -33% 0px", // Kích hoạt khi phần tử nằm trong khoảng giữa 1/3 màn hình
    threshold: 0.1
  };

  const stepObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetStep = entry.target.getAttribute("data-step");
        activateScene(targetStep);
      }
    });
  }, observerOptions);

  steps.forEach(step => stepObserver.observe(step));

  function activateScene(sceneId) {
    layers.forEach(layer => {
      if (layer.id === `layer-${sceneId}`) {
        layer.classList.add("active");
        // Kích hoạt âm thanh SFX đặc trưng nếu có
        playSceneSFX(sceneId);
      } else {
        layer.classList.remove("active");
      }
    });
  }
});
```

---

## 🔊 Bước 4: Tích hợp âm thanh đồng bộ tương tác (Interactive Audio Sync)

Để mang lại trải nghiệm nhập vai sâu sắc (immersive), mỗi phân cảnh scrollytelling nên có âm thanh tương tác tương ứng.

### Nguyên tắc xử lý âm thanh:
1. **Âm thanh nền (Ambient Loop)**: Nhẹ nhàng, có thuộc tính `loop: true`, được phát nhỏ khi người dùng tương tác lần đầu với trang.
2. **Hiệu ứng chuyển cảnh (SFX)**: Kích hoạt một lần (one-shot) khi một layer cụ thể được bật `active`.
3. **Muted by default**: Luôn bắt đầu ở trạng thái tắt âm (muted) và hiển thị nút **Toggle Sound** đẹp mắt ở góc màn hình để tuân thủ chính sách tự động phát (Autoplay Policy) của các trình duyệt hiện đại.

```javascript
let isMuted = true;
const bgMusic = new Audio('assets/audio/ambient_chapter_x.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.3;

function playSceneSFX(sceneId) {
  if (isMuted) return;
  
  const sfx = new Audio(`assets/audio/sfx_${sceneId}.mp3`);
  sfx.volume = 0.5;
  sfx.play().catch(err => console.log("Audio play blocked: ", err));
}
```

---

## 📱 Bước 5: Đảm bảo khả năng phản hồi (Responsive Scrollytelling)

Trên màn hình di động đứng (portrait mode), không gian hiển thị hình ảnh nền sẽ bị thu hẹp đáng kể do bàn phím ảo hoặc thanh công cụ trình duyệt thay đổi chiều cao liên tục (`100vh` bị biến đổi).

### Kỹ thuật khắc phục:
- Sử dụng đơn vị `dvh` (dynamic viewport height) hoặc `svh` (small viewport height) trong CSS thay cho `vh` để tránh layout bị nhảy khi thanh URL ẩn/hiện.
- Thiết lập font size của văn bản câu chuyện vừa phải (16px - 18px), có nền tối mờ (glassmorphism/rgba) để hiển thị rõ ràng trên nền tranh minh họa.
