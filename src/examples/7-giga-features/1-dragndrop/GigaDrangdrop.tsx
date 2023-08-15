import React, { useState } from 'react'
import {range, set, sortBy} from 'lodash'
import classNames from 'classnames'
import s from "./styles.module.scss"
import {produce} from 'immer'
import arrowIcon from "../../../img/arrow.svg"
import {shallowEqual} from "react-redux";

// определять слева или справа от ячейки мы хотим засунуть
// исправить багулис когда крч оно смешно дергается из-за ререндеров
// позицинонировать с правильной стороны
// добавить нижнюю стрелочку
// перекидывать карточку куда надо
// зарефакторить на нормальные названия


type Column = {
  id: number
  index: number
}

const getIsOnRightSideOfCell = (e: any) => {
  const target = e.currentTarget;
  const targetOffsetX = target.getBoundingClientRect().left + window.scrollX;
  const relativeX = e.clientX - targetOffsetX;
  return relativeX > target.offsetWidth / 2
}
type Position = {
  left: number
  top: number
  width: number
  height: number
  isOnRightSideOfCell: boolean
}

const INITIAL_COLUMNS = range(5).map((id, index) => ({id, index}))


export const DropToArrows = ({position}: {position: Position}) => {
  const left = position.isOnRightSideOfCell ? position.left + position.width : position.left
  return (
      <>
        <img className={s.arrowIcon} style={{left, top: position.top}} src={arrowIcon} alt=""/>
        <img className={`${s.arrowIcon} ${s.reversed}`} style={{left, top: position.top + position.height}} src={arrowIcon} alt=""/>
      </>
  );
};

const useColumnsDragAndDropSort = (sortedColumns: Column[], setColumns: any) => {
  const [draggedColumnId, setDraggedColumnId] = useState<number | null>(null)
  const [hoveredColumnId, setHoveredColumnId] = useState<number | null>(null)
  const [hoveredColumnPosition, setHoveredColumnPosition] = useState<Position | null>(null)

  const onDragStart = (e: any, column: Column) => {
    setDraggedColumnId(column.id)
  }
  const onDragEnd = () => {
    setHoveredColumnId(null)
    setHoveredColumnPosition(null)
  }
  const onDragOver = (e: any, column: Column) => {
    e.preventDefault()

    const rect = e.currentTarget.getBoundingClientRect()
    const newPosition = {
      left: rect.left as number,
      top: rect.top as number,
      width: rect.width,
      height: rect.height,
      isOnRightSideOfCell: getIsOnRightSideOfCell(e)
    }
    if(!shallowEqual(hoveredColumnPosition, newPosition)) {
      setHoveredColumnPosition(newPosition)
    }

    if(hoveredColumnId !== column.id) {
      setHoveredColumnId(column.id)
    }
  }
  const onDrop = (e: any) => {
    e.preventDefault()
    setHoveredColumnId(null)

    setColumns(produce(sortedColumns, draft => {
      const hoveredColumnIndex = draft.findIndex(column => column.id === hoveredColumnId)
      const hoveredColumn = draft[hoveredColumnIndex]
      const draggedColumnIndex = draft.findIndex(column => column.id === draggedColumnId)
      const draggedColumn = draft[draggedColumnIndex]
      if(hoveredColumn.index === draggedColumn.index){
        return;
      }
      const isMoveToRightDirection = hoveredColumn.index > draggedColumn.index
      const newDraggableColumnIndex = isMoveToRightDirection
          ? hoveredColumnPosition?.isOnRightSideOfCell ? hoveredColumnIndex : hoveredColumnIndex - 1
          : hoveredColumnPosition?.isOnRightSideOfCell ? hoveredColumnIndex + 1: hoveredColumnIndex

      draft.splice(draggedColumnIndex, 1)
      draft.splice(newDraggableColumnIndex, 0, draggedColumn)
      draft.forEach((column, index) => column.index = index)
    }))
  }

  return {
    onDragStart,
    onDragEnd,
    onDragOver,
    onDrop,
    hoveredColumnPosition
  }
}

export const GigaDrangdrop = () => {
  const [columns, setColumns] = useState<Column[]>(INITIAL_COLUMNS)
  const sortedColumns = sortBy(columns, column => column.index)
  const {hoveredColumnPosition, onDragStart, onDragEnd, onDragOver, onDrop} = useColumnsDragAndDropSort(sortedColumns, setColumns)

  return (
    <div className={s.cards}>
      {hoveredColumnPosition && <DropToArrows position={hoveredColumnPosition}/>}

      {sortedColumns.map(column => (
        <div
          className={classNames(
              s.card,
              // {[s.hoveredCard]: column.id === hoveredColumnId}
          )}
          key={column.id}
          draggable
          onDragStart={e => onDragStart(e, column)}
          onDragEnd={onDragEnd}
          onDragOver={e => onDragOver(e, column)}
          onDrop={e => onDrop(e)}
        >
          <div>
            id = {column.id}
          </div>
          <div>
            index = {column.index}
          </div>
        </div>
      ))}
    </div>
  );
};
