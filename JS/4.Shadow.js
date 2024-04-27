import { UserUrl, IMG } from "./1.Fetching.js";
function ShadowBody() {
    let ShadowB = `
    <div class="loading">
  <div></div>
  <div></div>
  <div></div>
</div>
    `;
    ShadowAddingBody(ShadowB);
    console.log("running");
}

function ShadowAddingBody(ShadowB) {
    document.getElementById("SEC-2").innerHTML = ShadowB;
    Thing();
}
function Thing() {
    $("img[data-img]").attr("src", UserUrl);
    setTimeout(() => {
        $("img[data-img]").attr("src", IMG);
    }, 4000);
    $("#SEC-2").fadeIn();
    $("#SEC-2").css({
        display: "flex",
    });
}
export { ShadowBody };
