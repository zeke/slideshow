# Harp Slideshow Template

This is a template app for creating badass slide decks. It uses Zeke's [experimental fork](https://github.com/zeke/harp/tree/from-the-future) of the [Harp web server](http://harpjs.com).

## Use it

If you don't already have node installed, [go to nodejs.org](http://nodejs.org/)
and click "Install". Easy peasy.

```
npm install harp-from-the-future --global
harp-from-the-future init myshow -t zeke/harp-slideshow-template
harp-from-the-future server myshow
```

Now open [localhost:9000](http://localhost:9000) in your browser.
You're off to the races.

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