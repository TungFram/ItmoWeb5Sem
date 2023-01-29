// async function selectInputById(idOfInput) {
//     if (idOfInput === null || idOfInput === undefined) {
//         throw new Error("Произведена попытка выбора вводной формы по неизвестному или нулевому идентификатору.");
//     }
//
//     let foundedInput = document.getElementById(idOfInput);
//     if (foundedInput === null || foundedInput === undefined) {
//         return new Promise((resolve) => {
//             console.log("Input founded.");
//             console.log(foundedInput);
//             resolve(foundedInput);
//         });
//     } else {
//         return new Promise((reject) => {
//             console.log("Input not found.");
//             reject(foundedInput);
//         });
//     }
// }

function clearString(str) {
    return str.length < 12 ? str : (' ' + str).slice(1);
}

function createTextInputForm(placeholder) {
    let inputForm = document.createElement('input');
    inputForm.setAttribute('type', 'text');
    inputForm.setAttribute('placeholder', placeholder);
    return inputForm;
}

function createNumberInputForm(placeholder) {
    let inputForm = document.createElement('input');
    inputForm.setAttribute('type', 'number');
    // inputForm.setAttribute('maxlength', "1");
    inputForm.setAttribute('placeholder', placeholder);
    return inputForm;
}



function createOwnProgramTable() {
    let constructor = document.getElementById('ownProgramConstructor');

    let table = document.createElement('section');
    table.classList.add('grid');
    table.setAttribute('id', "ownProgramTable");

    let tableName = document.createElement('div');
    tableName.classList.add('week-number');
    tableName.classList.add('text__alignment_center');
    tableName.setAttribute('id', "nameOfTable");

    let inputForm = createTextInputForm("Название таблицы");


    tableName.append(inputForm);
    table.append(tableName);
    constructor.append(table)

    inputForm.focus();
    inputForm.addEventListener('change', async function (event) {
        event.preventDefault();
        console.log("Name of table submitted: " + event.target.value);
        inputForm.remove();
        tableName.append(document.createTextNode(event.target.value));
        createTitleOfExercises(table);
    });
}


function createTitleOfExercises(sourceTable) {
    const daysRU =
    [
        { "RU": "Пн", "EN": "Mon"},
        { "RU": "Вт", "EN": "Tue"},
        { "RU": "Ср", "EN": "Wed"},
        { "RU": "Чт", "EN": "Thu"},
        { "RU": "Пт", "EN": "Fri"},
        { "RU": "Сб", "EN": "Sat"},
    ]


    let exercisePattern = document.createElement('article');
    exercisePattern.classList.add('exercise');
    exercisePattern.classList.add('exercise__margin-top_5em');

    let exerciseName = document.createElement('div');
    exerciseName.classList.add('name-of-exercise');
    exerciseName.classList.add('text__size_170pct');

    let inputForm = createTextInputForm("Описание упражнения");

    inputForm.addEventListener('change', function (event) {
        event.preventDefault();

        // return new Promise((resolve, reject) => {
            if (event.target.value === " ")
            {
                console.log("Creating new exercise interrupted.");
                exercisePattern.remove();
                // return null;
                // reject();
            }
            else
            {
                exerciseName.append(document.createTextNode(event.target.value));
                console.log("Name of exercise submitted: " + event.target.value);
                inputForm.remove();

                console.log("New exercise was created.");
                console.log(exercisePattern);
                exercisePattern.classList.remove('exercise__margin-top_5em');
                // return exercisePattern;
                // resolve(exercisePattern);
                createNewExercise(sourceTable);
            }
        // });
    });

    exerciseName.append(inputForm);
    exercisePattern.append(exerciseName);


    for (let i = 0; i < daysRU.length; i++) {
        let daySection = document.createElement('div');
        daySection.classList.add('repeats');

        let dayElement = document.createElement('div');
        dayElement.classList.add('text__size_150pct');
        dayElement.append(document.createTextNode(daysRU[i].RU));

        daySection.append(dayElement);
        exercisePattern.append(daySection);
    }

    sourceTable.append(exercisePattern);
    inputForm.focus();

    // console.log("Creating new exercise canceled.");
    // return new Promise((reject) => { reject("Creating new exercise canceled.")})
}


