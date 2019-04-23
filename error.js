'use strict'

Blueprint = {
  name: 'Error',
  handleError: false,

  in: function(data, _, callback) {
    if (this.handleError) {
      this.handleError = false
      callback(null, data)
    }
  },
}
