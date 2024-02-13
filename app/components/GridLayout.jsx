
const GridLayout = ({children,grids}) => {
  return (
    <div className={`grid grid-cols-4 gap-10`}>
        {children}
        </div>
  )
}

export default GridLayout