const Enzyme = require('enzyme')
const EnzymeAdapter = require('@wojtekmaj/enzyme-adapter-react-17')
const sleep = require('./sleep').default

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() })

global.jsdom.reconfigure({
  features: {
    ProcessExternalResources: false,
  },
})

global.sleep = sleep

process.env.RSF_APP_VERSION = 'v1'