function createNewExercise(sourceTable) {

    let exercisePattern = document.createElement('article');
    exercisePattern.classList.add('exercise');
    exercisePattern.classList.add('exercise__margin-top_5em');

    let namingOfExercise = document.createElement('div');
    namingOfExercise.classList.add('name-of-exercise');

    let namingTitle = document.createElement('div');
    namingTitle.classList.add('name-of-exercise__name');

    let namingDescription = document.createElement('div');
    namingDescription.classList.add('name-of-exercise__description');

    let inputFormNamingTitle = createTextInputForm("Название упражнения");

    inputFormNamingTitle.addEventListener('change', function (event) {
        event.preventDefault();

        const nameOfExercise = event.target.value;
        if (nameOfExercise === ' ')
        {
            console.log("Creating exercise interrupted.");
            exercisePattern.remove();
        }
        else
        {
            inputFormNamingTitle.remove();
            namingTitle.append(document.createTextNode(nameOfExercise));
            exercisePattern.classList.remove('exercise__margin-top_5em');
            console.log("Exercise name created: " + nameOfExercise + ".");

            console.log("Description of " + nameOfExercise + " exercise creating...")
            let inputFormNamingDescription = createTextInputForm("Название упражнения");
            inputFormNamingDescription.addEventListener('change', async function (event) {
                event.preventDefault();
                const descOfExercise = event.target.value;
                inputFormNamingDescription.remove();

                if (descOfExercise === ' ') {
                    namingDescription.remove();
                    console.log("Description of exercise " + nameOfExercise + " was canceled.")
                } else {
                    namingDescription.append(document.createTextNode(descOfExercise));
                    console.log("Description of " + nameOfExercise + " created: " + descOfExercise + ".")
                }



                for (let i = 0; i < 6; ++i) {
                    let isAllowedToContinue = false;

                    let repeatsByDay = document.createElement('div');
                    repeatsByDay.classList.add('repeats');

                    let inputFormNumberOfRepeats = createNumberInputForm("Кол-во повторений");
                    inputFormNumberOfRepeats.addEventListener('change', function (event) {
                        event.preventDefault();
                        const numberOfRepeats = parseInt(event.target.value);

                        if (numberOfRepeats < 0)
                        {
                            // clearString(inputFormNumberOfRepeats.value);
                            inputFormNumberOfRepeats.placeholder = "Больше нуля!"
                            // TODO: add wrong style to input!
                            inputFormNumberOfRepeats.value = "";
                            inputFormNumberOfRepeats.focus();
                        }
                        else if (numberOfRepeats === 0)
                        {
                            inputFormNumberOfRepeats.remove();
                            console.log("No repeats at " + i + " day with " + nameOfExercise + ".");
                        }
                        else
                        {
                            inputFormNumberOfRepeats.remove();
                            createNewRepeats(repeatsByDay, i, numberOfRepeats);
                            isAllowedToContinue = true;
                        }


                    });
                    repeatsByDay.append(inputFormNumberOfRepeats);
                    exercisePattern.append(repeatsByDay);
                    inputFormNumberOfRepeats.focus();


                    function checkForContinue() {
                        if (isAllowedToContinue === true) {
                            return;
                        }

                        inputFormNumberOfRepeats.focus();
                        setTimeout(checkForContinue);
                    }

                    checkForContinue();
                }
            });
            namingDescription.append(inputFormNamingDescription);
            inputFormNamingDescription.focus();
        }
    });

    exercisePattern.append(namingOfExercise);
    namingOfExercise.append(namingTitle);
    namingOfExercise.append(namingDescription);
    namingTitle.append(inputFormNamingTitle);
    sourceTable.append(exercisePattern);
    inputFormNamingTitle.focus();

    localStorage.setItem('ownTable', JSON.stringify(sourceTable));
    console.log(JSON.parse(localStorage.getItem('ownTable')));
}


function createNewRepeats(dayPattern, numberOfDay, numberOfRepeats) {
    for (let i = 0; i < numberOfRepeats; i++) {
        let isAllowedToContinue = false;

        const times = document.createElement('div');

        let inputNumberOfTimes = createNumberInputForm("Кол-во упр-й");
        inputNumberOfTimes.addEventListener('change', function (event) {
            event.preventDefault();
            const numberOfTimes = parseInt(event.target.value);

            if (numberOfTimes < 0) {
                inputNumberOfTimes.placeholder = "Больше 0!";
                // TODO: add wrong style to input!
                inputNumberOfTimes.value = "";
                inputNumberOfTimes.focus();
            }

            inputNumberOfTimes.remove();
            if (numberOfTimes === 0) {
                dayPattern.append(document.createTextNode("---"));

            } else {
                times.append(document.createTextNode(event.target.value));
                dayPattern.append(times);
            }

            console.log("Количество раз для "
                + i + "-ого подхода в упражнении"
                + dayPattern.firstElementChild.value
                + " в " + numberOfDay + "-й день поставлено в "
                + numberOfTimes + ".");

            isAllowedToContinue = true;
        });
        times.append(inputNumberOfTimes)
        dayPattern.append(times);


        function checkForContinue() {
            if (isAllowedToContinue === true) {
                return;
            }

            inputNumberOfTimes.focus();
            setTimeout(checkForContinue);
        }

        checkForContinue();
    }
}


function removeOwnProgramTable() {

    let constructor = document.getElementById('ownProgramConstructor');
    const element = constructor.lastElementChild;
    if (element.tagName !== 'BUTTON')
    {
        element.remove();
    }
}



























