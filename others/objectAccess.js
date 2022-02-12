// Acceso dinamico a propiedades de objetos

const user = {
    user: 'Ramiro',
    rol: 'Tutor',
    curso: 'ReactJS'
}

const prop = 'rol';

console.log(user[prop]);

// tambien se puede agregar una propiedad

const addProp = (clave, valor) => {
    user[clave] = valor;
}
addProp('salario', 40000);

user['hijos'] = '2';

console.log(user);