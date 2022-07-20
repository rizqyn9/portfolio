type CardProps = {
  as: React.ElementType
}
export function Card<T extends object = object>(props: CardProps & T) {
  const { as: Component, ...rest } = props
  return <Component {...rest}></Component>
}
