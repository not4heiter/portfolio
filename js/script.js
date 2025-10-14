const skills = {
    data : [
        {skillName: 'html',     value: 30,  icon: 'html.svg'},
        {skillName: 'css',      value: 20,  icon: 'css.svg'},
        {skillName: 'python',   value: 50,  icon: 'c++.svg'},
        {skillName: 'cpp',      value: 70,  icon: 'python.svg'}
    ],
    
    generateList(skillList){
        this.data.forEach(skillData => {
            const nameElement = document.createElement('dt');
            nameElement.classList.add(`skill-item`)
            nameElement.style.backgroundImage = `url("img/skill=${(skillData.icon)}")`;
            nameElement.innerHTML = skillData.skillName;

            const levelElement = document.createElement('dd');
            levelElement.classList.add('skill-level');

            const levelBlock = document.createElement('div');
            levelBlock.style.width = `${skillData.value}%`;
            levelBlock.innerHTML = `${skillData.value}%`;

            levelElement.append(levelBlock);

            skillList.append(nameElement, levelElement);
        })
    }
}

const skillList = document.querySelector('.skill-list')
skills.generateList(skillList)