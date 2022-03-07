export default class Burger {
    constructor(btnOpen, btnClose, menu, bg, links, btn) {
        this.btnOpen = document.querySelector(btnOpen);
        this.btnClose = document.querySelector(btnClose);
        this.menu = document.querySelector(menu);
        this.bg = document.querySelector(bg);
        this.links = document.querySelectorAll(links);
        this.btn = document.querySelector(btn)
    }

    onBurgerOpen() {
        this.btnOpen.addEventListener('click', () => {
            this.menu.classList.add('burger_active');
            this.bg.classList.add('bg_active');
            document.body.style.overflow = 'hidden';
        })
    }

    closeFucStates() {
        this.menu.classList.remove('burger_active');
        this.bg.classList.remove('bg_active');
        document.body.style.overflow = '';
    }

    onBurgerClose(btn) {
        btn.addEventListener('click', () => this.closeFucStates())
        this.links.forEach(link => {
            link.addEventListener('click', () => this.closeFucStates())
        })
    }

    init() {
        this.onBurgerOpen();
        this.onBurgerClose(this.btnClose);
        this.onBurgerClose(this.btn);
        this.onBurgerClose(this.bg);
    }
}
