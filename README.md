# BagCheck App

BagCheck is an app where a user can log their financial transactions. I've brought tgether the skills I have learned thus far: Javascript, css, React and RESTful routes. I created my own backend server that provides data.

https://github.com/chellxh/budgtr-backend

## BagCheck Frontend Features

1. All pages should include the same navigation bar, which includes the name of the application and a button to create a new transaction.
1. An Index page that presents all of the transactions in my backend server.
1. After clicking on a single transaction, the user is brought to a Show page which includes more detailed information about the transaction.
1. When the button in the navigation bar to create a new transaction is clicked, the user is brought to a new page that includes a form to create a new transaction.
1. Forms are properly labeled and the `type` of inputs are properly set.
1. When a new transaction form is submitted, the transaction is created in the database and the user is brought to that new transaction's Show page.
1. On the transaction's Show page, there is a button to edit the current transaction. When clicked, the user is brought to a form page with data already filled in that can be edited.
1. When an edited transaction form is submitted, the resource is edited in the database and the user is brought to that new transaction's Show page.
1. On the transaction's Show page, there is a button to delete the current show page.
1. Using the transaction's data, a balance calculation is performed on the front-end application and displayed to the user on the Index page. In addition to the total, the CSS changes based on the value - green color if the bank account total is above 1000, a yellowish color if the bank account total is between 1 and 1000 and a reddish color if the bank account total is less than or equal to 0.

### BagCheck Backend

My server incorporates:

- `id` - A unique number for each item
  - `item_name`- string - the name of the transaction (ie: income, savings, cat food, etc.)
  - `amount` -number - the amount of the transaction
  - `date`- string - the date should be a simple string. As a bonus activity, use the date object and date input field and format it to be human-readable
  - `from` - string - who this transaction was with (ie. employer, bank, pet store, grocery store, etc)
  - `category` - string - what category does this fall into (income, savings, pets, food, etc)

1. A route exists to create new resources.
1. A route exists to read all resources.
1. A route exists to read a single resource.
1. A route exists to update a single resource.
1. A route exists to delete a single resource.
1. An appropriate "Not Found" response is given when a route is requested that does not match the created routes.

#### Deployed Site

https://bagcheck.netlify.app/
