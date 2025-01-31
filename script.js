function showMenu() {  
    document.getElementById('sidebar').style.display = 'block'; // Показываем меню  
}  

function hideMenu() {  
    document.getElementById('sidebar').style.display = 'none'; // Скрываем меню  
}  

// Добавляем обработчик события mouseenter для меню  
document.getElementById('sidebar').addEventListener('mouseenter', showMenu);  
document.getElementById('sidebar').addEventListener('mouseleave', hideMenu); 

document.getElementById('contactButton').addEventListener('click', function() {  
    document.getElementById('firstForm').style.display = 'block'; // Показываем первую форму  
});  

document.getElementById('contactForm').addEventListener('submit', function(event) {  
    event.preventDefault(); // Отменяем стандартное поведение формы  
    document.getElementById('firstForm').style.display = 'none'; // Скрываем первую форму  
    document.getElementById('secondForm').style.display = 'block'; // Показываем вторую форму  
});  

document.getElementById('serviceForm').addEventListener('submit', function(event) {  
    event.preventDefault(); // Отменяем стандартное поведение формы  
    document.getElementById('secondForm').style.display = 'none'; // Скрываем вторую форму  
    document.getElementById('message').style.display = 'block'; // Показываем сообщение  
});  
document.getElementById('openFormButton').addEventListener('click', function() {  
    window.location.href = 'form1.html'; // Переход на первую форму  
});  