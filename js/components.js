export function CourseForm(courseTitle, coursePrice) {
    const form = document.createElement("form");
    form.className = "course-form-grid grid card-2 text-center";
    form.innerHTML = `
        <div class="course-details flex mb-3">
            <strong class="course-title title-3 text-primary">${courseTitle}</strong>
            <strong class="course-price title-3 text-primary">£${coursePrice}</strong>
        </div>
        <input type="text" placeholder="Name" class="name text-input">
        <input type="email" placeholder="Email" class="email text-input">
        <input type="submit" value="Sign Up" class="submit-course-btn btn btn-primary mt-3">
    `;

    return form;
}

export function Alert(message, classNames, hasCloseBtn = true) {
    const alert = document.createElement("div");
    alert.className = classNames;

    if (hasCloseBtn) {
        alert.innerHTML = `
                <span class="alert-message">${message}</span>
                <span class="alert-close">X</span>
        `;
    }
    else {
        alert.innerHTML = `
                <span class="alert-message">${message}</span>
        `;
    }

    return alert;
}