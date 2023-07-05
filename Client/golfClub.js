
const form = document.getElementById('club-selection-form');
const recommendationResult = document.getElementById('recommendation-result');
const clubName = document.getElementById('club-name');
const clubDistance = document.getElementById('club-distance');
const clubImage = document.getElementById('club-image');


form.addEventListener('submit', (e) => {
  e.preventDefault(); 

  
  const distance = document.getElementById('distance-input').value;
  const skillLevel = document.getElementById('skill-level-select').value;
  const gender = document.getElementById('gender').value;

  
  const recommendation = recommendClub(distance, skillLevel, gender);

  
  clubName.textContent = recommendation.name;
  clubDistance.textContent = `Distance: ${recommendation.distance} yards`;
  clubImage.src = recommendation.image;
  recommendationResult.style.display = 'block';
});


function recommendClub(distance, skillLevel, gender) {
  
  const recommendations = {
    male: {
      beginner: [
        { name: 'Driver', distance: 220, image: 'https://southamptongolfclub.com/wp-content/uploads/RAM-Accubar3.jpg' },
        { name: '3-wood', distance: 210, image: 'https://ak1.ostkcdn.com/images/products/P10707360.jpg?impolicy=medium' },
        { name: '5-wood', distance: 195, image: 'https://m.media-amazon.com/images/I/615phFlpgjL._AC_SY550_.jpg' },
        { name: 'Hybrid', distance: 185, image: 'https://cdn.shopify.com/s/files/1/0513/5859/7269/products/8d5d7f8b-2504-4b77-b723-56915268def8__51504_5000x.jpg?v=1661441151' },
        { name: '2 iron', distance: 180, image: 'https://cdn10.bigcommerce.com/s-jguinkpy/products/16424/images/112563/IMG_5459__31617.1611716309.1280.1200.jpg?c=2' },
        { name: '3 iron', distance: 170, image: 'https://cdn11.bigcommerce.com/s-ft76h4j74r/images/stencil/1280x1280/products/234/996/eb8345c0-ef50-4818-8406-febbfed14b6f__21015.1678246039.jpg?c=1' },
        { name: '4 iron', distance: 160, image: 'https://m.media-amazon.com/images/I/41eR+H7bZ6L._AC_SX569_.jpg' },
        { name: '5 iron', distance: 155, image: 'https://i5.walmartimages.com/asr/ed3e3181-c717-48e7-b648-9895ca7cf40f_1.c128356fd39aa32dc5c2d23a4c421f10.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' },
        { name: '6 iron', distance: 145, image: 'https://i.ebayimg.com/images/g/C8UAAOSwttZi21fM/s-l1200.webp' },
        { name: '7 iron', distance: 140, image: 'https://m.media-amazon.com/images/I/61Pf8ySAy6L._AC_UF350,350_QL80_.jpg' },
        { name: '8 iron', distance: 130, image: 'https://m.media-amazon.com/images/I/61nXH6iPkhL._AC_UF350,350_QL80_.jpg' },
        { name: '9 iron', distance: 115, image: 'https://cdn11.bigcommerce.com/s-lh0c6bzq2q/images/stencil/500x659/products/678/6639/12f05783-e5d2-4085-83af-0a11b6196267__81057.1688119339.jpg?c=1' },
        { name: 'Pitching wedge', distance: 100, image: 'https://cdn.shopify.com/s/files/1/0602/0297/5489/files/RamGolfAccubarSetPW_bdb3a8ae-404f-4fad-b423-385136bbe4df_612x700.jpg?v=1682600865' },
        { name: 'Gap wedge', distance: 90, image: 'https://image.globalgolf.com/dynamic/1040843/aaa/sku/1040843-aaa.jpg?s=350' },
        { name: 'Sand wedge', distance: 80, image: 'https://ak1.ostkcdn.com/images/products/3/MLB10572312.jpg?impolicy=medium' },
        { name: 'Lob wedge', distance: 60, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaYCrNcYv8jFLFief34HCCRBKNJZRKXS0Y1A&usqp=CAU' },
      ],
      amateur: [
        { name: 'Driver', distance: 250, image: 'https://southamptongolfclub.com/wp-content/uploads/RAM-Accubar3.jpg' },
        { name: '3-wood', distance: 225, image: 'https://ak1.ostkcdn.com/images/products/P10707360.jpg?impolicy=medium' },
        { name: '5-wood', distance: 205, image: 'https://m.media-amazon.com/images/I/615phFlpgjL._AC_SY550_.jpg' },
        { name: 'Hybrid', distance: 195, image: 'https://cdn.shopify.com/s/files/1/0513/5859/7269/products/8d5d7f8b-2504-4b77-b723-56915268def8__51504_5000x.jpg?v=1661441151' },
        { name: '2 iron', distance: 190, image: 'https://cdn10.bigcommerce.com/s-jguinkpy/products/16424/images/112563/IMG_5459__31617.1611716309.1280.1200.jpg?c=2' },
        { name: '3 iron', distance: 180, image: 'https://cdn11.bigcommerce.com/s-ft76h4j74r/images/stencil/1280x1280/products/234/996/eb8345c0-ef50-4818-8406-febbfed14b6f__21015.1678246039.jpg?c=1' },
        { name: '4 iron', distance: 170, image: 'https://m.media-amazon.com/images/I/41eR+H7bZ6L._AC_SX569_.jpg' },
        { name: '5 iron', distance: 165, image: 'https://i5.walmartimages.com/asr/ed3e3181-c717-48e7-b648-9895ca7cf40f_1.c128356fd39aa32dc5c2d23a4c421f10.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' },
        { name: '6 iron', distance: 160, image: 'https://i.ebayimg.com/images/g/C8UAAOSwttZi21fM/s-l1200.webp' },
        { name: '7 iron', distance: 150, image: 'https://m.media-amazon.com/images/I/61Pf8ySAy6L._AC_UF350,350_QL80_.jpg' },
        { name: '8 iron', distance: 140, image: 'https://m.media-amazon.com/images/I/61nXH6iPkhL._AC_UF350,350_QL80_.jpg' },
        { name: '9 iron', distance: 125, image: 'https://cdn11.bigcommerce.com/s-lh0c6bzq2q/images/stencil/500x659/products/678/6639/12f05783-e5d2-4085-83af-0a11b6196267__81057.1688119339.jpg?c=1' },
        { name: 'Pitching wedge', distance: 110, image: 'https://cdn.shopify.com/s/files/1/0602/0297/5489/files/RamGolfAccubarSetPW_bdb3a8ae-404f-4fad-b423-385136bbe4df_612x700.jpg?v=1682600865' },
        { name: 'Gap wedge', distance: 100, image: 'https://image.globalgolf.com/dynamic/1040843/aaa/sku/1040843-aaa.jpg?s=350' },
        { name: 'Sand wedge', distance: 95, image: 'https://ak1.ostkcdn.com/images/products/3/MLB10572312.jpg?impolicy=medium' },
        { name: 'Lob wedge', distance: 80, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaYCrNcYv8jFLFief34HCCRBKNJZRKXS0Y1A&usqp=CAU' },
      ],
      pro: [
        { name: 'Driver', distance: 280, image: 'https://southamptongolfclub.com/wp-content/uploads/RAM-Accubar3.jpg' },
        { name: '3-wood', distance: 235, image: 'https://ak1.ostkcdn.com/images/products/P10707360.jpg?impolicy=medium' },
        { name: '5-wood', distance: 220, image: 'https://m.media-amazon.com/images/I/615phFlpgjL._AC_SY550_.jpg' },
        { name: 'Hybrid', distance: 210, image: 'https://cdn.shopify.com/s/files/1/0513/5859/7269/products/8d5d7f8b-2504-4b77-b723-56915268def8__51504_5000x.jpg?v=1661441151' },
        { name: '2 iron', distance: 215, image: 'https://cdn10.bigcommerce.com/s-jguinkpy/products/16424/images/112563/IMG_5459__31617.1611716309.1280.1200.jpg?c=2' },
        { name: '3 iron', distance: 205, image: 'https://cdn11.bigcommerce.com/s-ft76h4j74r/images/stencil/1280x1280/products/234/996/eb8345c0-ef50-4818-8406-febbfed14b6f__21015.1678246039.jpg?c=1' },
        { name: '4 iron', distance: 195, image: 'https://m.media-amazon.com/images/I/41eR+H7bZ6L._AC_SX569_.jpg' },
        { name: '5 iron', distance: 185, image: 'https://i5.walmartimages.com/asr/ed3e3181-c717-48e7-b648-9895ca7cf40f_1.c128356fd39aa32dc5c2d23a4c421f10.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' },
        { name: '6 iron', distance: 175, image: 'https://i.ebayimg.com/images/g/C8UAAOSwttZi21fM/s-l1200.webp' },
        { name: '7 iron', distance: 165, image: 'https://m.media-amazon.com/images/I/61Pf8ySAy6L._AC_UF350,350_QL80_.jpg' },
        { name: '8 iron', distance: 155, image: 'https://m.media-amazon.com/images/I/61nXH6iPkhL._AC_UF350,350_QL80_.jpg' },
        { name: '9 iron', distance: 145, image: 'https://cdn11.bigcommerce.com/s-lh0c6bzq2q/images/stencil/500x659/products/678/6639/12f05783-e5d2-4085-83af-0a11b6196267__81057.1688119339.jpg?c=1' },
        { name: 'Pitching wedge', distance: 135, image: 'https://cdn.shopify.com/s/files/1/0602/0297/5489/files/RamGolfAccubarSetPW_bdb3a8ae-404f-4fad-b423-385136bbe4df_612x700.jpg?v=1682600865' },
        { name: 'Gap wedge', distance: 125, image: 'https://image.globalgolf.com/dynamic/1040843/aaa/sku/1040843-aaa.jpg?s=350' },
        { name: 'Sand wedge', distance: 115, image: 'https://ak1.ostkcdn.com/images/products/3/MLB10572312.jpg?impolicy=medium' },
        { name: 'Lob wedge', distance: 105, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaYCrNcYv8jFLFief34HCCRBKNJZRKXS0Y1A&usqp=CAU' },
      ],
    },
    female: {
      beginner: [
        { name: 'Driver', distance: 175, image: 'https://southamptongolfclub.com/wp-content/uploads/RAM-Accubar3.jpg' },
        { name: '3-wood', distance: 150, image: 'https://ak1.ostkcdn.com/images/products/P10707360.jpg?impolicy=medium' },
        { name: '5-wood', distance: 140, image: 'https://m.media-amazon.com/images/I/615phFlpgjL._AC_SY550_.jpg' },
        { name: 'Hybrid', distance: 135, image: 'https://cdn.shopify.com/s/files/1/0513/5859/7269/products/8d5d7f8b-2504-4b77-b723-56915268def8__51504_5000x.jpg?v=1661441151' },
        { name: '2 iron', distance: 130, image: 'https://cdn10.bigcommerce.com/s-jguinkpy/products/16424/images/112563/IMG_5459__31617.1611716309.1280.1200.jpg?c=2' },
        { name: '3 iron', distance: 125, image: 'https://cdn11.bigcommerce.com/s-ft76h4j74r/images/stencil/1280x1280/products/234/996/eb8345c0-ef50-4818-8406-febbfed14b6f__21015.1678246039.jpg?c=1' },
        { name: '4 iron', distance: 120, image: 'https://m.media-amazon.com/images/I/41eR+H7bZ6L._AC_SX569_.jpg' },
        { name: '5 iron', distance: 110, image: 'https://i5.walmartimages.com/asr/ed3e3181-c717-48e7-b648-9895ca7cf40f_1.c128356fd39aa32dc5c2d23a4c421f10.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' },
        { name: '6 iron', distance: 100, image: 'https://i.ebayimg.com/images/g/C8UAAOSwttZi21fM/s-l1200.webp' },
        { name: '7 iron', distance: 90, image: 'https://m.media-amazon.com/images/I/61Pf8ySAy6L._AC_UF350,350_QL80_.jpg' },
        { name: '8 iron', distance: 80, image: 'https://m.media-amazon.com/images/I/61nXH6iPkhL._AC_UF350,350_QL80_.jpg' },
        { name: '9 iron', distance: 70, image: 'https://cdn11.bigcommerce.com/s-lh0c6bzq2q/images/stencil/500x659/products/678/6639/12f05783-e5d2-4085-83af-0a11b6196267__81057.1688119339.jpg?c=1' },
        { name: 'Pitching wedge', distance: 60, image: 'https://cdn.shopify.com/s/files/1/0602/0297/5489/files/RamGolfAccubarSetPW_bdb3a8ae-404f-4fad-b423-385136bbe4df_612x700.jpg?v=1682600865' },
        { name: 'Gap wedge', distance: 55, image: 'https://image.globalgolf.com/dynamic/1040843/aaa/sku/1040843-aaa.jpg?s=350' },
        { name: 'Sand wedge', distance: 50, image: 'https://ak1.ostkcdn.com/images/products/3/MLB10572312.jpg?impolicy=medium' },
        { name: 'Lob wedge', distance: 45, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaYCrNcYv8jFLFief34HCCRBKNJZRKXS0Y1A&usqp=CAU' },
      ],
      amateur: [
        { name: 'Driver', distance: 200, image: 'https://southamptongolfclub.com/wp-content/uploads/RAM-Accubar3.jpg' },
        { name: '3-wood', distance: 180, image: 'https://ak1.ostkcdn.com/images/products/P10707360.jpg?impolicy=medium' },
        { name: '5-wood', distance: 175, image: 'https://m.media-amazon.com/images/I/615phFlpgjL._AC_SY550_.jpg' },
        { name: 'Hybrid', distance: 170, image: 'https://cdn.shopify.com/s/files/1/0513/5859/7269/products/8d5d7f8b-2504-4b77-b723-56915268def8__51504_5000x.jpg?v=1661441151' },
        { name: '2 iron', distance: 165, image: 'https://cdn10.bigcommerce.com/s-jguinkpy/products/16424/images/112563/IMG_5459__31617.1611716309.1280.1200.jpg?c=2' },
        { name: '3 iron', distance: 160, image: 'https://cdn11.bigcommerce.com/s-ft76h4j74r/images/stencil/1280x1280/products/234/996/eb8345c0-ef50-4818-8406-febbfed14b6f__21015.1678246039.jpg?c=1' },
        { name: '4 iron', distance: 150, image: 'https://m.media-amazon.com/images/I/41eR+H7bZ6L._AC_SX569_.jpg' },
        { name: '5 iron', distance: 140, image: 'https://i5.walmartimages.com/asr/ed3e3181-c717-48e7-b648-9895ca7cf40f_1.c128356fd39aa32dc5c2d23a4c421f10.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' },
        { name: '6 iron', distance: 130, image: 'https://i.ebayimg.com/images/g/C8UAAOSwttZi21fM/s-l1200.webp' },
        { name: '7 iron', distance: 120, image: 'https://m.media-amazon.com/images/I/61Pf8ySAy6L._AC_UF350,350_QL80_.jpg' },
        { name: '8 iron', distance: 110, image: 'https://m.media-amazon.com/images/I/61nXH6iPkhL._AC_UF350,350_QL80_.jpg' },
        { name: '9 iron', distance: 95, image: 'https://cdn11.bigcommerce.com/s-lh0c6bzq2q/images/stencil/500x659/products/678/6639/12f05783-e5d2-4085-83af-0a11b6196267__81057.1688119339.jpg?c=1' },
        { name: 'Pitching wedge', distance: 80, image: 'https://cdn.shopify.com/s/files/1/0602/0297/5489/files/RamGolfAccubarSetPW_bdb3a8ae-404f-4fad-b423-385136bbe4df_612x700.jpg?v=1682600865' },
        { name: 'Gap wedge', distance: 70, image: 'https://image.globalgolf.com/dynamic/1040843/aaa/sku/1040843-aaa.jpg?s=350' },
        { name: 'Sand wedge', distance: 60, image: 'https://ak1.ostkcdn.com/images/products/3/MLB10572312.jpg?impolicy=medium' },
        { name: 'Lob wedge', distance: 50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaYCrNcYv8jFLFief34HCCRBKNJZRKXS0Y1A&usqp=CAU' },
      ],
      pro: [
        { name: 'Driver', distance: 230, image: 'https://southamptongolfclub.com/wp-content/uploads/RAM-Accubar3.jpg' },
        { name: '3-wood', distance: 210, image: 'https://ak1.ostkcdn.com/images/products/P10707360.jpg?impolicy=medium' },
        { name: '5-wood', distance: 200, image: 'https://m.media-amazon.com/images/I/615phFlpgjL._AC_SY550_.jpg' },
        { name: 'Hybrid', distance: 195, image: 'https://cdn.shopify.com/s/files/1/0513/5859/7269/products/8d5d7f8b-2504-4b77-b723-56915268def8__51504_5000x.jpg?v=1661441151' },
        { name: '2 iron', distance: 190, image: 'https://cdn10.bigcommerce.com/s-jguinkpy/products/16424/images/112563/IMG_5459__31617.1611716309.1280.1200.jpg?c=2' },
        { name: '3 iron', distance: 185, image: 'https://cdn11.bigcommerce.com/s-ft76h4j74r/images/stencil/1280x1280/products/234/996/eb8345c0-ef50-4818-8406-febbfed14b6f__21015.1678246039.jpg?c=1' },
        { name: '4 iron', distance: 180, image: 'https://m.media-amazon.com/images/I/41eR+H7bZ6L._AC_SX569_.jpg' },
        { name: '5 iron', distance: 170, image: 'https://i5.walmartimages.com/asr/ed3e3181-c717-48e7-b648-9895ca7cf40f_1.c128356fd39aa32dc5c2d23a4c421f10.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' },
        { name: '6 iron', distance: 160, image: 'https://i.ebayimg.com/images/g/C8UAAOSwttZi21fM/s-l1200.webp' },
        { name: '7 iron', distance: 150, image: 'https://m.media-amazon.com/images/I/61Pf8ySAy6L._AC_UF350,350_QL80_.jpg' },
        { name: '8 iron', distance: 140, image: 'https://m.media-amazon.com/images/I/61nXH6iPkhL._AC_UF350,350_QL80_.jpg' },
        { name: '9 iron', distance: 130, image: 'https://cdn11.bigcommerce.com/s-lh0c6bzq2q/images/stencil/500x659/products/678/6639/12f05783-e5d2-4085-83af-0a11b6196267__81057.1688119339.jpg?c=1' },
        { name: 'Pitching wedge', distance: 115, image: 'https://cdn.shopify.com/s/files/1/0602/0297/5489/files/RamGolfAccubarSetPW_bdb3a8ae-404f-4fad-b423-385136bbe4df_612x700.jpg?v=1682600865' },
        { name: 'Gap wedge', distance: 100, image: 'https://image.globalgolf.com/dynamic/1040843/aaa/sku/1040843-aaa.jpg?s=350' },
        { name: 'Sand wedge', distance: 90, image: 'https://ak1.ostkcdn.com/images/products/3/MLB10572312.jpg?impolicy=medium' },
        { name: 'Lob wedge', distance: 75, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaYCrNcYv8jFLFief34HCCRBKNJZRKXS0Y1A&usqp=CAU' },
      ],
    },
  };

  
  const clubRecommendations = recommendations[gender.toLowerCase()][skillLevel.toLowerCase()];

  
  let recommendation = clubRecommendations[0];
  for (let i = 1; i < clubRecommendations.length; i++) {
    if (Math.abs(clubRecommendations[i].distance - distance) < Math.abs(recommendation.distance - distance)) {
      recommendation = clubRecommendations[i];
    }
  }

  return recommendation;
}
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  
  let nameInput = document.getElementById('name-input');
  let emailInput = document.getElementById('email-input');
  let messageInput = document.getElementById('message-input');
  
  // Validate form inputs
  if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
    alert('Please fill in all fields');
    return;
  }
  
  
  var confirmation = confirm('Thank you for contacting us! You will be contacted shortly.');
  
  
  if (confirmation) {
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  }
});
