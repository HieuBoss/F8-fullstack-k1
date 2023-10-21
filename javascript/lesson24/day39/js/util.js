export function formatDate(date) {
  date = new Date(date);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var session = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + session;
  return (
    date.getMonth() +
    1 +
    "/" +
    date.getDate() +
    "/" +
    date.getFullYear() +
    "  " +
    strTime
  );
}

export function escapeOutput(toOutput) {
  return toOutput
    .replace(/&/g, "&amp;")
    .replace(/\</g, "&lt;")
    .replace(/\>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/\'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

function regexPhone() {
  const pattern = /^(\+84|0){9}/g;
}
function regexEmail() {
  const pattern = /^[a-z][a-z\.0-9-_]{3,}@[a-z-_\.0-9]+\.[a-z]{2,}/g;
}
function regexYoutube() {
  const pattern = /^(http|https):\/\/(www\.)*(youtube\.com|youtu\.be)\/.+/g;
}
function regexLink() {
  const pattern = /^(http|https):\/\/[a-zA-Z0-9\_]/g;
}
