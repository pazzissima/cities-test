async function updateUI() {
  const fetchAsyncA = async () =>
    await (await fetch("./navigation.json")).json();
  fetchAsyncA().then((data) => {
    console.log(data.cities);

    const wrapper = document.getElementById("wrapper").querySelector("ul");
    for (let i of data.cities) {
      let city = document.createElement("li");
      city.classList.add("city");
      console.log("Print i: ", i);
      city.innerHTML = i.label;
      wrapper.appendChild(city);

      city.addEventListener("click", (e) => {
        var elems = document.querySelectorAll(".city");
        [].forEach.call(elems, function (el) {
          el.classList.remove("active");
        });
        e.target.classList.add("active");
      });
    }
  });
}

/* const res = await fetch("./navigation.json");
  cities = await res.json();

  console.log(cities);*/

updateUI();
