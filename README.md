# Harp Slideshow Template

This is a template app for creating simple and stylish slide decks using HTML,
CSS, and Javascript. It's powered by the [Harp web server](http://harpjs.com).

## Demo

[harp-slideshow-template.herokuapp.com](http://harp-slideshow-template.herokuapp.com/)

## Use it

If you don't already have node installed, [go to nodejs.org](http://nodejs.org/)
and click "Install". Easy peasy.

```sh
# Install Harp
npm install harp --global

# Download this repo as your harp boilerplate
harp init myshow --boilerplate zeke/harp-slideshow-template

# Run the server
harp server myshow
```

Now open [localhost:9000](http://localhost:9000) in your browser. Rejoice.

## Deploy it to Heroku

```sh
git init
git add .
git commit -m "so it begins"
heroku create myshow
heroku config:set BUILDPACK_URL=https://github.com/zeke/harp-buildpack.git
git push heroku master
heroku open
```

## License

[WTFPL](http://wtfpl.org)
