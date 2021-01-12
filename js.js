const users = JSON.parse(localStorage.getItem('users')) || [];

let updating = false; 
let updatingid = -1
function printUsers() {
    
    const container = document.getElementById('container-users');
    let html = '';
    console.log(users)
    users.forEach((user) => {
        html += `<tr>
                    <td>${user.Marca}</td>
                    <td>${user.Modelo}</td>
                    <td>${user.Color}</td>
                    <td>${user.año}</td>
                    <td>${user.precio}</td>
                    <td>
                        <button onclick="deleteUser(${user.id})" class="btn btn-danger">
                            Eliminar
                        </button>
                        <button onclick="enableuptadeUser(${user.id})" class="btn btn-warning">
                            Actualizar
                        </button>
                    </td>
                </tr>`;
    });
    container.innerHTML = html;
}

function deleteUser(id) {

    const index = users.findIndex((user) => user.id == id );
    users.splice(index, 1);

    printUsers();
}

function enableuptadeUser(id) {

    updatingid = id;
     
    const user = users.find((user) => user.id ==id);

    const InputMarca = document.getElementById('Marca');
    InputMarca.value = user.Marca;

    const InputColor = document.getElementById('Color');
    InputColor.value = user.Color;

    const InputAño = document.getElementById('año');
    InputAño.value = user.año;

    const InputPrecio = document.getElementById('precio');
    InputPrecio.value = user.precio;

    const InputModelo = document.getElementById('Modelo');
    InputModelo.value = user.precio;
    
    updating = true;

    let button = document.getElementById('save');
    button.textContent = 'Actualizar';
    button.classList.remove('btn-primary')
    button.classList.add('btn-warning')
    document.getElementById('cancel').classList.remove('d-none')
}

function addUser() {
     
    if(updating) {
        updateUser();
        return;
    }


    const InputMarca = document.getElementById('Marca');
    const Marca = InputMarca.value;

    const InputColor = document.getElementById('Color');
    const Color = InputColor.value;

    const InputAño = document.getElementById('año');
    const año = InputAño.value;

    const InputPrecio = document.getElementById('precio');
    const precio = InputPrecio.value;

    const InputModelo = document.getElementById('Modelo');
    const Modelo = InputModelo.value;
    
    let id = 1;
    if(users.length > 0) {
        id = users[users.length -1].id + 1;
    }

    const newUser = {
        Marca,
        Modelo,
        Color,
        año,
        precio,
        id,
    }
    users.push(newUser);
    printUsers();

    document.getElementById('form-user').reset();
}

localStorage.setItem('users', JSON.stringify(users));

function updateUser() { 
    const user = users.find((user) => user.id === updatingid)

    const InputMarca = document.getElementById('Marca');
    const Marca = InputMarca.value;

    const InputColor = document.getElementById('Color');
    const Color = InputColor.value;

    const InputAño = document.getElementById('año');
    const año = InputAño.value;

    const InputPrecio = document.getElementById('precio');
    const precio = InputPrecio.value;

    const InputModelo = document.getElementById('Modelo');
    const Modelo = InputModelo.value;
    
    user.Marca = Marca
    user.Color = Color
    user.año = año
    user.precio = precio
    user.Modelo = Modelo;

    printUsers();

    document.getElementById('form-user').reset();

    cancelEdition();
}

function cancelEdition(){
    document.getElementById('form-user').reset();

    updating = false; 
    updatingid = -1
    let button = document.getElementById('save');
    button.textContent = 'Enviar';
    button.classList.remove('btn-warning')
    button.classList.add('btn-primary')
    document.getElementById('cancel').classList.add('d-none')
}

printUsers();