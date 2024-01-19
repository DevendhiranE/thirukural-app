const containerEl = document.querySelector("#container");
const API_URL =
  "https://raw.githubusercontent.com/tk120404/thirukkural/master/thirukkural.json";

async function thirukuralData() {
  try {
    const fetchingAPI = await fetch(API_URL);
    const datas = await fetchingAPI.json();

    for (let kural of datas.kural) {
      // function Start

      function addElement() {
        const kuralCount = document.createElement("h2");
        kuralCount.innerHTML = `குறள் எண் : ${kural.Number}`;
        kuralCount.classList.add(
          "p-2",
          "text-center",
          "text-xl",
          "font-semibold"
        );
        containerEl.append(kuralCount);
        const pDiv = document.createElement("div");
        const kuralLine1 = document.createElement("p");
        kuralLine1.textContent = `${kural.Line1}`;
        pDiv.classList.add("my-2", "p-2", "text-red-800");
        containerEl.append(pDiv);
        pDiv.append(kuralLine1);
        const kuralLine2 = document.createElement("p");
        kuralLine2.textContent = `${kural.Line2}`;
        pDiv.append(kuralLine2);
        // குறள் விளக்கம்
        const kuralVilakkamText = document.createElement("h3");
        kuralVilakkamText.textContent = "குறள் விளக்கம் :";
        kuralVilakkamText.classList.add(
          "mt-2",
          "font-semibold",
          "text-blue-500"
        );
        pDiv.append(kuralVilakkamText);
        const vilakkamMK = document.createElement("p");
        vilakkamMK.textContent = `${kural.mk}. `;
        const vilakkamMV = document.createElement("p");
        vilakkamMV.textContent = `${kural.mv}. `;
        const vilakkamSP = document.createElement("p");
        vilakkamSP.textContent = `${kural.sp}.`;
        const kuralVilakkam = document.createElement("div");
        kuralVilakkam.classList.add(
          "bg-black",
          "text-white",
          "my-2",
          "p-2",
          "rounded"
        );
        containerEl.append(kuralVilakkam);
        const combinePara =
          vilakkamMV.textContent +
          " " +
          vilakkamSP.textContent +
          " " +
          vilakkamMK.textContent;
        kuralVilakkam.append(combinePara);

        const buttonEl = document.createElement("button");
        buttonEl.textContent = "Next";
        buttonEl.classList.add(
          "px-3",
          "py-2",
          "rounded",
          "bg-blue-500",
          "hover:bg-blue-600",
          "text-white"
        );
        containerEl.append(buttonEl);

        buttonEl.addEventListener("click", (e) => {});
      }
      addElement();

      // function End
    }
  } catch (error) {
    console.log("Network Error ", error);
  }
}
thirukuralData();

// number, line1, line2, mv, sp, mk

// function addElement() {
//   const kuralCount = document.createElement("h2");
//   kuralCount.innerHTML = `குறள் எண் : 1`;
//   kuralCount.classList.add("p-2", "text-center", "text-xl", "font-semibold");
//   containerEl.append(kuralCount);

//   const pDiv = document.createElement("div");

//   const kuralLine1 = document.createElement("p");
//   kuralLine1.textContent = "அகர முதல எழுத்தெல்லாம் ஆதி";
//   pDiv.classList.add("my-2", "p-2", "text-red-800");
//   containerEl.append(pDiv);
//   pDiv.append(kuralLine1);

//   const kuralLine2 = document.createElement("p");
//   kuralLine2.textContent = "பகவன் முதற்றே உலகு.";
//   pDiv.append(kuralLine2);

//   // குறள் விளக்கம்

//   const kuralVilakkamText = document.createElement("h3");
//   kuralVilakkamText.textContent = "குறள் விளக்கம் :";
//   kuralVilakkamText.classList.add("mt-2", "font-semibold", "text-blue-500");
//   pDiv.append(kuralVilakkamText);

//   const vilakkamMV = document.createElement("p");
//   vilakkamMV.textContent =
//     "எழுத்துக்கள் எல்லாம் அகரத்தை அடிப்படையாக கொண்டிருக்கின்றன. அதுபோல உலகம் கடவுளை அடிப்படையாக கொண்டிருக்கிறது.";
//   const vilakkamSP = document.createElement("p");
//   vilakkamSP.textContent =
//     "எழுத்துக்கள் எல்லாம் அகரத்தில் தொடங்குகின்றன; (அது போல) உலகம் கடவுளில் தொடங்குகிறது.";
//   const vilakkamMK = document.createElement("p");
//   vilakkamMK.textContent =
//     "அகரம் எழுத்துக்களுக்கு முதன்மை; ஆதிபகவன், உலகில் வாழும் உயிர்களுக்கு முதன்மை";

//   const kuralVilakkam = document.createElement("div");
//   kuralVilakkam.classList.add(
//     "bg-black",
//     "text-white",
//     "my-2",
//     "p-2",
//     "rounded"
//   );
//   containerEl.append(kuralVilakkam);
//   const combinePara =
//     vilakkamMV.textContent +
//     " " +
//     vilakkamSP.textContent +
//     " " +
//     vilakkamMK.textContent;

//   kuralVilakkam.append(combinePara);
// }

// async function thirukuralData() {
//   try {
//     const tirukural = await fetch(API_URL);
//     const tdata = await tirukural.json();
//     let datas = tdata.kural;
//     for (const data of datas) {
//       let details = `Number: ${data.Number}
//      Kural: ${data.Line1}
//            ${data.Line2}

//     Vilakkam: ${data.mk}
//               ${data.mv}
//               ${data.sp}
//      `;

//       containerEl.innerHTML += details;
//       console.log();
//     }
//   } catch (error) {
//     console.log("error found");
//   }
// }

// thirukuralData();
