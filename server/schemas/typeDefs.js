const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Book {
  bookId: String
  author: [String]
  description: String
  image: String
  title: String
  link: String
}

type User {
  _id: ID
  username: String
  email: String
  bookCount: Int
  savedBooks: [Book]
}
`