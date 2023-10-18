let myMap = L.map("map", {
    center: [37.8, -96],
    zoom: 5
  });
  

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

console.log(gunViolenceData);
let data = gunViolenceData.data

console.log(data)

for (let i=0; i<data.length; i++) {
    let lat = data[i].latitude; 
    let lon = data[i].longitude;
    if (lat) {
        if (lon) {
            L.marker([lat,lon]).addTo(myMap);
        }
    }
}
