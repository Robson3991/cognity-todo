// parametr task może przyjąć wartość add lub remove

function saveNotes(note, date) {
    const storageName = "notesList";

    const noteData = {
        content: note,
        date: date
    }

    if (localStorage.getItem(storageName) === null) {
        localStorage.setItem(storageName, JSON.stringify([noteData]));
    } else {
        const taskList = JSON.parse(localStorage.getItem(storageName));
        
        taskList.push(noteData);

        console.log(taskList);
        console.log(noteData);

        localStorage.setItem(storageName, JSON.stringify(taskList))
    }

}

export default saveNotes;