const API_URL = import.meta.env.VITE_API_URL || "https://asta-nova-1.onrender.com";

export const sendContactData = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    return await response.json();
  } catch (error) {
    console.log("API Error:", error);
    return { success: false };
  }
};