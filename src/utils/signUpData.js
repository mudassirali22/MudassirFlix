export const signUpData = async ({ request }) => {
  try {
    const signUPFormData = await request.formData();
    const formObject = Object.fromEntries(signUPFormData);

    // Check password confirmation
    if (formObject.password !== formObject.confirmPassword) {
      return { error: "Passwords do not match" };
    }

    console.log("SignUp Form Data Submitted:", formObject);
    // Return success
    return { success: "Sign Up Successful", data: formObject };
  } catch (error) {
    console.error("Error in signUpData:", error);
    return { error: error.message };
  }
};
