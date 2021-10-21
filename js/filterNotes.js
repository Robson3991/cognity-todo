// element.style.setProperty("display", ""); - usunięcie stylu display none do elementu
// element.style.setProperty("display", "none"); - dodanie style display none do elementu

function filterNotes() {
    const searchInput = document.querySelector('#todoSearch');
    
    searchInput.addEventListener('input', function(e) {
        const notes = document.querySelectorAll('.element-text');
        const value = e.target.value;
        
        notes.forEach(function(note) {
            const reg = new RegExp(value);

            if(reg.test(note.innerText)) {
                note.parentElement.style.setProperty("display", "block")
            } else {
                note.parentElement.style.setProperty("display", "none")
            }
        })
    });
}

export default filterNotes;