document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    let fname = document.getElementById("fname").value
    let lname = document.getElementById("lname").value
    let Email = document.getElementById("Email").value
    let Password = document.getElementById("Password").value
    let ConfirmPassword = document.getElementById("ConfirmPassword").value

    let data = {
        fname: fname,
        lname: lname,
        Email: Email,
        Password: Password,
        ConfirmPassword:ConfirmPassword
    }

    console.log(data);
    localStorage.setItem("project", JSON.stringify(data))



})