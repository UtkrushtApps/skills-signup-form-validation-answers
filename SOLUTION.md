# Solution Steps

1. Create React state for each form field. In the App component, add useState hooks for fullName, email, password, and role so each input will be controlled by React.

2. Add state to track validation errors and submission status. Use useState for an errors object (e.g., { fullName: '', email: '' }) and a boolean isSubmitted flag to know when to show the success view.

3. Convert the existing uncontrolled inputs into controlled components. For each input and select, set the value prop to the corresponding state variable and add an onChange handler that calls the appropriate setter (e.g., setFullName(e.target.value)).

4. Implement a validate function inside the App component. This function should read the current field values from state, build an errors object, and return it without mutating React state directly.

5. Inside validate, enforce the required rules: check that fullName, email, password, and role are non-empty (use trim() for text fields). For each missing field, add a descriptive error message to the errors object under the matching key.

6. Still in validate, add a simple email format check. After confirming email is non-empty, test it with a basic regex like /.+@.+\..+/ and, if it fails, set an appropriate error message on errors.email.

7. Add password strength validation in validate. After confirming password is non-empty, check that its length is at least 8 characters; if not, set a specific errors.password message describing the minimum length requirement.

8. Update the existing form submit handler. In handleSubmit, call event.preventDefault(), then call validate() to get validationErrors. If validationErrors has any keys, call setErrors(validationErrors), ensure isSubmitted is false, and return early without showing success.

9. If validate() returns an empty object (no errors), clear any previous errors with setErrors({}) and set isSubmitted to true so the component switches to the success state only when all fields pass validation.

10. Use conditional rendering to swap between the form and the success message. If isSubmitted is true, return a success view showing a confirmation message (optionally including the user’s name and role); otherwise, render the signup form.

11. Render inline error messages next to each field. Under each input/select, check if errors.<fieldName> exists, and if so, render a small, styled div with the error text. This ensures users see exactly which fields are invalid when they submit.

12. Optionally, include a button in the success view that resets isSubmitted to false so you can toggle back to the form (useful for testing), while keeping the main logic and validation contained within a single-page functional component.

