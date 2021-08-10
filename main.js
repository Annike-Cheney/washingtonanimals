const data = {"Leopard_moray_eel": {"Scientific Animal Name": "Enchelycore pardalis", "Animal Picture Url": "https://upload.wikimedia.org/wikipedia/commons/9/99/ToraUB.jpg ", "Description 1": "The leopard moray eel or dragon moray (Enchelycore pardalis), is a species of marine fish in the family Muraenidae.", "Picture 2": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Enchelycore_pardalis_from_Photozou.jpg/375px-Enchelycore_pardalis_from_Photozou.jpg ", "Description 2": "The leopard moray eel is widespread throughout the Indo-Pacific oceans from R\u00e9union to the Hawaiian, Line and Society Islands, north to southern Japan, southern Korea, and south to New Caledonia.", "Picture 3": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Dragon_Eel_%28Enchelycore_pardalis%29.jpg/270px-Dragon_Eel_%28Enchelycore_pardalis%29.jpg ", "Description 3": "It inhabits coral and rocky reefs at depth range from 8 to 60 m.Its length is up to 92 cm. This eel is characterized by its narrow, curved jaws, vivid red stripes on the head, and elongated tubular nostrils.", "Sources": "-https://en.wikipedia.org/wiki/Leopard_moray_eel "}, "Test": {"Scientific Animal Name": "Enchelycore pardalisAAAAA", "Animal Picture Url": "https://upload.wikimedia.org/wikipedia/commons/9/99/ToraUB.jpg ", "Description 1": "The leopard mAAAoray eel or dragon moray (Enchelycore pardalis), is a species of marine fish in the family Muraenidae.", "Picture 2": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Enchelycore_pardalis_from_Photozou.jpg/375px-Enchelycore_pardalis_from_Photozou.jpg ", "Description 2": "The leopard morayAA eel is widespread throughout the Indo-Pacific oceans from R\u00e9union to the Hawaiian, Line and Society Islands, north to southern Japan, southern Korea, and south to New Caledonia.", "Picture 3": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Dragon_Eel_%28Enchelycore_pardalis%29.jpg/270px-Dragon_Eel_%28Enchelycore_pardalis%29.jpg ", "Description 3": "It inhabits coral and rocky reefs at depth range from 8 to 60 m.Its length is up to 92 cm. This eel is characterized by its narrow, curved jaws, vivid red stripes on the head, and elongated tubular nostrils.", "Sources": "-https://en.wikipedia.org/wiki/Leopard_moray_eel "}, "Test2sdsadsadsadsa": {"Scientific Animal Name": "Enchelycore pardalisdasdsAAAAA", "Animal Picture Url": "https://upload.wikimedia.org/wikipedia/commons/9/99/ToraUB.jpg ", "Description 1": "The leopard mAAAoraasdy eel or dragon moray (Enchelycore pardalis), is a species of marine fish in the family Muraenidae.", "Picture 2": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Enchelycore_pardalis_from_Photozou.jpg/375px-Enchelycore_pardalis_from_Photozou.jpg ", "Description 2": "The leopard modasrayAA eel is widespread throughout the Indo-Pacific oceans from R\u00e9union to the Hawaiian, Line and Society Islands, north to southern Japan, southern Korea, and south to New Caledonia.", "Picture 3": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Dragon_Eel_%28Enchelycore_pardalis%29.jpg/270px-Dragon_Eel_%28Enchelycore_pardalis%29.jpg ", "Description 3": "It inhabits coral and radsocky reefs at depth range from 8 to 60 m.Its length is up to 92 cm. This eel is characterized by its narrow, curved jaws, vivid red stripes on the head, and elongated tubular nostrils.", "Sources": "-https://en.wikipedia.org/wiki/Leopard_moray_eel "}};


window.onload = function() {
     
    var list = document.getElementById('animals');

    var count=0;
    var max =0;

    for(var key in data){
        max++;
    }


    for(var key in data) {
        var a = document.createElement("a");
        var ulist = document.getElementById("animals");
        var newItem = document.createElement("li");
        if(count==0){newItem.setAttribute('class', "first");}
        if(count==max-1){newItem.setAttribute('class', "last");}
        a.textContent = key.split("_").join(" ");
        a.setAttribute('href', "animalpage.html?animal="+key);

        newItem.appendChild(a);
        ulist.appendChild(newItem);
        count++;

}



};