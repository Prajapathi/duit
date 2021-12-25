const form = document.querySelector('.input-form');
const showlist = document.querySelector('.todo-list');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('form submitted')
    const ott = form.elements['ott'].value
    const show = form.elements['show'].value

    addShow(ott, show);
    form.reset();

    console.log({ ott, show });
})

const addShow = (ott, show) => {

    //creating the show
    const todo = document.createElement('li');
    todo.classList.add('todo');

    const series = document.createElement('div');

    const ottname = document.createElement('h3');
    ottname.appendChild(document.createTextNode(ott))

    const showname = document.createElement('p');
    showname.appendChild(document.createTextNode(show));

    series.appendChild(ottname);
    series.appendChild(showname)

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');

    const deleteIcon = document.createElement('i');

    deleteIcon.classList.add('fas');
    deleteIcon.classList.add('fa-trash');

    deleteButton.appendChild(deleteIcon);

    deleteButton.addEventListener('click', () => {
        showlist.removeChild(todo);
    })

    todo.appendChild(series);
    todo.appendChild(deleteButton)
    showlist.appendChild(todo);
}