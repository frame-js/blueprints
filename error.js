'use strict'

Blueprint = {
  name: 'Error',
  handleError: false,

  in: function(data, _, callback) {
    if (this.handleError) {
      this.handleError = false

      if (typeof data === 'object' && data.constructor.name === 'Error') {
        var error = {}

        Object.getOwnPropertyNames(data).forEach(function(key) {
          error[key] = data[key]
        })

        return callback(null, error)
      }

      callback(null, data)
    }
  },
}
