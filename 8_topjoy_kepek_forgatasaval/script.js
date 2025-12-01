const szoveg = document.querySelector("#szoveg");
const tarolo = document.querySelector(".tarolo");
const kupak = document.querySelector("#kupak");
const messages = [];

let zarvaVan = true;

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const uzik = await fetch("./uzik.csv");
    console.log(uzik);
    const uziktest = (await uzik.text()).split("\n").map((sor) => sor.trim());

    uziktest.forEach((uzi) => {
      messages.unshift(uzi);
    });
  } catch (error) {
    console.log(error);
  }
});

const animateCap = async (start, end) => {
  const step = start < end ? 1 : -1;

  for (let index = start; index !== end + step; index += step) {
    await new Promise((resolve) => setTimeout(resolve, 13));
    if (step === -1) {
      szoveg.textContent = " ";
    }

    kupak.src = `./images/bottlecap_${index}.png`;
  }

  //console.log(step);

  if (step === 1) {
    await TextShow();
  }
};

const TextShow = () => {
  const random = Math.floor(Math.random() * messages.length);
  //console.log("megy");
  szoveg.textContent = messages[random];

  //console.log();
};

tarolo.addEventListener("click", async () => {
  if (zarvaVan) {
    await animateCap(0, 10);
    zarvaVan = false;
  } else {
    await animateCap(10, 0);
    zarvaVan = true;
  }
});
