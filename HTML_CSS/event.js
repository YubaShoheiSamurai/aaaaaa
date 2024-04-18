const change = document.getElementById('btn');
const text = document.getElementById('text');

change.addEventListener('click', ()=>{
    setTimeout(() => {
        text.innerHTML = 'ボタンがクリックされました';
    }, 2000);
});

