import { ShadowBody } from "./4.Shadow.js";
import { FetchingByLink, GettingIMG } from "./1.Fetching.js";


document.getElementById('file').addEventListener('change', handleFileSelect);
function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        ShadowBody(), GettingIMG()
    } else {
        console.log('No file selected');
    }
}
// Add event listener for the 'keypress' event
window.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        ShadowBody(), FetchingByLink()
        console.log("User Enter url")
    }
});
