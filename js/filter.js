const buttons = document.querySelectorAll('.portfolio-filter button');
  const items = document.querySelectorAll('.portfolio-list .item');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;
  
      if (category === 'all') {
        items.forEach(item => item.style.display = 'block');
      } else {
        items.forEach(item => {
          if (item.dataset.category === category) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      }
  
      alignListCenter(); // добавляем вызов функции выравнивания по центру
    });
  });

  function alignListCenter() {
    const visibleItems = document.querySelectorAll('.item:not([style*="display: none"])');
    const portfolioList = document.querySelector('.portfolio-list');
    if (visibleItems.length === 2) {
      portfolioList.style.justifyContent = 'center';
    } else {
      portfolioList.style.justifyContent = 'flex-start';
    }
  }
   // викликаємо функцію для вирівнювання списку по центру при завантаженні сторінки
  alignListCenter();

 
