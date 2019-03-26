window.onload = function () {
    $("#contactPreferences").change(function () {
        if ($(this).val() == "email") {
            $('#email-div').show();
            $('#email').attr('required', '');
            $('#email').attr('data-msg', 'Please enter your email.');
            $('#email').attr('data-error-class', 'form-error');
            $('#email').attr('data-success-class', 'form-success');
            $('#phone-div').hide();
            $('#facebook-div').hide();
        }
        else if ($(this).val() == "phone") {
            $('#email-div').hide();
            $('#phone-div').show();
            $('#phone').attr('required', '');
            $('#phone').attr('data-msg', 'Please enter your phone number.');
            $('#phone').attr('data-error-class', 'form-error');
            $('#phone').attr('data-success-class', 'form-success');
            $('#facebook-div').hide();
        }
        else if ($(this).val() == "facebook") {
            $('#email-div').hide();
            $('#phone-div').hide();
            $('#facebook-div').show();
            $('#facebook').attr('required', '');
            $('#facebook').attr('data-msg', 'Please enter a link.');
            $('#facebook').attr('data-error-class', 'form-error');
            $('#facebook').attr('data-success-class', 'form-success');
        }
        else {
            $('#email-div').hide();
            $('#phone-div').hide();
            $('#facebook-div').hide();
        }
    });
    $("#contactPreferences").trigger("change");
}

