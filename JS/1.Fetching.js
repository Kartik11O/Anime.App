import { AddingToBody } from "./2.AddToBody.js";
import { Meo_Api, Anilist_Api, query } from "./Api.js";

var UserUrl = "";
var IMG = " "

const Input = document.getElementById("InputBar");

async function GettingIMG() {
  const imageInput = document.getElementById("file");
  const imageFile = await imageInput.files[0];
  const imageUrl = URL.createObjectURL(imageFile);
  IMG = imageUrl
  console.log(imageUrl)
  const formData = new FormData();
  formData.append("image", imageFile);
  FetchingByIMG(formData);
}

async function FetchingByIMG(formData) {
  try {
    const Meo_Respone = await fetch(Meo_Api, {
      method: "POST",
      body: formData,
    });
    console.log(formData, "data");
    const Meo_Data = await Meo_Respone.json();
    const Meo_One = Meo_Data.result.slice(0, 1);
    const key = Meo_One.map((item) => item.anilist.id);
    const variables = { ids: key };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query: query, variables: variables }),
    };
    // AniList Fetching
    const Ani_Respone = await fetch(Anilist_Api, options);
    const Ani_Data = await Ani_Respone.json();
    const Ani_Map = Ani_Data.data.Page.media;
    AddingToBody(Meo_One, Ani_Map);
  } catch (error) {
    console.log(error, "Error Found");
    alert("Error")
    return
  }
}

async function FetchingByLink() {
  UserUrl = Input.value;
  try {
    const Meo_Respone = await fetch(`${Meo_Api}${encodeURIComponent(UserUrl)}`);
    const Meo_Data = await Meo_Respone.json();
    const Meo_One = Meo_Data.result.slice(0, 1);
    const key = Meo_One.map((item) => item.anilist.id);
    var variables = { ids: key };
    var options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    };
    // AniList Fetching
    const Ani_Respone = await fetch(Anilist_Api, options);
    const Ani_Data = await Ani_Respone.json();
    const Ani_Map = Ani_Data.data.Page.media;
    AddingToBody(Meo_One, Ani_Map);
  } catch (error) {
    console.log(error, "Error Found");
    alert("Error")
    return
  }
}

export { UserUrl, GettingIMG, FetchingByLink, IMG };
