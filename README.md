
# 🍽️ MealsApp - Recipe Book 

**MealsApp** is a beautifully structured **recipe browsing application** built using **React Native (Expo)**. It allows users to explore different meals by categories, view detailed recipes, and mark meals as favorites. With a combination of **Drawer & Stack Navigation**, along with **Redux Toolkit** and **Context API**, it demonstrates modern state management and dynamic UI rendering in React Native. 📖✨

---

## 🚀 **Key Features**

👉 **View Meals by Category** – Explore curated meal lists based on cuisine or category.\
👉 **Detailed Recipe View** – See ingredients, cooking steps, and preparation time.\
👉 **Mark Favorite Meals** – Toggle a star icon in the header to mark any meal as favorite.\
👉 **Drawer Navigation** – Access favorites and categories from a slide-in drawer.\
👉 **Native Stack Navigation** – Navigate between categories, meals, and details smoothly.\
👉 **Context API & Redux Toolkit** – State is managed across the app using both approaches.\
👉 **Dynamic Header Icons** – Star icon updates based on favorite status in real-time.

---

## 🛠 **Tech Stack**

- **React Native (Expo)** – Framework for building cross-platform native apps.  
- **React Navigation** – Stack + Drawer navigation setup.  
- **React Context API** – For global state management.  
- **Redux Toolkit** – Used later for advanced and scalable state handling.  
- **React Native Screens & Gesture Handler** – For improved performance and navigation animations.  
- **Custom Header Buttons** – Used to dynamically update UI with icons and favorites.

---

## 📚 **Installation & Setup**

### 1️⃣ **Clone the Repository**

```sh
git clone https://github.com/thesartajalam/MealsApp.git  
cd MealsApp  
```

### 2️⃣ **Install Dependencies**

```sh
npm install  
```

### 3️⃣ **Start the App in Development Mode**

```sh
npx expo start  
```

🔹 **Press `a`** to run on an Android emulator.\
🔹 **Press `w`** to open in a web browser.

### 4️⃣ **Build the APK for Android** *(Optional)*

```sh
eas build -p android --profile preview  
```

🔹 Download the generated APK and install it on your device.

---


---

## 📚 **Project Structure**

```
/MealsApp  
👉 /assets                       # App images and icons  
    ├── adaptive-icon.png  
    ├── favicon.png  
    ├── icon.png  
    └── splash.png  

👉 /components                   # UI Components for meals and layout  
    ├── /Meal Detail  
    │   ├── List.js  
    │   └── Subtitle.js  
    ├── /MealsList  
    │   ├── MealItem.js  
    │   └── MealsList.js  
    ├── CategoryGridTile.js  
    ├── IconButton.js  
    └── MealDetails.js  

👉 /data                         # Static dummy data  
    └── dummy-data.js  

👉 /models                       # Data models for categories and meals  
    ├── category.js  
    └── meal.js  

👉 /screens                      # App screens  
    ├── CategoriesScreen.js  
    ├── FavouritesScreen.js  
    ├── MealDetailScreen.js  
    └── MealsOverviewScreen.js  

👉 /store/context                # Context API for managing favorite meals  
    └── favourites-context.js  

👉 App.js                        # Entry point of the app with navigation setup  
👉 app.json                      # Expo configuration  
👉 .gitignore                    # Git ignored files  
👉 README.md                     # Project documentation (this file) 
```

---

## 🛡 **License**

This project was created to showcase an advanced **React Native App** with both **Context API** and **Redux Toolkit**.  
It demonstrates clean architecture, state management patterns, and dynamic navigation techniques.

---

## 📩 **Contact**

📧 **Email**: [sartajalam565@gmail.com](mailto:sartajalam565@gmail.com)\
📎 **GitHub**: [@thesartajalam](https://github.com/thesartajalam)

---

## 💡 **Final Thoughts**  

**MealsApp** blends practical use of state management tools with beautiful UI navigation patterns. Whether you're learning **React Native** or building a recipe app for real users, this project is a great example of best practices. 🍲📱
```
