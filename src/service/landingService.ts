// import { getData } from "./index";

export const fetchBanners = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/banners");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return { data: [] };
  }
};

export const fetchCategoryImage = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/category-image");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return { data: [] };
  }
};
