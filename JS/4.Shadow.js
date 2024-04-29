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
    $("#SEC-2").fadeIn();
    $("#SEC-2").css({
        display: "flex",
    });
}
export { ShadowBody };
