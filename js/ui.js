import { Alert, CourseForm } from "./components";
import Utilities from "./utilities"

class UI {
    constructor() {
        this.coursesGridUI = document.querySelector(".courses-grid");
        this.courseFormUI = document.querySelector("#course-form");
    }

    getCourseDetails(event) {
        if (event.target.classList.contains("course-sign-up-btn")) {
            const priceString = event.target.previousElementSibling.textContent;
            const priceFloat = parseFloat(priceString.replace("£", ""));
            const title = event.target.parentElement.previousElementSibling.children[1].textContent;
    
            return {
                title: title,
                price: priceFloat
            }
        }
        else {
            return null;
        }
    }

    displayCourseForm(courseDetails) {
        const newCourseForm = new CourseForm(courseDetails.title, courseDetails.price)

        if (this.courseFormUI.childNodes.length !== 0) {
            this.removeCourseFrame();
        }

        this.courseFormUI.appendChild(newCourseForm);

        const y = newCourseForm.getBoundingClientRect().top + window.scrollY;
        window.scroll({
            top: y,
            behavior: 'smooth'
        });
    }

    removeCourseFrame() {
        while (this.courseFormUI.firstChild) {
            this.courseFormUI.removeChild(this.courseFormUI.lastChild);
        }
    }

    showAlert(message, classNames) {
        this.clearAlert();

        classNames = "alert" + " " + classNames;
        const alert = new Alert(message, classNames, false);
        this.courseFormUI.appendChild(alert)

        setTimeout(() => Utilities.fadeOutAndRemove(alert), 2500);
    }

    clearAlert() {
        const currentAlert = document.querySelector(".alert");

        if (currentAlert) {
            currentAlert.remove();
        }
    }
}

export const ui = new UI();