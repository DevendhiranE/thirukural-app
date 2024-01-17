const containerEl = document.querySelector("#container");
const API_URL =
  "https://raw.githubusercontent.com/tk120404/thirukkural/master/thirukkural.json";

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

function addElement() {
  const kuralCount = document.createElement("h2");
  kuralCount.innerHTML = `Kural En : 1`;
  kuralCount.classList.add("p-2", "text-center", "text-xl", "font-semibold");
  containerEl.append(kuralCount);

  const pDiv = document.createElement("div");

  const kuralLine1 = document.createElement("p");
  kuralLine1.textContent = "அகர முதல எழுத்தெல்லாம் ஆதி";
  pDiv.classList.add("my-2", "p-2", "text-red-800");
  containerEl.append(pDiv);
  pDiv.append(kuralLine1);

  const kuralLine2 = document.createElement("p");
  kuralLine2.textContent = "பகவன் முதற்றே உலகு.";
  pDiv.append(kuralLine2);

  const vilakkamMV = document.createElement("p");
  vilakkamMV.textContent =
    "எழுத்துக்கள் எல்லாம் அகரத்தை அடிப்படையாக கொண்டிருக்கின்றன. அதுபோல உலகம் கடவுளை அடிப்படையாக கொண்டிருக்கிறது.";
  const vilakkamSP = document.createElement("p");
  vilakkamSP.textContent =
    "எழுத்துக்கள் எல்லாம் அகரத்தில் தொடங்குகின்றன; (அது போல) உலகம் கடவுளில் தொடங்குகிறது.";
  const vilakkamMK = document.createElement("p");
  vilakkamMK.textContent =
    "அகரம் எழுத்துக்களுக்கு முதன்மை; ஆதிபகவன், உலகில் வாழும் உயிர்களுக்கு முதன்மை";

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
  console.log(combinePara);
  kuralVilakkam.append(combinePara);
}
addElement();
