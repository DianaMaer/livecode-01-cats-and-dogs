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
];

// join arrays using spread operator
const animals = [...cats, ...dogs];

const animalList = document.getElementById('animalList');
const animalSelect = document.getElementById('animalSelect');

const renderAnimals = (animalArray) => {
    animalList.innerHTML = '';
  
    for (const animal of animalArray) {
        // create <li>, <p>, <img>
        const li = document.createElement('li');
        const p = document.createElement('p');
        const img = document.createElement('img');
      
        // put <li> in page
        p.innerHTML = animal.name;
        img.src = animal.imgUrl;
        animalList.appendChild(li);
        li.appendChild(p);
        li.appendChild(img); 
    }
};

animalSelect.addEventListener('change', (e) => {
    if (e.target.value === 'cats') {
        renderAnimals(cats);
    } else if (e.target.value === 'dogs') {
        renderAnimals(dogs);
    } else {
        renderAnimals(animals);
    }
});

// first render, before user selects from dropdown
const defaultSelected = animalSelect.value;
renderAnimals(animals);
