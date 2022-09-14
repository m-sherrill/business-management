const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Company {
    _id: ID
    companyName: String!
    email: String!
    password: String!
    phone: Int
    employees: [Employee]
    customers: [Customer]
    vendors: [Vendor]
    products: [Products]
    purchaseOrders: [PurchaseOrders]
    userType: String!
  }

  type Customer {
      _id: ID
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      phone: Int
      userType: String!
  }

  type Vendor {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    phone: Int
    userType: String!
}

type Delivery {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    phone: Int
    userType: String!
}

type Employee {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    phone: Int
    userType: String!
}

type Products {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    phone: Int
    userType: String!
}

type PurchaseOrders {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    phone: Int
    userType: String!
}

type Tracking {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    phone: Int
    userType: String!
}

type WorkOrder {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    phone: Int
    userType: String!
}

type Vendor {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    phone: Int
    userType: String!
}

type Query {
    companies: [Company!]
    company(userId: ID!): Company
    me: Company
  }
  `

  module.exports = typeDefs;