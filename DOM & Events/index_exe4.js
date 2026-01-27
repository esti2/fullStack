function validation() {

    const name = document.getElementById("name").value;
    if (!(name.length > 2))
        alert("name is missing");
    const salary = document.getElementById("salary").value;;
    if (!(salary > 10000 && salary < 16000))
        alert("Salary must be greater than 10,000 but less than 16,000");
    const birthday = document.getElementById("birthday").value;
    if (!birthday)
        alert("Birthday may not be null");
    const Phone = document.getElementById("phone").value;
    if (!(Phone.length > 10))
        alert("Phone must be 10 digits long");
}