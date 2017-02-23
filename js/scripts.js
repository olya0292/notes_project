$(document).ready(function () {
    icons.forEach(function (icon) {
        $('#icons-container').append('<button type="button" class="btn btn-default modal-icon-btn"><span class="glyphicon ' + icon + '"></span></button>')
    })
});
