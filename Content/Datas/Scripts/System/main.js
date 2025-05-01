<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='utf-8'>
  <meta name='viewport' content="width=device-width, initial-scale=1.0, user-scalable=no">
  <link rel="stylesheet" href="./Content/Styles/fonts.css">
  <style>
    body {
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: black;
    }
    #three-d, #video-container, #hud, #rendering {
      position: absolute;
      margin: 0;
      padding: 0;
    }
    #rendering {
      display: none;
      background-color: green;
    }
    .hidden {
      display: none;
    }
    #virtual-controls {
      position: absolute;
      z-index: 9999;
      font-size: 1.5rem;
      user-select: none;
      pointer-events: auto;
    }
    #virtual-controls button {
      font-size: 1.2rem;
      margin: 5px;
      padding: 10px 14px;
      border-radius: 6px;
      border: none;
      background-color: #eee;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
  </style>
</head>
<body>
  <div id='three-d'></div>
  <video id='video-container' class='hidden' height='480px'></video>
  <canvas id='hud' width='640px' height='480px'></canvas>
  <canvas id='rendering' width='4096px' height='4096px'></canvas>
  <script type="module" src="./Content/Datas/Scripts/System/main.js"></script>

  <!-- 🔽 虛擬按鈕 UI -->
  <div id="virtual-controls">
    <div style="text-align:center;">
      <button onmousedown="holdKey('w', true)" onmouseup="holdKey('w', false)" ontouchstart="holdKey('w', true)" ontouchend="holdKey('w', false')">W</button>
    </div>
    <div style="text-align:center;">
      <button onmousedown="holdKey('a', true)" onmouseup="holdKey('a', false)" ontouchstart="holdKey('a', true)" ontouchend="holdKey('a', false')">A</button>
      <button onmousedown="holdKey('s', true)" onmouseup="holdKey('s', false)" ontouchstart="holdKey('s', true)" ontouchend="holdKey('s', false')">S</button>
      <button onmousedown="holdKey('d', true)" onmouseup="holdKey('d', false)" ontouchstart="holdKey('d', true)" ontouchend="holdKey('d', false')">D</button>
    </div>
    <div style="text-align:center;">
      <button onmousedown="holdKey('ArrowLeft', true)" onmouseup="holdKey('ArrowLeft', false)" ontouchstart="holdKey('ArrowLeft', true)" ontouchend="holdKey('ArrowLeft', false')">←</button>
      <button onmousedown="holdKey('Enter', true)" onmouseup="holdKey('Enter', false)" ontouchstart="holdKey('Enter', true)" ontouchend="holdKey('Enter', false')">⏎</button>
      <button onmousedown="holdKey('ArrowRight', true)" onmouseup="holdKey('ArrowRight', false)" ontouchstart="holdKey('ArrowRight', true)" ontouchend="holdKey('ArrowRight', false')">→</button>
    </div>
    <div style="text-align:center;">
      <button onmousedown="holdKey('Escape', true)" onmouseup="holdKey('Escape', false)" ontouchstart="holdKey('Escape', true)" ontouchend="holdKey('Escape', false')">ESC</button>
    </div>
  </div>

  <!-- 🔽 JS 虛擬鍵狀態與更新邏輯 -->
  <script>
    window.virtualKeys = {
      w: false, a: false, s: false, d: false,
      ArrowLeft: false, ArrowRight: false,
      Enter: false, Escape: false
    };

    function holdKey(key, down) {
      window.virtualKeys[key] = down;
    }

    function positionControls() {
      const canvas = document.getElementById('hud');
      const controls = document.getElementById('virtual-controls');
      const rect = canvas.getBoundingClientRect();

      controls.style.left = `${rect.left + rect.width / 2}px`;
      controls.style.top = `${rect.bottom - 10}px`;
      controls.style.transform = 'translateX(-50%)';
    }

    window.addEventListener('resize', positionControls);
    window.addEventListener('load', () => {
      setTimeout(positionControls, 500);
    });
  </script>
</body>
</html>
