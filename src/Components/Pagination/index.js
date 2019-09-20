import React, { Component, Fragment } from "react"

import { NavPagination, UlPagination } from "./styles"

import LeftArrow from "../../assets/left-arrow.svg"
import RightArrow from "../../assets/right-arrow.svg"

const LEFT_PAGE = "LEFT"
const RIGHT_PAGE = "RIGHT"

const range = (from, to, step = 1) => {
  let i = from
  const rangeAux = []

  while (i <= to) {
    rangeAux.push(i)
    i += step
  }

  return rangeAux
}

class Pagination extends Component {
  constructor(props) {
    super(props)
    this.startValues(true)
  }

  componentDidUpdate(prevProps) {
    const { totalRecords } = this.props

    if (prevProps.totalRecords !== totalRecords) {
      this.startValues()
    }
  }

  startValues = mount => {
    const { totalRecords = null, pageLimit = 30, pageNeighbours = 0, page } = this.props
    const total = parseInt(totalRecords, 10)
    this.pageLimit = typeof pageLimit === "number" ? pageLimit : 30
    this.totalRecords = typeof total === "number" ? totalRecords : 0

    this.pageNeighbours =
      typeof pageNeighbours === "number" ? Math.max(0, Math.min(pageNeighbours, 2)) : 0
    this.totalPages = Math.ceil(this.totalRecords)
    if (mount) {
      this.state = {
        currentPage: 0,
      }
    } else {
      this.setState({ currentPage: page })
    }
  }

  gotoPage = page => {
    const { onPageChanged = f => f } = this.props

    const currentPage = Math.max(0, Math.min(page, this.totalPages))

    const paginationData = {
      currentPage,
      totalPages: this.totalPages,
      pageLimit: this.pageLimit,
      totalRecords: this.totalRecords,
    }

    this.setState({ currentPage }, () => onPageChanged(paginationData))
  }

  handleClick = (page, evt) => {
    evt.preventDefault()
    this.gotoPage(page)
  }

  handleMoveLeft = evt => {
    evt.preventDefault()
    const { currentPage } = this.state
    this.gotoPage(currentPage - this.pageNeighbours * 2 - 1)
  }

  handleMoveRight = evt => {
    evt.preventDefault()
    const { currentPage } = this.state
    this.gotoPage(currentPage + this.pageNeighbours * 2 + 1)
  }

  fetchPageNumbers = () => {
    const { totalPages } = this
    const { currentPage } = this.state
    const { pageNeighbours } = this
    const { width } = window.screen
    const totalNumbers = width <= 360 ? this.pageNeighbours * 3 : this.pageNeighbours * 2 + 3
    const totalBlocks = totalNumbers + 2

    if (totalPages > totalBlocks) {
      let pages = []

      const leftBound = currentPage - pageNeighbours
      const rightBound = currentPage + pageNeighbours
      const beforeLastPage = totalPages - 1

      const startPage = leftBound > 2 ? leftBound : 2
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage

      pages = range(startPage, endPage)

      const pagesCount = pages.length
      const singleSpillOffset = totalNumbers - pagesCount - 1

      const leftSpill = startPage > 2
      const rightSpill = endPage < beforeLastPage

      const leftSpillPage = LEFT_PAGE
      const rightSpillPage = RIGHT_PAGE

      if (leftSpill && !rightSpill) {
        const extraPages = range(startPage - singleSpillOffset, startPage - 1)
        pages = [...extraPages, ...pages]
      } else if (!leftSpill && rightSpill) {
        const extraPages = range(endPage + 1, endPage + singleSpillOffset)
        pages = [...pages, ...extraPages]
      } else if (leftSpill && rightSpill) {
        pages = [...pages]
      }

      return [leftSpillPage, 1, ...pages, rightSpillPage]
    }

    return range(1, totalPages)
  }

  render() {
    if (!this.totalRecords) return null

    if (this.totalPages === 1) return null

    const { currentPage } = this.state
    const pages = this.fetchPageNumbers()
    return (
      <Fragment>
        <NavPagination aria-label='Pagination'>
          <UlPagination>
            {pages.map(page => {
              if (page === LEFT_PAGE)
                return (
                  <li key={page}>
                    <img src={LeftArrow} alt='left arrow' />
                  </li>
                )

              if (page === RIGHT_PAGE)
                return (
                  <li key={page}>
                    <img src={RightArrow} alt='right arrow' />
                  </li>
                )

              return (
                <li key={page} className={`page-item ${currentPage === page ? " active" : ""}`}>
                  <a className='page-link' href='#' onClick={e => this.handleClick(page, e)}>
                    {page}
                  </a>
                </li>
              )
            })}
          </UlPagination>
        </NavPagination>
      </Fragment>
    )
  }
}

export default Pagination
