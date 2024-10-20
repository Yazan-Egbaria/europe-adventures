// // greetings div
// const observerTwo = new IntersectionObserver ((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//         }
//         else {
//             entry.target.classList.remove('visible');
//         }
//     });
// });

// const invisibleElements = document.querySelectorAll('.invisible');
// invisibleElements.forEach((el) => observerTwo.observe(el));

// // rest of main
// const observer = new IntersectionObserver ((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         }
//         else {
//             entry.target.classList.remove('show');
//         }
//     });
// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));

// greetings div
const observerTwo = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observerTwo.unobserve(entry.target); // Stop observing once visible
        } else {
            entry.target.classList.remove('visible');
        }
    });
});

const invisibleElements = document.querySelectorAll('.invisible');
invisibleElements.forEach((el) => observerTwo.observe(el));

// rest of main
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Stop observing once visible
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));




