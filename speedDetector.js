function speedDetector(speed) {
    const speedLimit = 70;
    const demeritPointsPerKmOverLimit = 1;
    const pointsToSuspendLicense = 12;
  
    if (speed < speedLimit) {
      console.log('Ok');
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / 5);
  
      if (demeritPoints > pointsToSuspendLicense) {
        console.log('License suspended');
      } else {
        console.log(`Points: ${demeritPoints}`);
      }
    }
  }