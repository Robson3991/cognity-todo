// element.classList.contains("element-delete") - sprawdzenie czy element zawiera daną klasę
// element.closest(".klasa-elementu").remove() - usunięcie najbliższego elementu o danej klasie

function removeElement() {
    const taskList = document.querySelector('#todoList');

    taskList.addEventListener('click', function(e){
        const element = e.target;

        if (element.classList.contains("element-delete")) {
            element.closest(".element").remove()
        }
    })
}

export default removeElement;