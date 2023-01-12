export const calcOpacity = (
  ContainerHeight: number,
  ref: React.RefObject<HTMLDivElement>
) => {
  if (!ref.current?.getBoundingClientRect) return 0

  const { bottom } = ref.current!.getBoundingClientRect()

  if (bottom > ContainerHeight) return 0
  if (bottom < ContainerHeight / 2) return 1

  return (
    Math.round(((ContainerHeight - bottom) / (ContainerHeight / 2)) * 1000) /
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
  if (bottom < ContainerHeight * 0.25) return 1

  return (
    Math.round(
      ((ContainerHeight - bottom) / ((ContainerHeight / 4) * 3)) * 1000
    ) / 1000
  )
}

export const caleMoveBetween = (scroll: number, withHeight: number) => {
  return (Math.round((scroll / withHeight) * 100) / 100) * 50 - 5
}

export const calcMoveWith = (
  scroll: number,
  withHeight: number,
  changeColorHeight: number
) => {
  if (scroll < changeColorHeight) {
    return (
      45 -
      (Math.round(
        ((scroll - withHeight) / (changeColorHeight - withHeight)) * 100
      ) /
        100) *
        30
    )
  }
  return 10
}

export const calcSizeBoa = (
  scroll: number,
  startHeight: number,
  endHeight: number
) => {
  if (scroll > endHeight) return 80

  return (
    (Math.round(((scroll - startHeight) / (endHeight - startHeight)) * 100) /
      100) *
    80
  )
}

export const calcMoveBoa = (
  scroll: number,
  endHeight: number,
  hatHeight: number
) => {
  if (scroll < endHeight) return 35
  if (scroll > hatHeight) return 10

  console.log(
    "sss",
    Math.abs(((scroll - endHeight) / (hatHeight - endHeight)) * 100) / 100
  )

  return (
    35 -
    (Math.abs(((scroll - endHeight) / (hatHeight - endHeight)) * 100) / 100) *
      25
  )
}
