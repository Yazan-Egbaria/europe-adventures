// links toggle active class
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.links');
    links.forEach(function (link) {
        link.addEventListener('click', function () {
            links.forEach(function (otherLink) {
                otherLink.classList.remove('active');
            });
            link.classList.add('active');
        });
    });

    // onClick open a new content
    let overview = document.querySelector('.overview');
    let details = document.querySelector('.details');
    let cost = document.querySelector('.cost');
    let remarks = document.querySelector('.remarks');
    
    let contentOne = document.querySelector('.section-13-content-1');
    let contentTwo = document.querySelector('.section-13-content-2');
    let contentThree = document.querySelector('.section-13-content-3');
    let contentFour = document.querySelector('.section-13-content-4');
    
    overview.addEventListener('click', openOverview);
    function openOverview() {
        contentOne.style.display = "flex";
        contentTwo.style.display = "none";
        contentThree.style.display = "none";
        contentFour.style.display = "none";
    };
    
    details.addEventListener('click', openDetails);
    function openDetails() {
        contentOne.style.display = "none";
        contentTwo.style.display = "flex";
        contentThree.style.display = "none";
        contentFour.style.display = "none";
    };
    
    cost.addEventListener('click', openCost);
    function openCost() {
        contentOne.style.display = "none";
        contentTwo.style.display = "none";
        contentThree.style.display = "flex";
        contentFour.style.display = "none";
    };
    
    remarks.addEventListener('click', openRemarks);
    function openRemarks() {
        contentOne.style.display = "none";
        contentTwo.style.display = "none";
        contentThree.style.display = "none";
        contentFour.style.display = "flex";
    };
    
    // Details
    const contentTitles = document.querySelectorAll(".content-title");
    contentTitles.forEach(function (title) {
        title.addEventListener("click", function () {
            contentTitles.forEach(function (otherTitle) {
                otherTitle.classList.remove("active");
            });
    
            title.classList.add("active");
        });
    });
    
    const accordionContent = document.querySelectorAll('.section-13-content-2-day');
    accordionContent.forEach((item, index) => {
        let header = item.querySelector('.content-title');
        header.addEventListener("click", () => {
            item.classList.toggle('active');
            let description = item.querySelector(".img-content");
    
            if (item.classList.contains("active")) {
                description.style.maxHeight = description.scrollHeight + "px";
            } else {
                description.style.maxHeight = "0";
            }
    
            removeOpen(index);
        });
    });
    
    function removeOpen(index) {
        accordionContent.forEach((item2, index2) => {
            if (index != index2) {
                item2.classList.remove("active");
                let des = item2.querySelector(".img-content");
                des.style.maxHeight = "0";
            }
        });
    }    
});







