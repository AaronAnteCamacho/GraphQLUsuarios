const users = [
    {id: "1", name: "Pedro Martinez", email: "pedro@example.com"},
    {id: "2", name: "Juan Perez", email: "juan@example.com"}
];

const getAll = () => users;

const getById = (id) => users.find(user => user.id === id);

const create = (name, email) => {
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        throw new Error("Email inválido");
    }
    const newUser = {
        id: (users.length + 1).toString(),
        name,
        email
    };
    users.push(newUser);
    return newUser;
};

const update = (id, name, email) => {
    const user = users.find(user => user.id === id);
    if (!user) return null;
    if (name !== undefined) user.name = name;
    if (email !== undefined) {
        if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            throw new Error("Email inválido");
        }
        user.email = email;
    }
    return user;
};

const remove = (id) => {
    const index = users.findIndex(user => user.id === id);
    if (index === -1) return null;
    return users.splice(index, 1)[0];
};

module.exports = {
    getAll, getById, create, update, remove
};
