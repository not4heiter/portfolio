const skills = {
    data : [
        {skillName: 'html',     value: 30,  icon: 'html.svg'},
        {skillName: 'css',      value: 20,  icon: 'css.svg'},
        {skillName: 'python',   value: 50,  icon: 'c++.svg'},
        {skillName: 'cpp',      value: 70,  icon: 'python.svg'}
    ],

    sortMode: null,

    generateList(skillList){
        skillList.innerHTML = '';
        this.data.forEach(skillData => {
            const nameElement = document.createElement('dt');
            nameElement.classList.add(`skill-item`)
            nameElement.style.backgroundImage = `url("img/skill=${skillData.icon}")`;
            nameElement.innerHTML = skillData.skillName;

            const levelElement = document.createElement('dd');
            levelElement.classList.add('skill-level');

            const levelBlock = document.createElement('div');
            levelBlock.style.width = `${skillData.value}%`;
            levelBlock.innerHTML = `${skillData.value}%`;

            levelElement.append(levelBlock);

            skillList.append(nameElement, levelElement);
        })
    },

    sortList(typeSort) {
        if (this.sortMode !== typeSort) {
            this.sortMode = typeSort
            this.data.sort(getComparer(typeSort));
        } else {
            this.data.reverse();
        }
        this.generateList(skillList);
    }
}

const skillList = document.querySelector('.skill-list')
skills.generateList(skillList)

const sortBtnsBlock = document.querySelector('.skill-header');
sortBtnsBlock.addEventListener('click', (e) => {
    let target = e.target
    if (target.nodeName === "BUTTON") {
        switch (target.dataset.type) {
            case 'skillName':
            case 'value':
                skills.sortList(target.dataset.type);
                break;
            default:
                console.log('Неизвестная кнопка');
        }
    }
});

function compare(a, b) {
    if (a.name < b.name) {
        return -1;
    }

    if (a.name > b.name) {
        return 1;
    }

    return 0;
}

function getComparer(prop) {
    return function (a, b) {
        if (a[prop] < b[prop]) {
            return -1;
        }

        if (a[prop] > b[prop]) {
            return 1;
        }

        return 0;
    }
}

const nav = document.querySelector('nav');
const menuSwitch = document.querySelector('.nav-btn');
const menuSwitchText = document.querySelector('.nav-btn .visually-hidden')
const menu = {
    close() {
        nav.classList.add('main-nav_closed');
        menuSwitch.classList.remove('nav-btn_close');
        menuSwitch.classList.add('nav-btn_open');
        menuSwitchText.textContent = 'Открыть меню';
    },
    open() {
        nav.classList.remove('main-nav_closed');
        menuSwitch.classList.remove('nav-btn_open');
        menuSwitch.classList.add('nav-btn_close');
        menuSwitchText.textContent = 'Закрыть меню';
    }
};

menuSwitch.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-btn_open')) {
        menu.open();
    } else {
        menu.close();
    }
});

menu.close();