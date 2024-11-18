document.getElementById('productOrderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    const userName = document.getElementById('user_name_product').value.trim();
    const productType = document.getElementById('product_type').value;
    const userEmail = document.getElementById('user_email_product').value.trim();
    const serviceDate = document.getElementById('service_date').value;
    const deliveryAddress = document.getElementById('delivery_address').value.trim();

    document.getElementById('nameError').textContent = '';
    document.getElementById('productTypeError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('dateError').textContent = '';
    document.getElementById('addressError').textContent = '';

    // Валидация имени
    if (userName.length < 2) {
        document.getElementById('nameError').textContent = 'Введите имя длиной минимум 2 символа.';
        isValid = false;
    }

    // Валидация выбора продукта или услуги
    if (!productType) {
        document.getElementById('productTypeError').textContent = 'Выберите продукт или услугу.';
        isValid = false;
    }

    // Валидация email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(userEmail)) {
        document.getElementById('emailError').textContent = 'Введите корректный E-mail.';
        isValid = false;
    }

    // Валидация даты
    if (!serviceDate) {
        document.getElementById('dateError').textContent = 'Выберите дату услуги.';
        isValid = false;
    }

    // Валидация адреса доставки
    if (deliveryAddress.length < 5) {
        document.getElementById('addressError').textContent = 'Введите адрес доставки длиной минимум 5 символов.';
        isValid = false;
    }

    if (isValid) {
        // Формируем содержимое для вывода
        document.getElementById('outputData').innerHTML = `
            <h3>Данные заказа</h3>
            <p><strong>Имя:</strong> ${userName}</p>
            <p><strong>Продукт или услуга:</strong> ${productType}</p>
            <p><strong>E-mail:</strong> ${userEmail}</p>
            <p><strong>Дата:</strong> ${serviceDate}</p>
            <p><strong>Адрес доставки:</strong> ${deliveryAddress}</p>
        `;
        
        document.getElementById('outputData').style.display = 'block';
    }
});

const headerTitle = document.querySelector('.offer__title');
headerTitle.addEventListener('click', function() {
    // Меняем цвет текста на синий
    headerTitle.style.color = 'blue';
});

// Скрытие кнопки и её плавное появление при наведении
const learnMoreButton = document.querySelector('.button');
learnMoreButton.addEventListener('mouseover', function() {
    learnMoreButton.style.opacity = '0';
    learnMoreButton.style.transition = 'opacity 0.5s ease';
});

learnMoreButton.addEventListener('mouseout', function() {
    learnMoreButton.style.opacity = '1';
});