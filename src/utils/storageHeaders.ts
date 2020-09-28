function saveHeaders(token: string) {
  localStorage.setItem("@musify/token", token);
}

function getHeaders(): string {
  return localStorage.getItem("@musify/token") || "";
}

export default { saveHeaders, getHeaders };
