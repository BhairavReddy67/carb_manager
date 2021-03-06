function onSignIn(googleUser) {
  let profile = googleUser.getBasicProfile();
  console.log("User Information: ");
  console.log("Full Name: " + profile.getName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());
  setDummyData(profile.getName(), profile.getEmail(), profile.getImageUrl());
  console.log("going");
  window.location.href = "../dashboard/daily_log/daily_log.html";
}

let loginLink = document.getElementById("login-link");
loginLink.addEventListener(
  "click",
  setDummyData(
    "Bhairav Reddy",
    "tbhairavreddy@gmail.com",
    "https://bhairavreddy67.github.io/Imgaes/profile_pic.jpeg"
  )
);

function setDummyData(name, email, imageUrl) {
  //This is just a dummy data ,ignore this
  let obj = {
    name: name,
    email: email,
    profileImageUrl: imageUrl,
    waterLog: [
      { date: "1-12-2020", noOfGlasses: 3 },
      { date: "2-12-2020", noOfGlasses: 4 },
      { date: "3-12-2020", noOfGlasses: 5 },
      { date: "4-12-2020", noOfGlasses: 8 },
      { date: "5-12-2020", noOfGlasses: 13 },
      { date: "6-12-2020", noOfGlasses: 17 },
      { date: "7-12-2020", noOfGlasses: 4 },
      { date: "8-12-2020", noOfGlasses: 12 },
      { date: "9-12-2020", noOfGlasses: 7 },
      { date: "10-12-2020", noOfGlasses: 4 },
      { date: "11-12-2020", noOfGlasses: 7 },
      { date: "12-12-2020", noOfGlasses: 9 },
      { date: "13-12-2020", noOfGlasses: 11 },
      { date: "14-12-2020", noOfGlasses: 15 },
      { date: "15-12-2020", noOfGlasses: 19 },
      { date: "16-12-2020", noOfGlasses: 20 },
      { date: "17-12-2020", noOfGlasses: 5 },
      { date: "18-12-2020", noOfGlasses: 2 },
      { date: "19-12-2020", noOfGlasses: 6 },
      { date: "20-12-2020", noOfGlasses: 6 },
      { date: "21-12-2020", noOfGlasses: 9 },
      { date: "22-12-2020", noOfGlasses: 2 },
      { date: "23-12-2020", noOfGlasses: 15 },
      { date: "24-12-2020", noOfGlasses: 18 },
      { date: "25-12-2020", noOfGlasses: 19 },
      { date: "26-12-2020", noOfGlasses: 12 },
      { date: "27-12-2020", noOfGlasses: 6 },
      { date: "28-12-2020", noOfGlasses: 16 },
      { date: "29-12-2020", noOfGlasses: 2 },
      { date: "30-12-2020", noOfGlasses: 7 },
      { date: "31-12-2020", noOfGlasses: 11 },
    ],
    sleepLog: [
      { date: "1-12-2020", noOfSleepHours: 3 },
      { date: "2-12-2020", noOfSleepHours: 4 },
      { date: "3-12-2020", noOfSleepHours: 5 },
      { date: "4-12-2020", noOfSleepHours: 8 },
      { date: "5-12-2020", noOfSleepHours: 13 },
      { date: "6-12-2020", noOfSleepHours: 17 },
      { date: "7-12-2020", noOfSleepHours: 4 },
      { date: "8-12-2020", noOfSleepHours: 12 },
      { date: "9-12-2020", noOfSleepHours: 7 },
      { date: "10-12-2020", noOfSleepHours: 4 },
      { date: "11-12-2020", noOfSleepHours: 7 },
      { date: "12-12-2020", noOfSleepHours: 9 },
      { date: "13-12-2020", noOfSleepHours: 11 },
      { date: "14-12-2020", noOfSleepHours: 15 },
      { date: "15-12-2020", noOfSleepHours: 19 },
      { date: "16-12-2020", noOfSleepHours: 20 },
      { date: "17-12-2020", noOfSleepHours: 5 },
      { date: "18-12-2020", noOfSleepHours: 2 },
      { date: "19-12-2020", noOfSleepHours: 6 },
      { date: "20-12-2020", noOfSleepHours: 6 },
      { date: "21-12-2020", noOfSleepHours: 9 },
      { date: "22-12-2020", noOfSleepHours: 2 },
      { date: "23-12-2020", noOfSleepHours: 15 },
      { date: "24-12-2020", noOfSleepHours: 18 },
      { date: "25-12-2020", noOfSleepHours: 19 },
      { date: "26-12-2020", noOfSleepHours: 12 },
      { date: "27-12-2020", noOfSleepHours: 6 },
      { date: "28-12-2020", noOfSleepHours: 16 },
      { date: "29-12-2020", noOfSleepHours: 2 },
      { date: "30-12-2020", noOfSleepHours: 7 },
      { date: "31-12-2020", noOfSleepHours: 11 },
    ],
    waterLog: [
      { date: "1-12-2020", noOfGlasses: 3 },
      { date: "2-12-2020", noOfGlasses: 4 },
      { date: "3-12-2020", noOfGlasses: 5 },
      { date: "4-12-2020", noOfGlasses: 8 },
      { date: "5-12-2020", noOfGlasses: 1 },
      { date: "6-12-2020", noOfGlasses: 1 },
      { date: "7-12-2020", noOfGlasses: 4 },
      { date: "8-12-2020", noOfGlasses: 1 },
      { date: "9-12-2020", noOfGlasses: 7 },
      { date: "10-12-2020", noOfGlasses: 4 },
      { date: "11-12-2020", noOfGlasses: 7 },
      { date: "12-12-2020", noOfGlasses: 7 },
      { date: "13-12-2020", noOfGlasses: 4 },
      { date: "14-12-2020", noOfGlasses: 5 },
      { date: "15-12-2020", noOfGlasses: 4 },
      { date: "16-12-2020", noOfGlasses: 2 },
      { date: "17-12-2020", noOfGlasses: 5 },
      { date: "18-12-2020", noOfGlasses: 2 },
      { date: "19-12-2020", noOfGlasses: 6 },
      { date: "20-12-2020", noOfGlasses: 6 },
      { date: "21-12-2020", noOfGlasses: 3 },
      { date: "22-12-2020", noOfGlasses: 2 },
      { date: "23-12-2020", noOfGlasses: 1 },
      { date: "24-12-2020", noOfGlasses: 8 },
      { date: "25-12-2020", noOfGlasses: 7 },
      { date: "26-12-2020", noOfGlasses: 2 },
      { date: "27-12-2020", noOfGlasses: 6 },
      { date: "28-12-2020", noOfGlasses: 6 },
      { date: "29-12-2020", noOfGlasses: 2 },
      { date: "30-12-2020", noOfGlasses: 7 },
      { date: "31-12-2020", noOfGlasses: 1 },
    ],
    weightLog: [
      { date: "1-12-2020", weight: 3 },
      { date: "2-12-2020", weight: 4 },
      { date: "3-12-2020", weight: 5 },
      { date: "4-12-2020", weight: 8 },
      { date: "5-12-2020", weight: 13 },
      { date: "6-12-2020", weight: 17 },
      { date: "7-12-2020", weight: 4 },
      { date: "8-12-2020", weight: 12 },
      { date: "9-12-2020", weight: 7 },
      { date: "10-12-2020", weight: 4 },
      { date: "11-12-2020", weight: 7 },
      { date: "12-12-2020", weight: 9 },
      { date: "13-12-2020", weight: 11 },
      { date: "14-12-2020", weight: 15 },
      { date: "15-12-2020", weight: 19 },
      { date: "16-12-2020", weight: 20 },
      { date: "17-12-2020", weight: 5 },
      { date: "18-12-2020", weight: 2 },
      { date: "19-12-2020", weight: 6 },
      { date: "20-12-2020", weight: 6 },
      { date: "21-12-2020", weight: 9 },
      { date: "22-12-2020", weight: 2 },
      { date: "23-12-2020", weight: 15 },
      { date: "24-12-2020", weight: 18 },
      { date: "25-12-2020", weight: 19 },
      { date: "26-12-2020", weight: 12 },
      { date: "27-12-2020", weight: 6 },
      { date: "28-12-2020", weight: 16 },
      { date: "29-12-2020", weight: 2 },
      { date: "30-12-2020", weight: 7 },
      { date: "31-12-2020", weight: 11 },
    ],
    foodHistory: [
      {
        date: "1-12-2020",
        protein: 3,
        carbohydrate: 5,
        fat: 3,
        energy: 25,
      },
      {
        date: "2-12-2020",
        protein: 7,
        carbohydrate: 1,
        fat: 9,
        energy: 20,
      },
      {
        date: "3-12-2020",
        protein: 4,
        carbohydrate: 3,
        fat: 8,
        energy: 15,
      },
      {
        date: "4-12-2020",
        protein: 3,
        carbohydrate: 7,
        fat: 20,
        energy: 30,
      },
      {
        date: "5-12-2020",
        protein: 17,
        carbohydrate: 19,
        fat: 12,
        energy: 22,
      },
      {
        date: "6-12-2020",
        protein: 11,
        carbohydrate: 15,
        fat: 19,
        energy: 27,
      },
      {
        date: "7-12-2020",
        protein: 3,
        carbohydrate: 14,
        fat: 23,
        energy: 20,
      },
      {
        date: "8-12-2020",
        protein: 3,
        carbohydrate: 15,
        fat: 18,
        energy: 22,
      },
      {
        date: "9-12-2020",
        protein: 13,
        carbohydrate: 15,
        fat: 17,
        energy: 19,
      },
      {
        date: "10-12-2020",
        protein: 17,
        carbohydrate: 20,
        fat: 26,
        energy: 29,
      },
      {
        date: "11-12-2020",
        protein: 14,
        carbohydrate: 18,
        fat: 22,
        energy: 26,
      },
      {
        date: "12-12-2020",
        protein: 17,
        carbohydrate: 21,
        fat: 25,
        energy: 29,
      },
      {
        date: "13-12-2020",
        protein: 25,
        carbohydrate: 21,
        fat: 17,
        energy: 13,
      },
      {
        date: "14-12-2020",
        protein: 16,
        carbohydrate: 18,
        fat: 20,
        energy: 22,
      },
      {
        date: "15-12-2020",
        protein: 12,
        carbohydrate: 14,
        fat: 16,
        energy: 18,
      },
      {
        date: "16-12-2020",
        protein: 11,
        carbohydrate: 15,
        fat: 19,
        energy: 23,
      },
      {
        date: "17-12-2020",
        protein: 16,
        carbohydrate: 19,
        fat: 22,
        energy:25,
      },
      {
        date: "18-12-2020",
        protein: 4,
        carbohydrate: 11,
        fat: 18,
        energy: 25,
      },
      {
        date: "19-12-2020",
        protein: 4,
        carbohydrate: 15,
        fat: 18,
        energy: 12,
      },
      {
        date: "20-12-2020",
        protein: 12,
        carbohydrate: 16,
        fat: 17,
        energy: 21,
      },
      {
        date: "21-12-2020",
        protein: 17,
        carbohydrate: 18,
        fat: 19,
        energy: 12,
      },
      {
        date: "22-12-2020",
        protein: 17,
        carbohydrate: 21,
        fat: 25,
        energy: 29,
      },
      {
        date: "23-12-2020",
        protein: 12,
        carbohydrate: 16,
        fat: 20,
        energy: 24,
      },
      {
        date: "24-12-2020",
        protein:11,
        carbohydrate: 15,
        fat: 25,
        energy: 30,
      },
      {
        date: "25-12-2020",
        protein: 12,
        carbohydrate: 14,
        fat: 16,
        energy: 18,
      },
      {
        date: "26-12-2020",
        protein: 13,
        carbohydrate: 17,
        fat: 21,
        energy: 25,
      },
      {
        date: "27-12-2020",
        protein: 29,
        carbohydrate:25,
        fat: 21,
        energy: 17,
      },
      {
        date: "28-12-2020",
        protein: 19,
        carbohydrate: 17,
        fat: 15,
        energy: 13,
      },
      {
        date: "29-12-2020",
        protein: 18,
        carbohydrate: 22,
        fat: 14,
        energy: 26,
      },
      {
        date: "30-12-2020",
        protein: 14,
        carbohydrate: 9,
        fat: 19,
        energy: 24,
      },
      {
        date: "31-12-2020",
        protein: 14,
        carbohydrate: 18,
        fat: 22,
        energy: 10,
      },
    ],
    steps: [
      { date: "01-28-2020", stepsCount: 1000 },
      { date: "01-29-2020", stepsCount: 1200 },
      { date: "01-30-2020", stepsCount: 800 },
      { date: "01-31-2020", stepsCount: 1600 },
    ],
    userFoods: [
      [
        "coles-rolled-oats-wholegrain",
        "Wholegrain Rolled Oats",
        "1680",
        "13.3",
        "9.8",
        "60.3",
        "breakfast",
        "1-1-2021",
      ],
      [
        "sanitarium-almond-milk",
        "Almond Milk",
        "130",
        "0.5",
        "1.2",
        "4.6",
        "breakfast",
        "1-1-2021",
      ],
      [
        "simply-better-organic-tofu-plain-firm",
        "Firm Tofu",
        "615",
        "15.9",
        "8.8",
        "0.3",
        "dinner",
        "1-1-2021",
      ],
      [
        "sss-hummus-dip",
        "Hummus",
        "709",
        "8.4",
        "10.8",
        "4.6",
        "dinner",
        "1-1-2021",
      ],
      [
        "coles-hummus-lite",
        "Hummus (Lite)",
        "696",
        "5",
        "9.3",
        "15.7",
        "lunch",
        "1-1-2021",
      ],
    ],
    userFoodsSubtotal: { carbohydrate: 0, protein: 0, fat: 0, energy: 0 },
    isLoggingDone: false,
  };
  localStorage.setItem("currentUser", JSON.stringify(obj));
}
