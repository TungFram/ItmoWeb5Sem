
let oldMain = null;
function generatePageForThisActivity(image, title, category, description) {
    // console.log("Card requested generating new page:");
    // console.log(image);
    // console.log(title);
    // console.log(category);
    // console.log(description);

    oldMain = document.getElementById('main').cloneNode(true);
    // let main = document.getElementById('main');
    let main = document.getElementById('main');
    main.innerHTML = "";
    // newMain.classList.add('main');
    // newMain.classList.add('text');
    // newMain.classList.add('text__color_black');
    // newMain.setAttribute('id', "newMain");

    let page = document.createElement('div');
    page.classList.add('card-page');

    let pageBackground = document.createElement('image');
    pageBackground.classList.add('card-page__image');
    pageBackground.setAttribute('src', image);
    pageBackground.setAttribute('alt', "Main photo of " + title);

    let pageTitle = document.createElement('div');
    pageTitle.classList.add('card-page__title');
    pageTitle.append(document.createTextNode(title));

    let pageCategory = document.createElement('div');
    pageCategory.classList.add('card-page__category');
    pageCategory.append(document.createTextNode(category));

    let pageDescription = document.createElement('p');
    pageDescription.classList.add('card-page__description');
    // pageDescription.classList.add('text');
    pageDescription.append(document.createTextNode(description));


    let goBackButton = document.createElement('input');
    goBackButton.setAttribute('type', 'button');
    goBackButton.setAttribute('value', "Вернуться обратно");
    goBackButton.setAttribute('onclick', "return2Activities(document.getElementById('main'));");

    let gridComments = document.createElement('article');
    gridComments.classList.add('comments');
    gridComments.classList.add('comments__theme_dark');

    page.append(pageBackground);
    page.append(pageTitle);
    page.append(pageCategory);
    page.append(pageDescription);
    main.append(page);
    main.append(goBackButton);

    gridComments.append(wrapperEl);
    main.append(gridComments);

    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then((response) => response.json())
        .then((arrayOfComments) => setTimeout(function () {
            console.log(arrayOfComments);
            console.log(arrayOfComments.length);

            console.log("Таблица комментариев начинает заполняться.")
            wrapperEl.remove();
            gridComments.classList.remove('comments__theme_dark');
            gridComments.classList.add('comments__theme_light');

            for (let i = 0; i < arrayOfComments.length; i++) {
                const commentObject = arrayOfComments[i];
                // console.log(comment);
                let comment = document.createElement('div');
                comment.classList.add('comments__item');

                let author = document.createElement('div');
                author.classList.add('comment__author');
                author.append(document.createTextNode(commentObject.name));

                let email = document.createElement('div');
                email.classList.add('comment__email');
                email.append(document.createTextNode(commentObject.email));

                let text = document.createElement('div');
                text.classList.add('comment__text');
                text.append(document.createTextNode(commentObject.body));

                comment.append(author);
                comment.append(email);
                comment.append(text);
                gridComments.append(comment);

                console.log("Коммент автора " + author.textContent + " (" + email.textContent + ") создан.");
            }

        }, 40000));
    // main.outerHTML = newMain.outerHTML;
}

function return2Activities(newElement) {
    console.log("Был произведен переход от конкретной активности обратно ко всем.");
    // console.log(newElement);
    // console.log(oldMain);
    newElement.outerHTML = oldMain.outerHTML;
}


























