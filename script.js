let captchaCheck = false;
function beforesubmit(event) {
    if(captchaCheck) {
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log("Input Date Value: ",inputdate.value); // convert STRING to DATE (Locale is en_IN)

    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formattedDate;

    } else {
        alert("Please check the RE-CAPTCHA ");
        event.preventDefault();
    }
    
}
function timestamp() { 
    var response = document.getElementById("g-recaptcha-response");
     if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(
            document.getElementsByName("captcha_settings")[0].value
        );
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
     }
     }
      setInterval(timestamp, 500); 

function captchasuccess() {
    captchaCheck = true;
}
