const getCookie = (cname: string) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      // eslint-disable-next-line
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      // eslint-disable-next-line
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  export default getCookie;