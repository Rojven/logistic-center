export default class Scroll {
    constructor(btns, sections) {
        this.btns = document.querySelectorAll(btns);
        this.sections = document.querySelectorAll(sections);
    }

    onMenuItemClick(btn, sections) {
        btn.addEventListener('click', () => {
            sections.scrollIntoView();
        });  
    }

    onLogoItemClick(btns) {
        btns.addEventListener('click', () => {
           window.scrollTo(top);
        });
    }

    init() {
        this.onLogoItemClick(this.btns[0]);
        this.onLogoItemClick(this.btns[5]);
        this.onMenuItemClick(this.btns[1], this.sections[2]);
        this.onMenuItemClick(this.btns[2], this.sections[3]);
        this.onMenuItemClick(this.btns[3], this.sections[4]);
        this.onMenuItemClick(this.btns[4], this.sections[5]);
        this.onMenuItemClick(this.btns[6], this.sections[2]);
        this.onMenuItemClick(this.btns[7], this.sections[3]);
        this.onMenuItemClick(this.btns[8], this.sections[4]);
        this.onMenuItemClick(this.btns[9], this.sections[5]);
        this.onMenuItemClick(this.btns[10], this.sections[5]);
        this.onMenuItemClick(this.btns[11], this.sections[5]);
        this.onMenuItemClick(this.btns[12], this.sections[5]);
    }
}