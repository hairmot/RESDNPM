export default {
    validatePage: function validatePage() {
        $('input[value="Submit Request"]').prop('disabled', !$('[data-accept]').prop('checked'));
    }
}