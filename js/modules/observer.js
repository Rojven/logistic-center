export default class Observer {
    constructor(elems) {
        this.elems = document.querySelectorAll(elems);
        this.options = {
            root: null,
            threshold: 0.5,
            rootMargin: "0px"
        };
        this.observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('view-anim_appear');
                    observer.unobserve(entry.target);
                }
            })
        }, this.options);
    }

    onObserve() {
        this.elems.forEach(elem => {
            this.observer.observe(elem);
        })
    }

    init() {
        this.onObserve();
    }
}