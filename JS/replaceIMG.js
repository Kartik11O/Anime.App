function handleViewportWidth() {
    let IMG = "IMG/GET ANIME BY IMAGE.png"
    const screenWidth = window.innerWidth;
    if (screenWidth <= 480) {
        $("#img").attr('src', IMG)
        $("video[Data-Video]").attr('src', Videoarr[i])
        console.log("Viewport width is 480px or less");
    } else {
        // Viewport width is larger than 480px
        // Add your code here to do something else
        console.log("Viewport width is larger than 480px");
    }
}
