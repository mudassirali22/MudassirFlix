export const contactForm = async ({ request }) => {
  try {
    const formData = await request.formData();

    // Convert FormData to an object
    const formValues = Object.fromEntries(formData);

    console.log("Contact Form Data Submitted:", formValues);

    // Return back data
    return formValues;
  } catch (error) {
    console.error("Error in contactForm action:", error);
    throw error;
  }
};
