function getDeviceType() {
  const userAgent = navigator.userAgent;
if (/Mobi|Android/i.test(userAgent)) {
	window.location.href = "HomeMobile.html";
  } else if (/Tablet|iPad/i.test(userAgent)) {
	  window.location.href = "HomeMobile.html";
  } else {
  }
}
console.log(`Device Type: ${getDeviceType()}`);