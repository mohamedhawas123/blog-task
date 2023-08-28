export const handleServerError = (res, message) => {
    console.error(message);
    return res.status(500).json(ERROR_RESPONSE);
  };