let div  = document.createElement('div');
let Fetch1 = document.querySelector('#f1');
let Fetch2 = document.querySelector('#f2');
let Fetch3 = document.querySelector('#f3');

let fetchArray = ["https://jsonplaceholder.typicode.com/users", "https://jsonplaceholder.typicode.com/posts/1/comments", "https://jsonplaceholder.typicoe.com"];


Fetch1.addEventListener('click', apifun);
Fetch2.addEventListener('click', apifun);
Fetch3.addEventListener('click', apifun);


function apifun(){
    div.innerText = '';
    let idx = Math.floor(Math.random() * fetchArray.length);
    let val = fetchArray[idx];
    apiCall(val);
}

async function apiCall(val) {
    try {
        let data = await fetch(val);
        let res = await data.json();
        console.log(res);

        res.forEach((ele) => {
            let p = document.createElement('p');
            p.innerText = ele.name;
            div.append(p);
            document.body.append(div);
        })
    }catch (err) {
        swal({
            title: "Error API Fetching",
            text: "Please try again",
            icon: "error",
            dangerMode: true,
            buttons: {
                retry: {
                    text: "Retry",
                    value: true,
                    visible: true,
                    className: "btn-danger",
                    closeModal: true,
                }
            },
            closeOnClickOutside: false,
            closeOnEsc: false,
            timer: 5000,
        }).then(() => {
            apifun();
        })

    }
}