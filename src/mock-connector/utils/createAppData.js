import createMenu from './createMenu'
import createTabs from './createTabs'

export default function createAppData() {
  return Promise.resolve({
    menu: createMenu(),
    tabs: createTabs(),
    footer: {
      socialLinks: [
        { url: 'https://facebook.com', name: 'facebook' },
        { url: 'https://twitter.com', name: 'twitter' },
        { url: 'https://youtube.com', name: 'youtube' },
        { url: 'https://instagram.com', name: 'instagram' },
      ],
      menus: [
        {
          name: 'Veo.',
          links: [
            { name: 'About', url: '/about' },
            { name: 'Our Sustainability', url: '/sustainability' },
            { name: 'Join as a Brand', url: '/join' },
          ],
          order: 0,
        },
        {
          name: 'Help',
          links: [
            { name: 'Contact', url: '/contact' },
            { name: 'FAQs', url: '/faqs' },
            { name: 'Press & media', url: '/press' },
          ],
          order: 1,
        },
      ],
      copyright: 'Copyright © 2021 Veo ®. All rights reserved.',
      builtWith: 'Built with ♥ in Manchester, UK',
      legalPages: [
        { title: 'Terms of Use', url: '/terms-conditions' },
        { title: 'Privacy Policy', url: '/privacy-policy' },
      ],
    },
  })
}
