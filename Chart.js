document.addEventListener('DOMContentLoaded', function(){

    // Add JSON file
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        document.querySelectorAll('.box').forEach(function(el){
            el.addEventListener('click', function(){
                // Change color and visibility Onclick
                document.querySelectorAll('.box').forEach(function(el){
                    el.style.backgroundColor = '';
                });
                el.style.backgroundColor = 'hsl(186, 34%, 60%)';
                document.querySelectorAll('.sum').forEach(function(sum) {
                    sum.style.visibility = 'hidden';
                });
    
                // Find the clicked '.sum' element and make it visible
                const sum = el.previousElementSibling;
                sum.style.visibility = 'visible';
    
                // Change the textContent with the JSON file
                const day = el.nextElementSibling.textContent.toLowerCase();
                const dayData = data.find(item => item.day === day);
                if(dayData){
                    sum.querySelector('p').textContent = '$' + dayData.amount;
                }
            });
        });
    });
});