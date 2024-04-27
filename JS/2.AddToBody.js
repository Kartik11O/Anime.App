import { UserUrl } from "./1.Fetching.js"
function AddingToBody(Meo_One, Ani_Data) {
    let WholeBody = ``
    let Poster = []
    let Banner = []
    let Info = []
    Ani_Data.map((items) => {
        console.log(items)
        Poster.push(items.coverImage.extraLarge)
        Banner.push(items.bannerImage)
        Info.push(items.description)
    })
    Meo_One.map((item) => {
        console.log(item)
        let Name_E = item.anilist.title.english
        let Name_R = item.anilist.title.romaji
        let Ep = item.episode
        let Video = item.video
        let similarity = (item.similarity * 100).toFixed(2)
        let TimeStart = (item.from / 60).toFixed(2)
        const body = BodyHTML(Ep, similarity, TimeStart, Poster, Banner, Info, Video, Name_R, Name_E)
        WholeBody += body
        console.log(Name_E, 'name')
    })
}
function BodyHTML(Ep, similarity, TimeStart, Poster, Banner, Info, Video, Name_R, Name_E) {
    let Body = `
       <div id="ContainerS2" class="animation">
                <div id="Banner">
                    <img id="imgBanner"
                        src="${Banner}" alt="">
                </div>
                <div id="Content-Container">
                    <div id="Poster-Container">
                        <div id="Poster">
                            <img id="Poster-IMG"
                                src="${Poster}"
                                alt="">
                        </div>
                    </div>
                    <div id="Text-Container">
                        <div id="Info-Anime">
                            <ul>
                                <li>
                                    <h1 id="Headline-Name">${Name_E || Name_R}</h1>
                                </li>
                                <li><span class="I1">EP${Ep}</span> <span class="I1">at${TimeStart}</span> <span
                                        class="I1"></span> <span class="I1">${similarity}%</span></li>
                                <li>
                                    <p id="Info-Para">${Info}</p>
                                </li>
                            </ul>
                        </div>
                        <div id="Video-Container">
                            <div class="Video-ContainerIN">
                                <img id="V1" class="Video"
                                    src="${UserUrl}" data-img >
                            </div>
                            <div class="Video-ContainerIN">
                                <video id="V2" class="Video"
                                    src="${Video}">
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    `
    console.log(UserUrl)
    AddingBodyToHTML(Body)
}

function AddingBodyToHTML(Body) {
    document.getElementById("SEC-2").innerHTML = Body
}


export { AddingToBody }