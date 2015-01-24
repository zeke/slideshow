# Carousel class modified from this code:
# https://github.com/zeke/carousel/blob/31f9a7aa2c57d15ad3e1d40757ae191955c58b64/index.coffee
# (with fixes getOffset method for Firefox)
class Carousel

  constructor: (@selector) ->

    if not @selector
      console.error "Please specify a CSS selector when creating a new Carousel, e.g. new Carousel('#my-carousel')"

    else
      # Number of immediate children
      @slide_count = document.querySelectorAll("#{@selector} > *").length

      document.body.addEventListener 'keydown', (event) =>
        @next() if event.keyCode in [39, 40] # right or down
        @prev() if event.keyCode in [37, 38] # left or up

      @getOffset()

  getOffset: ->
    # Estimate which slide is nearest based on current window scroll position
    @offset = parseInt(document.body.scrollTop/window.innerHeight)
    # window.pageYOffset looks to work fine in FF and Chrome
    # (need to check if Opera and IE work fine too)
    # View https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY
    @offset = parseInt(window.pageYOffset/window.innerHeight)

    # Whichever slide is more than half-revealed in the window prevails
    @offset++ if (document.body.scrollTop % window.innerHeight) > window.innerHeight/2

  next: ->
    @getOffset()
    @offset++ unless @offset is @slide_count-1
    @animate()

  prev: ->
    @getOffset()
    @offset-- unless @offset is 0
    @animate()

  animate: ->
    if typeof jQuery isnt "undefined"
      $("html, body").animate { scrollTop: window.innerHeight*@offset }, 250
    else
      #document.body.scrollTop = window.innerHeight*@offset
      document.body.pageYOffset = window.innerHeight*@offset

    return

window.Carousel = Carousel
