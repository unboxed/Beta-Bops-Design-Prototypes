module.exports = function(env) {
    /**
     * Instantiate object used to store the methods registered as a
     * 'filter' (of the same name) within nunjucks. You can override
     * gov.uk core filters by creating filter methods of the same name.
     * @type {Object}
     */
    var filters = {}

    /* ------------------------------------------------------------------
      add your methods to the filters obj below this comment block:
      @example:

      filters.sayHi = function(name) {
          return 'Hi ' + name + '!'
      }

      Which in your templates would be used as:

      {{ 'Paul' | sayHi }} => 'Hi Paul'

      Notice the first argument of your filters method is whatever
      gets 'piped' via '|' to the filter.

      Filters can take additional arguments, for example:

      filters.sayHi = function(name,tone) {
        return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
      }

      Which would be used like this:

      {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
      {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

      For more on filters and how to write them see the Nunjucks
      documentation.

    ------------------------------------------------------------------ */
    filters.toMonth = function(x) {
        months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        if (x > 0) {
            return months[x - 1]; // returns date as per month      
        } else {
            return x;
        }
    }
    filters.toMoney = function(x) {
            return ("£" + x);
            //TO ADD - case to handle nothing being there 
        }
        /* ------------------------------------------------------------------
          keep the following line to return your filters to the app
        ------------------------------------------------------------------ */
    return filters
}