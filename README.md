# Harp Slideshow Template

This is a template app for creating badass slide decks. It uses Zeke's [experimental fork](https://github.com/zeke/harp/tree/from-the-future) of the [Harp web server](http://harpjs.com).

## Demo

[harp-slideshow-template.herokuapp.com](http://harp-slideshow-template.herokuapp.com/)

## Use it

If you don't already have node installed, [go to nodejs.org](http://nodejs.org/)
and click "Install". Easy peasy.

```
# Install my experimental branch of Harp
npm install harp-from-the-future --global

# Download this repo as your harp boilerplate
harp-from-the-future init myshow -t zeke/harp-slideshow-template#heroku

# Run the server
harp-from-the-future server myshow
```

Now open [localhost:9000](http://localhost:9000) in your browser. Rejoice.

## Deploy it to Heroku

```
git init
git add .
git commit -m "all the things"
heroku create myshow
heroku config:set BUILDPACK_URL=https://github.com/zeke/harp-buildpack.git
git push heroku master
heroku open
```

## License

[WTFPL](http://wtfpl.org)