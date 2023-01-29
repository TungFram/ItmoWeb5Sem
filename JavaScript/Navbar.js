(
    function () {
        const navbar = `
        <nav id="navbar" class="navbar">
            <div class="navbar__item navbar__item_logo"></div>
        
            <div id="menu" class="menu navbar__item navbar__item_menu">
        
                <a class="menu__link menu__button" href="index.html">
                    Главная страница
                </a>
        
                <a class="menu__link menu__button" href="Activities.html">
                    Все активности
                </a>
        
                <a class="menu__link menu__button" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                   target="_/">
                    Не нажимать
                </a>
        
        
                <a class="menu__link menu__button" href="Meme.html">
                    ASCII графика
                </a>
        
                <a class="menu__link menu__button" href="PhysicalExercises.html">
                    Программа тренировок
                </a>
        
                <a class="menu__link menu__button" href="#">
                    Будущие функции и страницы
                </a>
        
                <a class="menu__link menu__button" href="###">
                    Выключенные функции
                </a>
            </div>
        
            <div class="theme navbar__item navbar__item_theme"></div>
            <div class="search navbar__item navbar__item_search"></div>
        </nav>
        `;

        let htmlElement = document.getElementById('navbar');
        htmlElement.outerHTML = navbar;

    }
)();

// function loadNavbar() {
//     const navbar = `
//     <nav id="navbar" class="navbar">
//         <div class="navbar__item navbar__item_logo"></div>
//
//         <div id="menu" class="menu navbar__item navbar__item_menu">
//
//             <a class="menu__link menu__button" href="index.html">
//                 Главная страница
//             </a>
//
//             <a class="menu__link menu__button" href="Activities.html">
//                 Все активности
//             </a>
//
//             <a class="menu__link menu__button" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//                target="_/">
//                 Не нажимать
//             </a>
//
//
//             <a class="menu__link menu__button" href="Meme.html">
//                 ASCII графика
//             </a>
//
//             <a class="menu__link menu__button" href="PhysicalExercises.html">
//                 Программа тренировок
//             </a>
//
//             <a class="menu__link menu__button" href="#">
//                 Будущие функции и страницы
//             </a>
//
//             <a class="menu__link menu__button" href="###">
//                 Выключенные функции
//             </a>
//         </div>
//
//         <div class="theme navbar__item navbar__item_theme"></div>
//         <div class="search navbar__item navbar__item_search"></div>
//     </nav>
//     `;
//
//     let htmlElement = document.getElementById('navbar');
//     htmlElement.outerHTML = navbar;
//
// }