export default class Validations {
  static checkName = (name) => {
    const exp = /^[a-zA-Z .]{1,}$/;
    if (name.length) return exp.test(name.trim());
    return true;
  };

  static checkEmail = (email) => {
    const exp =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    try {
      if (email.length === 0) return false;
      return exp.test(email.toLowerCase().trim());
    } catch (error) {
      return false;
    }
  };

  static valueValidation({
    type,
    value = "",
    startDate = null,
    endDate = null,
  }) {
    if (type === "fromdate") {
      console.log(
        startDate,
        endDate,
        !isNaN(Date.parse(startDate)),
        this.checkDateDiff(startDate, endDate)
      );
    }
    switch (type) {
      case "name":
        return value.length ? this.checkName(value) : true;

      case "email":
        return value.length ? this.checkEmail(value) : true;

      case "alphanum":
        return true;

      default:
        return true;
    }
  }
}
