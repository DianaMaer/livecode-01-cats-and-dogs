const cats = [
    {
        name: 'Kandy',
        imgUrl: 'https://images-cdn.9gag.com/photo/3630193_700b.jpg',
    },
    {
        name: 'Sir John II',
        imgUrl: 'https://kittybloger.files.wordpress.com/2012/05/cat-king.jpg?w=584',
    },
]

const dogs = [
    {
        name: 'Bill',
        imgUrl: 'https://live.staticflickr.com/8534/8622367912_cfe27bf5ef.jpg',
    },
    {
        name: 'Shawna',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-bi-Tq3VTy8AL_fGBoLIwdnvY5RfG8wJNr1xW5_tWzQ8TOGx',
    },
]

const animalList = document.getElementById('animalList');
const animalSelect = document.getElementById('animalSelect');

// join arrays using spread operator
// const animals = [...cats, ...dogs];

const renderAnimals = (animalArray) => {
    animalList.innerHTML = '';
    animalArray.map((animal)=>{
        const li = document.createElement('li');
        const p = document.createElement('p');
        const img = document.createElement('img');
        p.innerHTML = animal.name;
        img.src = animal.imgUrl;
        animalList.appendChild(li);
        li.appendChild(p);
        li.appendChild(img); 
    })
}

animalSelect.addEventListener('change', (e) => {
    if(e.target.value === 'cats') {
        renderAnimals(cats);
    } else if (e.target.value === 'dogs') {
        renderAnimals(dogs);
    } else {
        renderAnimals([...cats, ...dogs]);
    }
})

// first render, defore user selects from dropdown
const defaultSelected = animalSelect.value;
renderAnimals([...cats, ...dogs])




// for (let i = 0; i < animals.length; i++) {
//     // create <li>, <p>, <img>
//     const li = document.createElement('li');
//     const p = document.createElement('p');
//     const img = document.createElement('img');
//     // put <li> in page
//     p.innerHTML = animals[i].name;
//     img.src = animals[i].imgUrl;
//     animalList.appendChild(li);
//     li.appendChild(p);
//     li.appendChild(img);
// }
