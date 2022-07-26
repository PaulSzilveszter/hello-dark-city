# Hello Dark City Website
## How to start the website

NOTE: Make sure to have npm installed and updated on your computer

Change your current directory to the project directory. 
(You can use the command:  `$ cd hello-dark-city`)

Install the dependencies by running `$ npm install` 

Start the website by running `$ npm start`

## Packages used for building this project

[React](reactjs.org) - for reusability \
[React Router](https://reactrouter.com/) - for managing the URL \
[cursor-effects](https://github.com/tholman/cursor-effects) - for cursor effects \
[React Helmet](https://www.npmjs.com/package/react-helmet) - for better SEO 


NOTE: The version of the packages can be seen in the "package.json" file

## Hierarchy of the the project explained

NOTE: "~" represents the "hello-dark-city" directory and I tried to make the file functionality to be pretty self explanatory from the file name 

All the assets(images, audios, videos, etc.) needed for this project will be placed in the "~/src/assets"

The "index.js" file represents the file that renders the whole page to the html file located in "~/public/index.html"

The "App.js" file puts the components together and manages routing

The Components needed for the project will stay into the "~/src/components" directory(with the exception of "App.js"), following the next rules:
-   The component file and the component stylesheet will sit in the same directory, having the same name, with the exception of the extension(ex: | Component.js -> component file | Component.css -> component stylesheet |)
-   The ids and classed that are used in the stylesheets will follow the kebab-case rule and will have very specific names that will not repeat, only if you want those classes or ids to be overwritten(because the stylesheets are rendered for the whole page, not just the component that uses it). NOTE: Please avoid using tags' names, beacuse they are overwritten the easiest!!!  
-   Reusable components that do not follow a specific hierarchy in the project and can be used in different parts of code will be placed in " ~/src/components/reusables" directory. The rest will be placed in " ~/src/components" 
-   The components that have subcomponents(that are not reusables) in their code will have a dedicated directory for those subcomponents(conatining them) named like the parent component

