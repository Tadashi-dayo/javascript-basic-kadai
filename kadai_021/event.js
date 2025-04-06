const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  setTimeout(() => {
    // console.log(text)
    text.textContent = "ボタンをクリックしました"
  }, 2000);
});