export function validateForm(formData) {
  const errors = {};

  if (!formData.firstName.trim()) {
    errors.firstName = "First name is required.";
  }

  if (!formData.lastName.trim()) {
    errors.lastName = "Last name is required.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.emailAddress.trim()) {
    errors.emailAddress = "Email address is required.";
  } else if (!emailRegex.test(formData.emailAddress)) {
    errors.emailAddress = "Please enter a valid email address.";
  }

  if (!formData.commentBox.trim()) {
    errors.commentBox = "Please enter a comment.";
  }

  return errors;
}
