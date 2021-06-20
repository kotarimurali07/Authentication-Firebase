export const EmailValadation = (email) => {
  const exp =
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  try {
    if (email.length === 0) return false;
    return exp.test(email.toLowerCase().trim());
  } catch {
    return false;
  }
};

export const NameValadation = (name) => {
  const exp = /^[a-zA-Z .]{1,}$/;
  try {
    if (name.length === 0) return false;
    return exp.test(name.trim());
  } catch {
    return false;
  }
};
export const PasswordValadation = (password) => {
  const exp = /^[a-z0-9]+$/i;
  try {
    if (password.length === 0) return false;
    return exp.test(password.trim());
  } catch {
    return false;
  }
};
