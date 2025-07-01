exports.getUserData = () => {
  try {
    const userData = localStorage.getItem("userData");
    if (!userData) return null;
    const parsedData = JSON.parse(userData);
    // Optional: check for expected keys to validate structure
    if (parsedData && parsedData.email && parsedData.username) {
      return parsedData;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error parsing userData from localStorage:", error);
    return null;
  }
};
