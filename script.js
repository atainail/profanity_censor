let returnField = document.querySelector(".return-field");
let submitButton = document.querySelector("button");
let inputField = document.querySelector("textarea");
let warning = document.querySelector(".warning");

inputField.value = " ";

submitButton.addEventListener("click", function () { submit(); });
document.addEventListener("keydown", function (e) {
    if (e.code === 'Enter' || e.key === 13 || e.key === 'Enter' || e.code === 'NumpadEnter') {       
        e.preventDefault();
        submit();
    }
});

function submit() {
    let post = document.createElement("div");
    let text = inputField.value;
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/profanityfilter?text=' + text,
        headers: { 'X-Api-Key': '2wfKFbQt/17WSDvSK9026w==dUWlMiNrHFhvxPxL' },
        contentType: 'application/json',
        success: function (result) {
            if (inputField.value = null || inputField.value === " ") {
                inputField.value = " ";
                warning.style.display = "block";
            } else {
                inputField.value = " ";
                post.innerHTML = result.censored;
                returnField.appendChild(post);
                warning.style.display = "none";
                
                
            }
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });

}

