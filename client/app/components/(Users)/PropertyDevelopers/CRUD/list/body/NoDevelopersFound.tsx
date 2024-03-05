type TNoDevelopersFoundProps = {
  className: string
}

const NoDevelopersFound = ({ className }: TNoDevelopersFoundProps) => {
  return (
    <div className={className}>
      <p>No Property Developers Found.</p>
    </div>
  )
}

export default NoDevelopersFound
