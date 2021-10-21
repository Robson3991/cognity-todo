import addNote from './js/addNote';
import removeNote from './js/removeNote';
import filterNotes from './js/filterNotes';

document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('#todoForm');
    const textArea = form.querySelector('#todoMessage');

    form.addEventListener('submit', function(e){
        e.preventDefault();

        const textAreaValue = textArea.value;
        
        if (!!textAreaValue != false) {
            addNote(textAreaValue);
        }
    });

    removeNote();
    filterNotes();
});