export const HalfImage = ({ image, children }: any) => {
  return (
    <div className="container">
      <div className="row relative">
        <div className="image-wrapper column column--span-1/2 column--offset-1/2">
          {image}
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%'
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
