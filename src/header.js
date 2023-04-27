import navbar_items_list from './navbar-items';
import chef_image from './chef.png';

// Header section for all tabs
function addHeader() {

    // div#content element
    const content = document.querySelector('#content');

    // div#navbar
    const navbar = document.createElement('div');
    navbar.setAttribute('id', 'navbar');

    // div#description>#name-logo
    const name_logo = document.createElement('div');
    name_logo.setAttribute('id', 'name-logo');

    // div#description>#links
    const links = document.createElement('div');
    links.setAttribute('id', 'links');

    // #name-logo elements
    const name_logo_h1 = document.createElement('h1');
    name_logo_h1.textContent = 'The Unreal Gourmet';

    const name_logo_img = document.createElement('img');
    name_logo_img.setAttribute('id', 'logo-img');
    name_logo_img.src = chef_image;

    name_logo.appendChild(name_logo_h1);
    name_logo.appendChild(name_logo_img);

    // #links elements
    for(let items of navbar_items_list) {
        let link_element = document.createElement('p');
        link_element.textContent = items.name;
        link_element.setAttribute('id', items.id);
        link_element.setAttribute('class', 'navbar-link');
        links.appendChild(link_element);
    };
    
    navbar.appendChild(name_logo);
    navbar.appendChild(links);
    content.appendChild(navbar);
    
};

export default addHeader;