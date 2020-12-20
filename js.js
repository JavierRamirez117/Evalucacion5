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

function printUsers() {
    // 1. Obtengo el elemento html en el que quiero poner los usuarios
    // 2. Genero el html de los usuarios
    // 3. Pongo el html en el elemento obtenido
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
                    </td>
                </tr>`;
    });
    container.innerHTML = html;
}

function deleteUser(id) {

    // Como elimino un valor de un arreglo? 1. pop -> shift -> splice
    // necesito el índice -> ¿cómo obtengo el índice del elemento si lo que yo recibo es el id? -> findIndex
    const index = users.findIndex((user) => user.id == id );
    users.splice(index, 1);

    printUsers();
}

function addUser() {
    // obtner el valor del input
    // agregar el usuario al arreglo
    // imprimo nuevamente los usuarios
    const inputMarca = document.getElementById('Marca');
    const Marca = inputMarca.value;

    const Modelo = document.getElementById('Modelo').value;
    const id = users[users.length -1].id + 1;

    const newUser = {
        Marca,
        Modelo,
        id,
    }
    users.push(newUser);
    printUsers();

    // limpiamos el formulario
    document.getElementById('form-user').reset();
}

printUsers();