const {
  default: ShowErroemessage,
} = require("../components/alert/ShowErroemessage");

exports.handleApiError = (error) => {
  let message = "Sorry, we are working on it"; // default fallback message

  if (error?.response) {
    const status = error.response.status;
    const apiMessage = error.response.data?.message;

    switch (status) {
      case 400:
        message = apiMessage || "We are working on it";
        break;
      case 401:
        message = apiMessage || "You are not authenticated";
        break;
      case 500:
        message = apiMessage || "Something went wrong";
        break;
      default:
        message = apiMessage || message;
        break;
    }
  } else if (error?.request) {
    message = "Sorry, we are working on it"; // no response (network error, etc.)
  } else {
    message = "Sorry, we are working on it"; // unknown error
  }

  // Log to Firebase (example)
  try {
    // Replace with your Firebase logging function
    // logErrorToFirebase({ message, errorDetails: error.toString(), stack: error.stack });
    console.error("🔥 Error logged to Firebase:", error);
  } catch (loggingError) {
    console.error("Error logging to Firebase:", loggingError);
  }

  ShowErroemessage(message);
};
