const generateDatabase = () => {
    const database = [];
  
    for (let i = 1; i <= 20; i++) {
      const vehicle = {
        id: i,
        category: getRandomCategory(),
        driverName: `Driver ${i}`,
        contactNumber: generateRandomPhoneNumber()
      };
  
      database.push(vehicle);
    }
  
    return database;
  };
  
  const getRandomCategory = () => {
    const categories = ['Грузовой', 'Пассажирский', 'Спецтранспорт'];
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
  };
  
  const generateRandomPhoneNumber = () => {
    const randomNumber = Math.floor(Math.random() * 900000000) + 100000000;
    return randomNumber.toString();
  };
  
  // Generate a database with 10 vehicle entries
  const vehiclesData = generateDatabase();
  
  // Save the generated data to a JSON file
  const fs = require('fs');
  fs.writeFileSync('vehicles.json', JSON.stringify(vehiclesData, null, 2));
  
  console.log('Database generated successfully.');
  