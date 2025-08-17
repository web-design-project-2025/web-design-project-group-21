🌍 GlobalGuide – Travel Booking Web App

GlobalGuide is a front-end travel website for users to explore destinations in Sweden, book trips, read travel editorials, and manage their accounts. It offers an interactive booking interface, personalized user profile pages, a login/signup system, and editorial content for travel inspiration.



Project Structure

├── index.html               # Main homepage
├── login.html               # User login page
├── signup.html              # User registration page
├── profile.html             # User profile & account settings
├── helpcenter.html          # Help center with categorized FAQs
├── activities.html          # Ticket deals 
├── bookinghistory.html      # The booking history of the profile user 
├── checkout.html            # Checkout page for a booking
├── cart.html                # Stores the tickets to book 
├── editorial.html           # Travel blog-style editorial content
├── details.html             # Second page of the activities page 
├── confirmationpage.html    # Booking confirmation page
│
├── website.css              # General styles for most pages
├── signup.css               # Specific styles for signup page
├── activities.css           # Specific styles for activites page 
├── bookinghistory.css       # Specific styles for bookinghistory page
├── helpcenter.css           # Specific styles for help center
├── cart.css                 # Specific styles for cart page
├── profile.css              # Profile dashboard styles
├── checkout.css             # Specific styles for checkout page
├── details.css              # Specific styles for details page
├── confirmationpage.css     # Styles for booking confirmation
│
├── website.js               # Handles booking search
├── login.js                 # Manages login logic
├── signup.js                # Manages signup logic
├── activities.js            # Manages the ticket filters 
├── checkout.js              # Displays the items and total cost from the shopping cart
├── conformationpage.js      # Makes a button that takes the user back to the homepage
├── cart.js                  # Manages the cart features 
├── profile.js               # Handles user data display
├── scripts.js               # loads and displays a product’s details from products.json
├── helpcenter.js            # FAQ rendering and search
│
└── /img                     # Contains images used throughout the site

Features

- Destination Search: Search and filter by region, date, and destination.
- Curated Travel Deals: Visually engaging cards showcasing current deals and experiences.
- User Auth Pages: Dedicated login and signup interfaces.
- Profile Dashboard: View bookings, manage payment methods, and update personal info.
- Help Center: Filterable FAQ system to assist users with common concerns.
- Editorial Page: Informative travel articles with internal linking to related deals.
- Profile Management: On the profile.html page, users can view and update their account details, booking history, saved destinations, and payment methods.
- Booking Confirmation Page: After completing a booking, users are redirected to a confirmation page (confirmation.html) summarizing their trip details.
- Security Prompts: Includes prompts for password creation and terms agreement to encourage account safety and legal compliance.
- Responsive Design: The website is mobile-friendly and adjusts to different screen sizes for a seamless experience across phones, tablets, and desktops.


Instructions 
1. Open the Website
Launch index.html in a web browser (e.g., Chrome, Firefox) to start using the website.

2. Browse and Book Trips
Use the search bar on the homepage to select a destination, dates, and region, then click Book.
Explore the “Best Deals” and “Explore Sweden” sections to view available travel offers.

3. View Travel Editorials
Click on the “Insights” link in the navigation bar to access editorial articles and travel tips.

4. Sign Up for an Account
Navigate to signup.html or click Log in > Sign up here.
Fill out your username, email, password, and agree to terms.
Click Sign me up!

5. Log In to Your Account
Go to login.html or click Log in.
Enter your credentials and click Continue.

6. Access Your Profile
After logging in, go to your profile via the profile icon or profile.html.
View your booking history, payment methods, account settings, and support options.

7. Use the Help Center
Visit helpcenter.html to browse FAQs, travel info, and contact support.

8. View Order Confirmation
After booking, the confirmation page (confirmation.html) will display your trip details.


GlobalGuide Usage Guidelines
1. Account Creation
Use a valid email address and create a strong password.
Do not share your account credentials with others.
Complete your profile accurately for better travel recommendations.

2. Booking Travel
Always double-check your travel dates, destinations, and personal details before confirming a booking.
Use a secure payment method. GlobalGuide supports trusted payment gateways.
Save or print your booking confirmation after checkout.

3. Security and Privacy

Log out when using public devices.
Avoid sharing personal information (like passport numbers) on public forums or reviews.
Report any suspicious activity immediately through the Help Center.

4. Support and Feedback

Contact customer support for help with bookings, cancellations, or technical issues.
Provide feedback to help improve the platform experience.

CSS style 

## Color Palette

- **Primary Green:** `#a0c49d` — used extensively for headers, buttons, and highlights.
- **Background Gray:** Light grays and off-whites (`#f5f5f5`, `#eee`, `#ece7e3`) provide a clean, neutral background.
- **Text Colors:** Mainly dark gray (`#333`), white for text on green backgrounds.


References:
For our final project we have had help from one of our friends that does programming. He has helped us mainly with some problems we really couldn't figure out, for example how to connect our activity page with the json file deals. 
Other than that we have used some help from chatgpt, you will find the links below.

https://chatgpt.com/share/68a1d1fa-55f0-800c-a4aa-8def3b14712a
This was used to give us an image of how to make our json file, we used it as a guide.

https://chatgpt.com/share/68a1d28c-e038-800c-8083-31487d3730ea
We used a bit of help to make sure our cart was working correctly since we encountered some problems.

https://chatgpt.com/c/68a1d488-ef80-832e-9360-88c89d8adbf8
We used chat as a guide since we didn't really know how to start making our search bar.