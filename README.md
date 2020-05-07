# GraphQL TypeORM Demo

Application contains graphql server and is integrated with TypeORM. Server is set up to run on port 8050.

## Requirements
* TypeScript (min version 3.x.x)
* NodeJS (min version 12.16.x)
* NPM (min version 6.x.x)

## How to run
To run the application, first you need to install the packages:
```bash
npm install
```

Then you can run using command:
```bash
npm start
```

## Example GraphQL queries and mutations
* Get all users
```graphql
query {
  users {
    id
  	firstname
    lastname
    nickname
    email
    password
  }
}
```

* Get user by id
```graphql
query {
  user(id: "2") {
    id
    firstname
    lastname
    nickname
    email
    password
  }
}
```

* Create user
```graphql
mutation {
  createUser(
    data: {
      firstname: "Jacek",
      lastname: "Papuga",
      nickname: "Kapitan Dżak",
      email: "j.papuga@gmail.com",
      password: "typowehasłodżaka"
    }
  ) {
    id
    firstname
    lastname
    nickname
    email
    password
  }
}
```

* Update user
```graphql
mutation {
  updateUser(
    id: "2", 
    data: {
    	nickname: "Lunatyk"
  	}
  )
  {
    id
    firstname
    lastname
    nickname
    email
    password
  }
}
```

* Delete user
```graphql
mutation {
  deleteUser(id: "3")
}
```

