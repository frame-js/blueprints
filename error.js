'use strict'

Blueprint = {
  name: 'Error',
  handleError: false,

  in: function(data, _, callback) {
    if (this.handleError) {
      this.handleError = false

      if (typeof data === 'object' && data.constructor.name === 'Error')
        return callback(null, { message: data.message, stack: data.stack })

      callback(null, data)
    }
  },
}
