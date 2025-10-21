
// script.js
const images = [
    // 'assets/img/background/background_1.jpg',
    // 'assets/img/background/37.jpg',
    // 'assets/img/background/18.jpg',
    'assets/img/background/background-4.webp',
    // 'assets/img/background/30.jpg',

];
let currentIndex = 0;
const changeInterval = 10000; // 切换间隔，毫秒
function changeBackground() {
    const background = document.getElementById('background');
    currentIndex = (currentIndex + 1) % images.length;
    console.log(currentIndex);
    background.style.backgroundImage = `url('${images[currentIndex]}')`;
}

// 初始化时设置初始背景图片
document.addEventListener("DOMContentLoaded", () => {
    const background = document.getElementById('background');
    background.style.backgroundImage = `url('${images[currentIndex]}')`;
});

setInterval(changeBackground, changeInterval); // 每隔几秒切换背景


//
//
// const textElement = document.querySelector('.title-text');
// const messages = ['TrustGen',];
//
// // 延时函数
// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
//
// // 打印逐字动画
// async function typeText(message) {
//     for (let i = 0; i <= message.length; i++) {
//         textElement.innerHTML = message.slice(0, i);
//         await delay(150); // 打字速度控制
//     }
// }
//
// // 删除逐字动画
// async function deleteText(message) {
//     for (let i = message.length; i >= 0; i--) {
//         textElement.innerHTML = message.slice(0, i);
//         await delay(100); // 删除速度控制
//     }
// }
//
// // 循环打印和删除
// async function startTypingAnimation() {
//     for (const message of messages) {
//         await typeText(message);
//     }
//     while (true) {
//
//     }
// }

document.addEventListener("DOMContentLoaded", function () {
    const logoImg = document.getElementById("logo-img"); // 参考的目标元素
    const shrinkElement = document.querySelector(".shrink-element"); // 要缩小的元素

    // 获取 logoImg 的位置和尺寸
    const logoRect = logoImg.getBoundingClientRect();

    // 计算 logo 中心的百分比位置
    const originX = (logoRect.left + logoRect.width / 2) / window.innerWidth * 100;
    const originY = (logoRect.top + logoRect.height / 2) / window.innerHeight * 100;

    // 将 transform-origin 动态设置为 logo 中心的位置
    shrinkElement.style.transformOrigin = `${originX}% ${originY}%`;
    console.log(shrinkElement.style.transformOrigin);
    // 添加 .shrink 类，开始动画
    shrinkElement.classList.add("shrink");
});



function triggerShrinkAnimation(element) {
    const logoImg = document.getElementById("logo-img");

    // 获取 logoImg 的中心位置
    const logoRect = logoImg.getBoundingClientRect();
    const originX = (logoRect.left + logoRect.width / 2) / window.innerWidth * 100;
    const originY = (logoRect.top + logoRect.height / 2) / window.innerHeight * 100;

    // 设置 transform-origin 参考 logo 中心位置
    element.style.transformOrigin = `${originX}% ${originY}%`;

    // 应用缩小、移动和透明度动画
    element.style.transition = "transform 1.0s ease-in-out, opacity 0.9s ease-in-out";
    element.style.transform = "scale(0.05) translate(-10%, -10%)"; // 缩小并向左上角移动
    element.style.opacity = "0"; // 渐隐
}




document.addEventListener("DOMContentLoaded", function () {
    // 注释掉视频相关代码
    // const video = document.getElementById("background-video");
    const backgroundContainer = document.querySelector(".img-background-container");
    const textContainer = document.getElementById("title-container");
    const logoContainer = document.getElementById("logo-img");

    // 直接显示背景容器和内容，不需要等待视频结束
    backgroundContainer.style.display = "block";
    backgroundContainer.style.opacity = 1;
    
    // 直接显示logo和文字容器
    logoContainer.style.opacity = 1;
    textContainer.style.opacity = 1;
    textContainer.style.transform = "translateY(0)";
    
    // 如果需要，可以启动打字动画
    // startTypingAnimation();
});

