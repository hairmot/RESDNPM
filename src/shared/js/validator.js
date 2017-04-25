export default {
    validateSelects: function validateSelects(selects) {
        selects.map(a => a.text() == "Please select" ? a.parent().addClass('sv-mandatory') : a.parent().removeClass('sv-mandatory'));      
    },

    validateInputs: function validateInputs(inputs) {
        inputs.map(a => a.val() == "" ? a.addClass('sv-mandatory') : a.removeClass('sv-mandatory'));
    }
}