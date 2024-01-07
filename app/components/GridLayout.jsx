
const GridLayout = ({children,grids}) => {
  return (
    <div className={`grid grid-cols-${grids} gap-10`}>
        {children}
        </div>
  )
}

export default GridLayout