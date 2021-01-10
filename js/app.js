import { ui } from "./ui";

ui.coursesGridUI.addEventListener("click", setupFormForCourseSignUp);
ui.courseFormUI.addEventListener("click", signUpToCourse);

function setupFormForCourseSignUp(event) {
    const courseDetails = ui.getCourseDetails(event);

    if (courseDetails) {
        ui.displayCourseForm(courseDetails);
    }

    event.preventDefault();
}

function signUpToCourse(event) {
    if (event.target.classList.contains("submit-course-btn")) {
        const nameOfUser = event.target.previousElementSibling.previousElementSibling.value;
        const reName = /^[A-Za-z-]{2,100}$/;

        const emailOfUser = event.target.previousElementSibling.value;
        const reEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z0-9]{2,5})$/;

        if (!reName.test(nameOfUser) || !reEmail.test(emailOfUser)) {
            ui.showAlert("Please enter valid information", "alert-danger");
        }
        else {
            console.log(nameOfUser, emailOfUser);
            ui.removeCourseFrame();
            ui.showAlert("You have successfully signed up to the course", "alert-success");
        }

        event.preventDefault();
    }
}