const data = {"Leopard_moray_eel": {"Scientific Animal Name": "Enchelycore pardalis", "Animal Picture Url": "https://upload.wikimedia.org/wikipedia/commons/9/99/ToraUB.jpg ", "Description 1": "The leopard moray eel or dragon moray (Enchelycore pardalis), is a species of marine fish in the family Muraenidae.", "Picture 2": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Enchelycore_pardalis_from_Photozou.jpg/375px-Enchelycore_pardalis_from_Photozou.jpg ", "Description 2": "The leopard moray eel is widespread throughout the Indo-Pacific oceans from R\u00e9union to the Hawaiian, Line and Society Islands, north to southern Japan, southern Korea, and south to New Caledonia.", "Picture 3": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Dragon_Eel_%28Enchelycore_pardalis%29.jpg/270px-Dragon_Eel_%28Enchelycore_pardalis%29.jpg ", "Description 3": "It inhabits coral and rocky reefs at depth range from 8 to 60 m.Its length is up to 92 cm. This eel is characterized by its narrow, curved jaws, vivid red stripes on the head, and elongated tubular nostrils.", "Sources": "-https://en.wikipedia.org/wiki/Leopard_moray_eel "}, "Test": {"Scientific Animal Name": "Enchelycore pardalisAAAAA", "Animal Picture Url": "https://upload.wikimedia.org/wikipedia/commons/9/99/ToraUB.jpg ", "Description 1": "The leopard mAAAoray eel or dragon moray (Enchelycore pardalis), is a species of marine fish in the family Muraenidae.", "Picture 2": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Enchelycore_pardalis_from_Photozou.jpg/375px-Enchelycore_pardalis_from_Photozou.jpg ", "Description 2": "The leopard morayAA eel is widespread throughout the Indo-Pacific oceans from R\u00e9union to the Hawaiian, Line and Society Islands, north to southern Japan, southern Korea, and south to New Caledonia.", "Picture 3": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Dragon_Eel_%28Enchelycore_pardalis%29.jpg/270px-Dragon_Eel_%28Enchelycore_pardalis%29.jpg ", "Description 3": "It inhabits coral and rocky reefs at depth range from 8 to 60 m.Its length is up to 92 cm. This eel is characterized by its narrow, curved jaws, vivid red stripes on the head, and elongated tubular nostrils.", "Sources": "-https://en.wikipedia.org/wiki/Leopard_moray_eel "}, "Test2sdsadsadsadsa": {"Scientific Animal Name": "Enchelycore pardalisdasdsAAAAA", "Animal Picture Url": "https://upload.wikimedia.org/wikipedia/commons/9/99/ToraUB.jpg ", "Description 1": "The leopard mAAAoraasdy eel or dragon moray (Enchelycore pardalis), is a species of marine fish in the family Muraenidae.", "Picture 2": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Enchelycore_pardalis_from_Photozou.jpg/375px-Enchelycore_pardalis_from_Photozou.jpg ", "Description 2": "The leopard modasrayAA eel is widespread throughout the Indo-Pacific oceans from R\u00e9union to the Hawaiian, Line and Society Islands, north to southern Japan, southern Korea, and south to New Caledonia.", "Picture 3": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Dragon_Eel_%28Enchelycore_pardalis%29.jpg/270px-Dragon_Eel_%28Enchelycore_pardalis%29.jpg ", "Description 3": "It inhabits coral and radsocky reefs at depth range from 8 to 60 m.Its length is up to 92 cm. This eel is characterized by its narrow, curved jaws, vivid red stripes on the head, and elongated tubular nostrils.", "Sources": "-https://en.wikipedia.org/wiki/Leopard_moray_eel-https://en.wikipedia.org/wiki/Leopard_moray_eel"}};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

window.onload = function() {
    const animalname = (window.location.href).split('=')[1];
    const animal = data[animalname]

    const backgroundpictures = ["url('"+animal["Animal Picture Url"]+"')","url('"+animal["Picture 2"]+"')","url('"+animal["Picture 3"]+"')"]
    const backimage = backgroundpictures[getRandomInt(3)]

    document.getElementsByClassName("bs-image")[0].style.backgroundImage = backimage;

    document.getElementById("Common Animal Name").innerHTML = animalname.split("_").join(" ");
    document.getElementById("title").innerHTML = animalname.split("_").join(" ");
    document.getElementById("Scientific Animal Name").innerHTML = animal["Scientific Animal Name"];

    document.getElementById("Animal Picture Url").src=animal["Animal Picture Url"];
    document.getElementById("Description 1").innerHTML=animal["Description 1"];

    document.getElementById("Picture 2").src=animal["Picture 2"];
    document.getElementById("Description 2").innerHTML=animal["Description 2"];

    document.getElementById("Picture 3").src=animal["Picture 3"];
    document.getElementById("Description 3").innerHTML=animal["Description 3"];
    if(animal["Picture 2"] == ""){
      var elem = document.getElementById("Picture 2");
      elem.parentNode.removeChild(elem);
    }
    if(animal["Picture 3"] == ""){
      var elem = document.getElementById("Picture 3");
      elem.parentNode.removeChild(elem);
    }
    var listinfo = animal["Sources"].split("-")

    for(var i =0;i<listinfo.length;i++) {
        let item = listinfo[i]
        if(item != ""){
          var a = document.createElement("a");
          var ulist = document.getElementById("sources");
          var newItem = document.createElement("li");

          a.textContent = item;
          a.setAttribute('href', item);
          a.setAttribute('target', "_blank");
          a.setAttribute('rel', "noopener noreferrer");
          newItem.appendChild(a);
          ulist.appendChild(newItem);
        }
    }
};