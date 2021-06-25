import React, { useEffect, useRef } from 'react'
import { Box } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import doLazyLoadImages from './utils/lazyLoadImages'
import { prefetchJsonFor } from './serviceWorker'

/**
 * A container for HTML blob content from a CMS.  Content is dangerously inserted into the DOM.
 * Pass the html as a string as the child of this component. Additional props are spread to the
 * rendered span element.
 */
export default function CmsSlot({
  children,
  className,
  inline,
  lazyLoadImages,
  prefetchLinks,
  ...others
}) {
  const el = useRef()

  useEffect(() => {
    try {
      if (!el.current) return

      if (lazyLoadImages) {
        doLazyLoadImages(el.current)
      }

      if (prefetchLinks) {
        const links = Array.from(el.current.querySelectorAll('a[data-rsf-prefetch="always"]'))

        for (let link of links) {
          prefetchJsonFor(link.getAttribute('href'))
        }
      }
    } catch (e) {
      console.warn('error running side effects on CmsSlot', e)
    }
  }, [children])

  return children ? (
    <Box
      as="span"
      ref={el}
      d={inline ? 'inline' : 'block'}
      sx={{
        '& .rsf-presized-img': {
          position: 'relative',
          '& img': {
            position: 'absolute',
            height: '100%',
            width: '100%',
            top: 0,
            left: 0,
          },
        },
        '& img[data-src]': {
          visibility: 'hidden',
        },
      }}
      className={className}
      {...others}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  ) : null
}
CmsSlot.proptypes = {
  /**
   * If `true`, will use `display: inline` style.
   */
  inline: PropTypes.bool,

  /**
   * If `true` to lazy load images that have been preprocessed with `$.lazyLoadImages()`.
   */
  lazyLoadImages: PropTypes.bool,

  /**
   * If `true`, prefetch links that have a `data-rsf-prefetch` attribute.
   */
  prefetchLinks: false,
}

CmsSlot.defaultProps = {
  lazyLoadImages: false,
}
