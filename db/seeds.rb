Note.create([
  { title: "Build NoteIT", content: "Let's have some fun building this webapp!!"},
  { title: "Add Pics", content: "Maybe we can add pics to it?"},
  { title: "Sign in", content: "Can I sign in to my own notes?"}
  ])

  puts "Seeded #{Note.count} Notes!"

User.create([
  { email: "suzanne@note.it", password:"abcd1234" },
  { email: "carla@note.it", password: "abcd1234"},
  { email: "renee@note.it", password: "abcd1234"},
  { email: "rogier@note.it", password: "abcd1234"}
  ])

  puts "Seeded #{User.count} users!"
