const btn_share = document.getElementById("btn_share");
const flex_icon = document.getElementById("flex_icon");
const flex_icon_mob = document.getElementById("flex_icon_mob");
btn_share.addEventListener("click", () => {
  flex_icon.style.display = "flex";
  flex_icon_mob.style.display = "flex";
  setTimeout(() => {
    flex_icon.style.display = "none";
    flex_icon_mob.style.display = "none";
  }, 2000);
});
