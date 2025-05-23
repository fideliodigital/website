# Fidelio Digital Website

Official website for Fidelio Digital, a digital transformation consultancy that helps businesses solve problems in operations, marketing, software development, and process optimization.

## About Fidelio

Fidelio believes that digital transformation is essentially human. We empower leading companies that generate value for communities through digital solutions that maintain the human element in all processes.

Our core principles:
- Essentially Human: We focus on the human aspects of digital transformation
- Biodiverse: We embrace diversity in all forms and collaborate with people of different backgrounds
- Independent: We provide flexibility for each person to work in their optimal conditions
- Dignified Work: We recognize work as a means to earn a living and as a dignifying element for individuals

## Technologies Used

This website is built with:
- HTML5
- CSS3
- JavaScript
- Bootstrap
- Various vendor libraries (Swiper, Scrollbar, Themify, etc.)
- Google Analytics

## TypeScript Migration

This project has been migrated from JavaScript to TypeScript. The TypeScript source files are located in the `src` directory, and the compiled JavaScript files are output to the `dist/js` directory.

### Development

To modify the TypeScript files:

1. Make changes to the TypeScript files in the `src` directory
2. Run `npm run build` to compile the TypeScript files to JavaScript
3. The compiled JavaScript files will be output to the `dist/js` directory

The HTML files have been updated to reference the compiled JavaScript files in the `dist/js` directory.

### Project Structure

- `src/` - TypeScript source files
  - `components/` - TypeScript component files
- `dist/` - Compiled JavaScript files
  - `js/` - Compiled JavaScript files
    - `components/` - Compiled JavaScript component files 
- `js/` - Original JavaScript files (deprecated)
  - `components/` - Original JavaScript component files (deprecated)

### Scripts

- `npm run build` - Compile TypeScript files to JavaScript
- `npm run watch` - Watch TypeScript files and compile on changes

## Setup and Development

To set up this project locally:

1. Clone the repository
2. Open the project in your preferred code editor
3. Run a local server to view the website
4. For R users, the repository includes an R project file (website.Rproj)

## File Structure

- `index.html` - Home page
- `nosotros.html` - About Us page
- `contacto.html` - Contact page
- `blog_plantilla.html` - Blog template
- `css/` - Stylesheets
- `js/` - JavaScript files
- `img/` - Images
- `vendor/` - Third-party libraries
- `scss/` - SCSS source files

## Contact

For more information, visit [Fidelio Digital](https://www.fidelio.com.co) or contact us through our [LinkedIn](https://www.linkedin.com/company/fideliodigital).