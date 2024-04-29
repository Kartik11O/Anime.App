function handleViewportWidth() {
    let NormalIMG = "IMG/up.jpg"
    let PhoneIMG = "IMG/up2.jpg"
    const screenWidth = window.innerWidth;
    if (screenWidth <= 480) {
        $("#img").attr('src', PhoneIMG)

    } else {
        $("#img").attr('src', NormalIMG)
    }
}
window.addEventListener("resize", handleViewportWidth);