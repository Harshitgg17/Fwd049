const category = document.getElementById("doubtCategory");
const subject = document.getElementById("doubtSubject");

const academicOptions = [
    "Computer Programming",
    "Web Development",
    "English",
    "Maths",
    "EEE"
];

const nonAcademicOptions = [
    "Hostel",
    "classroom",
    "mess",
    "campus",
    "Technology",
    "Hobbies",
    "Personal / Everyday Life"
];

category.addEventListener("change", function () {

    // Clear the previous options
    subject.innerHTML = "";

    let options;

    // Check which category is selected
    if (category.value === "nonacademic") {
        options = nonAcademicOptions;
    } else {
        options = academicOptions;
    }

    // Add the new subjects to the dropdown
    options.forEach(function (item) {
        let option = document.createElement("option");

        option.textContent = item;
        option.value = item;

        subject.appendChild(option);
    });

});
