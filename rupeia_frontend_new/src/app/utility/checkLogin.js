exports.checkLogin = () => {
  const accessToken = localStorage.getItem("accessToken");
  const userData = localStorage.getItem("userData");
  if (accessToken && userData) {
    return true;
  } else {
    return false;
  }
};
