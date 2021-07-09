/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ListItems.css'

const ListItems = (props) => {
  const { items, deleteItem } = props

  const listItems = items.map((item) => {
    return (
      <div className='list' key={item.id}>
        <p>{item.name}</p>
        <span>
          <FontAwesomeIcon
            className='faicons'
            icon='trash'
            onClick={() => {
              deleteItem(item.id)
            }}
          />
        </span>
      </div>
    )
  })
  return <div>{listItems}</div>
}

ListItems.ProppropTypesTypes = {
  items: PropTypes.array,
  deleteItem: PropTypes.func,
}
export default ListItems
