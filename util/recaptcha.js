const isValidToken = async (token) => {
  const data = {
    valid: true,
    message: 'Recaptcha verification bypassed',
  };
  return data;
}

module.exports = {
  isValidToken,
};
