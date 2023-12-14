# React Native Restaurant Finder Application

This application is a restaurant locator app developed using React Native. The app utilizes the Yelp API to list restaurants in three different categories based on their prices: "Cheap", "Moderate", and "Expensive".

## How to Run

1. Clone the project files to your computer.
2. Navigate to the project folder in the terminal and run the `npm install` command to install necessary dependencies.
3. To access the Yelp API, set the API_URL and API_TOKEN variables by editing the `hooks/useResult.js` file. You can find API details by visiting the Yelp API developer site.

## Usage

The app allows users to search for restaurants in different locations. You can modify the search location by updating the `location` section in the `hooks/useResult.js` file.

## Restaurant Categories

- **Cheap:** Lists restaurants with affordable prices.
- **Moderate:** Displays restaurants in the mid-price range.
- **Expensive:** Shows restaurants with higher price ranges.

## Restaurant Details

Accessible information on each restaurant's detail page includes:

- Restaurant Name
- Phone Number
- Open/Closed Status
