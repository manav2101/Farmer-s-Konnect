   $("#get-otp-btn").on("click", function() {
        var contactNo = $("#contact-no").val().trim();

        sendOTP(contactNo);
    });

    function sendOTP(contactNo) {

        var accountSid = "YOUR_TWILIO_ACCOUNT_SID";
        var authToken = "YOUR_TWILIO_AUTH_TOKEN";
        var twilioEndpoint = "YOUR_TWILIO_API_ENDPOINT";

        $.ajax({
            url: twilioEndpoint,
            method: "POST",
            data: {
                accountSid: accountSid,
                authToken: authToken,
                contactNo: contactNo
            },
            success: function(response) {
                console.log("OTP sent successfully!");
                window.location.href = "index.html";
            },
            error: function(xhr, status, error) {
                console.error("Error sending OTP:", error);
            }
        });
    }
});
