// Home tab
function addHome() {

    // div#content element
    const content = document.querySelector('#content');

    // div#description
    const desc = document.createElement('div');
    desc.setAttribute('id', 'description');

    // div#description>h1
    const desc_h1 = document.createElement('h1');
    desc_h1.textContent = 'Explore the wonders of The Unreal Gourmet';
    desc.appendChild(desc_h1);

    // div#description>h2
    const desc_h2 = document.createElement('h2');
    desc_h2.textContent = 'Indulge in a visually stunning dining experience at The Unreal Gourmet, where every dish is a work of art.';
    desc.appendChild(desc_h2);

    //div#description>p
    const desc_p = document.createElement('p');
    desc_p.textContent = 'At The Unreal Gourmet, creativity reigns supreme as each dish is meticulously crafted to be both visually stunning and delicious.' + 
    ' The restaurant boasts an exquisite taste experience, with a menu featuring a fusion of diverse flavors that challenge traditional culinary standards.' +
    ' With its daring and innovative approach to cuisine, The Unreal Gourmet is sure to leave a lasting impression on your taste buds.';
    desc.appendChild(desc_p);

    content.appendChild(desc);
};

export default addHome;