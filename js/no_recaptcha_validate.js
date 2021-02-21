function validateRecaptcha() {
    var response = grecaptcha.getResponse();
    if (response.length === 0) {
        var alert_text = document.getElementById('recaptcha_alert_text').value;
        alert(alert_text);
        return false;
    } else {
        return true;
    }
}
