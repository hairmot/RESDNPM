import validator from '../shared/validator'; 

export default {
    validate: function validate() {
        var circumstancesCategory = $('body').find('.circumstancesCategory select option:selected').first();
        validator.validateSelects([circumstancesCategory]);

        var summaryText = $('textarea[data-remchar]').first();
        validator.validateInputs([summaryText]);
    }
}