function generateIDCard() {
  
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const department = document.getElementById('department').value;
    const contact = document.getElementById('contact').value;
    const photo = document.getElementById('photo').files[0];


    document.getElementById('nameDisplay').textContent = name;
    document.getElementById('positionDisplay').textContent = position;
    document.getElementById('departmentDisplay').textContent = department;
    document.getElementById('contactDisplay').textContent = `Contact: ${contact}`;

    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('photoDisplay').src = e.target.result;
    }
    if (photo) {
        reader.readAsDataURL(photo);
    }

    document.getElementById('idCardContainer').style.display = 'block';
}
