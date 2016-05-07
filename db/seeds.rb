
suzanne = User.create( email: "suzanne@note.it", password:"abcd1234" )
carla = User.create( email: "carla@note.it", password: "abcd1234")
renée = User.create( email: "renee@note.it", password: "abcd1234")
rogier = User.create( email: "rogier@note.it", password: "abcd1234")


  puts "Seeded #{User.count} users!"

Note.create([
  { title: "Build NoteIT", content: "Let's have some fun building this webapp!!", user: suzanne},
  { title: "Add Pics", content: "Maybe we can add pics to it?", user: carla},
  { title: "Sign in", content: "Can I sign in to my own notes?", user: renée},
  { title: "Hello", content: "make it nice!", user: rogier}
  ])

  puts "Seeded #{Note.count} Notes!"
