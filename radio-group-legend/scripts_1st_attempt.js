// aria specs for radiogroup role

// Tab and Shift + Tab: Move focus into and out of the radio group. When focus moves into a radio group:
    // If a radio button is checked, focus is set on the checked button.
    // If none of the radio buttons are checked, focus is set on the first radio button in the group.
// Space: checks the focused radio button if it is not already checked.
// Right Arrow and Down Arrow: move focus to the next radio button in the group, uncheck the previously focused button, and check the newly focused button. If focus is on the last button, focus moves to the first button.
// Left Arrow and Up Arrow: move focus to the previous radio button in the group, uncheck the previously focused button, and check the newly focused button. If focus is on the first button, focus moves to the last button.

let ariaRadioGroup = document.getElementById("aria-radio-group")
let radios = Array.from(ariaRadioGroup.querySelectorAll('[role="radio"]'));
let lastKey;

window.addEventListener('keydown', function(e) {
    setTimeout(function(){
        lastKey = e.key
    }, 0)
    
});

radios.forEach((radio, i) => {
    let currentKey;
    radio.addEventListener('keydown', (e) => {
        let prev = (i-1 + radios.length) % radios.length
        let next = (i+1) % radios.length

        console.warn("I'm on a radio button and listening", e.key)
    
        if (e.key ==='ArrowDown' || e.key === 'ArrowRight') {
            radios[next].focus();
        } else if (e.key ==='ArrowUp' || e.key === 'ArrowLeft') {
            radios[prev].focus();
        } else if (e.key === ' ') {
            radio.click()
        }
        currentKey = e.key;

    });
    function handleRadios(event) {
        let icon = radio.querySelector('i');

        // otherwise select the radio button
        radios.forEach((anyRadio) => {
            let anyRadioIcon = anyRadio.querySelector('i')
            anyRadio.setAttribute('aria-checked', 'false')
            anyRadio.setAttribute('tabindex', -1)
            anyRadioIcon.classList.replace('bi-record-circle', 'bi-circle')
        });
        radio.setAttribute('aria-checked', 'true')
        radio.setAttribute('tabindex', 0)
        icon.classList.replace('bi-circle', 'bi-record-circle')
    }
    radio.addEventListener('click', () => {
        handleRadios('click');
    });
    radio.addEventListener('focus', (e) => {
        // // don't auto select on focus if it is the first radio button and was tabbed into
        // if (i== 0 && lastKey === 'Tab') {
        //     return;
        // } else {
            handleRadios('focus');
    //     }
    });
});

