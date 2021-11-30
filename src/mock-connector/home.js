import fulfillAPIRequest from '../props/fulfillAPIRequest'
import createAppData from './utils/createAppData'

export default async function home(req, res) {
  return await fulfillAPIRequest(req, {
    appData: createAppData,
    pageData: () =>
      Promise.resolve({
        title: 'Veo | Sustainable Marketplace',
        slots: {
          heading: 'Sustainable meets quality the good stuff, no compromise',
          description: `
              <p>
                This is CMS content
              </p>
              <pre>Happy coding!</pre>
            `,
        },
      }),
  })
}
