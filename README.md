I'm building a site that displays the affiliations that music artists have to one another.
The plans and scope of this project definitely may change.  But Here are some user stories and
the general structure of the app as of 6/26/2016:

# User Stories:

Users can see who an artist is affiliated with on a map.

Users can search through all artists via a search box on the site's main page.
The results of the search are displayed in a list.

When a user clicks on an artist in the list, the map is populated with markers
representing affiliated artists and a list with the affiliated artists is shown.

When an affiliated artist is clicked on, a new list and markers are shown with that
artist's affiliates.

# App structure

I'm building out the front end with Angular to make it an SPA with 2 - 3 states/views
and make AJAX calls to the API grab all the artist info.

The backend is an API to for sending the artist info to the browser in json,
building with Rails and Postgres.

I want to focus mostly on bettering my front-end skills, but I'm doing whatever I have to
in order to make it work.  So, I figured SQL would be the easiest way for me to
handle relationships between artists and each other, and I'm already a bit familiar
with Rails so that's what I'm running with.  Feel free to work on this with me,
especially if you're good with Rails backend!     
