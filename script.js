const galleryContainer = document.querySelector(".gallery");
const galleryItems = galleryContainer.querySelectorAll(".galler-item");
const indicator = document.querySelector(".indicator");

const defaultItemflex = "0 1 20px";
const hoverItemflex = "1 1 400px";

const updateGalleryItems = () => {
    galleryItems.forEach((item) => {
        let flex = defaultItemflex;
        
        if(item.isHovered) {
            flex = hoverItemflex;
        };

        item.style.flex = flex;
    });
};

galleryItems[0].isHovered = true;
updateGalleryItems();

galleryItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        galleryItems.forEach((otherItems) => {
            otherItems.isHovered = otherItems === item;
        });

        updateGalleryItems();
    });
});


galleryContainer.addEventListener("mousemove", (e) => {
    indicator.style.left = `${
        e.clientX - galleryContainer.getBoundingClientRect().left
    }px`;
});