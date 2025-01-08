export const fetchAdminProducts = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/admin-product");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return { data: [] };
  }
};
