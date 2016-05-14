user1 = User.create(name: "user1", profile_image_url: 'http://images.all-free-download.com/images/graphiclarge/rubber_duck_312781.jpg', handle:'poudelprakash', bio:"this is really cool bio")

album1 = user1.albums.create(name: 'first album', description: "this is description")
great_album_tag = Tag.create(name: "great_album")
album1.tags << great_album_tag

album1.photos.create(url: 'http://images.all-free-download.com/images/graphiclarge/rubber_duck_312781.jpg')
album1.photos.create(url: 'http://cdn.grid.fotosearch.com/CSP/CSP343/k3438395.jpg')


user1.bookmarks.create(album_id: album1.id)


1.times do |count|
  album = user1.albums.create(name: "album #{count}", description: "this is description #{count}")

  album.photos.create(url: 'http://www.pilgrimshospices.org/wp-content/uploads/Pilgrims-Hospice-Duck.jpg')
  album.photos.create(url: 'http://images.all-free-download.com/images/graphiclarge/rubber_duck_312781.jpg')
end

3...5.times do |count|
  album = user1.albums.create(name: "album #{count}", description: "this is description #{count}")

  album.photos.create(url: 'http://cdn.grid.fotosearch.com/CSP/CSP343/k3438395.jpg')
  album.photos.create(url: 'http://images.all-free-download.com/images/graphiclarge/rubber_duck_312781.jpg')
end