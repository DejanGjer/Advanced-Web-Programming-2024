## Exercises 4 - Angular Components

You can find implementation from exercises in the directory `Exercises 4/ecommerce`.
Setup instructions for installing and running angular can be found in the file `Exercises 4/angular_setup.md`.

In this exercise we implemented a simple ecommerce application and demonstrated the use of components, data binding (text interpolation and property binding), event binding and pipes.

### Ecommerce Application

We are going to start building ecommerce appplication following these steps:
1. Start a new project to build an ecommerce website.
2. Create a component to display a single product.
3. The product component should display a name, price, and image for the product.
You can initialize the component with some defaults for the same. Use any place‐
holder image you want. In the class which represents product image should be stored as url to the relative path of an image.
4. Highlight the entire element in a different color if the product is on sale. Whether
the product is on sale can be an attribute of the product itself.
5. Add buttons to increase and decrease the quantity of the product in the cart. The quantity in the cart (this is related to product, so how much of each product is added to cart) should be visible in the UI. Disable the button for descrement if the quantity is already zero.
6. Organize the product data in a better way, by representing the product as a class and then use it in the component.


### How to run angular projects?

1. Clone this repository to your local machine.
2. Make sure you followed all the instructions in `Exercises 4/angular_setup.md` to setup nvm, npm, node and angular cli.
3. Open terminal and navigate to the root directory of angular project (e.g. `Exercises 4/stock-market`).
4. Run `npm install` to install all dependencies.
5. If you encounter any vulnerabilities, run `npm audit fix` to fix them.
6. Run `ng serve` to start the server.
