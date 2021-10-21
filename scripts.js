import addTask from './js/addTask';
import removeElement from './js/removeElement';
import filterNotes from './js/filterNotes';

document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('#todoForm');
    const textArea = form.querySelector('#todoMessage');

    form.addEventListener('submit', function(e){
        e.preventDefault();

        const textAreaValue = textArea.value;
        
        if (!!textAreaValue != false) {
            addTask(textAreaValue);
        }
    });

    removeElement();
    filterNotes();
});