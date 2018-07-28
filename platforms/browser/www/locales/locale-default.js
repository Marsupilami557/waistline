var defaultLocale = {
  "diary-settings":{
    "title":"Diary Settings",
    "instructions1":"Use the boxes below to customise the meal names used in the food diary.",
    "instructions2":"Any boxes left empty will be ignored.",
  },
  "settings":{
    title:"Foo Bar",
  },

  "calories": "Calories",
  "goal":"Goal",
  "goals":"Goals",
  "used":"Used",
  "remaining":"Remaining",
  "diary": "Diary",
  "stats": "Statistics",
  "food-list": "Food List",
  "settings": "Settings",
  "instructions": "User Guide",
  "export": "Export",
  "import": "Import",
  "serving": "Serving",
  "servings": "Servings",
  "diary-edit-title": "Edit Entry",
  "num-servings": "Number of Servings",
  "category": "Category",
  "save": "Save",
  "delete": "Delete",
  "cancel": "Cancel",
  "delete-title": "Delete Entry",
  "confirm-delete": "Are you sure you want to delete this item?",
  "import-title": "Import Data",
  "confirm-import": "Are you sure you want to import? Doing so will overwrite your existing data.",
  "week": "1 Week",
  "month": "1 Month",
  "3month": "3 Months",
  "6month": "6 Months",
  "12month": "1 Year",
  "add-food": "Add Food",
  "name-of-food": "Name of Food",
  "portion": "Portion",
  "current-weight": "Current Weight (kg)",
  "calorie-goal": "Daily Calorie Goal",
  "goal-is-min": "I Want to Gain Weight",
  "scan-images": "Show Images of Scanned Food",
  "weight":"Weight",
  "weight-goals":"Weight Goals",
  "protein":"Protein",
  "fat":"Fat",
  "carbs":"Carbs",
  "sugar":"Sugar",
  "salt":"Salt",
  "same-goal":"Same Goal Each Day",
  "userguide-basics": "<h3>Basics</h3><p>Your body needs a certain amount of calories to maintain your current weight. We'll call this your maintenance level. You can increase your maintenance level by doing lots of exercise or you can decrease it by being more sedentary.</p><p>The easiest method (that is also pretty accurate) to calculate your maintenance level is to use a TDEE calculator. You can find plenty of these online.</p><p>To lose weight you should eat at least 100 calories per day less than your maintenance level, to gain weight you should eat at least 100 calories per day more than your maintenance level.</p><p>The less you eat per day the more weight you will lose. If you plan to lose weight with a great calorie deficit, consult your doctor and plan what you eat so you get all the nutrition your body needs. Have regular check ups with your doctor so you can react fast if anything goes wrong.</p>",

  "userguide-diary":"<h3>Diary</h3><p>The diary is where you will keep a log of the food you eat. Tap on a heading, such as Breakfast, to add food to that section.</p><p>Once you've chosen a section you will be taken to the food list where you can select a food to add.</p><p>The calories for each food you add will be added to the total for the currently selected date and displayed at the bottom of the screen.</p><p>You can change the selected date by swiping left or right on the screen. To go to the current date just tap on the date displayed near the top of the screen.</p><p>Tapping on a food item in your diary will allow you to adjust the number of servings and change the category for that item. These changes only apply to the item in your diary and do not affect the food list.</p><p>Tap and hold on an item in your diary to remove it.</p>",

  "userguide-statistics":"<h3>Statistics</h3><p>The statistics screen displays a chart showing the number of calories you've consumed and the variations in your weight during the selected time frame.</p><p>You can select the time frame to display, such as 1 week, from the drop down menu above the chart.</p><p>You can choose what data to show in the chart by tapping on the items in the legend.</p><p>Below the chart is a day by day list of your weight changes and the calories you've recorded.</p>",

  "userguide-foodlist":"<h3>Food List</h3><p>This screen contains a list of all the foods you have added to your local database. This list will be empty the first time you run the app.</p><p>Click on the plus button at the top-right of the screen to add a new food item.</p><p>You can use the search box to filter the list of food items to find the one you'd like. The items are automatically sorted by how recently you added them to your diary, so the foods you add most often will appear near the top of the list.</p><p>Tapping on an item in the list will add it to your diary for the currently selected date. If you came to the food list from the home screen the diary section the food is added to will be chosen automatically based on the time of day.</p><p>You can edit a food item by tapping on the pencil icon to the right of it.</p><p>Tap and hold on a food item to remove it from the list.</p>",

  "userguide-adding-a-food":"<h3>Adding a Food</h3><p>When you tap the add food button on the food list screen you will be taken to the Add Food form.</p><p>On this page you can manually enter the name of the food, the portion size (e.g. 1 biscuit, 100g, 3 cups, etc.), and the number of calories contained in that portion.</p><p>If you are entering a pre-packaged item and have an internet connection you can use the barcode scanner to fill in the form for you.</p><p>The barcode scanner is accessed by tapping the camera icon at the top-right corner of the screen. This allows you to use your device's camera to scan the barcode on the packaging. This will connect to the Open Food Facts database to find the information for the product. If no data is available for the product you can add it to the database using the Open Food Facts app.</p><p>The data returned by the barcode scanner may not always be accurate for the product or serving size you have, so check the information it adds to the form and adjust it as necessary before saving.</p>",

  "userguide-settings":"<h3>Settings</h3><p>You can record your current weight by entering it into the box at the top of the Settings screen.</p><p>Recording your weight regularly will allow you to see how your weight has varied over time in the chart on the statistics page.</p><p>You should also enter your daily calorie goal on this page - if you want to lose weight this will be the maximum number of calories you want to consume per day. If you're want to gain weight this will be the minimum number you want to consume per day and you also need to check the box labelled 'I Want to Gain Weight'.</p><p>Use a TDEE calculator to work out how many calories you need to be aiming for.</p><p>The last setting is 'Show Images of Scanned Food'. With this option enabled you will see photographs (when available) for food items you add with the barcode scanner. Disable this option if you want to save mobile data. The images that are displayed are not permanently saved on your device and are only displayed on the Add Food page to help you confirm the scanned data is for the correct product.</p>",

  "userguide-export":"<h3>Export</h3><p>All of the data you enter into this app is kept locally on your device. The only time any information is sent from this app to the internet is when you scan a barcode.</p><p>This is great because it means you are in charge of your data and no-one can access it remotely. The only downside is your data won't be backed up to the cloud (someone else's computer) so when you move on to a new device your data won't automatically be available.</p><p>This is where the export button is useful. Tapping this button will export all of your data (diary, food list, and weight log) to a simple text file. This file is called waistline_export.json. You will find this file on your device in a location similar to 'Android/data/com.waist.line/files/'.</p><p>This is a private folder that can't be accessed by other apps so it's nice and secure but a little bit inconvenient to find.</p><p>Once you have this file you can install the app on your new device and move the exported file to the same location on the new device. Then you can import the data into the app.</p>",

  "userguide-import":"<h3>Import</h3><p>Warning!!!! Importing data will overwrite all of your existing data. The only time you'll need to do this is when moving to a new device or restoring data you have backed up.</p><p>To import data put the waistline_export.json file in the correct location on your device (see Export). Then tap the Import button.</p>",

  "userguide-license":"<h3>License</h3><p>This app was built using the Cordova framework which is available under the Apache license. Also included are jQuerymobile and ChartJS which are under the MIT license. The HTML, CSS, and other javascript that make up the main body of the app are under the GPLv3 license.</p><p>-David Healey 2018</p>"
}
