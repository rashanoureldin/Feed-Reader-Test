# Udacity Feed Reader Test Project

In this project we are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where I come in. I completed the test suites needed.

# Steps i did to complete the project?

1. Review the functionality of the application within my browser.
2. Explored the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
3. Explored the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
4. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in my application.
5. Return the `allFeeds` variable to a passing state.
6. Wrote a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
7. Wrote a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
8. Wrote a new test suite named `"The menu"`.
9. Wrote a test that ensures the menu element is hidden by default. i'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
10. Wrote a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
11. Wrote a test suite named `"Initial Entries"`.
12. Wrote a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
13. Wrote a test suite named `"New Feed Selection"`.
14. Wrote a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
