import contacts_list from './contact-items';

// Contact us tab
function addContact() {

    // div#content element
    const content = document.querySelector('#content');

    // div#description
    const desc = document.createElement('div');
    desc.setAttribute('id', 'description');

    // #description>h1
    const header = document.createElement('h1');
    header.textContent = 'Contact Us';
    desc.appendChild(header);

    // contacts elements
    for (let item of contacts_list) {
        // #description>#contact-window
        const contact = document.createElement('div');
        contact.setAttribute('class', 'contact-window');
        desc.appendChild(contact);

        // #description>#contact-window>.contact-info>.contact-info-header
        const contactHeader = document.createElement('h2');
        contactHeader.textContent = item.name
        contactHeader.setAttribute('class', 'contact-info-header');
        contact.appendChild(contactHeader);

        // #description>#contact-window>#contact-info>#contact-info-body
        const contactBody = document.createElement('div');
        contactBody.setAttribute('class', 'contact-info-body');

        // #description>#contact-window>#contact-info>#contact-info-body-text
        const contactBodyText = document.createElement('div');
        contactBodyText.setAttribute('class', 'contact-info-body-text');

        // Text content for contact info
        const contactBodyDescription = document.createElement('p');
        contactBodyDescription.textContent = item.description;
        contactBodyDescription.setAttribute('class', 'contact-info-description');

        const contactBodyPhone = document.createElement('p');
        contactBodyPhone.textContent = item.phone;
        contactBodyPhone.setAttribute('class', 'contact-info-phone');

        const contactBodyEmail = document.createElement('p');
        contactBodyEmail.textContent = item.email;
        contactBodyEmail.setAttribute('class', 'contact-info-email');

        contactBodyText.appendChild(contactBodyDescription);
        contactBodyText.appendChild(contactBodyPhone);
        contactBodyText.appendChild(contactBodyEmail);
        contactBody.appendChild(contactBodyText);

        // Image for contact info
        const contactImage = document.createElement('img');
        contactImage.setAttribute('class', 'contact-image');
        contactImage.src = item.image;
        contactBody.appendChild(contactImage);

        contact.appendChild(contactBody);
    }

    // Append all children
    content.append(desc);
}

export default addContact;