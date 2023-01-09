var alleImages = document.querySelectorAll(".background")
var form = document.querySelector('form');
        var updateBlendMode = () => {
            var selection = document.querySelector('.blends').value;
            for (var i = 0; i < alleImages.length; i++) {
                alleImages[i].style.backgroundBlendMode = selection;
            }
        };

        form.addEventListener('submit', (e) => {
            e.preventDefault();
        });

        form.addEventListener('change', () => {
            updateBlendMode();
        });

        updateBlendMode();