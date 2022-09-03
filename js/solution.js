'use strict';

( () => {

    const ulAttrs = document.body.firstElementChild.attributes;
    let ulAttrValues = [];
    let ulAttrNames = [];

    for (let item of ulAttrs) {
        ulAttrValues.push(item.value);
        ulAttrNames.push(item.name);
    }

    console.log(ulAttrValues);
    console.log(ulAttrNames);


    const ulElLastChild = document.querySelector('ul li:last-child').innerHTML = 'Hello, my name is Kristina!';
    console.log(ulElLastChild);

    const ulElFirstChild = document.querySelector('ul li:first-child');
    ulElFirstChild.setAttribute('data-my-name', 'Kristina');
    console.log(ulElFirstChild);


    const ulWithoutAttr = document.querySelector('ul');
    ulWithoutAttr.removeAttribute('data-dog-tail');
    console.log(ulWithoutAttr);

} )();