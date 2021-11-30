import React from 'react'
import Link from './link/Link'
import PropTypes from 'prop-types'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'

export default function Breadcrumbs({ items = [] }) {
  return (
    <Breadcrumb>
      {items.length > 0
        ? items.map((item, i) => {
            const isLastItem = items.length - 1 === i
            if (item.href) {
              return (
                <BreadcrumbItem key={i} isCurrentPage={isLastItem}>
                  <Link href={item.href}>
                    <BreadcrumbLink>{item.text}</BreadcrumbLink>
                  </Link>
                </BreadcrumbItem>
              )
            } else {
              return (
                <BreadcrumbItem key={i} isCurrentPage={isLastItem}>
                  {item.text}
                </BreadcrumbItem>
              )
            }
          })
        : null}
    </Breadcrumb>
  )
}

Breadcrumbs.propTypes = {
  /**
   * The items to display, each with text, [`href`](/apiReference/link/Link#prop-href), and
   * [`as`](/apiReference/link/Link#props-as) values. If `false`, no breadcrumbs will be displayed.
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
}
