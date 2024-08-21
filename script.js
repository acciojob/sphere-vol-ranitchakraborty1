function volume_sphere() {
    //Write your code here
	
    // Retrieve the radius value from the input field
    let radius = document.getElementById('radius').value;

    // Convert the radius to a floating-point number
    radius = parseFloat(radius);

    // Validate the input (ensure the radius is a non-negative number)
    if (isNaN(radius) || radius < 0) {
        alert("Please enter a valid non-negative number for the radius.");
        return; 
    }

    // Calculate the volume of the sphere using the formula: V = (4/3) * π * r^3
    let volume = (4/3) * Math.PI * Math.pow(radius, 3);

    // Round the calculated volume to four decimal places
    volume = volume.toFixed(4);

    // Display the calculated volume in the designated output field
    document.getElementById('volume').value = volume;
}
