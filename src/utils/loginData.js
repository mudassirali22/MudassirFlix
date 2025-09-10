export const loginData = async ({ request }) => {
  try {
    const loginFormData = await request.formData();
    const formObject = Object.fromEntries(loginFormData);

    // Example validation (you can replace with real auth logic)
    if (!formObject.email || !formObject.password) {
      return { error: "Please enter both email and password" };
    }

    console.log("Login Form Data Submitted:", formObject);

    // Return success message
    return { success: "Login Successfully", data: formObject };
  } catch (error) {
    console.error("Error in loginData:", error);
    return { error: error.message };
  }
};
