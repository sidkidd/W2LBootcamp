function beforesubmit() {
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log("Input Date Value: ",inputdate.value); // convert STRING to DATE (Locale is en_IN)

    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formattedDate;
}