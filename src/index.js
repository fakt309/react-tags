import React, { useState } from 'react'

import './index.css'

import cross from './cross.svg';

const Tags = (props) => {

  let [showList, setShowList] = useState(false)
  let [filter, setFilter] = useState(props?.list ? props.list : [])
  let [activeOption, setActiveOption] = useState(null)

  return (
    // eslint-disable-next-line
    <div className="wrap-tags" className={`${props.className ? props.className+' ' : ''}wrap-tags`}>
      <div className="tags">
        {props.value?.map((tag, idx) => (
          <div key={`tag${idx}`} className="tag">
            <div className="tag__text">{tag}</div>
            <div
              className="tag__remove"
              style={{ backgroundImage: `url(${cross})` }}
              onClick={(e) => {
                props.onChange(props.value.filter((tag) => tag !== e.target.parentNode.querySelector('.tag__text').innerHTML))
              }}
            ></div>
          </div>
        ))}
        <input
          className="input"
          type="text"
          onKeyDown={(e) => {
            const value = e.target.value
            let flag = true
            props.value.forEach((tag) => {
              if (tag === value) flag = false
            })
            if (e.keyCode === 13 && value !== '' && flag && activeOption === null) {
              if (props?.onlyFromList) {
                let add = false
                props?.list.forEach((t) => {
                  if (t === value) add = true
                })
                if (add) {
                  e.target.value = ''
                  props.onChange([...props.value, value])
                  setShowList(false)
                  activeOption = null
                  setActiveOption(activeOption)
                }
              } else {
                e.target.value = ''
                props.onChange([...props.value, value])
                setShowList(false)
                activeOption = null
                setActiveOption(activeOption)
              }
            }
            if (e.keyCode === 13 && activeOption !== null) {
              let option = e.target.parentNode.parentNode.querySelector('.list').querySelectorAll('.option')[activeOption]
              props?.value.push(option.innerHTML)
              e.target.value = ''
              setShowList(false)
              activeOption = null
              setActiveOption(activeOption)
            }
            if (e.keyCode === 8 && value === '') {
              props.onChange(props.value.slice(0, -1))
            }
            if ((e.keyCode === 38 || e.keyCode === 40) && filter.length) {
              let list = e.target.parentNode.parentNode.querySelector('.list')
              let rectList = list.getBoundingClientRect()
              let rectOption = list.querySelector('.option').getBoundingClientRect()
              let scroll = list.scrollTop

              if (activeOption === null) activeOption = -1
              if (e.keyCode === 38) activeOption--
              if (e.keyCode === 40) activeOption++
              if (activeOption < 0) {
                activeOption = filter.length-1
                list.scrollTo(0, (filter.length-1)*rectOption.height)
              }
              if (activeOption > filter.length-1) {
                activeOption = 0
                list.scrollTo(0, 0)
              }
              setActiveOption(activeOption)

              if (e.keyCode === 38 && scroll > activeOption*rectOption.height) {
                list.scrollTo(0, activeOption*rectOption.height)
              }
              if (e.keyCode === 40 && scroll+rectList.height < (activeOption+1)*rectOption.height) {
                list.scrollTo(0, (activeOption+1)*rectOption.height-rectList.height)
              }
              e.preventDefault()
            }
          }}
          onClick={() => {
            let flt = []
            props?.list?.forEach((tag) => {
              let add = true
              props?.value?.forEach((t) => {
                if (t === tag) {
                  add = false
                }
              });

              if (add) flt.push(tag)
            })
            filter = flt
            setFilter(flt)
            setShowList(true)
          }}
          onInput={(e) => {
            const value = e.target.value
            if (value.length) {
              setShowList(true)
            }
            let flt = []
            props?.list?.forEach((tag) => {
              let add = true
              props?.value?.forEach((t) => {
                if (t === tag) {
                  add = false
                }
              });

              const regexp = new RegExp(`^.*${value.toLowerCase()}.*$`, 'g')
              if (add && regexp.test(tag.toLowerCase())) {
                flt.push(tag)
              }
            })
            filter = flt
            setFilter(flt)
          }}
          onBlur={() => {
            setTimeout(() => {
              setShowList(false)
              activeOption = null
              setActiveOption(activeOption)
            }, 200)
          }}
        />
      </div>
      <div
        className={!showList ? 'list hide' : 'list'}
      >
        {filter.map((tag, idx) => (
          <div
            key={`listTag${idx}`}
            className={idx === activeOption ? 'option active' : 'option'}
            onClick={(e) => {
              props?.value.push(tag)
              e.target.parentNode.parentNode.querySelector('.tags .input').value = ''
              setShowList(false)
              activeOption = null
              setActiveOption(activeOption)
            }}
          >{tag}</div>
        ))}
      </div>
    </div>
  )
}

export default Tags
