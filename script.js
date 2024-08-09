function volume_sphere() {
    //Write your code here

	  const radius = document.getElementById('radius').value;
	

	   if (radius === '' || isNaN(radius) || radius <= 0) {
        alert('Please enter a valid, non-negative radius');
        return;
    }

   const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
	const roundedVolume = volume.toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
