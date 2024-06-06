let SideBarIcon = document.getElementById('sidebar-icon');
let CloseSideBarIcon = document.getElementById('close-icon');
let SideBar = document.querySelector('.sidebar');

SideBarIcon.addEventListener('click' , function(){
    SideBar.style.display = 'block';
    CloseSideBarIcon.style.display = 'block';
    SideBarIcon.style.display = 'none';
});

CloseSideBarIcon.addEventListener('click' , function(){
    SideBar.style.display = 'none';
    SideBarIcon.style.display = 'block';
    CloseSideBarIcon.style.display = 'none';
})

