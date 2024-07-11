const accordion = (triggerSelector) => {
    const btns = document.querySelectorAll(triggerSelector);

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            const activeStyle = 'active-style';
            const activeContent = 'active-content';
            const maxHeightValue = '80px';

            btns.forEach(item => {
                if (item !== btn) {
                    item.classList.remove(activeStyle);
                    item.nextElementSibling.classList.remove(activeContent);
                    item.nextElementSibling.style.maxHeight = '0'
                }
            });

            this.classList.toggle(activeStyle);
            this.nextElementSibling.classList.toggle(activeContent);

            if(this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + parseInt(maxHeightValue, 10) + 'px';
            } else {
                this.nextElementSibling.style.maxHeight = '0'
            }
        })
    })


    //       blocks = document.querySelectorAll(itemsSelector);

    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInUp');
    // });

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         if (!this.classList.contains('active')) {
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style')
    //             });
    //             this.classList.add('active', 'active-style')
    //         }
    //     })
    // })
}

export default accordion;