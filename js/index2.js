

for(let i = 0; i < 1; i++){
    const url =`https://api.odcloud.kr/api/3084473/v1/uddi:9b55d736-6ab0-468a-9436-da76a357b49a_201910181439?page=`+i+`&perPage=17&serviceKey=dEBxo%2Bz1i1TcE5lcjM42Ko1CmlwFhQI8rsP0khF4uaoB0J2z7BdeIqWUbDkchzcIIRFbezp6Bfy3Jc48kwukDg%3D%3D`;
        for(let j=0; j<17; j++){
            fetch(url)
            .then(res => res.json())
            .then(myJson => {
                const obj= myJson.data[j];
                const 시설명 = obj.시설명.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                const 주소 = obj.주소.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                // console.log(시설명);
                let menus1 = document.querySelectorAll(".card-menu1");
                let menus2 = document.querySelectorAll(".card-menu2")
                let first = menus1[j];
                let second = menus2[j];
                first.innerHTML = 시설명;
                second.innerHTML = 주소;
            })
    }
}

