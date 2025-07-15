const filterBtn=document.querySelectorAll(".filters__container-btn");const galleryItems=document.querySelectorAll(".glightbox4")
let customSlideHTML=`<div class="gslide">
                <div class="gslide-inner-content">
                    <div class="ginner-container">
                        <div class="gslide-media">
                            <div class="gslide-description">
                            <div class="gdesc-inner">
                                <h4 class="gslide-title"></h4>
                                <div class="gslide-desc"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>`;const lightbox=GLightbox({selector:'.glightbox4',closeButton:!0,touchNavigation:!0,keyboardNavigation:!0,zoomable:!1,slideHTML:customSlideHTML,});const grid=document.querySelector('#gallery');let msnry;imagesLoaded(grid,function(){msnry=new Masonry(grid,{itemSelector:'a',columnWidth:'.gallery__grid-sizer',percentPosition:!0})});filterBtn.forEach(btn=>{btn.addEventListener("click",(e)=>{const clicked=e.currentTarget;const filter=clicked.dataset.filter;filterBtn.forEach(otherBtn=>{if(otherBtn!==clicked){otherBtn.classList.remove("filters__container-btn--active")}});galleryItems.forEach(item=>{const category=item.dataset.category;if(filter===category){item.style.display="block"}else{item.style.display="none"}});if(clicked.classList.contains("filters__container-btn--active")){clicked.classList.remove("filters__container-btn--active");galleryItems.forEach(item=>{item.style.display="block"})}else{clicked.classList.toggle("filters__container-btn--active")}
if(msnry){msnry.layout()}})})