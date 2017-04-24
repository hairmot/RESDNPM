import validator from '../shared/validator'; 

export default {
    validateRow: function validateRow(row) {

        //collect inputs
        var taskTitle = $(row).find('.taskTitle').first();
        var dueDate = $(row).find('.dueDate').first();
        var dissertation = $(row).find('.dissertation option:selected').first();
        var taskType = $(row).find('.taskType option:selected').first();

        //validate input types
        validator.validateInputs([taskTitle, dueDate]);
        validator.validateSelects([dissertation, taskType]);

        //return whether row is valid
        return $(row).find('.sv-mandatory').length === 0 ? true : false;
    }
}