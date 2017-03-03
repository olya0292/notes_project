var iconBtn = $('#icon-btn');
var title = $('#title');
var description = $('#description');
var time = $('#time');
var notes = [];
var id = 1;

$(document).ready(function () {
    /*Display all available icons*/
    icons.forEach(function (icon) {
        $('#icons-container').append('<button type="button" class="btn btn-default modal-icon-btn" value="' + icon + '"><span class="glyphicon ' + icon + '"></span></button>')
    });

    /*Handle form submit*/
    $('#note-form').on('submit', function (e) {

        //Stop submit event
        e.preventDefault();

        //Check if notes already exists
        if(localStorage.notes){
            notes = JSON.parse(localStorage.notes);
        }

        //Check if counter set
        if(localStorage.counter){
            id = Number(localStorage.counter) + 1;
        }
        localStorage.counter = Number(id);

        //Organize and save data
        notes.push({
            'id': id,
            'title': title.val(),
            'description': description.val(),
            'time': time.val(),
            'icon': iconBtn.val(),
            'createdAt': new Date()
        });
        localStorage.setItem("notes", JSON.stringify(notes));

        // Clear form
        title.val('');
        description.val('');
        time.val('');
        changeIconButton('glyphicon-asterisk');
    });

    /*Choose icon on modal window*/
    $('#icons-container').on('click', '.modal-icon-btn', function (e) {
        changeIconButton(e.currentTarget.value);
        $('#modal-icons').modal('hide');
    })
});

/* Function changeIconButton change icon for the modal window button*/
function changeIconButton(value) {
    iconBtn.find('span.glyphicon').remove();
    iconBtn.val(value);
    iconBtn.append('<span class="glyphicon ' + value + '"></span>');
}