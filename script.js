function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");

  // 参考画像のように、4:00 / 14:00 の形式で表示
  document.getElementById("clock").textContent = `${hours}:${minutes}`;
}

updateClock();

// 分が変わったときに更新
setInterval(updateClock, 1000);
