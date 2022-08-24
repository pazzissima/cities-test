async function updateUI() {
  const fetchAsyncA = async () =>
    await (await fetch("./navigation.json")).json();
  fetchAsyncA().then((data) => {
    console.log(data.cities);

    const wrapper = document.getElementById("wrapper").querySelector("ul");
    for (let i of data.cities) {
      let city = document.createElement("li");
      city.classList.add("city");
      city.innerHTML = `<a href="#" class="city_link">${i.label}</a>`;
      wrapper.appendChild(city);

      //Toggle active class on click to change colors
      city.addEventListener("click", (e) => {
        var elems = document.querySelectorAll(".city_link");
        [].forEach.call(elems, function (el) {
          el.classList.remove("active");
        });
        e.target.classList.add("active");
      });
    }
    const menu = document.querySelector(".city_list");
    menu.addEventListener("click", (event) => {
      if (event.target.classList.contains("city_link")) {
        menu.style.setProperty(
          "--underline-width",
          `${event.target.offsetWidth}px`
        );
        menu.style.setProperty(
          "--underline-offset-x",
          `${event.target.offsetLeft}px`
        );
      }
    });
  });
}
updateUI();
