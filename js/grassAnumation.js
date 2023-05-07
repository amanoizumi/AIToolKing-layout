const initAnime = () => {
  // 建立動畫序列

  const tl = gsap.timeline({ repeat: -1 });

  tl.staggerFromTo(
    ['#box3', '#box2', '#box1'],
    1,
    { y: '100%' },
    { y: '0%', ease: 'power2.inOut' },
    0.2, // delay 屬性設為 0.2 秒，讓動畫有重疊效果
    '+=1' // 接續執行下一個動畫序列
  );

  // 從 #box3 #box2 #box1 往上移出 wrap
  tl.staggerFromTo(
    ['#box3', '#box2', '#box1'],
    1,
    { y: '0%' },
    { y: '-100%', ease: 'power2.inOut' },
    0.2,
    '+=1' // 接續執行下一個動畫序列
  );

  // 啟動動畫序列
  tl.play();
};

initAnime();
