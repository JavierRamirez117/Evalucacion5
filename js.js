const users = [
    {
        id: 1,
        Marca: 'Chevrolet',
        Modelo: "spark",
        Color: 'negro',
        año: "2020",
        precio: "300,000",
    },
    {
        id: 2,
        Marca: 'Chevrolet',
        Modelo: "aveo",
        Color: 'azul',
        año: "2021",
        precio: "405,000",
    },
    {
        id: 3,
        Marca: 'Kia',
        Modelo: "Rio sedan",
        Color: 'rosa',
        año: "2021",
        precio: "243,000",
    },
    {
        id: 4,
        Marca: 'Volkswagen',
        Modelo: "Vento",
        Color: 'negro',
        año: "2022",
        precio: "308,990",
    },
    {
        id: 5,
        Marca: 'peugeot',
        Modelo: "suv",
        Color: 'negro',
        año: "2021",
        precio: "391,900",
    }
];

let updating = false; 
let updatingid = -1
function printUsers() {
    
    const container = document.getElementById('container-users');
    let html = '';
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

    document.getElementById('save').text = 'Actualizar';
    let button = document.getElementById('save');
    button.classList.remove('btn-primary')
    button.classList.add('btn-warning')
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

    updating = false; 
    updatingid = -1
}

printUsers();