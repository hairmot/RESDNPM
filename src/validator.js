export default {
validateRow: function validateRow(row) {

        //collect inputs
        var taskTitle = $(row).find('.taskTitle').first();
        var dueDate = $(row).find('.dueDate').first();
        var dissertation = $(row).find('.dissertation option:selected').first();
        var taskType = $(row).find('.taskType option:selected').first();

        //validate input types
        this.validateInputs([taskTitle, dueDate]);
        this.validateSelects([dissertation, taskType]);

        //return whether row is valid
        return $(row).find('.sv-mandatory').length === 0 ? true : false;
    },

    validateSelects: function validateSelects(selects) {
        selects.map(a => a.val() == "Please select" ? a.parent().addClass('sv-mandatory') : a.parent().removeClass('sv-mandatory'));
    },

    validateInputs: function validateInputs(inputs) {
        inputs.map(a => a.val() == "" ? a.addClass('sv-mandatory') : a.removeClass('sv-mandatory'));
    }
}