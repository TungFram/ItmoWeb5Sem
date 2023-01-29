(
    function () {
        let header = `
        <header id = "header" class="header">
            <script href="Helping/outline-control.js" rel="script"></script>
            
            <section class="site-info header__item">
                <a class="site-info__logo" href="index.html"></a>
            
            
                <div class="site-info__title">Ckyku.net</div>
            
            
                <div class="site-info__slogan">
                    Место, где можно узнать чем можно заняться и отказаться от скуки и лени
                </div>
            </section>
            
            <!--    <section class="header__item"></section>-->
        </header>
        `;


        let headerElement = document.getElementById('header');
        // console.log(header);
        headerElement.outerHTML = header;
    }
)();

// function loadHeader() {
//
//     let header = `
//     <header id = "header" class="header">
//         <script href="Helping/outline-control.js" rel="script"></script>
//
//         <section class="site-info header__item">
//             <a class="site-info__logo" href="index.html"></a>
//
//
//             <div class="site-info__title">Ckyku.net</div>
//
//
//             <div class="site-info__slogan">
//                 Место, где можно узнать чем можно заняться и отказаться от скуки и лени
//             </div>
//         </section>
//
//         <!--    <section class="header__item"></section>-->
//     </header>
//     `;
//
//
//     let headerElement = document.getElementById('header');
//     console.log(header);
//     headerElement.outerHTML = header;
// }