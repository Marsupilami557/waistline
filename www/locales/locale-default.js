var defaultLocale = {
  "weight":"Weight",
  "quantity": "Quantity",
  "calories": "Calories",
  "protein":"Protein",
  "carbs":"Carbs",
  "fat":"Fat",
  "sugar":"Sugar",
  "salt":"Salt",
  "no-internet":"No Internet Connection",

  "statistics":{
    "title":"Statistics",
    "goal":"Goal",
    "used":"Used",
    "remaining":"Remaining",
    "week": "1 Week",
    "month": "1 Month",
    "3month": "3 Months",
    "6month": "6 Months",
    "12month": "1 Year"
  },

  "goals":
  {
    "title":"Goals",
    "nutrition":{
      "same-goal":"Same Goal Each Day"
    },
    "weight":{
      "title":"Weight Goals",
      "target":"Goal Weight (kg)",
      "weekly":"Weekly Goal (kg)",
      "is-min":"I want to gain weight"
    }
  },

  "diary":
  {
    "title":"Diary",
    "serving": "Serving",
    "servings": "Servings",
    "category": "Category",
    "current-weight":"Current Weight",
    "edit-item":{
      "title":"Edit Entry",
      "placeholders":
      {
        "quantity":"Number of servings*",
        "calories":"Calories*",
        "protein":"Protein (g)",
        "carbs":"Carbs (g)",
        "fat":"Fat (g)",
        "salt":"Salt (g)",
        "sugar":"Sugar (g)"
      }
    }
  },

  "food-list":{
    "title":"Food List",
    "search":"Search Food",
    "name-of-food": "Name of Food",
    "no-results": "No matching results",
    "scan-failed": "Scan Failed",
    "edit-item":{
      "title1":"Add Food",
      "title2":"Edit Food",
      "placeholders":{
        "name":"Name*",
        "brand":"Brand*",
        "portion":"Portion*",
        "calories":"Calories*",
        "portion":"Protein (g)",
        "carbs":"Carbs (g)",
        "fat":"Fat (g)",
        "sugar":"Sugar (g)",
        "salt":"Salt (g)"
      },
      "upload-item":
      {
        "title":"Add Product to O.F.F",
        "placeholders":{
          "barcode":"Barcode*",
          "name":"Name*",
          "brand":"Brand*",
          "portion":"Portion*",
          "calories":"Calories*",
          "portion":"Protein (g)",
          "carbs":"Carbs (g)",
          "fat":"Fat (g)",
          "sugar":"Sugar (g)",
          "salt":"Salt (g)"
        }
      }
    }
  },

  "settings":{
    "title":"Settings",
    "show-images1":"Show product images",
    "show-images2":"Images will be displayed when connected to the internet. They will not be stored on your device.",
    "disable-animations1":"Disable animations",
    "disable-animations2":"Disabling animations may improve performance on some devices (requires app restart).",
    "import":"Import Data",
    "export":"Export Data",
    "diary":{
      "title":"Diary Settings",
      "instructions1":"Use the boxes below to customise the meal names used in the food diary.",
      "instructions2":"Any boxes left empty will be ignored.",
      "meal":"Meal"
    }
  },

  "dialogs":
  {
    "delete": "Delete",
    "cancel": "Cancel",
    "yes":"Yes",
    "no":"No",
    "confirm-delete": "Are you sure you want to delete this item?",
    "delete-title": "Delete Entry",
    "required-fields": "Please complete all required fields."
  },

  "user-guide":{
    "title":"User Guide",
    "basics":{
      "title":"Basics",
      "p1":"Your body needs a certain amount of calories to maintain your current weight. We'll call this your maintenance level. You can increase your maintenance level by doing lots of exercise or you can decrease it by being more sedentary.",
      "p2":"The easiest method (that is also pretty accurate) to calculate your maintenance level is to use a TDEE calculator. You can find plenty of these online.",
      "p3":"To lose weight you should eat at least 100 calories per day less than your maintenance level, to gain weight you should eat at least 100 calories per day more than your maintenance level.",
      "p4":"The less you eat per day the more weight you will lose. If you plan to lose weight with a great calorie deficit, consult your doctor and plan what you eat so you get all the nutrition your body needs. Have regular check ups with your doctor so you can react fast if anything goes wrong."
    },
    "diary":{
      "title":"Diary",
      "p1":"The diary is where you will keep a log of the food you eat. Tap on a heading, such as Breakfast, to add food to that section.",
      "p2":"Once you've chosen a section you will be taken to the food list where you can select a food to add.",
      "p3":"The calories for each food you add will be added to the total for the currently selected date and displayed at the bottom of the screen.",
      "p4":"You can change the selected date by swiping left or right on the screen. To go to the current date just tap on the date displayed near the top of the screen.",
      "p5":"Tapping on a food item in your diary will allow you to adjust the number of servings and change the category for that item. These changes only apply to the item in your diary and do not affect the food list.",
      "p6":"Tap and hold on an item in your diary to remove it."
    },
    "statistics":{
      "title":"Statistics",
      "p1":"The statistics screen displays a chart showing the number of calories you've consumed and the variations in your weight during the selected time frame.",
      "p2":"You can select the time frame to display, such as 1 week, from the drop down menu above the chart.",
      "p3":"You can choose what data to show in the chart by tapping on the items in the legend.",
      "p4":"Below the chart is a day by day list of your weight changes and the calories you've recorded."
    },
    "food-list":{
      "title":"Food List",
      "p1":"This screen contains a list of all the foods you have added to your local database. This list will be empty the first time you run the app.",
      "p2":"Click on the plus button at the top-right of the screen to add a new food item.",
      "p3":"You can use the search box to filter the list of food items to find the one you'd like. The items are automatically sorted by how recently you added them to your diary, so the foods you add most often will appear near the top of the list.",
      "p4":"Tapping on an item in the list will add it to your diary for the currently selected date. If you came to the food list from the home screen the diary section the food is added to will be chosen automatically based on the time of day.",
      "p5":"You can edit a food item by tapping on the pencil icon to the right of it.",
      "p6":"Tap and hold on a food item to remove it from the list."
    },
    "adding-a-food":
    {
      "title":"Adding a Food",
      "p1":"When you tap the add food button on the food list screen you will be taken to the Add Food form.",
      "p2":"On this page you can manually enter the name of the food, the portion size (e.g. 1 biscuit, 100g, 3 cups, etc.), and the number of calories contained in that portion.",
      "p3":"If you are entering a pre-packaged item and have an internet connection you can use the barcode scanner to fill in the form for you.",
      "p4":"The barcode scanner is accessed by tapping the camera icon at the top-right corner of the screen. This allows you to use your device's camera to scan the barcode on the packaging. This will connect to the Open Food Facts database to find the information for the product. If no data is available for the product you can add it to the database using the Open Food Facts app.",
      "p5":"The data returned by the barcode scanner may not always be accurate for the product or serving size you have, so check the information it adds to the form and adjust it as necessary before saving."
    },
    "settings":
    {
      "title":"Settings",
      "p1":"You can record your current weight by entering it into the box at the top of the Settings screen.",
      "p2":"Recording your weight regularly will allow you to see how your weight has varied over time in the chart on the statistics page.",
      "p3":"You should also enter your daily calorie goal on this page - if you want to lose weight this will be the maximum number of calories you want to consume per day. If you're want to gain weight this will be the minimum number you want to consume per day and you also need to check the box labelled 'I Want to Gain Weight'.",
      "p4":"Use a TDEE calculator to work out how many calories you need to be aiming for.",
      "p5":"The last setting is 'Show Images of Scanned Food'. With this option enabled you will see photographs (when available) for food items you add with the barcode scanner. Disable this option if you want to save mobile data. The images that are displayed are not permanently saved on your device and are only displayed on the Add Food page to help you confirm the scanned data is for the correct product."
    },
    "export":
    {
      "title":"Export",
      "p1":"All of the data you enter into this app is kept locally on your device. The only time any information is sent from this app to the internet is when you scan a barcode.",
      "p2":"This is great because it means you are in charge of your data and no-one can access it remotely. The only downside is your data won't be backed up to the cloud (someone else's computer) so when you move on to a new device your data won't automatically be available.",
      "p3":"This is where the export button is useful. Tapping this button will export all of your data (diary, food list, and weight log) to a simple text file. This file is called waistline_export.json. You will find this file on your device in a location similar to 'Android/data/com.waist.line/files/'.",
      "p4":"This is a private folder that can't be accessed by other apps so it's nice and secure but a little bit inconvenient to find.",
      "p5":"Once you have this file you can install the app on your new device and move the exported file to the same location on the new device. Then you can import the data into the app."
    },
    "import":
    {
      "title":"Import",
      "p1":"Warning!!!! Importing data will overwrite all of your existing data. The only time you'll need to do this is when moving to a new device or restoring data you have backed up.",
      "p2":"To import data put the waistline_export.json file in the correct location on your device (see Export). Then tap the Import button."
    },
    "licenses":
    {
      "title":"Licenses",
      "p1":"  Waistline was built using the Cordova framework which is available under the Apache license. Also included are jQuerymobile and ChartJS which are under the MIT license. The HTML, CSS, and other javascript that make up the main body of the app are under the GPLv3 license."
    }
  },

  "about":
  {
    "title":"About",
    "p1":"Waistline was created by David Healey with suggestions and contributions from fellow git-hubbers."
  }
}
