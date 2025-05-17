const { gql } = require('apollo-server');

const typeDefs = gql`
  """Esquema de usuarios"""
  type User {
    """Identificador del usuario"""
    id: ID!
    """Nombre del usuario"""
    name: String!
    """Correo electrónico del usuario"""
    email: String!
  }

  type Query {
    """Devuelve todos los usuarios del sistema"""
    getUsers: [User]
    """Devuelve un usuario por su ID"""
    getUserById(id: ID!): User
  }

  type Mutation {
    """Crea un nuevo usuario"""
    createUser(name: String!, email: String!): User
    """Actualiza un usuario por su ID"""
    updateUser(id: ID!, name: String, email: String): User
    """Elimina un usuario por su ID"""
    deleteUser(id: ID!): User
  }
`;

module.exports = typeDefs;
