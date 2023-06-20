# E-Commerce Backend

![GitHub](https://img.shields.io/github/license/NateAyye/e-commerce-backend?label=License)

## Description

This is A Backend Server for an E-Commerce site. It uses Express.js for the server and MySQL for the database. It also uses Sequelize as an ORM to interact with the database.

## Table of Contents

- [E-Commerce Backend](#e-commerce-backend)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

## Installation

You can install this locally and run your very own version of it by running:

> Note: You will need to have [MySQL](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-install.html) installed on your machine to run this.

```
git clone https://github.com/NateAyye/e-commerce-backend.git
cd e-commerce-backend
npm install
```

Now with the project installed and MySQL installed, Log into the MySQL CLI with the command `mysql -u root -p` and enter your password for the root user in your mysql DB. (You will only need to create a database for this project to work) Then you can run the following command to create the database:

```sql
source db/schema.sql
```

! You Should not need the MySQL Console any more after this point !

Create a `.env` file in the root of the project that has the same contents as the `.env.EXAMPLE` file. Then you can run the following command to seed the database with some data:

```shell
npm run seed
```

Now you can run the following command to start the server:

```shell
npm start
```

Or run it in watch mode so that it restarts the server after you make a change to a file with the following command:

```shell
npm run watch
```

## Usage

External Link to Video Example [Here!](https://drive.google.com/file/d/1voQsuJr4TMv2gzhiS2QDXGUprZ0cjDgR/view?usp=sharing)

## Contribution

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Basic Rules for contributing to this repo are gonna be held to standards with the [Contributor Convenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) Standards.

## Tests

No Test Setup For This Project Yet.

## License

Refer to the [MIT License](https://github.com/NateAyye/e-commerce-backend/blob/main/LICENSE) file within the root of the repository;

## Questions

Want to know me a little bit bette more? [NateAyye's Profile](https://github.com/NateAyye)

Want to get in contact with me?

- Send an email to <a href='mailto:nathanacuevas97@gmail.com'>nathanacuevas97@gmail.com</a>