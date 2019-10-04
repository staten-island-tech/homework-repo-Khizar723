const heading = document.querySelector('.jump');

//console.log(spans)



function spranWrap(word) {
    return [...word].map(letter => `<span>${letter}</span>`).join('');
}

heading.innerHTML = spranWrap(heading.textContent);