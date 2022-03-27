export const checkPassword = (email, password) => {
  if (password.length < 6) {
    return "Password must be at least 6 chars.";
  } else if (validateEmail(email) === false) {
    return "Email is not valid.";
  }
};

function validateEmail(email) {
  const re =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
