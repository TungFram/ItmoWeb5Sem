(
    function () {
        let currentPage = document.location.pathname.split('/').pop();
        console.log(document.location);
        console.log("Current page: " + currentPage);

        // Foreach child in menu (link {a}).
        // console.log(menu);
        console.log(document.getElementsByClassName('menu__button'));
        for (let element of document.getElementsByClassName('menu__button'))
        {
            // console.log("Цикл пошел, смотрим элемент!");
            // console.log(element);
            let itemLink = element.getAttribute('href');
            switch (itemLink) {
                case currentPage:
                    // console.log("Same page!");
                    // console.log("Current: " + currentPage + ", cycle link: " + itemLink);
                    element.classList.add('menu-button__type_active');
                    break;

                case '#':
                    // console.log("Disabled");
                    // console.log("Current: " + currentPage + ", cycle link: " + itemLink);
                    element.classList.add('menu-button__type_disabled');
                    break;

                case '###':
                    // console.log("Invisible!");
                    // console.log("Current: " + currentPage + ", cycle link: " + itemLink);
                    element.classList.add('menu-button__type_invisible');
                    break;

                default:
                    // console.log("Common page");
                    // console.log("Current: " + currentPage + ", cycle link: " + itemLink);
                    element.classList.add('menu-button__type_common');
            }
        }
    }
)();