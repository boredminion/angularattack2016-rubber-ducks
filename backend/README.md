# API endpoints

## USER

**index**
<http://localhost:3000/users>
```
[{"id":1,"name":"user1","profile_image_url":"http://images.all-free-download.com/images/graphiclarge/rubber_duck_312781.jpg","handle":"poudelprakash","bio":"this is really cool bio","created_at":"2016-05-14T02:30:48.811Z","updated_at":"2016-05-14T02:30:48.811Z"},{"id":2,"name":"user1","profile_image_url":"http://images.all-free-download.com/images/graphiclarge/rubber_duck_312781.jpg","handle":"poudelprakash","bio":"this is really cool bio","created_at":"2016-05-14T02:31:54.717Z","updated_at":"2016-05-14T02:31:54.717Z"}]
```

**show**
<http://localhost:3000/users/1>
```
{"id":1,"name":"user1","profile_image_url":"http://images.all-free-download.com/images/graphiclarge/rubber_duck_312781.jpg","handle":"poudelprakash","bio":"this is really cool bio","created_at":"2016-05-14T02:30:48.811Z","updated_at":"2016-05-14T02:30:48.811Z","bookmarks":[],"albums":[]}
```

## Album

**index**
<http://localhost:3000/users>
```
[{"id":1,"name":"first album","description":"this is description","user_id":2,"created_at":"2016-05-14T02:31:54.800Z","updated_at":"2016-05-14T02:31:54.800Z"}]
```

**show**
<http://localhost:3000/albums/1>
```
{"id":1,"name":"first album","description":"this is description","user_id":2,"created_at":"2016-05-14T02:31:54.800Z","updated_at":"2016-05-14T02:31:54.800Z","tags":[{"id":1,"name":"great_album","created_at":"2016-05-14T02:31:54.830Z","updated_at":"2016-05-14T02:31:54.830Z"}],"photos":[{"id":1,"url":"http://images.all-free-download.com/images/graphiclarge/rubber_duck_312781.jpg","album_id":1,"created_at":"2016-05-14T02:31:54.877Z","updated_at":"2016-05-14T02:31:54.877Z"},{"id":2,"url":"http://cdn.grid.fotosearch.com/CSP/CSP343/k3438395.jpg","album_id":1,"created_at":"2016-05-14T02:31:54.889Z","updated_at":"2016-05-14T02:31:54.889Z"}]}
```