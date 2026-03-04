function getDeviceType() {
  const userAgent = navigator.userAgent;
if (/Mobi|Android/i.test(userAgent)) {
  } else if (/Tablet|iPad/i.test(userAgent)) {
  } else {
    window.location.href = "Home.html";
  }
}
console.log(`Device Type: ${getDeviceType()}`);