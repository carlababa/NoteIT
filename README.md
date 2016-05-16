== NoteIT

NoteIT app is made to store your notes in an easy way. 
It was pre-designed during a hackaton and it is still being improved.

You can find the demo version at: https://note-it-app.herokuapp.com

=== Stack

The Application was built with ReactJS and Ruby on Rails using the gem [react_on_rails](https://github.com/shakacode/react_on_rails) that allows to render the React components into the Rails views.

=== Running the App

Database initialization:

  rake db:create
  rake db:migrate
  
Bundling:

  bundle install
  cd client && npm install

Start server:

  foreman start -f Procfile.dev

