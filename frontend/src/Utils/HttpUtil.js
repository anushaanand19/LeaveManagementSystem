export class HttpUtil {
  static async get(url) {
    let headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    let user = localStorage.getItem("user");
    if (user) {
      headers.token = JSON.parse(user).token;
    }

    let response = await fetch(url, {
      method: "GET",
      headers: headers,
    });
    return response.json();
  }
  post(url, body) {}
}
