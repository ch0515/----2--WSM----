
const url =`https://api.odcloud.kr/api/3084473/v1/uddi:9b55d736-6ab0-468a-9436-da76a357b49a_201910181439?page=1&perPage=10&serviceKey=dEBxo%2Bz1i1TcE5lcjM42Ko1CmlwFhQI8rsP0khF4uaoB0J2z7BdeIqWUbDkchzcIIRFbezp6Bfy3Jc48kwukDg%3D%3D`;

fetch(url)
    .then(res => res.json())
    .then(myJson => {
        const obj= myJson.data[0];
         console.log(obj);
        const 시설명 = obj.시설명.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        const 주소 = obj.주소.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        // console.log(시설명);
        let menus1 = document.querySelectorAll(".card-menu1");
        let menus2 = document.querySelectorAll(".card-menu2")
        let first = menus1[0];
        let second = menus2[0];
        first.innerHTML = 시설명;
        second.innerHTML = 주소;
})
fetch(url)
    .then(res => res.json())
    .then(myJson => {
        const obj= myJson.data[1];
         console.log(obj);
        const 시설명 = obj.시설명.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        const 주소 = obj.주소.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        // console.log(시설명);
        let menus1 = document.querySelectorAll(".card-menu1");
        let menus2 = document.querySelectorAll(".card-menu2")
        let first = menus1[1];
        let second = menus2[1];
        first.innerHTML = 시설명;
        second.innerHTML = 주소;
})
fetch(url)
    .then(res => res.json())
    .then(myJson => {
        const obj= myJson.data[2];
         console.log(obj);
        const 시설명 = obj.시설명.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        const 주소 = obj.주소.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        // console.log(시설명);
        let menus1 = document.querySelectorAll(".card-menu1");
        let menus2 = document.querySelectorAll(".card-menu2")
        let first = menus1[2];
        let second = menus2[2];
        first.innerHTML = 시설명;
        second.innerHTML = 주소;
})
fetch(url)
    .then(res => res.json())
    .then(myJson => {
        const obj= myJson.data[3];
         console.log(obj);
        const 시설명 = obj.시설명.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        const 주소 = obj.주소.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        // console.log(시설명);
        let menus1 = document.querySelectorAll(".card-menu1");
        let menus2 = document.querySelectorAll(".card-menu2")
        let first = menus1[3];
        let second = menus2[3];
        first.innerHTML = 시설명;
        second.innerHTML = 주소;
})
fetch(url)
    .then(res => res.json())
    .then(myJson => {
        const obj= myJson.data[4];
         console.log(obj);
        const 시설명 = obj.시설명.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        const 주소 = obj.주소.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        // console.log(시설명);
        let menus1 = document.querySelectorAll(".card-menu1");
        let menus2 = document.querySelectorAll(".card-menu2")
        let first = menus1[4];
        let second = menus2[4];
        first.innerHTML = 시설명;
        second.innerHTML = 주소;
})
fetch(url)
    .then(res => res.json())
    .then(myJson => {
        const obj= myJson.data[5];
         console.log(obj);
        const 시설명 = obj.시설명.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        const 주소 = obj.주소.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        // console.log(시설명);
        let menus1 = document.querySelectorAll(".card-menu1");
        let menus2 = document.querySelectorAll(".card-menu2")
        let first = menus1[5];
        let second = menus2[5];
        first.innerHTML = 시설명;
        second.innerHTML = 주소;
})
fetch(url)
    .then(res => res.json())
    .then(myJson => {
        const obj= myJson.data[6];
         console.log(obj);
        const 시설명 = obj.시설명.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        const 주소 = obj.주소.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        // console.log(시설명);
        let menus1 = document.querySelectorAll(".card-menu1");
        let menus2 = document.querySelectorAll(".card-menu2")
        let first = menus1[6];
        let second = menus2[6];
        first.innerHTML = 시설명;
        second.innerHTML = 주소;
})
fetch(url)
    .then(res => res.json())
    .then(myJson => {
        const obj= myJson.data[7];
         console.log(obj);
        const 시설명 = obj.시설명.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        const 주소 = obj.주소.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        // console.log(시설명);
        let menus1 = document.querySelectorAll(".card-menu1");
        let menus2 = document.querySelectorAll(".card-menu2")
        let first = menus1[7];
        let second = menus2[7];
        first.innerHTML = 시설명;
        second.innerHTML = 주소;
})
fetch(url)
    .then(res => res.json())
    .then(myJson => {
        const obj= myJson.data[8];
         console.log(obj);
        const 시설명 = obj.시설명.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        const 주소 = obj.주소.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        // console.log(시설명);
        let menus1 = document.querySelectorAll(".card-menu1");
        let menus2 = document.querySelectorAll(".card-menu2")
        let first = menus1[8];
        let second = menus2[8];
        first.innerHTML = 시설명;
        second.innerHTML = 주소;
})
