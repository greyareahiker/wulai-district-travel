export const calcOpacity = (
  ContainerHeight: number,
  ref: React.RefObject<HTMLDivElement>
) => {
  if (!ref.current?.getBoundingClientRect) return 0

  const { bottom } = ref.current!.getBoundingClientRect()

  if (bottom > ContainerHeight) return 0
  if (bottom < ContainerHeight * 0.75) return 1

  return (
    Math.round(((ContainerHeight - bottom) / (ContainerHeight / 4)) * 1000) /
    1000
  )
}

export const calcScale = (
  ContainerHeight: number,
  ref: React.RefObject<HTMLDivElement>
) => {
  if (!ref.current?.getBoundingClientRect) return 0

  const { bottom } = ref.current!.getBoundingClientRect()

  if (bottom > ContainerHeight) return 0
  if (bottom < ContainerHeight * 0.75) return 1

  return (
    Math.round(((ContainerHeight - bottom) / (ContainerHeight / 4)) * 1000) /
    1000
  )
}

export const caleMoveBetween = (scroll: number, withHeight: number) => {
  return (Math.round((scroll / withHeight) * 100) / 100) * 50 - 15
}

export const calcMoveWith = (
  scroll: number,
  withHeight: number,
  changeColorHeight: number
) => {
  if (scroll < changeColorHeight) {
    return (
      35 -
      (Math.round(
        ((scroll - withHeight) / (changeColorHeight - withHeight)) * 100
      ) /
        100) *
        30
    )
  }
  return 5
}

export const calcSizeBoa = (
  scroll: number,
  startHeight: number,
  endHeight: number
) => {
  if (scroll > endHeight) return 60

  return (
    (Math.round(((scroll - startHeight) / (endHeight - startHeight)) * 100) /
      100) *
    60
  )
}

export const calcMoveBoa = (
  scroll: number,
  endHeight: number,
  hatHeight: number
) => {
  if (scroll < endHeight) return 50
  if (scroll > hatHeight) return 25

  return (
    50 -
    (Math.abs(((scroll - endHeight) / (hatHeight - endHeight)) * 100) / 100) *
      25
  )
}
