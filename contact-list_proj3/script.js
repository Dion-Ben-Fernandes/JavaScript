contact_list = [
    {
        name: "Dion Ben Fernandes",
        phone: "1",
    },
    {
        name: "test2",
        phone: "2",
    },
    {
        name: "test3",
        phone: "3",
    },
    {
        name: "test4",
        phone: "4",
    },
    {
        name: "test5",
        phone: "5",
    }
];

{/* <ul class="list-group">
    <li class="list-group-item">
        Dion Ben Fernandes<span class="float-right">9769243623</span>
    </li>
</ul> */}

function generateList() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";

    contact_list.forEach((course) => {
        
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");

        const phone = document.createTextNode(course.phone);
        span.appendChild(phone);

        li.appendChild(span);

        ul.appendChild(li);

    });
}

window.addEventListener("load",generateList);

// const button = document.querySelector(".sort-btn");
// button.addEventListener("click",() => {
//     contact_list.sort( (a,b) => a.phone + b.phone );
//     generateList();
// });
