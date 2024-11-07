const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const imageFiles = ['DAF0F2DF-292C-4E5B-BD8C-D6A3BCBEDDBB_1_105_c.jpeg', 'BC0C9ADF-82A6-4331-9DEC-859A77778BA5_1_105_c.jpeg', '23368D29-22C5-409F-B8BC-08C04D3213EB_1_105_c.jpeg', '821687CA-F86C-4546-B5BD-3C2E7E45415C_1_105_c.jpeg', 'CDE509CC-A856-4B6A-8F9C-A46ABDBB7AC3_1_105_c.jpeg'];
const altTexts = [
  'Red Bronco in Fall',
  'Me and friends on roof',
  'Friends and I in Madrid',
  'Hike by Lake Isabelle',
  'Chappell Roan at Lolla'
];

ImageFiles.forEach((file, index) => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `../img/${file}`);
    newImage.setAttribute('alt', altTexts[index]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', () => {
      displayedImage.src = `../img/${file}`;
      displayedImage.alt = altTexts[index];
    });
  });
  
  
  btn.addEventListener('click', () => {
    if (btn.textContent === 'Darken') {
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      btn.textContent = 'Lighten';
    } else {
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
      btn.textContent = 'Darken';
    }
  });
/* Declaring the alternative text for each image file */

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */

