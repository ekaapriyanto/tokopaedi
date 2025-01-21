export const fetchAdminProducts = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/product");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return { data: [] };
  }
};

export const fetchAddProduct = async (formData: FormData) => {
  try {
    const response = await fetch("http://localhost:3000/api/product", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
