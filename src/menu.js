// Menu tab
function addMenu() {
    let menu_items_list = require('./restaurantpage/src/menu-items.json');

    // div#content element
    const content = document.querySelector('#content');

    // div#description
    const desc = document.createElement('div');
    desc.setAttribute('id', 'description');

    // #description>h1
    const header = document.createElement('h1');
    header.textContent = 'The Menu';
    desc.appendChild(header);

    // div#description>#menu-items
    const menu_items = document.createElement('div');
    menu_items.setAttribute('id', 'menu-items');
    desc.appendChild(menu_items);

    // Create menu items
    for(let item of menu_items_list) {
        console.log(item);
        let menu_item = document.createElement('div');
        menu_item.setAttribute('class', 'menu-item');

        let menu_item_name = document.createElement('h2');
        menu_item_name.textContent = item.name;

        let menu_item_img = document.createElement('img');
        menu_item_img.setAttribute('class', 'menu-img');
        menu_item_img.src = './restaurantpage/src/food.jpg';

        let menu_item_desc = document.createElement('p');
        menu_item_desc.textContent = item.description;

        menu_item.appendChild(menu_item_name);
        menu_item.appendChild(menu_item_img);
        menu_item.appendChild(menu_item_desc);

        menu_items.appendChild(menu_item);
    };

    content.appendChild(desc);
};

export default addMenu;